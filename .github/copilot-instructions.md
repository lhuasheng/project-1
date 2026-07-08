# Project-1 Copilot Instructions

> Org-wide rules in `lhuasheng/shared-sdlc/docs/org/copilot-instructions.md` apply first.
> This file lists **additions and overrides** specific to project-1 only.

## Stack-specific rules

- Use **TypeScript strict mode**. No `// @ts-ignore` without a one-line reason.
- Use **CSS Modules** for styling. No inline `style={{...}}` props.
- HTTP client: `fetch` only. Do not pull in `axios`.
- Date handling: `date-fns`. Do not pull in `moment`.

## Directory conventions

- Components: `src/components/<PascalCase>/<PascalCase>.tsx` + co-located test.
- Hooks: `src/hooks/use<Name>.ts`.
- API client: `src/lib/api/*.ts` — one file per resource.

## Testing

- Component tests: React Testing Library, query by role/label, never by class.
- Snapshot tests are banned. Test behaviour, not markup.
