## MODIFIED Requirements

### Requirement: Angular development workflow is available

The system SHALL provide a standard Angular development workflow that runs the game locally with live reload from the `game-angular/` workspace only.

#### Scenario: Developer starts local server

- **WHEN** the Angular development command is executed from the documented Angular workspace
- **THEN** the application SHALL run locally and reflect source changes without manual page rebuild steps
- **AND** the workflow SHALL NOT require files from a legacy non-Angular game folder

### Requirement: Angular production build outputs deployable static assets

The system SHALL produce production-ready static assets through the Angular build process in the `game-angular/` workspace.

#### Scenario: Production build succeeds

- **WHEN** the production build command is executed for the Angular workspace
- **THEN** the system SHALL generate a distributable static asset bundle suitable for static hosting
- **AND** build success SHALL NOT depend on files from a legacy non-Angular game folder
