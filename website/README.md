# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

The project uses **npm** as its package manager. `package-lock.json` is the single source of truth for dependency versions, and CI installs with `npm ci`. Do not introduce a second lockfile.

### Installation

```
$ npm install
```

For a reproducible install that matches CI exactly, use `npm ci` instead. It requires `package-lock.json` and replaces `node_modules` wholesale.

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```
$ npm run serve
```

Use `npm run serve` to preview the production build locally before it ships.

### Deployment

Deployment is automated. Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` and `npm run build` in this directory and publishes `build/` to the `gh-pages` branch.

Manual deploys are possible but not the normal path:

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
