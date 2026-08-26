---
name: deps-update
description: Run `pnpm audit`, update this project's npm dependencies, and open a PR documenting every version change with its changelog.
disable-model-invocation: true
---

# Audit & Update Dependencies, Then Open a PR

Audit this project for known vulnerabilities, update its outdated npm
dependencies — all of them by default, or all but a set the user opts out of —
verify with a real build and test run, then open a pull request whose body
documents every direct and transitive version change with a diff link, a
version-anchored changelog link, and inlined changelog highlights.

## Requirements

- `gh` CLI, authenticated, with access to this repo
- `pnpm` (this repo pins its version via `.tool-versions`), `python3`, `jq`

## Workflow

### 1. Preflight — clean tree, fresh branch

Confirm `git status` is clean. If there are uncommitted changes, stop and ask the
user how to proceed — don't fold unrelated work into a dependency PR.

Get onto an up-to-date base and cut a branch named for the update — packages when
few, otherwise the date:

```bash
git checkout main && git pull
git checkout -b deps/update-$(date +%Y-%m-%d)
```

Keep a copy of the base lockfile for step 8, before anything touches it:

```bash
git show main:pnpm-lock.yaml > /tmp/pnpm-lock.base.yaml
```

**Done when:** on a new branch off up-to-date `main`, clean tree, base lockfile saved.

### 2. Audit

```bash
pnpm audit
```

Read the output and note, per advisory: the vulnerable package, severity, the
path that pulls it in (direct dependency vs transitive), and whether a fixed
version exists. Present this to the user before touching anything.

Don't run `pnpm audit --fix`. In pnpm 10+ it writes `overrides` entries, and this
repo keeps its overrides in `pnpm-workspace.yaml` (there's already a `sharp` one)
— pinning a transitive package there is a deliberate, documented choice, not
something to let a fixer do silently. Most advisories clear on their own once the
parent updates in step 5; deal with whatever's left in step 6.

**Done when:** every advisory is classified direct/transitive with its severity
and fix availability, and shown to the user.

### 3. Identify outdated dependencies

```bash
pnpm outdated
```

Read the output and split it into:

- **Safe** — only the patch or minor version changed (no major bump)
- **Breaking** — the major version changed (e.g. `1.x` → `2.x`)

Treat `0.x` bumps as breaking: under semver, a `0.x` minor bump is allowed to
break, and several of this repo's dependencies (`@astrojs/check`,
`astro-og-canvas`, `prettier-plugin-astro`) live there.

Present both lists to the user, flagging any package that also appears in the
step-2 audit output.

**Done when:** every outdated package is classified safe or breaking and shown to
the user.

### 4. Choose what to update

The default is to update **everything**, to latest. Ask the user whether they want
to opt any packages out of this run; the default answer is none. Record the
resulting update set (all outdated packages minus any they skip).

**Done when:** there is an explicit update set and the user has had the chance to
exclude packages.

### 5. Apply the updates

`pnpm update` alone respects the existing `package.json` ranges, so it will never
cross a major. Use `--latest` to take the newest published version and rewrite the
range in `package.json`:

- Taking the whole set: `pnpm update --latest`
- Skipping some: name only the ones to take — `pnpm update --latest pkg-a pkg-b …`

Then reinstall so the lockfile and `node_modules` agree:

```bash
pnpm install
```

Sanity-check the `package.json` diff before moving on: `pnpm update --latest`
rewrites every range it touches, and this repo's convention is caret ranges
(`^7.1.6`) with the odd exact pin (`prettier`). Keep an exact pin exact.

**Done when:** `package.json` and `pnpm-lock.yaml` reflect exactly the intended
set, and `pnpm install` runs clean.

### 6. Handle breaking changes and leftover advisories

For each major (or `0.x` minor) bump taken, before moving to the next one:

1. Find the changelog or upgrade guide — walk the ladder in
   [reference/finding-changelogs.md](reference/finding-changelogs.md), and check
   the repo's docs for a migration guide (`astro` and `svelte` both publish one
   per major).
2. Apply the code changes the upgrade requires.
3. Run step 7 verification. Only advance once it's green.

Then re-run `pnpm audit`. For anything still unfixed:

- If a **direct** dependency is the vulnerable one and a fixed version exists but
  wasn't taken, take it (that's a step-5 miss).
- If a **transitive** dependency is vulnerable and its parent has no fixed
  release, an override in `pnpm-workspace.yaml` is the lever — but propose it to
  the user with the reasoning before adding it, and mention it in the PR body.
  Overrides are a standing commitment that outlives this PR.
- If nothing can be done, say so explicitly in the PR body rather than leaving a
  known advisory unmentioned.

**Done when:** every breaking bump taken has its code changes applied and verifies
clean, and every remaining advisory is either fixed, overridden with the user's
agreement, or explicitly documented.

### 7. Verify

```bash
pnpm build        # astro check && astro build — type errors fail this
pnpm vitest run   # bare `pnpm test` starts vitest in watch mode and hangs
```

Fix whatever they report — type errors from bumped `@types/*` or `typescript`,
Astro/Svelte API changes, failing tests — and re-run until both exit 0.

If `pnpm install` printed a build-script warning, check `pnpm-workspace.yaml`'s
`allowBuilds` — a renamed or newly-added native package (this repo builds
`@parcel/watcher`, `esbuild`, `sharp`) needs an entry there or its postinstall is
skipped and the build fails in a confusing way.

**Done when:** both commands pass with no changes left to make.

### 8. Draft the PR body

Extract the actual version changes by diffing the base lockfile against the new
one:

