---
sidebar_position: 2
---

# Implementation
The 3DforXR platform is architected as a set of modular microservices deployed in Docker containers. These services are hosted within [up2metric](https://www.up2metric.com/)’s homelab cluster and are accessible via the [up2metric](https://www.up2metric.com/) modular Composer REST API. 

Composer is a REST API written in the GO programming language. It allows for the efficient scheduling and management of time-consuming tasks requiring demanding computational resources. 

The base URL for accessing the 3DforXR services is: https://3d4xr.composer.up2metric.com/api/. 

## Services
A list of services can be retrieved by sending a GET request to the following endpoint: https://3d4xr.composer.up2metric.com/api/services/. The response will provide details about the available services.

The following code presents an example of retrieving services using Python programming language.

```Python
import requests
import urllib.parse

username: str = ...
password: str = ...

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
services_url = urllib.parse.urljoin(base_url, "/api/services")

# Basic Auth
session = requests.Session()
session.auth = (username, password)

# Execute Request
response = session.get(services_url)

```

The details for each service can be retrieved by sending a GET request to the following endpoints:

| Service | URL                                                                                      |
|-----------|---------------------------------------------------------------------------------------------|
| Multiple Images to 3D (Photogrammetry)| https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images/ |
| Multiple Images to 3D (NeRF-based)| https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images-nerf2mesh/ |
| Single Image to 3D | https://3d4xr.composer.up2metric.com/api/services/3d4xr-single-image/ |
| Text to 3D | https://3d4xr.composer.up2metric.com/api/services/3d4xr-text-to-3d/ |

### Multiple Images to 3D (Photogrammetry)
A 3D model can be generated from multiple images by providing the following parameters in a `multipart/form-data` content-type.

| Parameter | Value type | Description | Default value |
|-----------|-----------|--------------|--------------|
| name | `string` | Name for the 3D model (required) | - |
| description | `string` | Description for the 3D model (optional) | - |
| file | `file` | `application/zip` file with at least 3 images (in `.png`, `.jpg` or `.jpeg` format) (required) | - |
| masks | `bool` | `[true, false]` If enabled, the background removal process is executed. (optional) | `true` |
| clean_mesh | `bool` | `[true, false]` Specifies whether to remove or not the disconnected components (artifacts) (optional) | `true` |

The example below demonstrates how to generate a 3D model utilizing the **Multiple Images to 3D (Photogrammetry)** service.

```Python
import requests
import urllib.parse

username: str = ...
password: str = ...

# Service name
service = "3d4xr-multiple-images"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Basic Auth
session = requests.Session()
session.auth = (username, password)

# Execute Request
payload = {
    "name": "Model name",
    "description": None,
    "masks": True,
    "clean_mesh": True,
}

files = [("file", ("input.zip", open("/path/to/input.zip", "rb"), "application/zip"))]

response = session.post(processes_url, data=payload, files=files)
```

### Multiple Images to 3D (NeRF-based)
A 3D model can be generated from multiple images by providing the following parameters in a `multipart/form-data` content-type.

| Parameter | Value type | Description | Default value |
|-----------|-----------|--------------|--------------|
| name | `string` | Name for the 3D model (required) | - |
| description | `string` | Description for the 3D model (optional) | - |
| file | `file` | `application/zip` file with at least 3 images (in `.png`, `.jpg` or `.jpeg` format) (required) | - |
| scene | `string` | `[single-object, ff, outdoor]` Specifies the type of the current scene: `single-object` (**recommended**): proper for small objects and circular views trajectory, `ff`: proper for forward-facing scenes, `outdoor`: proper for larger outdoor scenes (required) | - |
| clean_mesh | `bool` | `[true, false]` Specifies whether to remove or not the disconnected components (artifacts) (optional) | `true` |

The example below demonstrates how to generate a 3D model utilizing the **Multiple Images to 3D (NeRF-based)** service.

```Python
import typing
import requests
import urllib.parse

username: str = ...
password: str = ...

# Service name
service = "3d4xr-multiple-images-nerf2mesh"
scene: typing.Literal['single-object', 'outdoor', 'ff'] = 'single-object'

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Basic Auth
session = requests.Session()
session.auth = (username, password)

# Execute Request
payload = {
    "name": "Model name",
    "description": None,
    "scene": scene,
    "clean_mesh": True,
}

files = [("file", ("input.zip", open("/path/to/input.zip", "rb"), "application/zip"))]

response = session.post(processes_url, data=payload, files=files)
```

### Single Image to 3D
A 3D model can be generated from a single image by providing the following parameters in a `multipart/form-data` content-type.

| Parameter | Value type | Description | Default value |
|-----------|-----------|--------------|--------------|
| name | `string` | Name for the 3D model (required) | - |
| description | `string` | Description for the 3D model (optional) | - |
| file | `file` | Image file in `.png`, `.jpg`, `.jpeg`or `.webp` format (required) | - |
| algorithm | `string` | `[one2345, triposr]` Specifies the image to 3D algorithm (optional) | `triposr` |
| refine | `bool` | `[true, false]` If enabled, the texture quality of the model is refined. (optional) | `true` |

The example below demonstrates how to generate a 3D model utilizing the **Single Image to 3D** service.

```Python
import typing
import requests
import urllib.parse

username: str = ...
password: str = ...

# Service name
service = "3d4xr-single-image"
algorithm: typing.Literal["one2345", "triposr"] = "triposr"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Basic Auth
session = requests.Session()
session.auth = (username, password)

# Execute Request
payload = {
    "name": "Model name",
    "description": None,
    "refine": True,
    "algorithm": algorithm,
}

files = [("file", ("image.jpg", open("/path/to/image.jpg", "rb"), "image/jpeg"))]

response = session.post(processes_url, data=payload, files=files)
```

### Text to 3D
A 3D model can be generated from a text prompt by providing the following parameters in a `multipart/form-data` content-type.

| Parameter | Value type | Description | Default value |
|-----------|-----------|--------------|--------------|
| name | `string` | Name for the 3D model (required) | - |
| description | `string` | Description for the 3D model (optional) | - |
| file | `file` | A file containing the input text prompt in a `text/plain` content-type (required) | - |
| algorithm | `string` | `[one2345, triposr]` Specifies the image to 3D algorithm (optional) | `triposr` |
| refine | `bool` | `[true, false]` If enabled, the texture quality of the model is refined (optional) | `true` |

The example below demonstrates how to generate a 3D model utilizing the **Text to 3D** service.

```Python
import io
import typing
import requests
import urllib.parse

username: str = ...
password: str = ...

# Service name
service = "3d4xr-text-to-3d"
algorithm: typing.Literal["one2345", "triposr"] = "triposr"

# Dynamic prompt text
prompt_text = "Red Car"
file_like_object = io.BytesIO(prompt_text.encode("utf-8"))

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Basic Auth
session = requests.Session()
session.auth = (username, password)

# Execute Request
payload = {
    "name": "Model name",
    "description": None,
    "refine": True,
    "algorithm": algorithm,
}

files = [("file", ("prompt.txt", file_like_object, "text/plain"))]

response = session.post(processes_url, data=payload, files=files)
```

## Processes (3D Models)
A list of processes (3D models) can be retrieved for a specific service. A specific 3D model can be fetched by providing the process ID. 

Below is an example of how to retrieve a paginated list of completed processes for a given service.

```Python
import requests
import urllib.parse

username: str = "3d4xr-user"
password: str = "$3d4xr-2024!"

# Use "*" to retrieve all services
service = "*"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Query parameters
query_parameters: dict[str, str] = {
    "page": "1",
    "size": "10",
    "state": "complete",
    "order": "desc",
    "orderby": "name",
    "query": "Car",
}

# Basic Auth
session = requests.Session()
session.auth = (username, password)

response = session.get(processes_url, params=query_parameters)
```