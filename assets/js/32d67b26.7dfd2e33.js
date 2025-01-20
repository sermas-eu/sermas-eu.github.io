"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[5701],{4241:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"3dforxr/implementation","title":"Implementation","description":"The 3DforXR platform is developed as a set of modular microservices deployed in Docker containers. These services are hosted within up2metric\u2019s homelab cluster and are accessible via the up2metric modular Composer REST API.","source":"@site/docs/3dforxr/implementation.md","sourceDirName":"3dforxr","slug":"/3dforxr/implementation","permalink":"/docs/3dforxr/implementation","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/3dforxr/implementation.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/3dforxr/introduction"},"next":{"title":"Web Application","permalink":"/docs/3dforxr/web"}}');var t=r(4848),i=r(8453);const d={sidebar_position:2},o="Implementation",l={},c=[{value:"Response Structure Format",id:"response-structure-format",level:2},{value:"Services",id:"services",level:2},{value:"Processes",id:"processes",level:2},{value:"Generate new Process",id:"generate-new-process",level:2},{value:"Multiple Images to 3D (Photogrammetry)",id:"multiple-images-to-3d-photogrammetry",level:3},{value:"Multiple Images to 3D (NeRF-based)",id:"multiple-images-to-3d-nerf-based",level:3},{value:"Single Image to 3D",id:"single-image-to-3d",level:3},{value:"Text to 3D",id:"text-to-3d",level:3}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"implementation",children:"Implementation"})}),"\n",(0,t.jsxs)(s.p,{children:["The 3DforXR platform is developed as a set of modular microservices deployed in Docker containers. These services are hosted within ",(0,t.jsx)(s.a,{href:"https://www.up2metric.com/",children:"up2metric"}),"\u2019s homelab cluster and are accessible via the ",(0,t.jsx)(s.a,{href:"https://www.up2metric.com/",children:"up2metric"})," modular Composer REST API."]}),"\n",(0,t.jsx)(s.p,{children:"Composer is a REST API written in the GO programming language. It allows for the efficient scheduling and management of time-consuming tasks requiring demanding computational resources."}),"\n",(0,t.jsxs)(s.p,{children:["The base URL for accessing the 3DforXR services is: ",(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/",children:"https://3d4xr.composer.up2metric.com/api/"}),". The API uses ",(0,t.jsx)(s.em,{children:"Basic Authentication"})," to authorize users. When making requests, users must provide their ",(0,t.jsx)(s.code,{children:"username"})," and ",(0,t.jsx)(s.code,{children:"password"}),". These credentials should be included in the Authorization header of the request in the following format:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"Authorization: Basic <base64-encoded-credentials>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"base64-encoded-credentials"})," is the base64-encoded string of ",(0,t.jsx)(s.code,{children:"username:password"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following example demonstrates how to authorize a request using ",(0,t.jsx)(s.em,{children:"Basic Authentication"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'import requests\n\nusername = "your-username"\npassword = "your-password"\n\n# Basic Auth\nsession = requests.Session()\nsession.auth = (username, password)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"response-structure-format",children:"Response Structure Format"}),"\n",(0,t.jsx)(s.p,{children:"The Composer REST API responds in JSON format. It provides two types of responses:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Services"}),": Details about the available services and their endpoints."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Processes"}),": Information on scheduled tasks (3D models), including their metadata, parameters, and public links for access."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"All responses share a standard structure to maintain organized data. Below is an example of the static fields included in every response:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n    "ok": true,     // Indicates whether the request was successful\n    "data": {},     // Contains the response-specific data (e.g., services or processes)\n    "error": null   // Provides error details, if applicable\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(s.p,{children:["A list of ",(0,t.jsx)(s.strong,{children:"Services"})," can be retrieved by sending a GET request to the following endpoint: ",(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/services/",children:"https://3d4xr.composer.up2metric.com/api/services/"}),". The response will provide details about the available ",(0,t.jsx)(s.strong,{children:"Services"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following code presents an example of retrieving ",(0,t.jsx)(s.strong,{children:"Services"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nservices_url = urllib.parse.urljoin(base_url, "/api/services")\n\n# Execute Request\nresponse = session.get(services_url)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The response from this request is a dynamic JSON object that varies based on the specific ",(0,t.jsx)(s.strong,{children:"Service"}),". This JSON object contains detailed information about the ",(0,t.jsx)(s.strong,{children:"Service"})," and its respective configurations. The content is intended for developers to understand and utilize the available API endpoints."]}),"\n",(0,t.jsx)(s.p,{children:"The details for each service can be retrieved by sending a GET request to the following endpoints:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Service"}),(0,t.jsx)(s.th,{children:"URL"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Multiple Images to 3D (Photogrammetry)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images/",children:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Multiple Images to 3D (NeRF-based)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images-nerf2mesh/",children:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-multiple-images-nerf2mesh/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Single Image to 3D"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-single-image/",children:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-single-image/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Text to 3D"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-text-to-3d/",children:"https://3d4xr.composer.up2metric.com/api/services/3d4xr-text-to-3d/"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"processes",children:"Processes"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Process"})," acts as a container that receives user requests, utilizes ",(0,t.jsx)(s.strong,{children:"Service"})," tasks to generate a 3D model, and provides the result through a public link. Due to limited resources, the ",(0,t.jsx)(s.strong,{children:"Process"})," cannot be scheduled and run immediately. To keep the user informed, each ",(0,t.jsx)(s.strong,{children:"Process"})," includes state information that tracks and updates the progress. The user can download the 3D model only when the state changes to ",(0,t.jsx)(s.code,{children:"complete"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following example presents how to retrieve a paginated list of completed ",(0,t.jsx)(s.strong,{children:"Processes"})," for all the ",(0,t.jsx)(s.strong,{children:"Services"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Use "*" to retrieve all services\nservice = "*"\n\n# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nprocesses_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")\n\n# Query parameters\nquery_parameters: dict[str, str] = {\n    "page": "1",            # The page number to retrieve\n    "size": "10",           # The number of items to include per page\n    "state": "complete",    # Filter processes by their state (e.g., "complete", "in-progress")\n    "order": "desc",        # Sort the results in descending order (use "asc" for ascending)\n    "orderby": "name",      # The field by which the results should be sorted\n    "query": "Car",         # Search term to filter results by name\n}\n\n\nresponse = session.get(processes_url, params=query_parameters)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Users can access the generated 3D models in ",(0,t.jsx)(s.code,{children:".glb"})," and ",(0,t.jsx)(s.code,{children:".obj"})," formats through a public link. A thumbnail link is provided, allowing users to preview the 3D model conveniently before downloading."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'\n{\n    "ok": true,\n    "data": { \n        "items": [  \n            {\n                "id": "xxxxx-xxxx-xxxx-xxxx-xxxxxxxx",\n                "name": "Red Car",  \n                "description": "Red Car",\n                "service": "3d4xr-text-to-3d",  // Service used to generate the process.\n                "state": "complete",\n                "inputDataLink": "https://storage/prompt.txt",\n                // Available only when state is complete\n                "objLink": "https://storage/obj-public-link.zip", \n                "glbLink": "https://storage/glb-public-link.glb",\n                "thumbnailLink": "https://storage/thumbnail.jpg",\n                // Service parameters used during the process generation.\n                "parameters": {\n                    "refine": true,\n                    "algorithm": "triposr"\n                },\n                "createdAt": "2024-11-18T11:01:45.946345Z",\n                "updatedAt": "2024-11-18T11:01:45.946345Z"\n            }\n        ],\n        "pagination": { \n            "page": 1,\n            "size": 10,\n            "totalRows": 55,\n            "totalPages": 6\n        }\n    },\n    "error": null\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"generate-new-process",children:"Generate new Process"}),"\n",(0,t.jsxs)(s.p,{children:["The following sections outline the procedure for creating a new ",(0,t.jsx)(s.strong,{children:"Process"})," for each available ",(0,t.jsx)(s.strong,{children:"Service"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"multiple-images-to-3d-photogrammetry",children:"Multiple Images to 3D (Photogrammetry)"}),"\n",(0,t.jsxs)(s.p,{children:["A 3D model can be generated from multiple images by providing the following parameters in a ",(0,t.jsx)(s.code,{children:"multipart/form-data"})," content-type."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Value type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Name for the 3D model (required)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Description for the 3D model (optional)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"file"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"application/zip"})," file with at least 3 images (in ",(0,t.jsx)(s.code,{children:".png"}),", ",(0,t.jsx)(s.code,{children:".jpg"})," or ",(0,t.jsx)(s.code,{children:".jpeg"})," format) (required)"]}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"masks"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bool"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[true, false]"})," If enabled, the background removal process is executed. (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clean_mesh"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bool"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[true, false]"})," Specifies whether to remove or not the disconnected components (artifacts) (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The example below demonstrates how to generate a 3D model utilizing the ",(0,t.jsx)(s.strong,{children:"Multiple Images to 3D (Photogrammetry)"})," service."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Service name\nservice = "3d4xr-multiple-images"\n\n# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nprocesses_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")\n\n# Execute Request\npayload = {\n    "name": "Model name",\n    "description": None,\n    "masks": True,\n    "clean_mesh": True,\n}\n\nfiles = [("file", ("input.zip", open("/path/to/input.zip", "rb"), "application/zip"))]\n\nresponse = session.post(processes_url, data=payload, files=files)\n'})}),"\n",(0,t.jsx)(s.h3,{id:"multiple-images-to-3d-nerf-based",children:"Multiple Images to 3D (NeRF-based)"}),"\n",(0,t.jsxs)(s.p,{children:["A 3D model can be generated from multiple images by providing the following parameters in a ",(0,t.jsx)(s.code,{children:"multipart/form-data"})," content-type."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Value type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Name for the 3D model (required)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Description for the 3D model (optional)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"file"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"application/zip"})," file with at least 3 images (in ",(0,t.jsx)(s.code,{children:".png"}),", ",(0,t.jsx)(s.code,{children:".jpg"})," or ",(0,t.jsx)(s.code,{children:".jpeg"})," format) (required)"]}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"scene"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[single-object, ff, outdoor]"})," Specifies the type of the current scene: ",(0,t.jsx)(s.code,{children:"single-object"})," (",(0,t.jsx)(s.strong,{children:"recommended"}),"): proper for small objects and circular views trajectory, ",(0,t.jsx)(s.code,{children:"ff"}),": proper for forward-facing scenes, ",(0,t.jsx)(s.code,{children:"outdoor"}),": proper for larger outdoor scenes (required)"]}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clean_mesh"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bool"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[true, false]"})," Specifies whether to remove or not the disconnected components (artifacts) (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The example below demonstrates how to generate a 3D model utilizing the ",(0,t.jsx)(s.strong,{children:"Multiple Images to 3D (NeRF-based)"})," service."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Service name\nservice = "3d4xr-multiple-images-nerf2mesh"\nscene: typing.Literal[\'single-object\', \'outdoor\', \'ff\'] = \'single-object\'\n\n# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nprocesses_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")\n\n# Execute Request\npayload = {\n    "name": "Model name",\n    "description": None,\n    "scene": scene,\n    "clean_mesh": True,\n}\n\nfiles = [("file", ("input.zip", open("/path/to/input.zip", "rb"), "application/zip"))]\n\nresponse = session.post(processes_url, data=payload, files=files)\n'})}),"\n",(0,t.jsx)(s.h3,{id:"single-image-to-3d",children:"Single Image to 3D"}),"\n",(0,t.jsxs)(s.p,{children:["A 3D model can be generated from a single image by providing the following parameters in a ",(0,t.jsx)(s.code,{children:"multipart/form-data"})," content-type."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Value type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Name for the 3D model (required)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Description for the 3D model (optional)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"file"})}),(0,t.jsxs)(s.td,{children:["Image file in ",(0,t.jsx)(s.code,{children:".png"}),", ",(0,t.jsx)(s.code,{children:".jpg"}),", ",(0,t.jsx)(s.code,{children:".jpeg"}),"or ",(0,t.jsx)(s.code,{children:".webp"})," format (required)"]}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"algorithm"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[one2345, triposr]"})," Specifies the image to 3D algorithm (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"triposr"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"refine"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bool"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[true, false]"})," If enabled, the texture quality of the model is refined. (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The example below demonstrates how to generate a 3D model utilizing the ",(0,t.jsx)(s.strong,{children:"Single Image to 3D"})," service."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Service name\nservice = "3d4xr-single-image"\nalgorithm: typing.Literal["one2345", "triposr"] = "triposr"\n\n# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nprocesses_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")\n\n# Execute Request\npayload = {\n    "name": "Model name",\n    "description": None,\n    "refine": True,\n    "algorithm": algorithm,\n}\n\nfiles = [("file", ("image.jpg", open("/path/to/image.jpg", "rb"), "image/jpeg"))]\n\nresponse = session.post(processes_url, data=payload, files=files)\n'})}),"\n",(0,t.jsx)(s.h3,{id:"text-to-3d",children:"Text to 3D"}),"\n",(0,t.jsxs)(s.p,{children:["A 3D model can be generated from a text prompt by providing the following parameters in a ",(0,t.jsx)(s.code,{children:"multipart/form-data"})," content-type."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Value type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Name for the 3D model (required)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Description for the 3D model (optional)"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"file"})}),(0,t.jsxs)(s.td,{children:["A file containing the input text prompt in a ",(0,t.jsx)(s.code,{children:"text/plain"})," content-type (required)"]}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"algorithm"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[one2345, triposr]"})," Specifies the image to 3D algorithm (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"triposr"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"refine"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bool"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"[true, false]"})," If enabled, the texture quality of the model is refined (optional)"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The example below demonstrates how to generate a 3D model utilizing the ",(0,t.jsx)(s.strong,{children:"Text to 3D"})," service."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Python",children:'# Service name\nservice = "3d4xr-text-to-3d"\nalgorithm: typing.Literal["one2345", "triposr"] = "triposr"\n\n# Dynamic prompt text\nprompt_text = "Red Car"\nfile_like_object = io.BytesIO(prompt_text.encode("utf-8"))\n\n# Endpoint\nbase_url = "https://3d4xr.composer.up2metric.com"\nprocesses_url = urllib.parse.urljoin(base_url, f"/api/services/{service}/processes")\n\n# Execute Request\npayload = {\n    "name": "Model name",\n    "description": None,\n    "refine": True,\n    "algorithm": algorithm,\n}\n\nfiles = [("file", ("prompt.txt", file_like_object, "text/plain"))]\n\nresponse = session.post(processes_url, data=payload, files=files)\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var n=r(6540);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);