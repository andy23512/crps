## ADDED Requirements

### Requirement: Current computer move is displayed before player selection

The system SHALL display the computer's current round move before the player activates any move control.

#### Scenario: Pre-choice computer move is visible

- **WHEN** a round is ready for player input
- **THEN** the UI SHALL show the computer's current move before the player chooses

#### Scenario: Next computer move is shown after round completion

- **WHEN** a round is resolved
- **THEN** the UI SHALL generate and display the next round's computer move before the next player choice

## MODIFIED Requirements

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move.

#### Scenario: Player activates a move control

- **WHEN** the player activates a move control (e.g., clicks a button)
- **THEN** the system SHALL immediately resolve that round using the selected move and the pre-displayed computer move

### Requirement: Round result is displayed after each round

After each round, the system SHALL display the outcome (player wins / computer wins / draw), the player's chosen move, and the computer move that was shown before the player selected.

#### Scenario: Result shown after player selects a move

- **WHEN** a round is resolved
- **THEN** the UI SHALL display the round result, the player's move, and the computer move used for that round
