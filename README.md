# Patch Zapier App

## First time setup

### Dependencies

You'll need to have `yarn` installed.

All Zapier CLI apps are run using Node.js v12. The current node version for the project can be found in `.nvmrc`. You can use `nvm` to manage your node version, or the tool of your choice.

The rest of the project dependencies can be installed by running `yarn install`.

## Developer commands

There are a number of helpful scripts in `package.json`.

Run typescript in watch mode:

`yarn watch`

## Docs

[Zapier](https://github.com/zapier/zapier-platform/blob/master/packages/cli/README.md.)
[The Zapier CLI Tutorial](https://platform.zapier.com/cli_tutorials/getting-started)is a good resource to understand Zapier app architecture and key concepts.

## Zapier CLI

The zapier cli can be run via `yarn zapier`. Some helpful recipes:

### Validate

Run Zapier validations:

`yarn build && yarn zapier validate`

### Logs

All HTTP requests:

`yarn zapier logs --type=http`

Detailed log information:

`yarn zapier logs --type=http --detailed`

## Deployment

Use the `publish` Github workflow action.
