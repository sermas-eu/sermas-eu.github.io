---
sidebar_position: 0.00002
---

# Introduction

This section introduce the STT providers to convert user speech to text.

See also [the default configuration](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.defaults.ts) that can be overridden with environment variables.

If you followed the getting started guide, ensure you have the latest images with `docker compose pull`

## Providers 

The Toolkit supports different STT providers.

The list of supported providers follows

- [google](./google)
- [openai](./openai)
- [azure](./azure)

Those can be configured in the API `.env` and the used in an application configuration.

The `STT_SERVICE` env variable controls the default STT provider to use.

The base configuration uses `openai` thus just the openai api key is required.

## Updating the application

Reimport the app from the CLI `sermas-cli app save /apps/myapp`

Reloading the page at [http://localhost:8080](http://localhost:8080) you can start using the configured model.


