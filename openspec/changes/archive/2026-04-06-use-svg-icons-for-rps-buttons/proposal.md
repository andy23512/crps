## Why

Rock, paper, and scissors move controls are currently text-only, which is less visually scannable and less expressive than icon-based controls. Replacing text labels with clear SVG icons improves recognition speed, visual polish, and consistency with modern game UI expectations.

## What Changes

- Replace text-only move button labels with SVG icons for rock, paper, and scissors
- Keep button semantics and move selection behavior unchanged
- Ensure icon buttons remain accessible with clear ARIA labels and keyboard support
- Update UI styling to size, align, and theme SVG icons consistently across states (normal, hover, disabled)

## Capabilities

### New Capabilities

- `rps-svg-icon-assets`: SVG icon definitions and asset mapping for rock, paper, and scissors controls

### Modified Capabilities

- `game-ui`: Move controls render icon-first content while preserving existing interaction, accessibility, and game-over disablement behavior

## Impact

- Frontend component template and style updates for move controls
- Minor test updates to validate icon-rendered controls and preserved behavior
- No gameplay logic, backend, or API changes
