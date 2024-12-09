---
sidebar_label: Tools
sidebar_position: 0.000020
---

# Introduction

LLM Tools in SERMAS are used to trigger specific actions from user requests. 

As an example we have tool called `request for appointment`. 

If the user ask `I want an appointment` the tool will trigger, creating an internal tool-related event that can be used by other connect systems.

Considering a third-party service connected to the Toolkit API, receiving such event would trigger an agent response offering a list of calendar availability.

## Tools repositories

Tools are grouped by repositories, an aggregation that allow to apply logical operations to control availability of certain tools during an interaction. 

A repository is composed of the following fields

- `appId`	_string_ reference to the application
- `sessionId`	_string_ Track the interaction session, if available
- `repositoryId`	_string_ Unique tools repository ID
- `options` Tool repository options dictionary, with the following properties
  - `triggerOnce`	_boolean_ Trigger one of the tools in the list once, then remove the tools. Useful to offer a list of options and have on selcted.
  - `exclusive`	_boolean_ Alter the normal chat flow, assuming one of the available tools will provide an answer.

- `tools`	Tools list


### Tools granularity

Tools can be enabled at application level or at session level.

- **Application level** tools can trigger anytime during the interaction.
- **Session level** tools can be created, updated or removed during a session, creating more flexibility during the user interaction.

## Tool configuration

Following the SERMAS CLI structure to configure an application, create a `tools.yaml` file to create your tools.

**Note** Refer to the [OpenAPI model (local link)](http://localhost:8080/api/swagger#model-AppToolsDTO) or [source code](https://github.com/search?q=repo%3Asermas-eu%2Fsermas-api+AppToolsDTO+path%3A%2F%5Eapps%5C%2Fplatform%5C%2Fsrc%5C%2Fapp%5C%2F%2F&type=code) for the full model definition.

```yaml
 - name: request-for-appointment
   description: User need an appointment
   returnDirect: true
   skipResponse: true
```

The field for a tool are as follow

- `name` tool name, used as reference when the tool trigger
- `description` additional context used to better match the tool from user message
- `schema` a list of parameters to extract from the user context. Described in detail later.
- `request` configure an HTTP request when a tool trigger, detailed later
- `url` API url to call on tool match, defaults to unauthenticated POST if no `request`  configuration are provided.
- `emitter` emit an event on the broker, in the form `resource.scope`. 

### Tools Parameters (schema)

The `schema` field provides a list of parameters to infer from the user messages. Tools are inferred from the chat history, thus can collect different contextual information from the context.

**Note** Parameters collected from the chat history are subject to allucinations and should not be used without proper validation.

- `parameter` name of the parameter
- `type` data type of the parameter, possible options are `string`, `number`, `boolean` and `object` (as key-value dictionary)
- `description` description of the parameter (currently not used for inference)
- `ignore` indicate if the parameter should be ignored from inference. This is to be used in conjuction with `value` to provide precalculated value
- `value` A static value for this parameter. This is useful to popoulate values that are available when creating a session tool.

### Request configuration

To trigger an HTTP request when a tool matches, the `url` and `request` field should be configured.

`url` is an http endpoint to call. By default a POST request with the tool triggering details will be sent.

`request` can provide those details

- `description` Provide details to trigger an HTTP API call on tool match
- `auth`	Supported options are `basic`, `bearer` and `module`.  Defaults to module if not specified. 

- `basic`	an object with `username` and `password` fields
- `bearer`	and object with the following fields
  - `clientType` Supported options are "client_credentials" or "password".
  - `clientId` Client ID. Required for client type "client_credentials"
  - `clientSecret` Client secret. Required for client type "client_credentials"
  - `username`  Required for client type "password"
  - `password`  Required for client type "password"
  - `audience` token audience
  - `tokenUrl` URL to call to retrieve the access token
  - `refreshUrl` URL to call to refresh the token before expiration

- `moduleId` Reference to one of the modules (or clients) ids available in the app
- `headers`	a key-value dictionary with additional headers

## Tool matching event

When a tool trigger, an event is generated with the following payload

- `appId` ID of the application
- `sessionId` ID of the session
- `repositoryId` ID of the repository
- `source` one of message, ui, task, agent
- `name` name of the tool
- `schema` schema of the tool
- `values` values extracted from the schema and inferred by the LLM
