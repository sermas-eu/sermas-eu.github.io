---
sidebar_position: 0.00016
---

# Hugging Face

Hugging Face offers a Pro subscription for LLM inference and custom hardware for enterprise usage

Check Hugging Face docs to [create a token](https://huggingface.co/docs/hub/en/security-tokens)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=huggingface

# HUGGINGFACE_API_KEY Provide a Hugging Face token. 
# Note: HF_TOKEN will be used as fallback, if set
HUGGINGFACE_API_KEY='HF token'
# HUGGINGFACE_CHAT_MODELS Supported chat models from Hugging Face. Leave empty to allow any.
# HUGGINGFACE_CHAT_MODELS=''

# HUGGINGFACE_BASEURL Base URL for Hugging Face inference service
# Set this for custom inference endpoint or to point to completion compatible backend such as vLLM
# HUGGINGFACE_BASEURL=''
```

Note that huggingface models have an addtional / in the name.
A format like `huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct` is correct.
