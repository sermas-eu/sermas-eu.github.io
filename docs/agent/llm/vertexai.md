---
sidebar_position: 0.00018
---

# Vertex AI

Google Cloud Processing service Vertex AI offers several LLMs trained by google.

Check [here for more information](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models?hl=it)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE='vertexai'

# GOOGLE_APPLICATION_CREDENTIALS Path pointing to the Google service account certificate in JSON format
GOOGLE_APPLICATION_CREDENTIALS=''

# Or, alternatively, an API Key
VERTEXAI_API_KEY=''

# VERTEXAI_MODEL GCP Mistral selected model
VERTEXAI_MODEL='gemini-1.5-flash'

# MISTRAL_CHAT_MODELS Supported chat models from OpenAI. Leave empty to allow all available.
VERTEXAI_CHAT_MODELS='gemini-1.5-flash'

# VERTEXAI_MODEL GCP Vertex AI selected model
VERTEXAI_MODEL='gemini-1.5-flash'

# VERTEXAI_REGION GCP region for Vertex AI
VERTEXAI_REGION='europe-west1'

# VERTEXAI_PROJECT GCP project ID for Vertex AI
VERTEXAI_PROJECT=''
```
