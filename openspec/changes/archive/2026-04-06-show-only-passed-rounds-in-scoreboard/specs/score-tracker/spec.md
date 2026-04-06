## MODIFIED Requirements

### Requirement: Score is tracked per session

The system SHALL maintain a cumulative count of passed rounds for the duration of the browser session. The passed-round count SHALL start at zero and increment by 1 after each completed round that satisfies the generated required target outcome.

#### Scenario: Passed round increments score

- **WHEN** a round result satisfies the generated required target outcome
- **THEN** the passed-round count SHALL increase by 1

#### Scenario: Failed round does not increment score

- **WHEN** a round result does not satisfy the generated required target outcome
- **THEN** the passed-round count SHALL remain unchanged

#### Scenario: Score starts at zero

- **WHEN** the game is first loaded
- **THEN** the passed-round count SHALL be zero

### Requirement: Score resets on new game

The system SHALL reset the passed-round count to zero when the player initiates a new game, and SHALL clear game-over state so challenge flow can restart.

#### Scenario: New game clears passed-round state and terminal state

- **WHEN** the player activates the reset/new game action
- **THEN** the passed-round count SHALL be reset to zero and game-over state SHALL be cleared
