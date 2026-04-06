## MODIFIED Requirements

### Requirement: Score board is always visible

The system SHALL display both the current session passed-round count and the highest passed-round count at all times during gameplay, updating the current score after each successfully passed round and updating the highest score when a new maximum is achieved, using Angular Material visual conventions.

#### Scenario: Passed-round count updates after a successful round

- **WHEN** a round completes and the generated required target outcome is satisfied
- **THEN** the score board SHALL reflect the incremented passed-round count immediately

#### Scenario: Highest score is visible alongside current score

- **WHEN** the score board is rendered
- **THEN** it SHALL include a highest-score value in addition to the current passed-round count

#### Scenario: Highest score persists after reset

- **WHEN** the player resets or starts a new game
- **THEN** the current passed-round value SHALL reset while the displayed highest score SHALL remain available
