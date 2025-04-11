---
sidebar_position: 0.00002
---

# Introduction

This section introduce the TTS providers to avatar messages to audio.

See also [the default configuration](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.defaults.ts) that can be overridden with environment variables.

If you followed the getting started guide, ensure you have the latest images with `docker compose pull`

## Providers 

The Toolkit supports different TTS providers via the `TTS_SERVICE` flag

The list of supported providers follows

- [google](./google)
- [azure](./azure)
- [openai](./openai)

Those can be configured in the API `.env` and the used in an application configuration.

## Configuring the avatar settings

Assuming we have an avatar glb model in `avatars/myavatar/config.glb` add or edit the file `avatars/myavatar/config.glb.yaml` as follows

```yaml
name: Peppino
gender: M
prompt: You are an awesome chef
tts:
  provider: google
  model: it-IT-Chirp3-HD-Aoede
```  

## Updating the application

Reimport the app from the CLI `sermas-cli app save /apps/myapp`

Reloading the page at [http://localhost:8080](http://localhost:8080) you can start using the configured model.
