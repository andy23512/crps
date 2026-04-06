## Why

There is no existing Rock Paper Scissors game in this project. Adding a browser-based implementation provides a simple, self-contained interactive game that demonstrates UI event handling, game state management, and basic AI (computer moves).

## What Changes

- Add a fully playable Rock Paper Scissors web game accessible via the browser
- Implement player vs. computer gameplay with randomized computer moves
- Track and display scores across rounds within a session
- Show game result feedback (win/lose/draw) after each round

## Capabilities

### New Capabilities

- `game-core`: Core game logic — move validation, winner determination, draw detection
- `computer-player`: Randomized computer move selection
- `score-tracker`: Per-session score tracking for player and computer
- `game-ui`: Browser-based UI with move selection buttons, result display, and score board

### Modified Capabilities

<!-- No existing capabilities are being modified -->

## Impact

- New standalone web application (HTML/CSS/JS or a lightweight framework)
- No backend required — all logic runs client-side
- No external dependencies beyond a modern browser
