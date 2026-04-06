## Context

The repository has both a legacy static implementation in `game/` and the active Angular implementation in `game-angular/`. Existing OpenSpec capabilities already define Angular shell, build/run, theming, and game behavior, making the legacy folder redundant. The main constraint is removing legacy files without changing gameplay behavior in the Angular app.

## Goals / Non-Goals

**Goals:**

- Remove the `game/` folder from version control.
- Ensure contributor-facing run/build guidance references only `game-angular/`.
- Preserve all runtime behavior of the Angular implementation.

**Non-Goals:**

- Refactoring or redesigning Angular gameplay components.
- Introducing new frameworks, build tools, or runtime dependencies.
- Changing game rules, scoring logic, or UI flows.

## Decisions

1. Remove legacy files as a single repository cleanup step.

- Rationale: The legacy implementation is independent from Angular and can be deleted atomically with minimal risk.
- Alternative considered: Keep the folder but mark it deprecated. Rejected because it keeps ambiguity and maintenance burden.

2. Treat documentation references as part of the same change.

- Rationale: Build/run instructions are part of the development contract; stale references to `game/` would invalidate the cleanup.
- Alternative considered: Follow-up docs-only change. Rejected to avoid transient inconsistency.

3. Preserve Angular workflow requirements via a spec delta.

- Rationale: The change updates requirement framing (Angular-only path) without altering required outcomes (dev server and production build).
- Alternative considered: Create a separate capability for build/run docs. Rejected because `angular-build-run` already owns the behavior.

## Risks / Trade-offs

- Risk: Hidden references to `game/` remain in docs or scripts. -> Mitigation: Search repository for `game/` references and update/remove during implementation.
- Risk: Consumers outside this repo still rely on legacy paths. -> Mitigation: Record migration guidance in the removal capability spec and change notes.
- Trade-off: No rollback artifact after deletion. -> Mitigation: Git history remains the rollback path if recovery is needed.

## Migration Plan

1. Remove `game/` files in one commit.
2. Update docs and any scripts that reference legacy paths.
3. Validate Angular dev and production build commands still work.
4. If rollback is required, restore `game/` from the previous commit and re-run verification.

## Open Questions

- Should a short deprecation note be added to the root README changelog section, if present, to document that Angular is now the sole supported target?
