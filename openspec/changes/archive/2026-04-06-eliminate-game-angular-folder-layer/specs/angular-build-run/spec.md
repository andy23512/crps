## MODIFIED Requirements

### Requirement: Angular development workflow is available

The system SHALL provide a standard Angular development workflow that runs the game locally with live reload from the repository root workspace.

#### Scenario: Developer starts local server

- **WHEN** the Angular development command is executed from repository root
- **THEN** the application SHALL run locally and reflect source changes without manual page rebuild steps
- **AND** the workflow SHALL NOT require a `game-angular/` path prefix

### Requirement: Angular production build outputs deployable static assets

The system SHALL produce production-ready static assets through the Angular build process executed from repository root.

#### Scenario: Production build succeeds

- **WHEN** the production build command is executed from repository root
- **THEN** the system SHALL generate a distributable static asset bundle suitable for static hosting
- **AND** build success SHALL NOT depend on a `game-angular/` path prefix
