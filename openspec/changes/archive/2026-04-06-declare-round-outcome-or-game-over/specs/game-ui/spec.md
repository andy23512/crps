## MODIFIED Requirements

### Requirement: Current computer move is displayed before player selection

The system SHALL display the computer's current round move before the player activates any move control, and SHALL also display the generated required target outcome for that round.

#### Scenario: Pre-choice game state is visible

- **WHEN** a round is ready for player input
- **THEN** the UI SHALL show both the computer's current move and the generated required target outcome before the player chooses

#### Scenario: Next round pre-choice state is shown after successful completion

- **WHEN** a round resolves and does not trigger game over
- **THEN** the UI SHALL generate and display the next round's required target outcome and computer move before the next player choice

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move, unless game-over is active.

#### Scenario: Player activates a move control during active game

- **WHEN** the player activates a move control while game-over is not active
- **THEN** the system SHALL immediately resolve that round using the selected move

#### Scenario: Move controls blocked after game over

- **WHEN** game-over state is active
- **THEN** move controls SHALL not allow round progression

### Requirement: Round result is displayed after each round

After each round, the system SHALL display the outcome (player wins / computer wins / draw), the player's chosen move, and the computer's chosen move, and SHALL indicate whether the required target outcome was met or failed.

#### Scenario: Result shown with challenge evaluation

- **WHEN** a round is resolved
- **THEN** the UI SHALL display round result details and whether the generated required target outcome was satisfied
