---
sidebar_position: 0.00022
---

# Azure TTS

Azure offers different [TTS models](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech)

To get started go to the [Azure portal](https://ms.portal.azure.com/) and activate the service

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
TTS_SERVICE=azure
# Review path based on setup
AZURE_KEY=<key>
AZURE_REGION=<region>
```

## List of supported models

See the [voices gallery](https://speech.microsoft.com/portal/66101536a9a84225af598690505f3ce6/voicegallery) to select model