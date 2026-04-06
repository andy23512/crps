## MODIFIED Requirements

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move, unless game-over is active, and these controls SHALL be rendered with Angular Material components and SVG icon content.

#### Scenario: Player activates a move control during active game

- **WHEN** the player activates a move control while game-over is not active
- **THEN** the system SHALL immediately resolve that round using the selected move

#### Scenario: Move controls blocked after game over

- **WHEN** game-over state is active
- **THEN** move controls SHALL not allow round progression

#### Scenario: Control is identifiable with icon-first content

- **WHEN** move controls are displayed
- **THEN** each control SHALL display its corresponding SVG icon and remain semantically labeled for accessibility

### Requirement: Player can reset the game

The system SHALL provide a control to reset the game, clearing the scores and the last round result, and this control SHALL be rendered as an Angular Material action component.

#### Scenario: Reset clears scores and result

- **WHEN** the player activates the reset/new game control
- **THEN** all scores SHALL reset to zero and the round result display SHALL be cleared
