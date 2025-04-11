---
sidebar_position: 0.00022
---

# OpenAI TTS

OpenAI offers chat completions and embeddings suport. Additionaly it covers STT/TTS and real time interaction API.

To obtain an OpenAI apikey see [the OpenAI docs](https://platform.openai.com/docs/quickstart)

## Configure the Toolkit API

Locate the file `./config/api/.env` and add the following configurations

```ini
TTS_SERVICE=openai
OPENAI_API_KEY='api key'
```

## List of supported models

- [TTS-1](https://platform.openai.com/docs/models/tts-1)
- [TTS-1-HD](https://platform.openai.com/docs/models/tts-1-hd)
- [gpt-4o-mini-tts](https://platform.openai.com/docs/models/gpt-4o-mini-tts)

Currently streaming models are not supported.