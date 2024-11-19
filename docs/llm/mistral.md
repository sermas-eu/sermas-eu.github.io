---
sidebar_position: 0.00018
---

# Mistral

Mistral has an offering for chat inference and embedding

Check Mistral docs to [obtain an api key](https://console.mistral.ai/api-keys/)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=mistral

# MISTRAL_API_KEY Mistral api key
MISTRAL_API_KEY=''

# MISTRAL_EMBEDDINGS_MODEL OpenAi Embedding model
MISTRAL_EMBEDDINGS_MODEL='mistral-embed'

# MISTRAL_CHAT_MODELS Supported chat models from OpenAI. Leave empty to allow all available.
MISTRAL_CHAT_MODELS=
'open-mistral-nemo,open-mistral-7b,open-mixtral-8x7b,open-mixtral-8x22b,mistral-large-latest'

# MISTRAL_MODEL Default OpenAI model used as fallback
MISTRAL_MODEL='open-mistral-nemo'

```
