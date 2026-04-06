## 1. Add GitHub Pages Build/Publish Commands

- [x] 1.1 Add npm script(s) for GitHub Pages-compatible production build using base href `/crps/`
- [x] 1.2 Add npm script(s) for publishing built assets to GitHub Pages source (for example `gh-pages` branch)

## 2. Implement Deployment Configuration

- [x] 2.1 Ensure deployment script targets the Angular dist output (`dist/game-angular/browser` or `dist/game-angular`) consistently
- [x] 2.2 Add or update any required deployment tooling configuration and dependencies

## 3. Update Contributor Documentation

- [x] 3.1 Add a deployment section describing prerequisites, exact commands, and target URL `https://andy23512.github.io/crps`
- [x] 3.2 Document post-deploy verification steps for page accessibility and asset loading

## 4. Validate Deployment Workflow

- [x] 4.1 Run the GitHub Pages build command and confirm output is generated with `/crps/` base href
- [x] 4.2 Run a publish flow (or dry-run equivalent) and verify the expected publish target is updated
