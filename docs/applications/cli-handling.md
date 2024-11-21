---
sidebar_position: 0.006
---

# CLI management

The SERMAS CLI offer a simplified method to handle an application.

The CLI takes care of syncing with the API based on the directory structure and can be used to manage and update common parts of the application.

An application folder is composed of differents parts and we are going to cover them in this page

Definition can be in `JSON` (.json) or `YAML` (.yaml, .yml)

## app.yaml

The application definition is the core of a SERMAS application

```yaml
# the app name
name: My app

# provides a friendly name for the applicaiton
description: My cool assistant

# indicate if the app should be listed to unautheticated users
public: true

```

### modules.yaml

A list of modules with enabled permission to access specific resources. Each module will create a client with credentials to obtaing access tokens.

```yaml
- moduleId: avatar
  # secret will be used as client secret. 
  # Leave empty to generate on.
  secret: null
  
  # List of supported modules.
  # Each module has a set of permissions applied to its client.

  # The full list of available permissions is available at
  # http://localhost:8080/api/swagger#/PLATFORM/getSettings

  # Definition supports dotted notation eg. `detection.user` or `detection.*` which is (same as just `detection`)
  supports:
    - dialogue
    - detection
    - ui
    - session
    - platform

  # additional module-specific configuration, free-form key-value store
  config: {}
  ```

### settings.yaml

Settings allows to configure some aspects of the applicaitons

```yaml


# requires login
# if set to true, the application will require the user to login
login: false

# id of the default avatar
# taken from repository -> avatars -> id
avatar: anna

# background for the avatar
# taken from repository -> backgrounds -> id
background: milkyway

# language of the avatar, this may depend on the TTS/STT choosen. 
# It will be also used to translate conversation as needed
language: en-GB

# LLM provider and models for each functionality
llm:
  chat: openai/gpt-4o
  tools: openai/gpt-4o
  sentiment: openai/gpt-4o-mini
  tasks: openai/gpt-4o-mini
  intent: openai/gpt-4o
  translation: openai/gpt-4o-mini

# default avatar prompt, this will be used as baseline in conversations.
# This prompt defines the overall direction of the conversation along with the avatar specific prompt
prompt:
  text: >-
    You are a proven chef helping users cook delicious and healthly meals.
```

## Repository

The CLI will scan for assets to be uploaded along with configurations.

To add additional metadata to an asset, use the pattern `<filename.ext>.[json|yaml]` or `<filename>.[json|yaml]`. 
An example

```sh
# Asset file
repository/avatar/myavatar.glb

# Matching metadata file(s). Both .json and .yaml extensions works
repository/avatar/myavatar.glb.yaml
repository/avatar/myavatar.yaml

```

An example structure using metadata follows

```sh
repository
├── avatars
│   └── anna.yaml
├── backgrounds
│   ├── milkyway.jpg
│   └── milkyway.jpg.yaml # matching metadata for milkyway.jpg
├── documents 
│   ├── about.txt
│   ├── about.yaml # matching metadata for about.txt
│   ├── toolkit.txt
│   └── toolkit.yaml
└── robots
    └── my-agv.yaml
```


### avatars

Define avatars to be used in conversations. 

```yaml
# path to the asset, will be updated with a matching *.glb if found locally
path: joe/654cc759f1a79ed2ebab0207.glb
license: https://creativecommons.org/licenses/by-nc/4.0/
# This parameter is required to correctly select a TTS engine, unfortunately those are in general binary!
gender: M
# Avatar full name
name: Antoine
# Prompt to characterize the avatar personality, use it to refine the interaction capabilities of the avatar.
profile: Antoine is a chef specialized in French cusine.
```

### backgrounds

List of backgrounds used in the kisok presentation. It should have a size of about 1920x1280 in a web compatible format (eg. jpeg or png)

### documents

List of text documents to import as vectors. Those can be used to provide refined answers to the users leveraging on RAG (retrieve augmented generation)

### robots

Configuration to interface to a robot.

```yaml
# Name of the robot
name: My AGV
# URL to a video streaming source
videoUrl: http://robot.local:8099
# In case of an AGV we can show the area map from the kiosk
map:
  # URL of the map image
  imageUrl: http://robot.local/map.png
  # Size of the image
  width: 640
  height: 480
  # robot initial position
  originOffsetX: 10
  originOffsetY: 10
```

