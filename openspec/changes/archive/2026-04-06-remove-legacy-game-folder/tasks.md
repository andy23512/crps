## 1. Remove Legacy Implementation

- [x] 1.1 Delete the tracked `game/` folder and its files (`index.html`, `style.css`, `game.js`)
- [x] 1.2 Search the repository for references to `game/` and remove or update any stale references

## 2. Align Documentation and Workflow

- [x] 2.1 Update contributor-facing setup/run/build documentation to reference only `game-angular/`
- [x] 2.2 Verify no documented workflow requires legacy static game files

## 3. Validate Angular-Only Path

- [x] 3.1 Run Angular development workflow and confirm local run behavior is unchanged
- [x] 3.2 Run Angular production build workflow and confirm deployable assets are produced
