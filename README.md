# noah-cli
## Scaffolding Your First noah(base in vite) Project

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.2.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create noah-cli@latest
```

With Yarn:

```bash
$ yarn create noah-cli
```

With PNPM:

```bash
$ pnpm create noah-cli
```

Then follow the prompts!


Currently supported template presets include:

- `vue`
- `vue-ts`
- `react`
- `react-ts`

## Community Templates

noah-cli is a tool to quickly start a project from a basic template for popular frameworks.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```

