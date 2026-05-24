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
| AI PR review (`/ai-review`) | `lhuasheng/shared-sdlc/actions/ai-pr-review/` |
| Weekly review (Mon 09:00 UTC) | `lhuasheng/shared-sdlc/actions/weekly-review/` |
| Project-specific contributing notes | `CONTRIBUTING.md` |

## One-time repo setup

1. Add repo secret `ANTHROPIC_API_KEY` (Settings → Secrets → Actions).
2. Branch protection on `main`: require status checks
   `CI Gates`, plus require a pull request with 1 approval.
3. Replace every `lhuasheng` in `.github/workflows/*.yml` with the real
   GitHub org name.
