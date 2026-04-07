## Why

The Japanese localization currently leaves the game title as English ("Conditional RPS"), which creates an inconsistent language experience. Fixing this now completes the baseline localization quality for the primary app identity text.

## What Changes

- Update localization requirements so the app title is translated when Japanese is selected.
- Ensure both the in-app heading and browser tab title use the localized title value.
- Keep English title behavior unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `ui-localization`: Add requirement coverage for localized app title text in Japanese.
- `angular-app-shell`: Update title requirement to be language-aware instead of fixed English-only text.

## Impact

- Affected specs: `ui-localization`, `angular-app-shell`.
- Expected code touch points: localization dictionary and app shell title binding behavior.
- No external dependencies, API changes, or breaking gameplay behavior.
