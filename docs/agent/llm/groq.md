---
sidebar_position: 0.00014
---

# Groq

Groq offers probably the fastest LLM inference service as of writing. Unfortunately, the billing settings are not yet avail and the free tier is limited.

Check Groq docs to [obtain an api key](https://console.groq.com/keys)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=groq

# GROQ_API_KEY Provide Groq api key for chat
GROQ_API_KEY='api key'

## the following are the defaults, edit if needed

# GROQ_MODEL Default Groq model used as fallback
GROQ_MODEL='mixtral-8x7b-32768'

# GROQ_CHAT_MODELS Supported chat models from Groq. Leave empty to allow all available.
GROQ_CHAT_MODELS='gemma-7b-it,gemma2-9b-it,llama2-70b-4096,llama3-70b-8192,llama3-8b-8192,mixtral-8x7b-32768,llama3-groq-8b-8192-tool-use-preview,llama3-groq-70b-8192-tool-use-preview'

```
