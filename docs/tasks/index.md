---
sidebar_label: Tasks
sidebar_position: 0.000022
---

# Introduction

LLM based tasks allow to create conversational flows to collect information from the user.

A task can be aborted by the user upon explicit request or by providing indication they want to leave the interaction context.

# Task definition

```yaml
appId: reference app ID
name: machine name of the task e.g. take-appointment
description: Textual description of the task
label: A label to show when provided as button via UI
hint: specific description or constraints to drive the proper completion of task eg. 
the user can take an appoitnment with offices handling finacial or shipping topics. Refuse other appointment. 

```

## Intents

Tasks are matched from the dialogue interactions via intent detection wiht LLM.

Providing a refined list of intents ensure the task is selected correctly in most cases.

The agent will also try to propose a task to the user based on the context and topic of the discussion.

```yaml
  intents:
  - name: financial-office-appointment
    description: an appointment on financial topics such as bank accounts, credits card
  - name: shipping-appointment
    description: appointment to manage shipment issues such as sending, receiving or missing packages

```

## Events

Events are triggered during the task execution and they could be one of the following

- `start` task starts
- `ongoing` task field is completed and the next one is going to be provided, if any
- `aborted` task aborted by the user or the system
- `completed` task correctly completed (all fields covered)

```yaml
  events:
    - type: completed

      # message the agent will say on event triggering
      message: all done!

      # an LLM cohmprensible condition to trigger the execution of the event. Fields values will be available and you can refer to them in the condition matching
      # example #1
      condition: if myfield is not empty and birthday is less than 150 years
      # example #2
      condition: based on the provided fields, user should be interested in talking with an operator

      # trigger another task or tool based on configuration
      trigger: 
      # task/ prefix will trigger a new task
      - name: task/take-appointment-with-john
      # tool/ prefix will trigger a tool, passing the task field values as tool values
      - name: tool/send-email
```
## Fields

Task collect information trough fields. Based on the field configuration the agent will ask for specific information to the user and process it accordingly.

Fields can be configured using those properties

`name` a name for the value e.g. fullname or address
`condition` evaluate a condition in the context of a task, if the condition is not met the field will be skipped. e.g. `reason is not empty`

### Field type

The `type` property allow to change the behavours of the agent collecting a value. Supported types are:

- `text` expect a textual input
- `eval` evaluate a condition based on the context
- `date` expect an interpretable date input
- `boolean` expect an explicit confirmation such as yes or no
- `select` expect the user to select one of the available 
- `external` delegate handling to an exernal integration

#### Eval example

Eval return a boolean value based on `prompt`. Placeholder available are `{history}` for the chat history and any field value in the task e.g. `{my-task-field}`

```yaml
  fields:
     - name: reason
      type: eval
      required: true
      prompt: |
        Extract the reason of the appointment for the user, based on the HISTORY messages.
        HISTORY: 
        {history}

    - name: service-type
      type: eval
      required: true
      prompt: | 
        Return the 'name' field of one of the following services, matching with the USER request:
        - { name: "Financial", description: "talk about money" }
        - { name: "Shipping", description: "about shipping" }
        - { name: "Support", description: "any other aspect" }
        - Altro
        USER: {reason}
```

#### Date example

The date type accept a date as provided by the user

```yaml
    - name: date
      condition: "service-type == 'Financial'"
      label: Provide your date of birth
      type: date
      required: true
      hint: |
        User should provide their date of birth. Ensure it's complete and reasonable (e.g. not earlier than 1940)
 ```

### Select example

Used to ask a direct question to the user, the user must choose one of the options

```yaml
- name: confirm
  type: select
  label: Which color
  required: true
  options:
    - label: Red
      value: dark-red
    - label: Blue
      value: light-blue
    - label: Yellow
      value: yellow
```