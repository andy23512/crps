## MODIFIED Requirements

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round. In the Angular implementation, these controls SHALL be rendered from Angular templates and bound to component event handlers.

#### Scenario: Player activates a move control

- **WHEN** the player activates a move control (e.g., clicks a button)
- **THEN** the system SHALL immediately resolve that round using the selected move

### Requirement: Round result is displayed after each round

After each round, the system SHALL display the outcome (player wins / computer wins / draw), the player's chosen move, and the computer's chosen move.

#### Scenario: Result shown after player selects a move

- **WHEN** a round is resolved
- **THEN** the UI SHALL display the round result, the player's move, and the computer's move

### Requirement: Score board is always visible

The system SHALL display the current session scores (player wins, computer wins, draws) at all times during gameplay, updating them after each round.

#### Scenario: Score updates after a round

- **WHEN** a round completes
- **THEN** the score board SHALL reflect the updated counts immediately

### Requirement: Player can reset the game

The system SHALL provide a control to reset the game, clearing the scores and the last round result.

#### Scenario: Reset clears scores and result

- **WHEN** the player activates the reset/new game control
- **THEN** all scores SHALL reset to zero and the round result display SHALL be cleared
