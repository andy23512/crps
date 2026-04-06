## ADDED Requirements

### Requirement: A countdown timer limits player move selection time per round

The system SHALL start a 10-second countdown when a round becomes ready for player input. If the player does not select a move before the countdown reaches zero, the system SHALL enter game-over state.

#### Scenario: Timer starts when round is ready

- **WHEN** a new round is initialized and awaiting player input
- **THEN** the countdown SHALL begin at 10 seconds and decrement once per second

#### Scenario: Timeout triggers game over

- **WHEN** the countdown reaches zero before the player selects a move
- **THEN** the system SHALL enter game-over state and block further move selection

#### Scenario: Timer resets on new round after a pass

- **WHEN** a round is successfully passed and the next round is initialized
- **THEN** the countdown SHALL reset to 10 seconds and begin counting down again

#### Scenario: Timer is cancelled when game over is entered via target mismatch

- **WHEN** the player selects a move that does not satisfy the required target outcome
- **THEN** the countdown SHALL stop immediately

#### Scenario: Timer resets on game reset

- **WHEN** the player activates the reset/new game control
- **THEN** the countdown SHALL reset to 10 seconds and begin counting down for the new round

### Requirement: Remaining time is displayed to the player during each round

The system SHALL display the current countdown value (in seconds) to the player at all times while a round is active and game over is not in effect.

#### Scenario: Countdown value is visible before move selection

- **WHEN** a round is active and awaiting player input
- **THEN** the UI SHALL show the remaining seconds as a numeric value

#### Scenario: Countdown display is hidden or neutral when game over is active

- **WHEN** game-over state is active
- **THEN** the countdown display SHALL not show an active ticking value
