---
sidebar_position: 3
---

# Web Application
The [web application](https://3d4xr.homelab.up2metric.com/) aims to ease the usage of 3DforXR services and allow scheduling operations, viewing results, and post-processing of 3D models in a user-friendly manner. 

The web application contains three discrete pages: 
 - [3D Models](https://3d4xr.homelab.up2metric.com/): The user can view the generated 3D models and click on them for more details. The 3D Models view contains various filters, enabling conditional viewing of the models and filtering out unwanted ones.
 - [Services](https://3d4xr.homelab.up2metric.com/services): The user can select one of the available services, follow the service guide, fill out the input fields and generate a 3D model. The 3D model is displayed in the [3D Models](https://3d4xr.homelab.up2metric.com/) tab. The following 3D model generation services are supported.
    - Multiple Images to 3D
    - Single Image to 3D
    - Text to 3D
 - [Playground](https://3d4xr.homelab.up2metric.com/playground): The playground page is designed to contain various application demos showcasing the functionalities of 3DforXR services. Currently, it includes a "Basketball Challenge", a simple VR playground made in Unity. All the 3D models presented in the VR scene were created using 3DforXR services.

The users can click on a generated model in the [3D Models](https://3d4xr.homelab.up2metric.com/) tab to view more details about it. A 3D scene displays the open model and contains the following tabs:   

 - **Details**: The users can view details about the model generation. That includes information about the generation parameters of the service as well as generated 3D object statistics (e.g. number of vertices, number of triangles)   

 - **View**: It allows users to modify the viewport of the 3D scene. The users can also capture screenshots of the modified scene.   

 - **Edit**: It allows for post-processing refinement operations on the 3D model. After the users have iterated on the post-processing options, they can export the model alongside any changes.

 The web application provides an export option containing additional features developed to make the generated models even more suitable for XR applications. Specifically, the extra features focus on enhancing the quality of mesh geometry (Re-meshing), reducing the number of 3D model faces while preserving visual consistency (Simplification), accelerating the rendering process (LODs generation), and providing a range of commonly used formats (Export Options).

The described features are implemented as a part of a single endpoint available in the URL: https://3d4xr.homelab.up2metric.com/api/lods/export-model/.

| Parameter | Value type | Description | Default value |
|-----------|-----------|--------------|--------------|
| file | `file` | `[.glb, .fbx, .obj]` The input 3D mesh file. Supported formats: `.glb`, `.obj`, `.fbx` (required) | - |
| output_format | `string` | `[.glb, .fbx, .obj]` Output format for the exported mesh (required) | - |
| simplify_ratio | `float` | `[0.1-1]` If enabled, it reduces the number of model faces. Lower values result in higher simplification (optional) | - |
| remesh_quality | `string` | `[Low, Medium, High]` If enabled, it generates more structured geometry. "Low" will generate larger faces relative to the input, "High" will generate a denser output. (optional) | - |
| optimization | `bool` | `[true, false]`  It improves mesh quality by merging vertices closer than a specified distance, ensuring a cleaner and more optimized mesh (optional) | `true` |
| generate_lods | `bool` | `[true, false]` Whether to generate Levels of Detail (LODs) for the mesh file (optional) | `false` |

 Scan the QR code for automatic log-in.

<img src="https://filebrowser.homelab.up2metric.com/api/public/dl/EpVo0IQz?inline=true" width="300" />