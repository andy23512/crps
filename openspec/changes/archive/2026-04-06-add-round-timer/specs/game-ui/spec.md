## MODIFIED Requirements

### Requirement: Player can select a move via UI controls

The system SHALL present three clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move, unless game-over is active or the round timer has expired, and these controls SHALL be rendered with Angular Material components and SVG icon content.

#### Scenario: Player activates a move control during active game

- **WHEN** the player activates a move control while game-over is not active and the round timer has not expired
- **THEN** the system SHALL immediately resolve that round using the selected move

#### Scenario: Move controls blocked after game over

- **WHEN** game-over state is active
- **THEN** move controls SHALL not allow round progression

#### Scenario: Control is identifiable with icon-first content

- **WHEN** move controls are displayed
- **THEN** each control SHALL display its corresponding SVG icon and remain semantically labeled for accessibility
