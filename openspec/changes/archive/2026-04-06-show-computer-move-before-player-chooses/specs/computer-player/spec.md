## MODIFIED Requirements

### Requirement: Computer move is randomly selected each round

The system SHALL randomly select the computer's move from the three valid moves (rock, paper, scissors) at the start of each round. Each move SHALL have an equal probability of being chosen (approximately 1/3). For each round, this selected move SHALL be generated and fixed before the player chooses, then used for that round's resolution.

#### Scenario: Computer produces a valid move

- **WHEN** a new round begins and the computer selects its move
- **THEN** the selected move SHALL be one of rock, paper, or scissors

#### Scenario: Computer move is independent across rounds

- **WHEN** multiple rounds are played
- **THEN** the computer's move in each round SHALL be independently selected and not influenced by prior rounds

#### Scenario: Revealed move is used for round resolution

- **WHEN** the computer move has been generated and revealed for the current round
- **THEN** player move resolution SHALL use that revealed move without re-generating a different computer move
