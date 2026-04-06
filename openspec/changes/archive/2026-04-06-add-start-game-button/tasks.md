## 1. App Component State

- [x] 1.1 Add `gameStarted = false` property to the app component
- [x] 1.2 Remove `prepareNextRound()` call from `ngOnInit` so the app opens in idle state
- [x] 1.3 Add a `startGame()` method that sets `gameStarted = true` and calls `prepareNextRound()`
- [x] 1.4 Update `resetGame()` to set `gameStarted = false` and not call `prepareNextRound()`

## 2. Template Updates

- [x] 2.1 Wrap all in-game UI (computer move, target, timer, game-over, move controls) in a `*ngIf="gameStarted"` block
- [x] 2.2 Add a Start Game button that calls `startGame()`, shown only when `!gameStarted`
- [x] 2.3 Verify the scoreboard and title remain visible in idle state

## 3. Test Updates

- [x] 3.1 Update tests that assert pre-round UI (computer move, target, timer) to call `startGame()` or `fixture.componentInstance.gameStarted = true` before `detectChanges()`
- [x] 3.2 Update the reset test to assert the app returns to idle state (Start Game visible, in-game UI absent)
- [x] 3.3 Add a test for the idle state on fresh load (Start Game button visible, in-game UI absent)
- [x] 3.4 Add a test that activating Start Game shows in-game UI and starts the timer

## 4. Verification

- [x] 4.1 Run automated tests and confirm all pass
- [x] 4.2 Run production build and confirm it succeeds
