### Requirement: Application generates required target outcome each round

The system SHALL randomly generate one required target outcome (`player`, `computer`, or `draw`) at the start of each round before player move selection.

#### Scenario: Target outcome generated at round start

- **WHEN** a new round is initialized
- **THEN** the system SHALL set one required target outcome from `player`, `computer`, or `draw`

### Requirement: Generated target outcome remains fixed for the current round

The system SHALL keep the generated target outcome unchanged from round start until that round is resolved.

#### Scenario: Target does not change before resolution

- **WHEN** a round is active and awaiting player move
- **THEN** the required target outcome SHALL remain unchanged until the round result is computed
