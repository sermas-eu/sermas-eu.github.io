---
sidebar_position: 0.002
---

# Introduction

SERMAS deployment is composed of different services. The main reference for the deployment is the [sermas-toolkit-api repository](https://github.com/sermas-eu/sermas-toolkit-api).

It's a docker compose setup with pre-defined defaults to ease the testing of the system on a single machine.

## Internal service communication
The SERMAS services need to communicate among them. If you use the aforementioned docker compose setup, 
a custom docker network named `sermas_dev` is created and used by all services, 
that will therefore be able to reach each others using the default URLs. 
To expose this setup on a public URL you will only need some minor changes (see below).

The more you depart from the development docker compose setup (for instance deploying the services in 
different machines or using kubernetes), the more you will need to provide the correct urls to each service 
(using environment variables), and ensure the connectivity among them. 

In the most agnostic configuration, you will have a separate (possibly public) host for each service and you will need
to properly configure every other service that interact with it.

## Exposing the development setup
Assuming that you have:
- A server running the default docker compose setup, reachable from the internet on ports 80 and 443
- A public domain pointing to that server, for example `mysermas.com`
- A Letsencrypt TLS setup, or TLS/SSL server certificates

Then you need to:

### Configure Caddy proxy
To let Caddy proxy handle the SSL certificates and the traffic pointed at your domain,
add the following block at the end of your `Caddyfile`:
```
# Public endpoints
http://mysermas.com, https://mysermas.com {

  log {
    output stdout
    level debug
  }

  route /mqtt* {
    uri strip_prefix /mqtt
    reverse_proxy mqtt:1884
  }

  route /.well-known/sermas.json {
    rewrite /.well-known/sermas.json /api/.well-known/sermas.json
  }

  route /keycloak* {
    reverse_proxy keycloak:8080
  }

  route /api* {
    reverse_proxy api:3000
  }
  
  route /* {
    reverse_proxy kiosk:3000
  }

}
```
> NOTE: Depending on your TLS setup, you might need to specify also a [tls directive](https://caddyserver.com/docs/caddyfile/directives/tls). 

### Expose ports 80 and 443
Add the following lines to the `proxy` service of your `docker-compose.yml` file,
so that the traffic entering ports 80 and 443 reaches Caddy:
```yaml
  proxy:
    # ...
    ports:
      - 8080:8080
      - 80:80
      - 443:443
```

### Persist Proxy Data
If you are using *Letsencrypt* or another similar services, you need to persist
the SSL server certificate between container restarts. 
In order to do so, add the following volume to the `proxy` service of your `docker-compose.yml` file:
```yaml
  proxy:
    # ...
    volumes:
      - ./data/caddy:/data
```

### Update URLs
Add the following lines to the `api` and `kiosk` services:
```yaml
  api:
    # ...
    environment:
      - ENV_PATH=/config/.env
      - CONFIG_BASEPATH=/config
      - API_URL=https://mysermas.com/api

  kiosk:
    # ...
    environment:
      - PUBLIC_TOOLKIT_URL=https://mysermas.com
```

## Advanced deployment configuration
Follow this section if you deploy the SERMAS services under URLs different from the default ones.

### API configuration
Read here for the [API env configurations](./api.md) options.

### Kiosk configuration

The Kiosk is a browser-based web application. It uses camera and video access, thus it require a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) to work.

By default, it works on `localhost:8080`. `localhost` is considered a secure context mostly for development activities.

To serve the kiosk on the network or over a website, we need to add some additional configuration.

Follow the configuration needed to serve from an IP in the local network. We will use `sermas.lan` as a placeholder (but could be an IP).

- `PRIVATE_API_BASE_URL=http://sermas.lan:8080/api`

- `PUBLIC_API_BASE_URL=http://sermas.lan:8080/api`
- `PUBLIC_AUTH_URL=http://sermas.lan:8080/keycloak`

- `PUBLIC_MQTT_BASE_URL=sermas.lan:8080`
- `PUBLIC_TOOLKIT_URL=http://sermas.lan:8080`

**Note** The kiosk on a local network should still run in `localhost` to ensure microphone and camera access. Alternatively, the system should be exposed on the web over https.


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