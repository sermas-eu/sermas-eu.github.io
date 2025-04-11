---
sidebar_position: 0.00022
---

# Google STT

Google [STT service](https://cloud.google.com/speech-to-text?hl=en) has wide support of languages and features.

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
STT_SERVICE=google
# Review path based on setup
GOOGLE_APPLICATION_CREDENTIALS=/data/google_apis.json
```
