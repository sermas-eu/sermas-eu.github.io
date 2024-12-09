---
sidebar_position: 0.0001
---

# Introduction
It is possible to customize the avatar by creating a new model and loading it into SERMAS.

### Create a model
We provide two options to create a personalized avatar model compatible with the SERMAS toolkit:

- [ReadyPlayerMe](./rpm-models)
- [3Dify](./3dify/introduction)

A third options might be to build the model from scratch.
The current version of Avatar uses readyplayer.me (RPM) models to render the avatar.
RPM follow some rules for their avatar generator that if followed in the design of a custom avatar would result in a compatible model for the SERMAS Toolkit. 
The two main references are:
- [Body skeleton](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/full-body-avatars)
- [Face mesh targets](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/apple-arkit)

As long that face and skeleton fit the naming conventions and design principle described in the pages above it should work out of the box. 
A suggestion for designing a new avatar could be to start from a RPM model and customize it. 

The output format should by in GLB format. Also take care to keep the weight of the model low (eg. < 50MB) to ensure loading and rendering is fast on most mobile phones. 

A nice tool to try the resulting model is https://gltf-viewer.donmccurdy.com/  


### Load the model

The GLB file must be placed in a folder under `repository/avatars`, followed by a `.yaml` file describing the content (see [repository documentation](/docs/applications/cli-handling#avatars)). 
Here an example of the resulting folder structure:

```
├── avatars
│   ├── marco
│   │   ├── avatar.glb
│   │   └── avatar.glb.yaml
```
Then update the application with the new model (see [application creation](/docs/getting-started/create-application#create-an-application-template)).