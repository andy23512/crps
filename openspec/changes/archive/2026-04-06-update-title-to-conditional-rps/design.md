## Context

The Angular app shell currently displays a fixed game title that no longer matches the current gameplay branding direction. The change is a targeted UI copy update and should avoid altering game logic, layout regions, or control behavior.

## Goals / Non-Goals

**Goals:**

- Update the root app shell title to display "Conditional RPS".
- Update the browser tab title to display "Conditional RPS".
- Keep title visibility and placement unchanged across idle and active gameplay.
- Align automated test assertions with the new title text.

**Non-Goals:**

- Changing game rules, score handling, or round flow.
- Reworking app layout, typography system, or component hierarchy.
- Introducing localization or runtime title variations beyond this copy update.

## Decisions

1. Apply the in-app heading title change at the Angular root template (`app.html`) where the current heading is rendered.

- Rationale: this is the canonical source for shell heading text and minimizes surface area.
- Alternative: set title via document metadata only. Rejected because visible in-app heading is the requirement target.

2. Apply the browser tab title update at the tab title source (`index.html` title element or runtime title setter if present).

- Rationale: browser tab title must match visible branding and is validated independently from in-app heading.
- Alternative: leave tab title unchanged. Rejected because branding would remain inconsistent.

3. Keep the heading element and styling unchanged while updating only text content.

- Rationale: preserves existing visual consistency and avoids unrelated CSS churn.
- Alternative: update heading style together with text. Rejected as out of scope for this copy-focused change.

4. Update affected UI tests that assert heading and tab title text to prevent false failures.

- Rationale: test suite should represent intended user-visible behavior.
- Alternative: relax tests to check only element existence. Rejected because text value is the explicit requirement.

## Risks / Trade-offs

- Stale assertions outside primary spec tests could still reference old title text. -> Mitigation: search for previous title string and update relevant checks.
- Future branding updates may require another copy-only change. -> Mitigation: keep title source centralized in the app shell template.

## Migration Plan

1. Update app shell heading text to "Conditional RPS".
2. Update browser tab title to "Conditional RPS".
3. Update tests that assert heading and tab title content.
4. Run test suite to confirm no regressions.
5. Rollback path: revert title/test text changes if unexpected issues occur.
