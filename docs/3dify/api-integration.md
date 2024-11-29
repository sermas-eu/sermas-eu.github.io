---
sidebar_position: 0.0007
---


# API Integration

All the following API are available:

- On the 3001 port exposed by the compose:
   - Downloading API:
      - */downloadFbxZip* : Download the currently open avatar as a zip file in base64 format containing the avatar in .fbx format as well as all textures and animations
   - Functionality API:
      - */scanFace* : extracts the 478 landmarks that map the face of the input face portrayed in the image
      - */extractFeatures* : the outputs of genderAge and scanFace are processed to calculate facial parameters in terms of sizes and distances of all parts of the face (head, eyes, nose, mouth,...). Such parameters are numerical normalized in the [-1, 1] interval or a choice in an enumeration
      - */applyAndDownload* : communicates with the makehuman daemon which will in turn generate an avatar based on a series of facial parameters given in input and return a zip file in base64 format containing the avatar in .fbx format as well as all textures and animations
      - */getCustomSkin* : Generate from an input image a custom skin with the original face blended with the default skin of makehuman and return the new skin in base64 format
      

A Swagger documentation for these API is available at [localhost:3001/docs](http://localhost:3001/docs) when running the application locally

- On the 3000 port exposed by the compose:
   - */api/genderAge*: which estimates the gender and the age of a person given a picture of the face.
   - */api/photos, /api/uploadPhotos*: that let the application read and write image files on the MinIO storage.
   - */api/downloadAvatar*: that let the user download the generated avatar in .FBX or .GLB format.
