## 1. Project Structure

- [x] 1.1 Create `index.html` as the entry point for the game
- [x] 1.2 Create `style.css` for layout and visual styling
- [x] 1.3 Create `game.js` for all game logic and UI interaction

## 2. Game Core Logic

- [x] 2.1 Implement `isValidMove(move)` — returns true for rock/paper/scissors, false otherwise
- [x] 2.2 Implement `resolveRound(playerMove, computerMove)` — returns `"player"`, `"computer"`, or `"draw"`
- [x] 2.3 Verify all win/loss/draw combinations against spec scenarios

## 3. Computer Player

- [x] 3.1 Implement `getComputerMove()` — randomly selects from the three valid moves with equal probability
- [x] 3.2 Verify the function always returns a valid move

## 4. Score Tracker

- [x] 4.1 Implement score state object with `playerWins`, `computerWins`, `draws` initialized to zero
- [x] 4.2 Implement `updateScore(result)` — increments the appropriate counter based on round result
- [x] 4.3 Implement `resetScore()` — resets all counters to zero

## 5. Game UI

- [x] 5.1 Add move selection buttons (Rock, Paper, Scissors) to `index.html`
- [x] 5.2 Add round result display area (shows player move, computer move, and outcome)
- [x] 5.3 Add score board display (player wins, computer wins, draws)
- [x] 5.4 Add a Reset / New Game button
- [x] 5.5 Wire button click events to `getComputerMove()`, `resolveRound()`, `updateScore()`, and UI updates
- [x] 5.6 Wire Reset button to `resetScore()` and clear result display

## 6. Styling

- [x] 6.1 Style the move buttons to be clearly distinguishable and easy to click
- [x] 6.2 Style the result display to be prominent (highlight win/lose/draw states)
- [x] 6.3 Style the score board for clear readability

## 7. Verification

- [x] 7.1 Manually test all nine move combinations and confirm correct results
- [x] 7.2 Confirm scores increment correctly after each round
- [x] 7.3 Confirm reset clears scores and result display
- [x] 7.4 Confirm the game works when opened directly in a browser (no server required)
