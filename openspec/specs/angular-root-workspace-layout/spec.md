### Requirement: Angular workspace is located at repository root

The system SHALL host the Angular workspace at repository root instead of inside a `game-angular/` subfolder.

#### Scenario: Contributor inspects repository structure

- **WHEN** a contributor lists root-level project files
- **THEN** Angular workspace files (such as `angular.json`, `package.json`, `src/`, and `public/`) SHALL exist at repository root
- **AND** the `game-angular/` container folder SHALL NOT be required for Angular commands

### Requirement: Root-level workflows remain functional after relocation

After workspace relocation, development and build workflows SHALL execute successfully from repository root.

#### Scenario: Developer runs root-level Angular commands

- **WHEN** a developer executes documented root-level development and build commands
- **THEN** the Angular app SHALL serve locally and produce production artifacts
- **AND** command execution SHALL NOT depend on a nested `game-angular/` path prefix
