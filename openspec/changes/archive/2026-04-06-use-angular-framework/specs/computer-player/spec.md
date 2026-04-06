## MODIFIED Requirements

### Requirement: Computer move is randomly selected each round

The system SHALL randomly select the computer's move from the three valid moves (`rock`, `paper`, `scissors`) at the start of each round. Each move SHALL have an equal probability of being chosen (approximately 1/3). In the Angular implementation, move selection SHALL be provided through an injectable service consumed by game components.

#### Scenario: Computer produces a valid move

- **WHEN** a new round begins and the computer selects its move
- **THEN** the selected move SHALL be one of `rock`, `paper`, or `scissors`

#### Scenario: Computer move is independent across rounds

- **WHEN** multiple rounds are played
- **THEN** the computer's move in each round SHALL be independently selected and not influenced by prior rounds
