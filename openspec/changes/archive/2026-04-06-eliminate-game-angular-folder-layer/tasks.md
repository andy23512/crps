## 1. Relocate Angular Workspace to Root

- [x] 1.1 Move Angular workspace files and directories from `game-angular/` to repository root
- [x] 1.2 Remove the empty `game-angular/` container folder after confirming all required files were moved

## 2. Update Path-Based References

- [x] 2.1 Update npm scripts, Angular config references, and related path-sensitive files to run from repository root
- [x] 2.2 Update contributor and deployment documentation to remove `game-angular/` path prefix assumptions

## 3. Validate Root-Level Workflows

- [x] 3.1 Run Angular development workflow from repository root and confirm live-reload behavior remains intact
- [x] 3.2 Run Angular production build from repository root and confirm deployable artifacts are produced

## 4. Final Consistency Checks

- [x] 4.1 Search repository for stale `game-angular/` path references and resolve required updates
- [x] 4.2 Verify app shell regions (controls, result, scoreboard) render correctly after relocation
