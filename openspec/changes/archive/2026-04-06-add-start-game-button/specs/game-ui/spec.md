## ADDED Requirements

### Requirement: Player can start the game from an idle state

The system SHALL display a pre-game idle state on initial load that presents a Start Game control and does not show in-progress round UI or run the round timer. Activating the Start Game control SHALL transition the app to the active gameplay state and initialize the first round.

#### Scenario: Idle state is shown on first load

- **WHEN** the application is first loaded
- **THEN** the system SHALL display a Start Game control and SHALL NOT display in-progress round UI or start the round timer

#### Scenario: Start Game transitions to active gameplay

- **WHEN** the player activates the Start Game control
- **THEN** the system SHALL initialize the first round, start the countdown timer, and display the full in-game UI

## MODIFIED Requirements

### Requirement: Player can reset the game

The system SHALL provide a control to reset the game, clearing the scores and the last round result, and this control SHALL be rendered as an Angular Material action component. Activating reset SHALL return the app to idle state, requiring the player to press Start Game to begin a new session.

#### Scenario: Reset clears scores and returns to idle

- **WHEN** the player activates the reset/new game control
- **THEN** all scores SHALL reset to zero, the round timer SHALL stop, and the app SHALL return to idle state showing the Start Game control
