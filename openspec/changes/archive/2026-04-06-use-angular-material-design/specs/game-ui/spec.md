## MODIFIED Requirements

### Requirement: Current computer move is displayed before player selection

The system SHALL display the computer's current round move before the player activates any move control, and SHALL also display the generated required target outcome for that round, using Angular Material presentation components.

#### Scenario: Pre-choice game state is visible

- **WHEN** a round is ready for player input
- **THEN** the UI SHALL show both the computer's current move and the generated required target outcome before the player chooses

#### Scenario: Next round pre-choice state is shown after successful completion

- **WHEN** a round resolves and does not trigger game over
- **THEN** the UI SHALL generate and display the next round's required target outcome and computer move before the next player choice

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move, unless game-over is active, and these controls SHALL be rendered with Angular Material components.

#### Scenario: Player activates a move control during active game

- **WHEN** the player activates a move control while game-over is not active
- **THEN** the system SHALL immediately resolve that round using the selected move

#### Scenario: Move controls blocked after game over

- **WHEN** game-over state is active
- **THEN** move controls SHALL not allow round progression

### Requirement: Round result is displayed after each round

After each round, the system SHALL display the outcome (player wins / computer wins / draw), the player's chosen move, and the computer's chosen move, and SHALL indicate whether the required target outcome was met or failed, using Angular Material-compatible feedback surfaces.

#### Scenario: Result shown with challenge evaluation

- **WHEN** a round is resolved
- **THEN** the UI SHALL display round result details and whether the generated required target outcome was satisfied

### Requirement: Score board is always visible

The system SHALL display the current session scores (player wins, computer wins, draws) at all times during gameplay, updating them after each round, using Angular Material visual conventions.

#### Scenario: Score updates after a round

- **WHEN** a round completes
- **THEN** the score board SHALL reflect the updated counts immediately

### Requirement: Player can reset the game

The system SHALL provide a control to reset the game, clearing the scores and the last round result, and this control SHALL be rendered as an Angular Material action component.

#### Scenario: Reset clears scores and result

- **WHEN** the player activates the reset/new game control
- **THEN** all scores SHALL reset to zero and the round result display SHALL be cleared
