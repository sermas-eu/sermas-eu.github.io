---
sidebar_position: 0.0001
---

# Introduction


### Create a model

It is possible to customize the avatar by creating a new model and load it into the SERMAS UI.
Choose one of these options to create a personalized avatar model:

- [ReadyPlayerMe](rpm-models)
- [3Dify](3Dify)

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