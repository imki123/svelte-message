# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Installing

```bash
npm i -g pnpm
pnpm i
```

## Developing

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm build
pnpm preview
```

## Deploying

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.  
> This project uses Github Pages to deploy. So, install `@sveltejs/adapter-static`.  
> /static/`.nojekyll` file is required. If it is dismissed, you can't access \_app directory.

```bash
pnpm run deploy
```
