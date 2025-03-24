---
sidebar_position: 0.00018
---

# GCP Mistral

Google Cloud Processing service Vertex AI offers Mistral models.

Check [here for more information](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/mistral?hl=it)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE='gcp_mistral'

# GOOGLE_APPLICATION_CREDENTIALS Path pointing to the Google service account certificate in JSON format
GOOGLE_APPLICATION_CREDENTIALS=''

# GCP_MISTRAL_MODEL GCP Mistral selected model
GCP_MISTRAL_MODEL='mistral-small-2503'

# GCP_MISTRAL_CHAT_MODELS Supported chat models from OpenAI. Leave empty to allow all available.
GCP_MISTRAL_CHAT_MODELS='mistral-small-2503'

# GCP_MISTRAL_MODEL GCP Mistral selected model
GCP_MISTRAL_MODEL='mistral-small-2503'

# GCP_MISTRAL_REGION GCP region for Mistral
GCP_MISTRAL_REGION='europe-west1'

# GCP_MISTRAL_PROJECT GCP project ID for Mistral
GCP_MISTRAL_PROJECT=''
```
