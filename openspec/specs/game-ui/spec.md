### Requirement: Player can start the game from an idle state

The system SHALL display a pre-game idle state on initial load that presents a localized Start Game control and does not show in-progress round UI or run the round timer. Activating the Start Game control SHALL transition the app to the active gameplay state and initialize the first round.

#### Scenario: Idle state is shown on first load

- **WHEN** the application is first loaded
- **THEN** the system SHALL display a localized Start Game control and SHALL NOT display in-progress round UI or start the round timer

#### Scenario: Start Game transitions to active gameplay

- **WHEN** the player activates the Start Game control
- **THEN** the system SHALL initialize the first round, start the countdown timer, and display the full in-game UI

### Requirement: Current computer move is displayed before player selection

The system SHALL display the computer's current round move before the player activates any move control, and SHALL also display the generated required target outcome for that round, using Angular Material presentation components.

#### Scenario: Pre-choice game state is visible

- **WHEN** a round is ready for player input
- **THEN** the UI SHALL show both the computer's current move and the generated required target outcome before the player chooses

#### Scenario: Next round pre-choice state is shown after successful completion

- **WHEN** a round resolves and does not trigger game over
- **THEN** the UI SHALL generate and display the next round's required target outcome and computer move before the next player choice

### Requirement: Player can select a move via UI controls

The system SHALL present three localized, clearly labeled controls (one for each move: rock, paper, scissors) that the player can activate to play that move for the current round against the currently displayed computer move, unless game-over is active or the round timer has expired, and these controls SHALL be rendered with Angular Material components and SVG icon content.

#### Scenario: Player activates a move control during active game

- **WHEN** the player activates a move control while game-over is not active and the round timer has not expired
- **THEN** the system SHALL immediately resolve that round using the selected move

#### Scenario: Move controls blocked after game over

- **WHEN** game-over state is active
- **THEN** move controls SHALL not allow round progression

#### Scenario: Control is identifiable with icon-first content

- **WHEN** move controls are displayed
- **THEN** each control SHALL display its corresponding SVG icon and remain semantically labeled for accessibility

### Requirement: Score board is always visible

The system SHALL display the current session passed-round count at all times during gameplay, updating it after each successfully passed round, using Angular Material visual conventions.

#### Scenario: Passed-round count updates after a successful round

- **WHEN** a round completes and the generated required target outcome is satisfied
- **THEN** the score board SHALL reflect the incremented passed-round count immediately

### Requirement: Player can reset the game

The system SHALL provide a localized control to reset the game, clearing the scores and the last round result, and this control SHALL be rendered as an Angular Material action component. Activating reset SHALL return the app to idle state, requiring the player to press Start Game to begin a new session.

#### Scenario: Reset clears scores and returns to idle

- **WHEN** the player activates the reset/new game control
- **THEN** all scores SHALL reset to zero, the round timer SHALL stop, and the app SHALL return to idle state showing the localized Start Game control
