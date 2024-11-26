---
sidebar_label: Tasks
sidebar_position: 0.000022
---

# Introduction

LLM based tasks allow to create conversational flows to collect information from the user.


## Task definition

```yaml
appId: reference app ID
name: machine name of the task e.g. take-appointment
description: Textual description of the task
label: A label to show when provided as button via UI
hint: specific description or constraints to drive the proper completion of task eg. 
the user can take an appoitnment with offices handling finacial or shipping topics. Refuse other appointment. 

```

### Intents

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

### Events

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

## Example

```yaml
- appId: poa
  name: poa-take-appointment
  description: Prendere appuntamento con un consulente finanziario
  label: Appuntamento con un consulente finanziario
  hint: |
    Questo task permette di selezionare una data in base alle disponibilita' in calendario di un consulente finanziaro. 
    Al termine l'utente riceve un codice per l'appuntamento. In caso non si possible fissare l'appuntamento, chiedi all'utente se vuole un ticket per lo sportello.

  intents:
  - name: conto-corrente
    description: richieste di apertura, chiusura o risoluzione problemi su conti corrente o bancoposta
  - name: mutuo
    description: richiesta di apertura mutuo
  - name: consultant-appointment
    description: richiesta esplicita di appuntamento con consulente finanziario

  events:
    - type: completed
      message: Il tuo appuntamento e' stato registrato.
      # condition: service-type IS 'Finanziario' AND confirm IS true AND date IS valid date
      condition: service-type IS 'Finanziario' AND date IS a readable date
    - type: completed
      message: Per completare la tua richiesta parla con un operatore allo sportello
      condition: service-type NOT 'Finanziario' OR date IS NOT a readable date
      # condition: service-type NOT 'Finanziario' OR confirm IS false OR date IS NOT valid date
      trigger: 
      - name: task/poa-get-ticket
 
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
        Return the 'name' field of one of SERVICES, matching with the USER request:
        - { name: "Finanziario", description: "richieste relative a mutui, conti correnti, bancoposta,finanziamenti e appuntamento con consulente" }
        - { name: "Telefonia", description: "ricariche telefoniche e gestione sim" }
        - { name: "Spedizioni", description: "spedizioni e gestione pacchi o corrispondenza" }
        - Altro
        USER: {reason}

    - name: date
      condition: "service-type == 'Finanziario'"
      label: Seleziona una data dal calendario
      type: external
      required: true
      handler: select-calendar
      hint: |
        Offre una lista di date dal calendario in base alla disponibilita' del consulente. 
        L'utente non puo' chiedere date diverse e non e' possibile offrire altre date.
 
    # - name: confirm
    #   condition: "service-type == 'Finanziario' and date is a valid date"
    #   type: boolean
    #   label: Vuoi confermare ?
    #   required: true
    #   options:
    #     - label: Confermo
    #       value: true
    #     - label: 'Cancella'
    #       value: false
 
```