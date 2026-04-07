## 1. Localization Title Updates

- [x] 1.1 Add the Japanese translation for the app title key in the localization dictionary.
- [x] 1.2 Ensure the app title key keeps English fallback behavior when a localized value is missing.

## 2. App Shell Title Binding

- [x] 2.1 Update the root heading to render from the localized app title key instead of a static string.
- [x] 2.2 Update browser tab title behavior so it uses the same localized title value.
- [x] 2.3 Ensure tab title updates when language changes at runtime.

## 3. Verification

- [x] 3.1 Add or update tests to assert default English heading/tab title values.
- [x] 3.2 Add or update tests to assert Japanese heading/tab title values after language switch.
- [x] 3.3 Run the test suite and confirm no regressions in localization or gameplay behavior.
