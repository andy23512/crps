## 1. Round State Preparation

- [x] 1.1 Add or update game state to store the currently revealed computer move
- [x] 1.2 Initialize a revealed computer move when the app starts or when a new game is created

## 2. Computer Move Lifecycle

- [x] 2.1 Update computer-player flow to generate the computer move before player input each round
- [x] 2.2 Ensure the same revealed computer move is used for round resolution without re-generation
- [x] 2.3 Generate and reveal the next round computer move immediately after each round resolves

## 3. UI Behavior Changes

- [x] 3.1 Add a pre-choice display area that shows the current computer move
- [x] 3.2 Update move button handler flow to resolve against the pre-displayed computer move
- [x] 3.3 Update round result display to show the computer move used for that round

## 4. Reset and Consistency

- [x] 4.1 Update reset/new game behavior to clear score and result state
- [x] 4.2 Ensure reset/new game also initializes and displays a fresh revealed computer move

## 5. Validation

- [x] 5.1 Verify pre-choice computer move is visible before player selection in every round
- [x] 5.2 Verify resolved round always uses the previously revealed computer move
- [x] 5.3 Verify next round computer move appears after each completed round
- [x] 5.4 Verify score tracking and reset behavior remain unchanged
