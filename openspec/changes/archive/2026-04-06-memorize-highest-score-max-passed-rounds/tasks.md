## 1. Add Persistent Highest Score Tracking

- [x] 1.1 Add highest-score persistence key and safe load/store logic in score tracking service
- [x] 1.2 Update score update flow to maintain max passed rounds when current score exceeds persisted highest score

## 2. Preserve Highest Score on Reset

- [x] 2.1 Ensure new game/reset clears only current session passed rounds and game-over state
- [x] 2.2 Keep persisted highest score unchanged during reset/new game actions

## 3. Update Scoreboard UI

- [x] 3.1 Extend scoreboard component to display both current passed rounds and highest score
- [x] 3.2 Ensure scoreboard labels and values update correctly when highest score changes

## 4. Validate and Document Behavior

- [x] 4.1 Add or update tests for highest score persistence, max-update behavior, and reset behavior
- [x] 4.2 Run test suite and update contributor documentation for highest-score persistence expectations