```bash
python3 .claude/skills/deps-update/scripts/pnpm_lock_diff.py \
  /tmp/pnpm-lock.base.yaml pnpm-lock.yaml
```

This yields a JSON array holding one `{package, old_version, new_version, status}`
object per changed package, where `status` is `updated`, `added` or `removed`. If
the script warns on stderr that entries didn't parse, stop and fix the script
rather than shipping a PR body that silently omits those packages.

Classify each as **direct** (named in `package.json`'s `dependencies` or
`devDependencies`) or **transitive** (everything else):

```bash
jq -r '(.dependencies + .devDependencies) | keys[]' package.json
```

For each changed package `<pkg>` going `<old>` → `<new>`:

- **Diff link** (always available, no fetch):
  `https://app.renovatebot.com/package-diff?name=<pkg>&from=<old>&to=<new>`
- **Changelog link + highlights** — walk the ladder in
  [reference/finding-changelogs.md](reference/finding-changelogs.md) (repo
  lookup → monorepo sub-package `CHANGELOG.md` → root `CHANGELOG.md` → GitHub
  Releases → compare view). Include **both**:
  - **Link:** point at the changelog you actually read, deep-linked to the release
    with a version anchor when the page has one. Derive and verify the anchor per
    that reference — don't guess. When the diff spans several releases, anchor to
    the newest/target version so the reader lands at the top of the range.
  - **Highlights:** quote the authors' entries with light cleanup; never invent.
    Requalify anything GitHub will re-resolve against *this* repo — a bare `#123`
    from an upstream changelog links to your own issue 123, and a bare `@handle`
    notifies an unrelated person. Rewrite issue references as `<owner>/<repo>#123`
    and strip `@handle` credits; see
    [reference/finding-changelogs.md](reference/finding-changelogs.md#quoting-safely-cross-repo-references).
    If the ladder runs out, drop the changelog link, say "no changelog found", and
    keep the diff link.

A full `pnpm update --latest` moves hundreds of transitive packages. Give every
**direct** dependency the full treatment above. For transitive ones, write a
one-line entry each for those that moved a **major** version or that appeared in
the step-2 audit, and collapse the rest into a `<details>` block listing
`<pkg> <old> → <new>` — a reviewer wants the shape of the change, not 400 links.
Say how many were collapsed; don't silently truncate.

Assemble the body. Join the diff and changelog links with ` · `:

```markdown
## Summary
<1-2 sentences: dependency update, audit result, note if any breaking bumps needed code changes>

## Security
<one line per advisory: package, severity, and how it was resolved — or why it wasn't.
Omit this section if `pnpm audit` was clean before and after.>

## Direct dependencies
**<pkg>** `<old> → <new>`
[diff](https://app.renovatebot.com/package-diff?name=<pkg>&from=<old>&to=<new>) · [changelog](<changelog-url>#<anchor>)
- changelog highlight
- changelog highlight

## Transitive dependencies
**<pkg>** `<old> → <new>` — [diff](…) · [changelog](…) — <one-line note>

<details>
<summary>NNN other transitive updates</summary>

- `<pkg>` <old> → <new>

</details>
```

Omit a section entirely if it has no entries — no empty headers.

**Done when:** every direct dependency has a diff link and either a
version-anchored changelog link with highlights or an explicit "no changelog
found" note; every transitive change is either listed or counted in the
`<details>` block; and no quoted highlight carries a bare `#123` or `@handle`.

### 9. Commit and open the PR

Build a subject that **names the packages updated**. Only a handful → name them
all (`update astro, svelte, vitest`). A long list → name the prominent ones and
summarize the rest (`update astro, svelte, and 9 others`). Use the same subject
for the commit and the PR title.

Before pushing, scan the body file for references GitHub would resolve against
*this* repo:

```bash
grep -nE '(^|[^A-Za-z0-9_./-])#[0-9]+' <path>        # bare issue/PR refs
grep -nE '(^|[^A-Za-z0-9_/-])@[A-Za-z0-9-]+' <path>  # bare @mentions
```

Qualified refs (`owner/repo#123`) don't match, so every `#` hit is either a
verbatim upstream reference to fix or a deliberate pointer at this repo. The
`@mentions` scan is noisier here than in other ecosystems — scoped package names
(`@astrojs/rss`) and version specifiers (`astro@7.1.6`) both match — so read each
hit rather than blanket-editing. Fix the real ones before pushing; once the PR is
open the bad links have already back-linked onto whatever issues they hit.

```bash
git add -A
git commit -m "chore(deps): <subject>"
git push -u origin HEAD
gh pr create --title "chore(deps): <subject>" --body-file <path>
```

- Conventional-commit type + lowercase subject.
- Write the body to a real file and pass `--body-file` (not `--body -`) — the
  bodies this skill produces are long and contain backticks and `<details>` tags.
- No `Co-Authored-By` trailer and no AI attribution anywhere in the commit or PR.

Report the PR URL back to the user.

## Notes

- The lockfile's `packages:` block keys are `name@version`; the `snapshots:`
  block repeats them with peer-dependency suffixes like
  `astro@7.1.6(sass@1.102.0)`. The parser reads only `packages:`, so versions come
  back clean.
- `repository.directory` from `npm view` is what makes monorepo changelogs
  findable — most of this repo's dependencies (`astro`, `@astrojs/*`, `svelte`,
  `vitest`) publish per-package changelogs inside a monorepo, not at the repo root.
- `vitest.config.ts` is effectively empty (`test: {}`), so tests are discovered by
  convention. If a vitest upgrade changes discovery defaults, that's the first
  place to look.
- If `pnpm outdated` reports nothing and `pnpm audit` is clean, tell the user and
  stop — don't cut a branch or open an empty PR.
