---
sidebar_position: 0.00022
---

# Azure STT

This section covers the configuration of [Azure STT](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-to-text) 

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
STT_SERVICE=azure
# Review path based on setup
AZURE_KEY=<key>
AZURE_REGION=<region>
```

