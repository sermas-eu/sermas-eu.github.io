---
sidebar_position: 0.00010
---

# RESTful API

The RESTful API is described according to the [OpenAPI specification](https://spec.openapis.org/oas/latest.html) (formerly known as Swagger specification).

Interactive documentation is included in the toolkit and it is browsable at http://localhost:8080/api/swagger after starting the SERMAS API.

The RESTful API allows you to retrieve all information and perform any operations on the platform, apart from receiving event notifications.

## Authentication

The authentication is token-based (JWT): all requests to restricted API endpoints must contain an `Authorization` header of the form `Bearer <TOKEN>`.

Two different methods exist for client (machine-to-machine) and user (human-to-machine) authentication.

> NOTE: All examples here are in Python using the `requests` package. Check the SEMAS API Client for TypeScript implementation.

### Client authentication

Call the `access_token` endpoint providing your `appId` and the client credentials.

Currently, client are configured as modules, in the `modules.yaml` settings file. The `supports` attribute
describes the client access permissions in form of source scopes.
```yaml
- moduleId: <client ID>
  secret: <client secret>
  supports:
  - dialogue
  - detection
  - ui
  - session
  - platform
```

New clients can also be created using the `api/platform/app/{appId}/client` endpoint.


```python
import datetime
import urllib.parse
import os
import requests

url = 'http://localhost:8080/api/platform/token/access_token'
payload = {
  'appId': 'my_app',
  'clientId': 'my-app-client',
  'clientSecret': 'secret-password', 	
}
verify_tls = True
    if os.getenv('ENV') == 'development' or url.startswith('http:'):
        verify_tls = False
now = datetime.datetime.now(datetime.timezone.utc)

response = requests.post(url, json=payload, verify=verify_tls)

response.raise_for_status()  # Throws exception in case of HTTP error
content = response.json()
access_token = content['access_token']
refresh_token = content['refresh_token']
now = datetime.datetime.now(datetime.timezone.utc)
token_expiration = now + datetime.timedelta(seconds=content['expires_in'])

# Set authorization header
headers = {
  'Authorization': f'Bearer {access_token}'
}

# Make an authenticated request
url = 'http://localhost:8080/api/auth/whoami'
response = requests.get(url, headers=headers)
# ...
``` 

After the `token_expiration` time has passed, the token must be renewed calling `api/platform/token/refresh_token`

### User authentication

When you need to model the direct interaction of a user with the platform use the `login` endpoint.

New users can be created using the `api/auth/admin/user` or `api/auth/admin/import` endpoints, or
with the CLI command `sermas-cli auth admin import <file>`.

```python

url = 'http://localhost:8080/api/auth/login'
now = datetime.datetime.now(datetime.timezone.utc)
payload = {
  'appId': 'my_app',
  'ts': now.isoformat(),
  'username': 'ENTER_USER',
  'password': 'ENTER_PASSWORD'
}

# ...
``` 

The refresh token endpoint for user authentication is `api/auth/refresh`.
