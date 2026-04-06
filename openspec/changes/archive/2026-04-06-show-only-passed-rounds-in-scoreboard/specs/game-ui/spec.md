## MODIFIED Requirements

### Requirement: Score board is always visible

The system SHALL display the current session passed-round count at all times during gameplay, updating it after each successfully passed round, using Angular Material visual conventions.

#### Scenario: Passed-round count updates after a successful round

- **WHEN** a round completes and the generated required target outcome is satisfied
- **THEN** the score board SHALL reflect the incremented passed-round count immediately
