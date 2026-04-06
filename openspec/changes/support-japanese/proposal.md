## Why

The game UI is currently English-only, which limits accessibility for Japanese-speaking users. Adding Japanese support now improves usability for a broader audience while keeping gameplay unchanged.

## What Changes

- Add a localization capability for Japanese language text in the game interface.
- Define how users can switch between English and Japanese in the UI.
- Update UI requirements so key labels, controls, and status messages render in Japanese when selected.
- Preserve existing gameplay behavior and deployment flow while introducing localized content.

## Capabilities

### New Capabilities

- `ui-localization`: Defines multi-language UI behavior, language selection, and localized text requirements.

### Modified Capabilities

- `game-ui`: Extend UI requirements so player-facing game text supports Japanese translations when Japanese is active.

## Impact

- Affected code: Angular templates/components for visible text and any localization service or translation assets.
- APIs: no gameplay API changes.
- Dependencies: may use Angular built-in i18n support or lightweight translation utilities.
- Systems: frontend presentation layer and contributor documentation for localization maintenance.
