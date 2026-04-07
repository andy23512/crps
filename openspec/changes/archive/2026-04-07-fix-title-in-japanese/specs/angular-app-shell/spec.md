## MODIFIED Requirements

### Requirement: Angular application shell initializes the game experience

The system SHALL provide an Angular application shell that bootstraps successfully in a modern browser from a root-level workspace, renders the root game experience container using Angular Material layout and surface primitives, displays the primary game heading text in the active UI language, and aligns the browser tab title to the same localized title value.

#### Scenario: App shell renders on load

- **WHEN** the application entry URL is opened from a build or serve run started at repository root
- **THEN** Angular SHALL bootstrap and display the root game interface container
- **AND** the root heading text SHALL be visible as "Conditional RPS" by default
- **AND** the browser tab title SHALL be "Conditional RPS" by default

#### Scenario: Language switches to Japanese

- **WHEN** the player changes the selected language to Japanese after the app shell has rendered
- **THEN** the root heading text SHALL update to the localized Japanese app title
- **AND** the browser tab title SHALL update to the same localized Japanese app title
