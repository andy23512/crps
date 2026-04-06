## MODIFIED Requirements

### Requirement: Winner determination follows standard rules

The system SHALL determine the winner of a round using the standard rules: rock beats scissors, scissors beats paper, paper beats rock. Winner determination SHALL remain unchanged and SHALL be compared against the generated required target outcome to determine pass/fail for the round.

#### Scenario: Rock beats scissors

- **WHEN** the player plays `rock` and the computer plays `scissors`
- **THEN** the result SHALL be player wins

#### Scenario: Scissors beats paper

- **WHEN** the player plays `scissors` and the computer plays `paper`
- **THEN** the result SHALL be player wins

#### Scenario: Paper beats rock

- **WHEN** the player plays `paper` and the computer plays `rock`
- **THEN** the result SHALL be player wins

#### Scenario: Computer wins when it has the superior move

- **WHEN** the computer plays the move that beats the player's move
- **THEN** the result SHALL be computer wins

### Requirement: Draw when both moves are equal

The system SHALL declare a draw when both the player and the computer play the same move, and this result SHALL be evaluated against the generated required target outcome.

#### Scenario: Same move results in draw

- **WHEN** the player and computer play the same move
- **THEN** the result SHALL be a draw
