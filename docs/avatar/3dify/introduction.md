---
sidebar_position: 0.0002
---


# Introduction
The 3Dify project aims to enable avatar creation using advanced AI and a modular software architecture. Such a modular architecture allows for flexible and scalable development, ensuring easy updates and improvements.

3dify allows users to create fully-animated 3D avatars by uploading a single picture of a face. Using AI, 3dify scans the face from the input photo, extracts its features and uses the [MakeHuman](http://www.makehumancommunity.org/) avatar generation suite to create 3D animated avatars based on the facial features extracted from the 3dify software modules.

3dify consists of 2 web applications.
1. a single page web application which allows authenticated users to browse previously generated avatars, upload new pictures and modify them. Once the picture is set, a "customize" button runs the Web GL application for preview and customization.

![Web Application](images/WebAppScreen.png 'Web Application')

2. a Web GL application, built with Unity, that creates the avatar and renders the fully-animated 3d model result for preview. The application provides user interface controls to customize the output avatar by changing facial features.

![Web GL Application](images/WebGLScreen.png 'Web GL Application')

Example of a generated avatar:

![Example](images/AvatarComparison2.png 'Example')
