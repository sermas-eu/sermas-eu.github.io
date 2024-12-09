---
sidebar_position: 0.0005
---


# Application deployment

The application consists of seven docker containers:
- [3dify-makehuman](https://hub.docker.com/repository/docker/isislab/3dify-makehuman/general): The container that executes a customized version of MakeHuman that permits to elaborate the sliders value extracted from a photo into a rendered 3D avatar.
- [3dify-unity](https://hub.docker.com/repository/docker/isislab/3dify-unity/general): The container which starts a simple python HTTP web server which hosts the WebGL application for the avatar preview
- [3dify-python](https://hub.docker.com/repository/docker/isislab/3dify-python/general): Container containing the logic behind the conversion between facial landmarks and MakeHuman ’s parameters, as well as the logic connecting the application to MakeHuman for sending new sliders value and for exporting and downloading the final 3D model .FBX file.
- [filestore](https://hub.docker.com/r/minio/minio): Container including MinIO, an object storage application compatible with the Amazon S3 API
- [3dify](https://hub.docker.com/r/isislab/3dify-auth): Containers based on this image start the web application for the avatar management front-end.
- [mongo](https://hub.docker.com/_/mongo): Container including MongoDB, an open-source document-oriented database based on NoSQL.
- [mongo-express](https://hub.docker.com/extensions/saniewski/mongo-express-docker-extension): Extension that allows to connect to any (local or remote) MongoDB server without having to install Mongo Express locally.

The deployment of these containers is coordinated by the [Docker Compose](https://github.com/isislab-unisa/3dify/blob/main/docker-compose.yml) configuration file.
