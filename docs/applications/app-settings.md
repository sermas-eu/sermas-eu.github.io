---
sidebar_position: 0.004
---

# Settings

Application settings are used as defaults in new interactions. 

Depending on the setup, users may be allowed to change some of those settings during the interaction to customize their experience.

The application `settings` field offers those options:

```yaml

# Users must login to use the application
login: true

# An id from repository.avatar
avatar: dw_official

# An id from repository.background
background: office

# language used in the interaction
language: en-GB

# skip welcome message on interaction start
skipWelcomeMessage: true

# disable generated responses on tools matching
skipToolResponse: true

# define a prompt for the application, used as main context for the interaction
prompt:
  text: <application context prompt>

# customize the kiosk UI colors, CSS compatible syntax
theme:
  primaryBgColor: "purple"
  primaryTextColor: "black"
  secondaryBgColor: "#CCCCCC"
  secondaryTextColor: "white"

# use a specific LLM for a task, see LLM configuration for more details
llm:
  chat: openai/gpt-4o
  tools: openai/gpt-4o
  sentiment: openai/gpt-4o-mini
  tasks: openai/gpt-4o-mini
  intent: openai/gpt-4o
  translation: openai/gpt-4o-mini  
```