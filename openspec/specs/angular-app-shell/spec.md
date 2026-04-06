### Requirement: Angular application shell initializes the game experience

The system SHALL provide an Angular application shell that bootstraps successfully in a modern browser from a root-level workspace and renders the root game experience container using Angular Material layout and surface primitives.

#### Scenario: App shell renders on load

- **WHEN** the application entry URL is opened from a build or serve run started at repository root
- **THEN** Angular SHALL bootstrap and display the root game interface container

### Requirement: Root shell exposes game layout regions

The system SHALL expose layout regions for move controls, round result, and score display within Angular-managed templates, with consistent Angular Material spacing and visual hierarchy after root-level workspace relocation.

#### Scenario: Core regions are visible

- **WHEN** the app shell finishes rendering from a root-level workspace execution
- **THEN** the UI SHALL include visible regions for controls, result output, and scoreboard
