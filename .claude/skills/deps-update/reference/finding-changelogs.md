# Finding an npm package's changelog highlights

Where a JS package publishes its changelog varies more than in most ecosystems —
Releases, a root `CHANGELOG.md`, a monorepo sub-package `CHANGELOG.md`, or
nothing at all. Walk this ladder for each changed package `<pkg>` going `<old>`
→ `<new>`, stopping at the first source that yields real entries. **Never invent
highlights** — if the ladder runs out, say "no changelog found" and keep the diff
link.

## 0. Locate the repo first

Everything below needs the source repo, and for monorepos the sub-directory too:

```bash
npm view <pkg> repository.url repository.directory homepage
```

`repository.url` comes back as `git+https://github.com/<owner>/<repo>.git` —
strip the `git+` prefix and `.git` suffix. `repository.directory` (e.g.
`packages/integrations/netlify`) is set by most monorepo packages and is the
single most useful field here: it tells you where that package's own changelog
lives. If `repository.url` is missing, fall back to `homepage`, which for
monorepo packages often points straight at the sub-directory.

## 1. Sub-package CHANGELOG.md (monorepos)

Most of this project's dependencies are monorepo packages (`astro`, `@astrojs/*`,
`svelte`, `vitest`), and their per-package changelog is the one that actually
lists the versions you bumped — the repo-root changelog usually doesn't exist or
covers a different package. Try the raw file on the default branch (`main`, then
`master`):

```
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<directory>/CHANGELOG.md
```

## 2. Root CHANGELOG.md

For single-package repos, in order until one loads:

```
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/CHANGELOG.md
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/CHANGES.md
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/docs/CHANGELOG.md
```

## 3. GitHub Releases

If the repo keeps notes in Releases rather than a file:

```bash
gh api "repos/<owner>/<repo>/releases?per_page=100" --jq '.[] | {tag: .tag_name, body: .body}'
```

Tags in the range are usually `v<version>` or bare `<version>`; in a monorepo
they're often `<pkg>@<version>` (e.g. `astro@7.1.6`) — filter accordingly, and
don't mistake another package's release in the same repo for this one's.

## 4. Compare view (last resort)

If neither a changelog file nor matching releases exist, link a GitHub compare
view and note there was no changelog:

```
https://github.com/<owner>/<repo>/compare/v<old>...v<new>
```

Try without the `v` prefix, and with the monorepo `<pkg>@<version>` tag form, if
that 404s.

## Extracting the range

Pull the entries for versions **after `<old>` up to and including `<new>`**.
Locate the version headers, take the bullets under each, and combine them into
one highlight list per package. Quote the authors' wording with only light
cleanup — these are factual technical statements about what changed, not
something to paraphrase.

Changesets-generated changelogs (the `astro`/`svelte`/`vitest` house style) list
every patch release with a `#1234 <sha>` prefix on each bullet and a trailing
"Updated dependencies" block. Strip the sha prefixes and the dependency block —
the reader wants the sentence, and the transitive bumps are already in the PR's
own transitive section.

## Quoting safely: cross-repo references

Changelog entries are written from inside the package's own repo, so their
references are relative to *that* repo. Pasted verbatim into your PR body,
GitHub re-resolves them against **yours**:

- `#123` becomes a link to *your* issue 123 — nearly always an unrelated real
  issue, and opening the PR back-links it onto that issue's timeline.
- `@handle` notifies a real GitHub user with no connection to this repo.
- A bare commit SHA autolinks and resolves to nothing.

Rewrite each issue reference into the qualified form `<owner>/<repo>#123` using
the package's repo. If the repo can't be established, drop the reference; the
sentence reads fine without it. Strip `@handle` credits outright — a thanks-to
line tells the reader of a dependency bump nothing. Watch for scoped package
names too: a bullet mentioning `@astrojs/rss` is *not* a mention, but the bare
`@handle` regex in the skill's pre-push scan will flag it — check each hit
rather than blanket-editing.

This is easy to miss precisely because quoting faithfully is the rule everywhere
else. Fidelity to the author's wording does not extend to their link context.

## Linking to the release with a version anchor

Deep-link to the release with a version anchor whenever the page has one — don't
guess the anchor, **derive it from the real heading text**. When the diff spans
several releases, anchor to the newest/target version; changelogs are
reverse-chronological, so the reader lands at the top of the range.

GitHub builds the anchor by lowercasing the heading, **removing** punctuation
(not converting it), then turning spaces into `-`. So dots vanish rather than
becoming hyphens:

- `## 7.1.6` → `#716`
- `## v1.0.4` → `#v104`
- `## 5.56.8 (2026-07-03)` → `#5568-2026-07-03` (date hyphens are kept)

Confirm the heading level and exact text from the raw file you fetched — a
changelog using `###` for versions anchors the same way, but one that writes
`## [7.1.6](https://…)` (keep-a-changelog with linked versions) anchors on the
link text only: `#716`.

For a **GitHub Release** rather than a file, link the release directly — no
anchor derivation needed:

```
https://github.com/<owner>/<repo>/releases/tag/<tag>
```
