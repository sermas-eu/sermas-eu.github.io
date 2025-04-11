---
sidebar_position: 0.00002
---

# Introduction

Follow some guidance to configure different LLM providers from those supported. 

See also [the default configuration](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.defaults.ts) that can be overridden with environment variables.

If you followed the getting started guide, ensure you have the latest images with `docker compose pull`

## Providers and models

The Toolkit supports different LLM providers for inference and embeddings.

The list of supported providers follows

- [antrophic](./antrophic)
- [gemini](./gemini)
- [groq](./groq)
- [huggingface](./huggingface)
- [mistral](./mistral)
- [ollama](./ollama)
- [openai](./openai)
- [vertexai](./vertexai)
- [gcp_mistral](./gcp_mistral)

Those can be configured in the API `.env` and the used in an application configuration.

A model can be selected following this pattern `provider/model` such as `openai/gpt-4o` or `gemini/gemini-1.5-pro`

The model selection happens at inference time by tagging a request with a special label.

Current labels are
- `chat` chat with the user
- `tools` identify a tool (or function call) in a list from the context
- `sentiment` provide sentiment analysis over text
- `tasks` identify and contextualize structured tasks
- `intent` identify the user intent from a list of options
- `translation` translate text between languages

## Configuring the application settings

In `settings.yaml` or `app.yaml` under settings section add or update the following lines, adapting the models to your needs.

```yaml
llm:
  chat: openai/gpt-4o
  tools: huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct
  sentiment: openai/gpt-4o-mini
  tasks: gemini/gemini-1.5-pro
# The following are not specified. The Toolkit will use a model from the provider specified in .env as LLM_SERVICE
#   intent: ...
#   translation: ...
```  

The pattern to follow is `[provider]/[model]`. The list of available models is visible in the kiosk UI, opening the left menu, under LLM settings.

In the above configurations, providers can be mixed to obtain the best experience or precision needed for a specific activities.

**Note** If not specified, the Toolkit will use a model from the specified `LLM_SERVICE`. If not set, the default is `openai`.

**Ensure the default `LLM_SERVICE` is configured or the call to that service will fail!**

## Updating the application

Reimport the app from the CLI `sermas-cli app save /apps/myapp`

Reloading the page at [http://localhost:8080](http://localhost:8080) you can start using the configured model.


