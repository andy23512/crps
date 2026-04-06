## REMOVED Requirements

### Requirement: Round result is displayed after each round

**Reason**: The game UI is being simplified to focus on move selection, required outcome, and passed-round progression without a separate post-round result panel.

**Migration**: Remove round-result panel rendering from the app shell and update UI tests to validate gameplay behavior without relying on result-area selectors.
