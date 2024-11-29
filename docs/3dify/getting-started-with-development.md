---
sidebar_position: 0.0008
---


# Getting Started with Development

## Prerequisites
Follow the same instruction as specified in [Run Application Locally](run-application-locally).

## Launch

Get the code at the repo [https://github.com/isislab-unisa/3dify/tree/main](https://github.com/isislab-unisa/3dify/tree/main) for the version with authentication, otherwise get the code from [this](https://github.com/isislab-unisa/3dify/blob/main-no-auth/docker-compose.yml) repo.

Launch all the containers required to run the application in **development mode**:

```bash
docker compose -f dev.docker-compose.yml up -d
```

Monitor the application while developing to see your changes reflecting automatically:

```bash
docker compose -f dev.docker-compose.yml watch
```

Stop all the containers of the application:

```bash
docker compose -f dev.docker-compose.yml down
```

If the application is correctly deployed, it can be run by default at the link [http://localhost:3000/](http://localhost:3000/).
