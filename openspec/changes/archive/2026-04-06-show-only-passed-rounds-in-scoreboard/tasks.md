## 1. Score Model Update

- [x] 1.1 Replace score-tracker session model with a passed-rounds counter initialized to zero
- [x] 1.2 Increment passed-rounds only when a round satisfies the generated target outcome
- [x] 1.3 Ensure failed rounds do not increment passed-rounds
- [x] 1.4 Reset passed-rounds to zero on reset/new game

## 2. Scoreboard UI Simplification

- [x] 2.1 Update scoreboard component API/template to render only passed-round count
- [x] 2.2 Update app-level bindings to provide passed-round value to scoreboard
- [x] 2.3 Remove player/computer/draw scoreboard labels and values from the rendered UI

## 3. Verification

- [x] 3.1 Update unit tests for score tracker behavior (increment, no increment on fail, reset)
- [x] 3.2 Update component tests to assert scoreboard shows only passed rounds
- [x] 3.3 Run test suite and production build to confirm no regressions
