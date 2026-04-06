## Why

Currently the game begins immediately on page load, including the round timer countdown, giving the player no time to read the challenge context before the clock starts. A explicit Start Game button gives the player deliberate control over when each session begins.

## What Changes

- Add a pre-game idle state in which the game displays only a "Start Game" button and no in-progress round UI.
- Activating the Start Game button transitions the app into the active gameplay state, initializing the first round and starting the countdown timer.
- The "New Game" (reset) button retains its current behavior: it resets score and state, but instead of immediately starting a new round it returns the app to the idle/pre-game state requiring the player to press Start Game again.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `game-ui`: Add a pre-game idle state requirement with a Start Game control; modify the "Player can reset the game" requirement so that reset returns to idle state instead of directly starting the next round.

## Impact

- Affected code: app component `ngOnInit` (no longer auto-starts), new `gameStarted` flag, `resetGame()` (returns to idle), template (conditional Start Game / gameplay UI), app integration tests.
- APIs/contracts: no external API changes; all state is internal to the app component.
- Dependencies/systems: no new dependencies.
