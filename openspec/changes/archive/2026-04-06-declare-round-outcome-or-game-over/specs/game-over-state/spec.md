## ADDED Requirements

### Requirement: Mismatch between required target and actual result triggers game over

The system SHALL enter game-over state immediately when the resolved round result does not match the generated required target outcome for that round.

#### Scenario: Round result mismatches generated target

- **WHEN** a round resolves with a result different from the generated required target outcome
- **THEN** the system SHALL set game-over state to active

### Requirement: Game over blocks further round progression until reset

When game-over state is active, the system SHALL prevent additional round actions and SHALL only allow progress through reset/new game.

#### Scenario: Player attempts action while game over is active

- **WHEN** game-over state is active and player attempts to play another round
- **THEN** the system SHALL block round progression and keep game-over status visible
