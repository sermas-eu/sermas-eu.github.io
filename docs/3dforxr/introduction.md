---
sidebar_position: 1
---

# Introduction
3DforXR aims to be a single place for 3D asset creation, enabling users to generate photorealistic 3D models with simplicity and speed. Designed for seamless integration into eXtended Reality (XR) applications and experiences, 3DforXR combines cutting-edge 3D Computer Vision and AI to deliver high-quality 3D models.

### Key Features  
The 3DforXR platform supports the following three modalities:
1) Multi-view 3D reconstruction:  Ideal for 3D objects with complex geometry, asymmetrical shape, fine details, and rich texture.
2) Single image 3D prediction: Ideal for objects with simple and symmetrical shape.
3) 3D generation from text prompt: Ideal for creating 3D models when you don’t have images but can provide a clear description. 

### Implementation
The 3DforXR platform is architected as a set of modular microservices deployed in Docker containers. These services are hosted within [up2metric](https://www.up2metric.com/)’s homelab cluster and are accessible via the [up2metric](https://www.up2metric.com/) modular Composer REST API. 

### User-Friendly Web Application
To ensure accessibility for users of all experience levels, 3DforXR includes a [web-based application](https://3d4xr.homelab.up2metric.com/services) designed for intuitive interaction.