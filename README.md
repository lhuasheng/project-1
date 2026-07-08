# project-1

Replace this with a one-paragraph description of what project-1 does, who uses
it, and where it runs.

## Quick start

```bash
npm ci
npm run dev
```

## Where the rules live

| Topic | Location |
|---|---|
| 5 gates, workflow, Day-1 checklist | `lhuasheng/.github/CONTRIBUTING.md` |
| AI / Copilot rules (org-wide) | `lhuasheng/.github/copilot-instructions.md` |
| AI / Copilot rules (this project) | `.github/copilot-instructions.md` |
| CI gate logic | `lhuasheng/shared-sdlc/actions/ci-gates/` |
| AI PR review (`/ai-review`) | `.github/workflows/pr-review.md` (vendored; dispatched by `ai-pr-review.yml`) |
| Issue triage (on issue open) | `.github/workflows/issue-triage.md` (vendored; triggers directly) |
| Weekly digest (Mon 09:00 UTC) | `.github/workflows/weekly-digest.md` (vendored; own cron) |
| Release notes (tag push) | `.github/workflows/release-notes.md` (vendored; dispatched by `release.yml`) |
| Project-specific contributing notes | `CONTRIBUTING.md` |

The agentic workflows run on GitHub Copilot via their compiled `*.lock.yml`
files — no API-key secret required. If you edit a vendored `.md`, recompile
with `gh aw compile` and commit both files.

## One-time repo setup

Already done by `new-project.sh` for this repo: branch protection on `main`
(status check `CI Gates` + 1 approving review) and the vendored workflows
above. To bootstrap labels, run Actions → **Setup — New Repo Bootstrap**.
