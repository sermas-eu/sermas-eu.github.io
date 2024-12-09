---
sidebar_position: 0.002
---

# Introduction

SERMAS deployment is composed of different services. The main reference for the deployment is the [sermas-toolkit-api repository](https://github.com/sermas-eu/sermas-toolkit-api).

It's a docker compose setup with pre-defined defaults to ease the testing of the system.

## Kiosk configuration

The Kiosk is a browser-based web application. It uses camera and video access thus it require a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) to work.

By default, it works on `localhost:8080`. `localhost` is considered a secure context mostly for development activities.

To serve the kiosk on the network or over a website, we need to add some additional configuration.

Follow the configuration needed to serve from an IP in the local network. We will use `sermas.lan` as a placeholder (but could be an IP).

- `PRIVATE_API_BASE_URL=http://sermas.lan:8080/api`

- `PUBLIC_API_BASE_URL=http://sermas.lan:8080/api`
- `PUBLIC_AUTH_URL=http://sermas.lan:8080/keycloak`

- `PUBLIC_MQTT_BASE_URL=sermas.lan:8080`
- `PUBLIC_TOOLKIT_URL=http://sermas.lan:8080`

**Note** The kiosk on a local network should still run in `localhost` to ensure microphone and camera access. Alternatively, the system should be exposed on the web over https.

## API configuration

Read here for the [API env configurations](./api.md) options


## Securing the setup

Some defaults are used to simplify the development but should be changed in real deployments.

### API

- `AUTH_KEYCLOAK_REALM` set the keycloack realm (default: sermas-local)
- `AUTH_KEYCLOAK_CLIENT_ID` set the keycloack client ID used for administrative purposes (default: platform)
- `AUTH_KEYCLOAK_SECRET` set the keycloack client password used for administrative purposes (default: platform)
- `ADMIN_SERVICE_ACCOUNT_USERNAME` set the keycloack admin user (default: admin)
- `ADMIN_SERVICE_ACCOUNT_PASSWORD` set the keycloack admin password (default: admin)

### KIOSK

- `PRIVATE_AUTH_CLIENT_ID=platform` should match API `AUTH_KEYCLOAK_CLIENT_ID`
- `PRIVATE_AUTH_CLIENT_SECRET=platform` should match API `AUTH_KEYCLOAK_CLIENT_SECRET` 
- `PUBLIC_AUTH_REALM` should match API `AUTH_KEYCLOAK_REALM`