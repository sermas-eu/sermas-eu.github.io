---
sidebar_position: 0.00022
---

# Google TTS

Google offers a wide set of [TTS models](https://cloud.google.com/text-to-speech/docs/list-voices-and-types)

Ensure to follow the [Google Cloud tutorial](https://cloud.google.com/text-to-speech/docs/before-you-begin) to obtain the client credentials

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
TTS_SERVICE=google
# Review path based on setup
GOOGLE_APPLICATION_CREDENTIALS=/data/google_apis.json
```

## List of supported models

See the page supported [voices and types](https://cloud.google.com/text-to-speech/docs/list-voices-and-types)