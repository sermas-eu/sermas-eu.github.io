---
sidebar_position: 0.00018
---

# Antrophic

Antrophic has an offering for chat inference

Check Antrophic docs to [obtain an api key](https://docs.anthropic.com/en/api/getting-started)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
LLM_SERVICE=antrophic

## defaults, add and edit if needed

# ANTROPHIC_API_KEY Antrophic api key
ANTROPHIC_API_KEY=''

# ANTROPHIC_MODEL Default Antrophic model used as fallback
ANTROPHIC_MODEL='claude-3-haiku-20240307'

# ANTROPHIC_MODELS Supported chat models from Antrophic. Leave empty to allow all available.
ANTROPHIC_CHAT_MODELS=
'claude-3-opus-20240229,claude-3-sonnet-20240229,claude-3-haiku-20240307'

```
