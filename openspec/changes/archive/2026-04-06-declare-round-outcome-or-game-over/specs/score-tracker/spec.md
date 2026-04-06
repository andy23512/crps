## MODIFIED Requirements

### Requirement: Score is tracked per session

The system SHALL maintain a cumulative count of player wins, computer wins, and draws for the duration of the browser session. Scores SHALL start at zero and increment after each completed round, including the final round that may trigger game over.

#### Scenario: Player win increments player score

- **WHEN** the player wins a round
- **THEN** the player win count SHALL increase by 1

#### Scenario: Computer win increments computer score

- **WHEN** the computer wins a round
- **THEN** the computer win count SHALL increase by 1

#### Scenario: Draw increments draw count

- **WHEN** a round ends in a draw
- **THEN** the draw count SHALL increase by 1

#### Scenario: Score starts at zero

- **WHEN** the game is first loaded
- **THEN** all score counts SHALL be zero

### Requirement: Score resets on new game

The system SHALL reset all score counts to zero when the player initiates a new game, and SHALL clear game-over state so challenge flow can restart.

#### Scenario: New game clears scores and terminal state

- **WHEN** the player activates the reset/new game action
- **THEN** the player win count, computer win count, and draw count SHALL all be reset to zero and game-over state SHALL be cleared
