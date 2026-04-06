## Why

The round-result panel adds extra visual noise in the challenge flow and duplicates information users can already infer from game-over state and score progression. Removing it simplifies the play surface and keeps the interface focused on choosing moves and maintaining streak momentum.

## What Changes

- Remove the round-result display from the game interface after each round.
- Keep core gameplay behavior unchanged, including round resolution, score updates, and game-over handling.
- Ensure reset/new game still clears internal last-round state even though it is no longer rendered.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `game-ui`: Remove the requirement to display round outcome details after each round.

## Impact

- Affected code: app template composition, round-result component usage, and UI tests that currently assert result-area content.
- APIs/contracts: no external API changes; internal round state can remain for game logic if needed.
- Dependencies/systems: no new dependencies.
