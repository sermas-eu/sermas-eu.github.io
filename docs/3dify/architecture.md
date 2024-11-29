---
sidebar_position: 0.0004
---


# Architecture

The application front end architecture comprises a web application, a file store, and a NoSQL database.

1. The `web application` is built with the **Next.js** framework, which allows us to develop both the front-end and back-end using **TypeScript**.
   The front-end is designed as a Single-Page Application (SPA) and written in **React**, also taking advantage of the abstractions offered by Next.js.
   Another benefit of Next.js is the possibility to use **Next.js API Routes** to create a serverless back-end to optimize resource utilization.
2. **MinIO** is used as `file store` for persisting uploaded photos, generated avatars, etc.
3. Part of the back-end is implemented in the **Python** language, which handles the facial feature extraction and communication with the Makehuman daemon
4. For the `database`, the application leverages **MongoDB** capabilities for storing users' information and more.
5. The `WebGL application` is built with the **Unity** game engine and the **C#** language and lets users customize and preview the avatar and download its 3D model.
6. The `avatar generation` is handled by a **Makehuman** process running in background. 

![Architecture](images/3dify_architecture_release_2.png 'Architecture')

## Where to Apply Changes?

- [/app/api](https://github.com/isislab-unisa/3dify/tree/main/app/api): in this folder you will find the code for the serverless APIs that power the application back end.
   - *genderAge*: which estimates the gender and the age of a person given a picture of the face.
   - *photos, uploadPhotos*: that lets the application read and write image files on the MinIO storage.

- [/app/components](https://github.com/isislab-unisa/3dify/tree/main/app/components): in this folder you will find the code for the UI elements of the application front end, such as the photos gallery.

- [/app/pythonServices](https://github.com/isislab-unisa/3dify/tree/main/app/pythonServices): in this folder you will find the code for the python-based back end.
   - *scanFace*: extracts the 478 landmarks that map the face of the input face portrayed in the image
   - *extractFeatures*: the outputs of genderAge and scanFace are processed to calculate facial parameters in terms of sizes and distances of all parts of the face (head, eyes, nose, mouth,...). Such parameters are numerical normalized in the [-1, 1] interval or a choice in an enumeration
   - *applyAndDownload*: communicates with the makehuman daemon which will in turn generate an avatar based on a series of facial parameters given in input
