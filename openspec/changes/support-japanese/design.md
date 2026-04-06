## Context

The current Angular game interface presents labels, buttons, and status text in English only. Supporting Japanese requires a consistent localization strategy across app shell text and reusable components while preserving current gameplay behavior and existing deployment workflows.

## Goals / Non-Goals

**Goals:**

- Provide Japanese translations for key player-facing UI text.
- Add a user-visible language selection mechanism to switch between English and Japanese.
- Ensure language selection is applied consistently across app shell regions and core controls.

**Non-Goals:**

- Changing game rules, scoring, or round logic.
- Supporting additional languages beyond English and Japanese in this change.
- Introducing server-side translation infrastructure.

## Decisions

1. Introduce a lightweight localization layer in the Angular frontend using translation dictionaries keyed by stable message identifiers.

- Rationale: keeps the implementation small and explicit for two-language support.
- Alternative: full Angular compile-time i18n extraction. Rejected for this change due to higher setup complexity for current scope.

2. Add a language selector in the game UI and default to English.

- Rationale: explicit user control avoids incorrect language assumptions and allows immediate testing of both locales.
- Alternative: browser-locale auto-detect only. Rejected because behavior can be inconsistent and harder to verify.

3. Localize all core game UI strings tied to the app shell and player actions.

- Rationale: partial localization would create mixed-language screens and inconsistent UX.
- Alternative: localize only headers/buttons first. Rejected because status/game-over text is equally user-critical.

4. Keep translation assets in source control with a simple structure and document maintenance expectations.

- Rationale: avoids hidden text coupling and makes future updates straightforward.
- Alternative: inline text conditionals in templates. Rejected as harder to maintain and test.

## Risks / Trade-offs

- Missing translation keys could show raw identifiers or fallback text. -> Mitigation: include fallback behavior and test both languages in UI tests.
- Localization updates may increase template/service complexity. -> Mitigation: centralize strings in dictionaries and avoid duplicating logic.
- Japanese text length can impact layout in compact UI sections. -> Mitigation: review key screens for overflow and adjust styles where needed.

## Migration Plan

1. Add localization dictionaries for English and Japanese.
2. Implement language state and selector in the Angular UI.
3. Replace hard-coded UI strings with localized lookups.
4. Add or update tests verifying Japanese rendering and language switch behavior.
5. Update contributor docs for managing translation entries.

## Open Questions

- Should language preference persist across reloads (for example, localStorage) in this change or a follow-up?
- Should future localization include translated aria-label values for accessibility text in the same phase?
