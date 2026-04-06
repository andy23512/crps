## Context

This repository contains a root-level Angular workspace and currently supports local serve/build workflows, but it lacks a formal deployment capability for GitHub Pages. The target hosting path is `https://andy23512.github.io/crps`, which requires subpath-safe static assets and routing behavior. The primary constraint is adding deployment behavior without changing gameplay logic or component architecture.

## Goals / Non-Goals

**Goals:**

- Define a repeatable deployment workflow for publishing to GitHub Pages at `/crps/`.
- Ensure production builds are generated with GitHub Pages-compatible base path settings.
- Standardize deployment documentation and validation steps for contributors.

**Non-Goals:**

- Redesigning the game UI or changing game mechanics.
- Introducing backend services or server-side rendering.
- Switching away from Angular CLI build pipeline.

## Decisions

1. Introduce explicit npm scripts for GitHub Pages build and publish.

- Rationale: Contributors need one-command entry points that hide path details and reduce mistakes.
- Alternative considered: only document manual `ng build --base-href` and file copy commands. Rejected due to inconsistency risk.

2. Build for GitHub Pages with base href `/crps/`.

- Rationale: GitHub Pages project sites are served from a repository subpath, so relative asset and route resolution must target `/crps/`.
- Alternative considered: relying on default `/` base href. Rejected because deployed pages would reference incorrect root paths.

3. Keep deployment as static artifact publishing to `gh-pages` branch (or equivalent GitHub Pages source) from `dist/game-angular/browser` when present, otherwise `dist/game-angular`.

- Rationale: Angular output can vary by builder mode; deployment requirements should be explicit but tolerant to valid CLI output layouts.
- Alternative considered: hard-code one dist path only. Rejected due to builder/layout variability.

4. Extend existing `angular-build-run` capability and add a dedicated `github-pages-deployment` capability.

- Rationale: Build semantics belong in `angular-build-run`, while publishing workflow and hosting constraints belong in a deployment-focused capability.
- Alternative considered: only add deployment capability without modifying build-run requirements. Rejected because GitHub Pages compatibility changes build expectations.

## Risks / Trade-offs

- Incorrect base path configuration could break scripts/styles at runtime on GitHub Pages. -> Mitigation: require explicit `/crps/` build invocation and validate deployed URL behavior.
- Deployment scripts may depend on contributor credentials or branch protection settings. -> Mitigation: document prerequisites and expected publishing branch/source clearly.
- Output directory assumptions could drift across Angular updates. -> Mitigation: document accepted output paths and keep deployment command aligned with actual build output.

## Migration Plan

1. Add or update npm scripts for GitHub Pages build and publish.
2. Update documentation with deployment prerequisites and command sequence.
3. Run local production build with GitHub Pages base href and verify generated output path.
4. Perform a deployment dry run or publish step and confirm site accessibility at `https://andy23512.github.io/crps`.
5. If deployment fails, rollback by restoring previous GitHub Pages source branch state.

## Open Questions

- Should publishing use `npx angular-cli-ghpages`, a custom git-based script, or GitHub Actions automation as the default path?
- Is hash-based Angular routing required for all GitHub Pages scenarios in this project, or is current routing already static-host safe?
