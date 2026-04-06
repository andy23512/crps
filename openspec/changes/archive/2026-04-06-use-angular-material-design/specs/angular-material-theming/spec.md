## ADDED Requirements

### Requirement: Angular Material theme is defined for the game interface

The system SHALL define and apply an Angular Material theme that governs core visual tokens for the game interface, including color usage and typography behavior.

#### Scenario: Theme is applied at runtime

- **WHEN** the game application loads
- **THEN** Angular Material-styled components SHALL render using the configured theme settings

### Requirement: Theme supports semantic game state presentation

The system SHALL map game state surfaces (normal, success, warning/failure) to theme-consistent styles without changing game logic.

#### Scenario: Challenge status uses themed emphasis

- **WHEN** challenge status is rendered (target met or target failed)
- **THEN** the UI SHALL use theme-consistent semantic styling for those statuses
