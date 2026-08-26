#!/usr/bin/env python3
"""Diff two pnpm-lock.yaml files and report every package version change.

Usage:  pnpm_lock_diff.py <old-lock> <new-lock>

Emits a JSON array of {package, old_version, new_version, status} objects on
stdout, sorted by package name. status is "updated", "added" or "removed".
Lines inside the `packages:` block that look like entries but don't parse are
warned about on stderr — never silently dropped.
"""

import json
import sys


def parse_packages(path):
    """Return {name: version} for every entry in the lockfile's packages: block."""
    versions = {}
    unparsed = []
    in_packages = False

    with open(path, encoding="utf-8") as fh:
        for line in fh:
            line = line.rstrip("\n")
            if not line.strip():
                continue

            # Top-level key ends the packages: block.
            if not line.startswith(" "):
                in_packages = line.rstrip() == "packages:"
                continue
            if not in_packages:
                continue

            # Entries sit at exactly two spaces of indent: `  name@version:`
            if line.startswith("   ") or not line.endswith(":"):
                continue

            key = line.strip()[:-1].strip()
            if key.startswith(("'", '"')) and key[0] == key[-1]:
                key = key[1:-1]

            name, sep, version = key.rpartition("@")
            if not sep or not name or not version:
                unparsed.append(line)
                continue
            versions[name] = version

    if unparsed:
        print(
            f"warning: {len(unparsed)} entries in {path} did not parse:",
            file=sys.stderr,
        )
        for line in unparsed[:20]:
            print(f"  {line}", file=sys.stderr)

    return versions


def main():
    if len(sys.argv) != 3:
        print(__doc__.strip(), file=sys.stderr)
        return 2

    old = parse_packages(sys.argv[1])
    new = parse_packages(sys.argv[2])

    changes = []
    for name in sorted(set(old) | set(new)):
        before, after = old.get(name), new.get(name)
        if before == after:
            continue
        if before is None:
            status = "added"
        elif after is None:
            status = "removed"
        else:
            status = "updated"
        changes.append(
            {
                "package": name,
                "old_version": before,
                "new_version": after,
                "status": status,
            }
        )

    json.dump(changes, sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
