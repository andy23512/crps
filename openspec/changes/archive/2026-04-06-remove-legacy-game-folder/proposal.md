## Why

The repository currently contains two game implementations (`game/` and `game-angular/`), which creates duplicate maintenance paths and confusion about the supported runtime target. Removing the legacy implementation now reduces maintenance overhead and keeps development focused on the Angular app already aligned with the active OpenSpec capabilities.

## What Changes

- Remove the legacy static web implementation under `game/` (`index.html`, `style.css`, `game.js`).
- Update project documentation so setup and run steps reference only `game-angular/`.
- Ensure no build/run guidance or references continue to depend on files inside `game/`.

## Capabilities

### New Capabilities

- `legacy-game-removal`: Defines requirements for deprecating and removing the non-Angular legacy game folder while keeping the Angular game as the only supported implementation.

### Modified Capabilities

- `angular-build-run`: Clarify that documented build/run workflow targets only the Angular workspace and no longer references the legacy static game path.

## Impact

- Affected code: repository root `game/` folder and project docs that reference it.
- APIs: no runtime API changes.
- Dependencies: no new dependencies.
- Systems: repository structure and contributor workflow become single-path (Angular-only).
