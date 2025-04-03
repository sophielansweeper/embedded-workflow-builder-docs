# Prismatic Embedded Workflow Builder Documentation

Prismatic offers an [embedded workflow builder](https://prismatic.io/docs/embed/workflow-builder/) that you can embed within your application.
The embedded workflow builder lets your customers build workflows that sync data between your app and the other apps they use.
They can do this without leaving your app.

This repository contains documentation that you can white-label, deploy, and present to your customers.

## Setup

### Prerequisites

To run this project, ensure that you've installed [NodeJS](https://nodejs.org/en). You should be able to run `node --version` and `npm --version` from your command line.
Ensure that you're using NodeJS version 18.x or later.

### Fork this repository

In order to customize and white-label these docs, and plug them in to your own CI/CD pipeline, you will need your own copy of this repo.
[Fork](https://github.com/prismatic-io/embedded-workflow-builder-docs/fork) this repository to create your own copy, and clone your fork.

To keep your fork up to date, you can sync changes from this repository to your fork.
See [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

### Install dependencies

This project uses the [Docusaurus](https://docusaurus.io/) static-site generator library to convert [Markdown](https://www.markdownguide.org/) into HTML/CSS/JS.
To install dependencies of this project, run

```bash
npm install
```

## Configure

### White-label phrases

This project avoids using phrases like "Prismatic" "integration builder" or "instance".
You have words you use internally to describe your company and the workflow builder.

Copy the file `site-config.ts.example` to `site-config.ts` and fill in your values for each field.
This project will replace your company's name and other details into markdown files.

### Extend Docusaurus (optional)

The file `docusaurus.config.ts` contains default Docusaurus-related configuration.
You can read about all of your configuration options [here](https://docusaurus.io/docs/api/docusaurus-config).

You may want to extend the default Docusaurus config (maybe add an [Algolia](https://docusaurus.io/docs/search#using-algolia-docsearch) search bar, or [navbar or footer menu items](https://docusaurus.io/docs/api/docusaurus-config#themeConfig)).

To avoid merge conflicts, please do not edit `docusaurus.config.ts`.
Instead, add additional Docusaurus configuration to your `site-config.ts` file under `docusaurusConfig`.

Values in your `site-config.ts` file will be merged with, and override, default values set in `docusaurus.config.ts`.

## Run

To run this project locally, run

```bash
npm run start
```

## Build

To compile this project to static HTML/CSS/JS, run

```bash
npm run build
```

This will create a new directory, `dist/` which will contain your built project.
You can upload the artifacts of this directory to a web server of your choice.

To view the built artifact in a browser, run

```bash
npm run serve
```

This will serve the contents of `dist/` locally.
