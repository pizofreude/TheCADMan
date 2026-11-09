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

### Dependency security

`npm audit` reports 25 advisories against the build toolchain. Every one is transitive, and every one resolves only through `npm audit fix --force`, which downgrades `@docusaurus/core` from 3.10.2 to 3.7.0. Do not run it.

The exposure is confined to the build:

- `tinypool` is the worker pool behind `@docusaurus/core`
- `serialize-javascript` arrives through `copy-webpack-plugin` and `css-minimizer-webpack-plugin`
- `sockjs` and `uuid` arrive through `webpack-dev-server`

None of these packages reach the published site. The deploy artifact is static HTML, CSS and JavaScript from `build/`, and none of the vulnerable modules are bundled into it. `npm run start` binds `localhost` by default, so the dev server stays off the network unless someone passes `--host 0.0.0.0`.

`npm audit fix` without `--force` has already been applied and brought the count from 36 to 25. Re-run it after each Docusaurus release, and check upstream before accepting any `--force` resolution.

