## Why

GitHub Pages deployment currently depends on manual local commands, which is error-prone and inconsistent across contributors. Adding a GitHub Actions deployment workflow ensures reliable, repeatable publishing whenever approved changes land.

## What Changes

- Add an automated GitHub Actions workflow to build and deploy the Angular app to GitHub Pages.
- Define trigger and branch requirements for when deployment runs.
- Define workflow requirements for using GitHub Pages-compatible build settings and publishing outputs.
- Update deployment documentation to include the CI-based deployment path and verification expectations.

## Capabilities

### New Capabilities

- `github-actions-pages-deploy`: Defines requirements for CI-based deployment to GitHub Pages, including triggers, build, and publish behavior.

### Modified Capabilities

- `github-pages-deployment`: Extend deployment requirements to include a first-class GitHub Actions workflow path in addition to manual contributor commands.

## Impact

- Affected code: GitHub Actions workflow configuration and deployment documentation.
- APIs: no gameplay API changes.
- Dependencies: may rely on official GitHub Actions for Pages build/deploy.
- Systems: GitHub Actions CI, GitHub Pages publishing pipeline, and release workflow.
