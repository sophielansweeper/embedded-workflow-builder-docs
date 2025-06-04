# Prismatic Embedded Workflow Builder Documentation

[![Tests](https://github.com/prismatic-io/embedded-workflow-builder-docs/actions/workflows/tests.yaml/badge.svg)](https://github.com/prismatic-io/embedded-workflow-builder-docs/actions/workflows/tests.yaml)

[![Site preview badge](https://img.shields.io/badge/Example-Site_Preview-blue)](https://embedded-workflow-builder.netlify.app)

Prismatic offers an [embedded workflow builder](https://prismatic.io/docs/embed/workflow-builder/) that you can embed within your application.
The embedded workflow builder lets your customers build workflows that sync data between your app and the other apps they use.
They can do this without leaving your app.

This repository contains documentation that you can white-label, deploy, and present to your customers.

## Deployment options

You have two options for deploying white-labeled documentation:

1. If you want to generate static HTML/CSS/JS artifacts that can be deployed to a web server, see [Building Branded HTML Assets](./BUILDING-HTML.md).
   This is useful if you want to host the documentation on your own web server, or if you want to deploy it to a static hosting service like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).
2. If you want to ingest the markdown files and screenshots into a content management system that supports markdown (including your own Docusaurus project), see [Building Branded Markdown Files](./BUILDING-MARKDOWN.md).
