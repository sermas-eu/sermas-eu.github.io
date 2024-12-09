---
sidebar_position: 0.00022
---

# OpenAI

OpenAI offers chat completions and embeddings suport. Additionaly it covers STT/TTS and real time interaction API.

OpenAI is configured as default provider. The minimum setup required is an api key.

To obtain an OpenAI apikey see [the OpenAI docs](https://platform.openai.com/docs/quickstart)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=openai
LLM_EMBEDDINGS_SERVICE=openai

OPENAI_API_KEY='api key'

##
# The following are already set as defaults, skip if you do not want to change them.
##

# Used for embeddings extraction 
OPENAI_EMBEDDINGS_MODEL='text-embedding-3-small'

# Supported chat models from OpenAI. Leave empty to allow all available.
OPENAI_CHAT_MODELS='gpt-4o,gpt-4o-mini,gpt-4,gpt-4-turbo,gpt-3.5-turbo,gpt-3.5-turbo-16k,o1-preview,o1-mini',

# OPENAI_MODEL Default OpenAI model used as fallback if not specified otherwise for a tag (see below)
OPENAI_MODEL='gpt-4o'

```
