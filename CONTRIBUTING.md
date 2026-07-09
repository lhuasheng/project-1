# Contributing to project-1

> The **5 gates** and overall workflow are defined org-wide in
> [`lhuasheng/shared-sdlc/docs/org/CONTRIBUTING.md`](https://github.com/lhuasheng/shared-sdlc/blob/main/docs/org/CONTRIBUTING.md).
> **Read that first.** This file only lists project-1-specific additions.

## Local setup

```bash
npm ci
npm run lint
npm run typecheck
npm run test:coverage
npm run dev
```

## Project-specific Gate 1 rules

- New API endpoints need a 1-page design in `/docs/adr/` **before** the issue
  is marked spec-approved (not after).
- UI features that touch shared layout components need a Figma link in the
  feature-request issue.

## Project-specific Gate 5 rules

- Staging URL: `https://staging.project-1.lhuasheng.dev`
- After merge to `main`, the staging deploy is automatic. Smoke-test the
  changed feature within 30 minutes, then post `✅ verified` in the PR.
- Production promotion runs Tuesday and Thursday at 14:00 UTC, gated on the
  tech lead approving the staged build.
