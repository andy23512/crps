## MODIFIED Requirements

### Requirement: Score is tracked per session

The system SHALL maintain a cumulative count of passed rounds for the duration of the browser session. The passed-round count SHALL start at zero and increment by 1 after each completed round that satisfies the generated required target outcome, and the system SHALL update a persisted highest passed-round value whenever the current session count exceeds the stored maximum.

#### Scenario: Passed round increments score

- **WHEN** a round result satisfies the generated required target outcome
- **THEN** the passed-round count SHALL increase by 1

#### Scenario: Failed round does not increment score

- **WHEN** a round result does not satisfy the generated required target outcome
- **THEN** the passed-round count SHALL remain unchanged

#### Scenario: Score starts at zero

- **WHEN** the game is first loaded
- **THEN** the passed-round count SHALL be zero

#### Scenario: Highest score updates when current score exceeds previous best

- **WHEN** the passed-round count increases beyond the persisted highest score
- **THEN** the system SHALL update persisted highest score to the new passed-round value

#### Scenario: Highest score loads from persisted storage

- **WHEN** the application starts in a browser with a previously stored highest score
- **THEN** the system SHALL restore that highest score for display and comparison

### Requirement: Score resets on new game

The system SHALL reset the passed-round count to zero when the player initiates a new game, and SHALL clear game-over state so challenge flow can restart, while preserving the persisted highest score value.

#### Scenario: New game clears passed-round state and terminal state

- **WHEN** the player activates the reset/new game action
- **THEN** the passed-round count SHALL be reset to zero and game-over state SHALL be cleared

#### Scenario: New game does not clear highest score

- **WHEN** the player activates the reset/new game action
- **THEN** the highest score SHALL remain unchanged unless a later session exceeds it
