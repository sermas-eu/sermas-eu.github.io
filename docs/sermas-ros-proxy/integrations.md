---
sidebar_position: 2
---

# Integrations

This guide explains how to integrate a robotic platform to the SERMAS toolkit.\
Existing integrations can be found inside the folder `ros_proxy/ros_proxy/integrations`.

## Add a new integration
The integration is a python class that inherit from the `IntegrationBaseClass` in `ros_proxy/ros_proxy/integrations/base_class.py`:

```
class IntegrationBaseClass(ABC):
  ...
  @abstractmethod
  def handle_sermas_message(self, msg):
    raise NotImplementedError()
```
The derived class must implement the `handle_sermas_message` method, which is called when a new message is received from the SERMAS toolkit (see the example below), for example:
```
class NewRobot(IntegrationBaseClass):
  def __init__(self, ros_node):
      super().__init__(ros_node, SERMAS_TOPIC)
  def handle_sermas_message(self, msg):
      ...
```
`SERMAS_TOPIC` is a string defining the topic the integration wants to send or receive messages on.\
Place the file containing the new implemented class in a folder under `ros_proxy/ros_proxy/integrations`.

## Load it
Each integration can be loaded by importing and adding them to the list in the `load_integrations` method, inside the `SermasRosProxy` class (`ros_proxy/ros_proxy/sermas_ros_proxy.py`).

## Test it
Compile and run the ROS proxy with:
```
docker compose build
docker compose up
```
> **_NOTE:_** in order to communicate, the ROS proxy must run in the same network with the same DOMAIN_ID of the robot environment

## Example of an integration
In this example the integration subscribes to the odometry topic of the robot and publish it on the `robotics/status` topic of the SERMAS toolkit.

```
class NewRobot(IntegrationBaseClass):
  def __init__(self, ros_node):
    super().__init__(ros_node, 'robotics/status')
    # subscribe to robot odometry topic
    self.ros_node.create_subscription(
        Odometry, '/odom', self.handle_ros_message, 10)

  def handle_mqtt_message(self, client, userdata, msg):
    # not listening for messages, just publishing
    pass

  def handle_ros_message(self, msg):
    # build the message
    d = { 
        "status": {
          "actualPosition": {
            "position": {
              "x": msg.pose.pose.position.x, "y": msg.pose.pose.position.y, "z": msg.pose.pose.position.z
              },
            "orientation": {
              "x": msg.pose.pose.orientation.x, "y": msg.pose.pose.orientation.y, "z": msg.pose.pose.orientation.z, "w": msg.pose.pose.orientation.w
              }
            },
          "velocity": {
            "linear": {
              "x": msg.twist.twist.linear.x, "y": msg.twist.twist.linear.y, "z": msg.twist.twist.linear.z
              },
            "angular": {
              "x": msg.twist.twist.angular.x, "y": msg.twist.twist.angular.y, "z": msg.twist.twist.angular.z
              }
            }
          }
        }
    # send the message to SERMAS toolkit
    self.mqtt_client.publish(self.sermas_topic, d)
```