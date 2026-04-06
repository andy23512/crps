# GameAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Migration Notes

- Angular implementation lives at repository root (`./`) and is the only supported runtime.
- After `npm run test` and `npm run build` pass, serve `dist/game-angular/browser/` (or `dist/game-angular/` depending on CLI output) as the primary static site.

## Deployment Output

- Production assets are generated with `npm run build`.
- Current output location: `dist/game-angular/` from the repository root workspace.
- Deploy the generated static files from `dist/game-angular/` to your static hosting target.

## GitHub Pages Deployment

### Target

- Repository Pages URL: `https://andy23512.github.io/crps`
- Publish branch: `gh-pages`

### Prerequisites

- You have push access to `andy23512/crps`.
- GitHub Pages is configured to serve from the `gh-pages` branch.
- Dependencies are installed with `npm install`.

### Build and Publish Commands

1. Build with GitHub Pages base href:

```bash
npm run build:github-pages
```

2. Publish the generated static assets:

```bash
npm run deploy:github-pages
```

3. Optional dry run equivalent (validation only, no git commit):

```bash
npm run deploy:github-pages:dry-run
```

### GitHub Actions Deployment Workflow

- Workflow file: `.github/workflows/deploy-github-pages.yml`
- Triggers:
  - Push to `main`
  - Manual dispatch from GitHub Actions UI (`workflow_dispatch`)
- CI build command: `npm run build:github-pages`
- Artifact upload path: `dist/game-angular/browser`

To manually trigger CI deployment:

1. Open the repository Actions tab.
2. Select `Deploy GitHub Pages` workflow.
3. Click `Run workflow`.

### Verification Checklist

1. Confirm build output exists in `dist/game-angular/browser/`.
2. Confirm `dist/game-angular/browser/index.html` contains `<base href="/crps/">`.
3. After publish, open `https://andy23512.github.io/crps` and verify:
   - The page loads without 404 errors.
   - JS/CSS assets load successfully.
   - Game controls and scoreboard render correctly.
4. For CI deployments, verify:
   - The `Deploy GitHub Pages` workflow run is successful.
   - The `deploy` job reports a Pages URL in run output.
   - The deployed URL serves the latest build at `https://andy23512.github.io/crps`.
