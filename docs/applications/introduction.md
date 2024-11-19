---
sidebar_position: 0.002
---

# Introduction

An application (or app) wraps togheter the configuration for different components available in the SERMAS Toolkit.

## Application details

An application is composed of base information such as

- `appId` A unique identifier
- `name` The name for the app
- `description` Description text for the app
- `public` flag if the application can be listed (without authorization)

## Modules

Defines the modules the application can access within the Toolkit.

Each module definition will enable client credentials to be used for JWT access token retrieval. 

The client will use the `moduleId` as client id and `secret` as client secret. If `secret` is not defined, it will be generated randomly.

The client can then be used to access the Toolkit API to interact with the modules specified in the `supports` list.

An example of a module definition follow:

```yaml
- moduleId: <id of the module>
  secret: <module secret>
  supports:
  - dialogue
  - detection
  - ui
  - session
  - platform
```

### Platform-level modules

While some modules are natively part of the Toolkit, developers may add new modules by providing the details in the `config` field of the definition. 

This will lookup and proxy requests toward an OpenAPI / AsyncAPI service and expose the signature as part of the main Toolkit API.


## Repository

The repository configuration collects configuration defining specific assetts to be used by the application 

### Avatars

Define an avatar, which is a virtual representation of an Agent.

The relevant fields follows:

- `id` Unique id of the avatar, used to select it in the settings
- `name` Friendly name of the avatar
- `path` 3D object asset path (suppoerted format are `glb` or `fbx`), loaded via the assets API e.g. `avatars/avatar1.glb`
- `gender`: M or F, used in answer generation and for TTS model selection.
- `prompt` Dedicated prompt used to define, characterize or constrain the avatar personality
- `camera`, `cameraMobile` defines the camera position in the kiosk to position the avatar.

### Backgrounds

Provides a background image in the kiosk.

- `id` background identifier
- `path` relative path to the assets API
- `name` Friendly name of the backgroun

### Documents

List of documents to import in the RAG pipeline. The Toolkit supports ***only text files***. 

The text files are vectorized following three strategies that can be specified in the `metadata.options.parser` field.

- `sentence` (default) chunck the file text by sentences and handle them as documents.
- `single-line` assume each single line (`\n`) in a text file is a document
- `double-line` assume each double line (`\n\n`) in a text file is a document


## Clients

Clients allow third-party access to the API. Each client defines a `clientId` and `secret` used to obtain a temporary JWT token.

The `permissions` defines the list of `<resource>.<scope>` that client is allowed to access. 

As example, `dialogue` or `dialogue.*` allow to access all the dialoge related functionalities. 

The list of resources and scopes can be found in the API at
`http://localhost:8080/api/swagger#/PLATFORM/getSettings` assuming  you have a local instance running.

Otherwise you can derive the list from the [topics in the source code](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.topic.ts) (the pattern is `app/:appId/<resource>/<scope>`)