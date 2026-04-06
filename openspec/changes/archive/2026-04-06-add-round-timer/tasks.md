## 1. Timer State in App Component

- [x] 1.1 Add `ROUND_TIMEOUT_SECONDS = 10` constant and `timeRemaining` property to the app component
- [x] 1.2 Implement a `startTimer()` method that decrements `timeRemaining` each second using `setInterval`
- [x] 1.3 Implement a `clearTimer()` helper that cancels the active interval and resets the timer reference
- [x] 1.4 Call `startTimer()` at the end of `prepareNextRound()` so timer begins with each new round
- [x] 1.5 Call `clearTimer()` when game over is entered (both timeout and target-mismatch paths)
- [x] 1.6 Call `clearTimer()` followed by `startTimer()` inside `resetGame()` to restart for the new round
- [x] 1.7 Implement `ngOnDestroy` to call `clearTimer()` so interval is not leaked on component teardown

## 2. Timeout Game-Over Trigger

- [x] 2.1 When `timeRemaining` reaches zero inside the timer tick, call `scoreTrackerService.setGameOver(true)` and clear the timer
- [x] 2.2 Verify that existing target-mismatch game-over path still calls `clearTimer()` so both paths are consistent

## 3. Countdown UI Display

- [x] 3.1 Add a countdown display element in the app template that shows `timeRemaining` when game is not over
- [x] 3.2 Hide or suppress the countdown display when `isGameOver` is true

## 4. Test and Quality Updates

- [x] 4.1 Add integration tests for timer-triggered game over (spy on `setGameOver` or spy on interval)
- [x] 4.2 Add tests that verify timer resets on `resetGame()` and on `prepareNextRound()` after a pass
- [x] 4.3 Add a test that the countdown display is visible before move selection and absent/neutral after game over
- [x] 4.4 Run automated tests and production build to confirm no regressions
