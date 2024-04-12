---
sidebar_position: 1
---

# Usage

The SERMAS ROS Proxy is a ROS2 (https://ros.org) node that allow the communication between the SERMAS toolkit and a ROS environment.
The proxy node exchanges and converts the messages between the SERMAS toolkit and the robot platform in a two-way communication flow: 
- subscribing to the SERMAS toolkit topics and publishing on the relative topic in ROS 
- subscribing to the ROS topics and publishing on the relative topics of the SERMAS toolkit 

To start it, clone the repository:

```sh
git clone https://github.com/sermas-eu/sermas-ros-proxy
cd sermas-ros-proxy
```

Edit the `docker-compose.yaml` file adding the APP ID and the client credentials and run it with:

```sh
docker compose up
```

