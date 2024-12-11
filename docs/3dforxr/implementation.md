---
sidebar_position: 2
---

# Implementation
The 3DforXR platform is developed as a set of modular microservices deployed in Docker containers. These services are hosted within [up2metric](https://www.up2metric.com/)’s homelab cluster and are accessible via the [up2metric](https://www.up2metric.com/) modular Composer REST API. 

Composer is a REST API written in the GO programming language. It allows for the efficient scheduling and management of time-consuming tasks requiring demanding computational resources. 

The base URL for accessing the 3DforXR services is: https://3d4xr.composer.up2metric.com/api/. The API uses *Basic Authentication* to authorize users. When making requests, users must provide their `username` and `password`. These credentials should be included in the Authorization header of the request in the following format:

```bash
Authorization: Basic <base64-encoded-credentials>
```
Where `base64-encoded-credentials` is the base64-encoded string of `username:password`.

The following example demonstrates how to authorize a request using *Basic Authentication*:

```Python
import requests

username = "your-username"
password = "your-password"

# Basic Auth
session = requests.Session()
session.auth = (username, password)
```

## Response Structure Format
The Composer REST API responds in JSON format. It provides two types of responses:
 - **Services**: Details about the available services and their endpoints.
 - **Processes**: Information on scheduled tasks (3D models), including their metadata, parameters, and public links for access.

All responses share a standard structure to maintain organized data. Below is an example of the static fields included in every response:

```javascript
{
    "ok": true,     // Indicates whether the request was successful
    "data": {},     // Contains the response-specific data (e.g., services or processes)
    "error": null   // Provides error details, if applicable
}
```

## Services
A list of **Services** can be retrieved by sending a GET request to the following endpoint: https://3d4xr.composer.up2metric.com/api/services/. The response will provide details about the available **Services**.

The following code presents an example of retrieving **Services**.

```Python
# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
services_url = urllib.parse.urljoin(base_url, "/api/services")

# Execute Request
response = session.get(services_url)
```

The response from this request is a dynamic JSON object that varies based on the specific **Service**. This JSON object contains detailed information about the **Service** and its respective configurations. The content is intended for developers to understand and utilize the available API endpoints.

The details for each service can be retrieved by sending a GET request to the following endpoints:

| Service | URL                                                                                      |
|-----------|---------------------------------------------------------------------------------------------|
| Multiple Images to 3D (Photogrammetry)| https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images/ |
| Multiple Images to 3D (NeRF-based)| https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images-nerf2mesh/ |
| Single Image to 3D | https://3d4xr.composer.up2metric.com/api/services/3d4xr-single-image/ |
| Text to 3D | https://3d4xr.composer.up2metric.com/api/services/3d4xr-text-to-3d/ |

## Processes
The **Process** acts as a container that receives user requests, utilizes **Service** tasks to generate a 3D model, and provides the result through a public link. Due to limited resources, the **Process** cannot be scheduled and run immediately. To keep the user informed, each **Process** includes state information that tracks and updates the progress. The user can download the 3D model only when the state changes to `complete`.

The following example presents how to retrieve a paginated list of completed **Processes** for all the **Services**.

```Python
# Use "*" to retrieve all services
service = "*"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

# Query parameters
query_parameters: dict[str, str] = {
    "page": "1",            # The page number to retrieve
    "size": "10",           # The number of items to include per page
    "state": "complete",    # Filter processes by their state (e.g., "complete", "in-progress")
    "order": "desc",        # Sort the results in descending order (use "asc" for ascending)
    "orderby": "name",      # The field by which the results should be sorted
    "query": "Car",         # Search term to filter results by name
}


response = session.get(processes_url, params=query_parameters)
```

Users can access the generated 3D models in `.glb` and `.obj` formats through a public link. A thumbnail link is provided, allowing users to preview the 3D model conveniently before downloading.

```javascript

{
    "ok": true,
    "data": { 
        "items": [  
            {
                "id": "xxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                "name": "Red Car",  
                "description": "Red Car",
                "service": "3d4xr-text-to-3d",  // Service used to generate the process.
                "state": "complete",
                "inputDataLink": "https://storage/prompt.txt",
                // Available only when state is complete
                "objLink": "https://storage/obj-public-link.zip", 
                "glbLink": "https://storage/glb-public-link.glb",
                "thumbnailLink": "https://storage/thumbnail.jpg",
                // Service parameters used during the process generation.
                "parameters": {
                    "refine": true,
                    "algorithm": "triposr"
                },
                "createdAt": "2024-11-18T11:01:45.946345Z",
                "updatedAt": "2024-11-18T11:01:45.946345Z"
            }
        ],
        "pagination": { 
            "page": 1,
            "size": 10,
            "totalRows": 55,
            "totalPages": 6
        }
    },
    "error": null
}
```

## Generate new Process
The following sections outline the procedure for creating a new **Process** for each available **Service**. 

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
# Service name
service = "3d4xr-multiple-images"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

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
# Service name
service = "3d4xr-multiple-images-nerf2mesh"
scene: typing.Literal['single-object', 'outdoor', 'ff'] = 'single-object'

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

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
# Service name
service = "3d4xr-single-image"
algorithm: typing.Literal["one2345", "triposr"] = "triposr"

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

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
# Service name
service = "3d4xr-text-to-3d"
algorithm: typing.Literal["one2345", "triposr"] = "triposr"

# Dynamic prompt text
prompt_text = "Red Car"
file_like_object = io.BytesIO(prompt_text.encode("utf-8"))

# Endpoint
base_url = "https://3d4xr.composer.up2metric.com"
processes_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")

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