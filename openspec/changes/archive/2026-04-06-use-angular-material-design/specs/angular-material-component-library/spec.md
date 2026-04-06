## ADDED Requirements

### Requirement: Key game controls use Angular Material components

The system SHALL implement primary game controls and actions using Angular Material components rather than plain native controls.

#### Scenario: Player action controls rendered with Material

- **WHEN** the game screen is displayed
- **THEN** move actions and reset actions SHALL be presented with Angular Material component primitives

### Requirement: Feedback surfaces use Angular Material patterns

The system SHALL present game feedback (round status, challenge outcome, and game-over messaging) through Angular Material-compatible UI surfaces.

#### Scenario: Feedback rendered after a round

- **WHEN** a round is resolved
- **THEN** feedback content SHALL appear in Angular Material-styled surfaces with clear state emphasis
