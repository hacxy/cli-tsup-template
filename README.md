# CLI Tsup Template

This is a Nodejs CLI application development template that uses TypeScript as the development language and tsup as the build tool.

English | 简体中文

## Prerequisites

Requires Node.js version 18+ or 20+.

## Using the Template

### Create the Template Locally

- You can quickly create a project locally using [create-ts-frame](https://github.com/hacxy/create-ts-frame).

When executing the creation command, you can specify the project name and template name through options.

```sh
# npm 7+, requires additional double dashes:
npm create ts-frame@latest my-cli-app -- --template cli-tsup
# yarn
yarn create ts-frame my-cli-app --template cli-tsup
# pnpm
pnpm create ts-frame my-cli-app --template cli-tsup
# bun
bun create ts-frame my-cli-app --template cli-tsup
```

### Install Dependencies

```sh
cd my-cli-project
npm install
```

### Development

- Development mode: This will enable `watch` mode to rebuild code and output `sourcemap` files for debugging.

```sh
npm run dev
```

- Build production environment code:

```sh
npm run build
```

- Type check:

```sh
npm run typecheck
```

## Debugging Program Execution

As I use `vscode` to develop CLI applications, corresponding debug configuration file `.vscode/launch.json` is provided. When you need to debug this project, first add breakpoints, then press `F5` key to start Debugger mode. The Debugger mode will automatically exit when your CLI application execution ends.

### Global Link Package

You can also establish a global link for this package so that you can test or debug code with real environments easily:

```sh
npm link
```

Afterwards, you can execute command "hello-cli" at any path under all terminals of your operating system. This command corresponds to value of option "bin" in file `package.json`.

When you no longer need this global link, you can manually remove it by executing in root directory of your project:

```sh
npm unlink -g
```

## Solutions

To facilitate smooth development of scaffold applications for you, I have thoughtfully supplemented some solutions that may be needed during scaffold application development. These third-party libraries can help you achieve more powerful and practical scaffold applications with better appearance. They have been practically applied and tested in this project template so feel free to use them:

- [commander.js](https://github.com/tj/commander.js) - A complete node.js command line solution.

- [kolorist](https://github.com/marvinhagemeister/kolorist) - A micro-library adding colors to standard input/output.

- [prompts](https://github.com/terkelg/prompts) - Lightweight, beautiful and friendly interactive prompt tool.

- [ora](https://github.com/sindresorhus/ora) - Provides friendly loading animation effects (requires installation as dependencies).

- [citty](https://github.com/unjs/citty) - Elegant CLI builder.

### Dependency Description

If your third-party library is installed with DevDependencies during development time，executing `npm run build` will pack these dependencies into production environment codes.If program works abnormally after installing via this method,you should try installing them as production environment dependencies(Dependencies). When they are installed as production environment dependencies ,they won't be packed into production environment codes .
