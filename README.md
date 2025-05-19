# Prismatic Embedded Workflow Builder Documentation

Prismatic offers an [embedded workflow builder](https://prismatic.io/docs/embed/workflow-builder/) that you can embed within your application.
The embedded workflow builder lets your customers build workflows that sync data between your app and the other apps they use.
They can do this without leaving your app.

This repository contains documentation that you can white-label, deploy, and present to your customers.

## Deployment options

You have two options for deploying documentation:

1. If you want to deploy built HTML/CSS/JS artifacts to a web server, follow the [setup](#setup) instructions below. This project uses [Docusaurus](https://docusaurus.io/docs/) to transform Markdown into static web assets your customers can use.
2. If you want to consume the markdown files and screenshots into your own content management system, copy `docs/*` files to your content management system. All content is written using vanilla Markdown syntax, and should be compatible with CMSs that support Markdown. Ensure you replace phrases found in docs (like `%COMPANY%` with your company's name) - you can refer to `src/site-config-types.ts` for a list of `Phrases` that should be replace.

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

This project avoids using phrases like "Prismatic", "integration builder" or "instance".
You have words you use internally to describe your company and the workflow builder.

Copy the directory `site-config.example` to `site-config` and fill in your values for each field in `site-config/index.ts`.
Your company's name and other details will replace placeholders in documentation markdown files.

### Add your own favicon and logo (optional)

Save your own favicon (`.ico` file) to `static/img/favicon.ico`.

(optional) If you would like to have your own logo in the navbar alongside your site title, save a square SVG logo to `static/img/` and include `navbar.logo` in your `siteConfig` configuration.
For example,

```typescript
siteConfig = {
  navbar: {
    logo: {
      src: "img/acme-logo.png",
      alt: "Acme logo",
    },
  },
};
```

### Extend Docusaurus (optional)

The file `docusaurus.config.ts` contains default Docusaurus-related configuration.
You can read about all of your configuration options [here](https://docusaurus.io/docs/api/docusaurus-config).

You may want to extend the default Docusaurus config (maybe add an [Algolia](https://docusaurus.io/docs/search#using-algolia-docsearch) search bar, or [navbar or footer menu items](https://docusaurus.io/docs/api/docusaurus-config#themeConfig)).

To avoid merge conflicts, please do not edit `docusaurus.config.ts` directly.
Instead, add additional Docusaurus configuration to your `site-config/index.ts` file under `docusaurusConfig`.

Values in your `site-config/index.ts` file will be merged with, and override, default values set in `docusaurus.config.ts`.

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

This will create a new directory, `build/` which will contain your built project.
You can upload the artifacts of this directory to a web server of your choice.

To view the built artifact in a browser, run

```bash
npm run serve
```

This will serve the contents of `build/` locally.
