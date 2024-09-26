---
sidebar_position: 0.008
---

# Configuring LLMs

Follow some guidance to configure different LLM providers from those supported. 

See also [the default configuration](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.defaults.ts) that can be overridden with environment variables.

If you followed the getting started guide, ensure you have the latest images with `docker compose pull`

## Configuring Ollama

Let's setup a local LLMs service to run inference.

***NOTE*** The LLM may use the GPU to improve performance, however the available resources may not be enough to complete all the requests. 

### Start ollama

See the [ollama docs](https://ollama.com/) to start the service and obtain a model. 

We will use `phi3` for chat and `nomic-embed-text` for embeddings. 

Download the models with 

```sh
ollama pull phi3
ollama pull nomic-embed-text
```

### Configure the SERMAS Toolkit API

Locate the file `./data/api/.env` and add the following configurations

```ini
OLLAMA_BASEURL=http://172.17.0.1:11434

OLLAMA_MODEL=phi3
OLLAMA_CHAT_MODELS=phi3:*

OLLAMA_EMBEDDINGS_MODEL=nomic-embed-text

LLM_SERVICE=ollama
LLM_EMBEDDINGS_SERVICE=ollama
```

then restart the api with `docker compose restart api`

> NOTE: The `OLLAMA_BASEURL` above may change based on your operating system and ollama installation.  
The example above assumes a standard installation on a linux machine and uses `172.17.0.1` as the default gateway between the docker network and the host (`host.docker.internal` on MacOS and Windows) . `localhost` and `127.0.0.1` will typically **NOT** work. 

> **IMPORTANT: Ollama must be listening to all local interfaces**. By default a standard ollama installation will listen to `localhost` and `127.0.0.1`, both unreachable from a 
docker container. To fix this, set `OLLAMA_HOST=0.0.0.0`. See [here](https://github.com/ollama/ollama/issues/703) for more details


### Configuring the application settings

In settings.yaml or app.yaml settings section add the following lines

```yaml
llm:
  chat: ollama/phi3
  tools: ollama/phi3
  sentiment: ollama/phi3
  tasks: ollama/phi3
  intent: ollama/phi3
  translation: ollama/phi3
```  

The pattern to follow is `[provider]/[model]`. The list of available models is visible in the kiosk UI, opening the left menu, under LLM settings

This allow to select the phi3 model for all the types of inference in the system. Depending on the setup, those could be changed to work with different providers and models configured.

### Updating the application

Reimport the app from the CLI `sermas-cli app save /apps/myapp`

Reloading the page at [http://localhost:8080](http://localhost:8080) you can start using the configured ollama model.