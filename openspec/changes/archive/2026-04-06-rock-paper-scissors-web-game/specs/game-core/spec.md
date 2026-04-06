## ADDED Requirements

### Requirement: Valid moves are rock, paper, and scissors

The system SHALL recognize exactly three valid moves: `rock`, `paper`, and `scissors`. Any other value SHALL be treated as invalid.

#### Scenario: Valid move accepted

- **WHEN** a move value of `rock`, `paper`, or `scissors` is provided
- **THEN** the system SHALL accept it as a valid move

#### Scenario: Invalid move rejected

- **WHEN** a move value other than `rock`, `paper`, or `scissors` is provided
- **THEN** the system SHALL reject it and not proceed with resolution

### Requirement: Winner determination follows standard rules

The system SHALL determine the winner of a round using the standard rules: rock beats scissors, scissors beats paper, paper beats rock.

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

The system SHALL declare a draw when both the player and the computer play the same move.

#### Scenario: Same move results in draw

- **WHEN** the player and computer play the same move
- **THEN** the result SHALL be a draw
