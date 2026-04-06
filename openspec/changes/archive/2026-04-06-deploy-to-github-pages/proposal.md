## Why

The project can be built locally, but there is no documented and repeatable deployment contract for publishing to GitHub Pages at `https://andy23512.github.io/crps`. Defining this now reduces manual release steps and prevents broken routing or asset paths in production.

## What Changes

- Add a GitHub Pages deployment capability that defines the required build configuration, publish target, and deployment workflow for this repository.
- Define requirements for producing static assets with the correct site base path (`/crps/`) for GitHub Pages hosting.
- Define contributor-facing deployment instructions and validation expectations for publishing updates.

## Capabilities

### New Capabilities

- `github-pages-deployment`: Specifies how to build and publish this Angular app to `andy23512.github.io/crps`, including base-path correctness and deploy artifact expectations.

### Modified Capabilities

- `angular-build-run`: Extend production build requirements to include a GitHub Pages-compatible build invocation and expected output behavior for subpath hosting.

## Impact

- Affected code: Angular build/deploy configuration and contributor deployment docs.
- APIs: no gameplay API changes.
- Dependencies: may add or use existing deployment tooling/scripts in npm workflow.
- Systems: GitHub Pages hosting workflow and release process.
