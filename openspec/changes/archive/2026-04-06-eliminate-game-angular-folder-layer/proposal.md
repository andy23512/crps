## Why

The Angular application currently lives under a nested `game-angular/` folder, which adds path indirection for development, CI, and deployment scripts. Flattening the repository so the Angular workspace is at the repo root simplifies commands, tooling integration, and contributor onboarding.

## What Changes

- Move Angular workspace files and directories from `game-angular/` to repository root.
- Update scripts, docs, and configuration paths to run from root without the extra folder layer.
- Remove the now-empty `game-angular/` container directory after migration.
- Preserve existing game behavior and UI while changing only repository layout and workflow paths.

## Capabilities

### New Capabilities
- `angular-root-workspace-layout`: Defines requirements for hosting the Angular workspace at repository root and removing the `game-angular/` path layer.

### Modified Capabilities
- `angular-build-run`: Update requirements so development and production commands are executed from repo root rather than a nested workspace path.
- `angular-app-shell`: Update requirements to ensure Angular shell entrypoints/config remain valid after root-level relocation.

## Impact

- Affected code: Angular configuration files, npm scripts, and path-based references currently scoped under `game-angular/`.
- APIs: no gameplay API changes.
- Dependencies: no new dependencies expected.
- Systems: CI/local developer workflow and deployment paths become root-based.
