### Requirement: UI supports Japanese language mode

The system SHALL provide a Japanese language mode for player-facing UI text in addition to English.

#### Scenario: Player selects Japanese language

- **WHEN** the player changes language to Japanese
- **THEN** the UI SHALL render localized Japanese text for supported labels, controls, and status messages
- **AND** gameplay behavior SHALL remain unchanged

### Requirement: UI supports switching between English and Japanese

The system SHALL allow the player to switch UI language during a session without reloading the application.

#### Scenario: Player switches language while game is running

- **WHEN** the player changes the selected language during active play
- **THEN** visible supported UI text SHALL update to the selected language immediately
- **AND** current game state SHALL be preserved

### Requirement: Localization uses deterministic key-based translation mapping

The system SHALL map UI text from stable translation keys to language dictionaries with fallback behavior.

#### Scenario: Translation key is missing in selected language

- **WHEN** a supported key is unavailable in the selected language dictionary
- **THEN** the UI SHALL fall back to English for that key
- **AND** the app SHALL continue rendering without error
