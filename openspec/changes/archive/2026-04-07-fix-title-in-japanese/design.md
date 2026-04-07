## Context

The application already supports English and Japanese for most player-facing text, but the game title remains fixed in English. Current behavior creates a mixed-language UI when Japanese is selected and leaves app identity text outside localization coverage.

This change touches both localization behavior and app shell title requirements. It must preserve existing gameplay behavior and existing fallback rules while making title rendering language-aware.

## Goals / Non-Goals

**Goals:**

- Ensure the app title is localized in Japanese when Japanese language mode is active.
- Ensure both the visible app heading and browser tab title are sourced from localization.
- Preserve default English behavior and fallback semantics.
- Keep the change small and limited to localization/title display concerns.

**Non-Goals:**

- Changing game mechanics, score logic, or round flow.
- Redesigning app shell layout, typography, or component hierarchy.
- Adding additional languages beyond English and Japanese.

## Decisions

1. Source title text from localization keys instead of static English literals.

- Rationale: the title becomes consistent with existing language switching behavior.
- Alternative considered: keep static heading and localize only body labels. Rejected because app identity text would remain inconsistent.

2. Use the same localized title value for both heading text and browser tab title.

- Rationale: avoids divergence between visible heading and document title.
- Alternative considered: maintain a separate tab title string. Rejected due to duplication and drift risk.

3. Keep fallback behavior unchanged: if a locale value is missing, use English.

- Rationale: aligns with current deterministic key-based mapping requirement.
- Alternative considered: display missing-key marker for title. Rejected because user-facing degradation is unnecessary for this app.

## Risks / Trade-offs

- Risk: browser tab title may not update immediately on runtime language switch if only initialized once. -> Mitigation: define requirement and implementation to update title whenever language changes.
- Risk: future copy changes could require edits in multiple places if title usage is not centralized. -> Mitigation: enforce localization key reuse for heading and tab title.
- Trade-off: a simple change still touches two capability specs (`ui-localization`, `angular-app-shell`) to keep requirements consistent.

## Migration Plan

1. Update specs to require language-aware title behavior.
2. Implement localization dictionary update for Japanese app title.
3. Bind heading and document title updates to the localized title key.
4. Validate with tests or manual checks in both English and Japanese modes.
5. Rollback path: revert title localization updates while preserving existing translation behavior.

## Open Questions

- Should Japanese title use transliteration (e.g., "条件付きじゃんけん") or a product-approved brand string? For this change, use the agreed Japanese translation from product/domain owner.
