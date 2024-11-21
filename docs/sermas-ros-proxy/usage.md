---
sidebar_position: 1
---

# Usage

The SERMAS ROS Proxy is a ROS2 (https://ros.org) node that allow the communication between the SERMAS toolkit and a ROS environment.

## Get it
```sh
git clone https://github.com/sermas-eu/sermas-ros-proxy
cd sermas-ros-proxy
```

In order to make the service able to communicate with the SERMAS toolkit, 
the following environment variables must be configured (found in `docker-compose.yaml`):

`SERMAS_TOOLKIT_URL` url of the SERMAS toolkit API server\
`APP_ID` the ID of the application\
`CLIENT_ID` the name of the application module (see `customize-application`)\
`CLIENT_SECRET` the module secret

## Start it
To start the ROS proxy with docker compose, run:

```sh
docker compose up
```

