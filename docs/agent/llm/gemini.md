---
sidebar_position: 0.00012
---

# Gemini

Gemini offers a simplified access to the LLM offering by Google.

Check Gemini docs to [obtain an api key](https://ai.google.dev/gemini-api/docs/api-key)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=gemini
LLM_EMBEDDINGS_SERVICE=gemini

# GEMINI_API_KEY Provide a Google Gemini api key for chat and embedding services
GEMINI_API_KEY='api key'
# GEMINI_EMBEDDINGS_MODEL Supported embedding models from Google Gemini. Leave empty to allow all available.
GEMINI_EMBEDDINGS_MODEL='text-embedding-004'

# GEMINI_CHAT_MODELS Supported chat models from Google Gemini. Leave empty to allow all available.
GEMINI_CHAT_MODELS='gemini-1.0-pro,gemini-1.5-pro,gemini-1.5-flash-8b,gemini-1.5-flash'
```
