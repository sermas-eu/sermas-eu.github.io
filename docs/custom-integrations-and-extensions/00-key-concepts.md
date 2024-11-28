---
sidebar_position: 0.00001
---

# Key concepts

The SERMAS Toolkit was developed so that you can set up your own application with no code.

Still, you may want to use the Toolkit to build something different from a standard SERMAS app, 
or integrate some of its functionalities in your own services.

This section will get you started integrating SERMAS into your own software with the maximum flexibility.

It is also an important reading if you wish to better understand SERMAS internals.

## Communicating with SERMAS platform

The communication with SERMAS services is done in two ways:
- the [RESTful API](./restful-api), used to 
- the [MQTT broker](./mqtt-broker), where every platform event is published (user creation, chat messages, etc.)

These channels support different functionalities XXX. Depending on your needs, you may want to connect
to just one or both channels.

## Developer tools and SDKs

To help you integrate with SERMAS APIs, a few tools are available:

- [SERMAS API Client](https://github.com/sermas-eu/sermas-api-client): a TypeScript client to the RESTful API. It can be used both from the front-end and from the back-end. It is the base of all subsequent TypeScript tools.
- [SERMAS Toolkit Node Library](sermas-toolkit-node-library): a npm package based on the client with a few additional abstractions.


