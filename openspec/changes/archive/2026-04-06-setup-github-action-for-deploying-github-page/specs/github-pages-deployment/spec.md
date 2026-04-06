## MODIFIED Requirements

### Requirement: GitHub Pages deployment workflow is defined

The system SHALL define repeatable workflows for publishing the Angular app to GitHub Pages at `https://andy23512.github.io/crps`, including both manual contributor commands and a GitHub Actions CI deployment path.

#### Scenario: Contributor performs manual deployment

- **WHEN** a contributor follows the documented manual deployment workflow
- **THEN** the built static site SHALL be published to the configured GitHub Pages source for this repository
- **AND** the published site SHALL be reachable at `https://andy23512.github.io/crps`

#### Scenario: CI workflow performs deployment

- **WHEN** the configured GitHub Actions Pages deployment workflow executes
- **THEN** deployment SHALL publish the built static site to the configured GitHub Pages source
- **AND** the published site SHALL be reachable at `https://andy23512.github.io/crps`

### Requirement: Deployment documentation includes prerequisites and verification

The system SHALL provide contributor-facing deployment guidance that includes prerequisites, publish steps, and post-deploy verification checks for both manual and CI-based workflows.

#### Scenario: Contributor follows deployment documentation

- **WHEN** a contributor reads the deployment section in repository documentation
- **THEN** the documentation SHALL include required tools/permissions and exact deployment commands
- **AND** the documentation SHALL include verification steps for checking page accessibility and static asset loading at the GitHub Pages URL

#### Scenario: Contributor reviews CI deployment guidance

- **WHEN** a contributor reviews deployment automation documentation
- **THEN** the documentation SHALL identify workflow trigger conditions and manual dispatch availability
- **AND** the documentation SHALL describe where to inspect deployment run status and failures
