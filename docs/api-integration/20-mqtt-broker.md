---
sidebar_position: 0.00020
---

# MQTT Broker

The SERMAS platform is connected to an MQTT broker that act as a BUS.

Every platform event results in a message published on an MQTT topic. To integrate with the SERMAS platform seamlessly, you must subscribe to the proper topics (and have the relative access rights).

A mapping of source scopes and relative topics can be found on [sermas.topic.ts](https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.topic.ts)

The MQTT broker endpoint is reachable at http://localhost:8080/mqtt after starting the platform.

> NOTE: All examples here are in Python using the `paho-mqtt` package. Check the SEMAS API Client for a TypeScript implementation.

## Authentication

You will need a valid authentication token to connect to the MQTT broker (see [RESTful API](restful-api)).
The MQTT password is just a placeholder: any non-empty string will work.

```python
import os
import json
import ssl
import uuid
import paho.mqtt.client as mqtt
import paho.mqtt.subscribeoptions

app_id = 'myapp'
client_id = 'my-app-client'
mqtt_client_id = str(uuid.uuid4())  # Random MQTT client ID

if os.getenv('ENV') == 'development':
    client = mqtt.Client(
      client_id=mqtt_client_id,
      callback_api_version=mqtt.CallbackAPIVersion.VERSION1
    )
else: 
    client = mqtt.Client(
      client_id=mqtt_client_id,
      transport='websockets',
      callback_api_version=mqtt.CallbackAPIVersion.VERSION1
    )
    ssl_context = ssl.create_default_context()
    client.tls_set_context(ssl_context)

token = 'abc'  # Get a JWT from the RESTful API
client.username_pw_set(username=token, password='sermas')

def on_message(msg):
	print(f'Received message {msg}')

client.on_message = on_message

url = 'http://localhost:8080/mqtt'
port = 8080
self.connect(url, port)

client.loop_start()  # Start message loop

# Subscribe to a topic
subscribe_options = paho.mqtt.subscribeoptions.SubscribeOptions(qos=1, noLocal=True)
topic = 'performance'
client.subscribe(f'app/{app_id}/{topic}', options=options)

# Send a message
message = {
	'appId': app_id,
	'clientId': client_id,
	'randomInfo': 'All is OK', 
}
topic = 'ui/status'
client.send(f'app/{app_id}/{topic}', json.dumps(message))
``` 


