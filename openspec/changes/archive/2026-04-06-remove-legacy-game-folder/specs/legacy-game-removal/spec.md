## ADDED Requirements

### Requirement: Legacy game implementation is removed

The repository SHALL remove the legacy static implementation under `game/` and SHALL keep the Angular implementation under `game-angular/` as the only supported game runtime.

#### Scenario: Legacy folder no longer tracked

- **WHEN** a contributor checks out the updated repository state
- **THEN** the `game/` folder SHALL be absent from tracked source files
- **AND** the Angular game source under `game-angular/` SHALL remain present

### Requirement: Documentation reflects Angular-only workflow

All contributor-facing build and run guidance SHALL reference the Angular workspace and SHALL NOT reference commands or paths inside `game/`.

#### Scenario: Developer follows setup and run instructions

- **WHEN** a developer reads project build/run documentation after the change
- **THEN** all prescribed commands SHALL target `game-angular/`
- **AND** no documented command SHALL require files from `game/`
