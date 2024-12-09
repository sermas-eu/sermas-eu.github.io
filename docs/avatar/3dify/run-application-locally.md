---
sidebar_position: 0.0006
---


# Run the Application Locally

## Prerequisites
### Common
In order to use the authentication process, it is necessary to obtain a **Google Client ID** and a **Client Secret** from a Google Cloud instance and putting them inside the Docker Compose file.
For the retrieval of informations, you can follow a guide at the following [link](https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id).

Alternatively, if the authentication module is not needed, you can switch to the [main-no-auth](https://github.com/isislab-unisa/3dify/tree/main-no-auth) branch and build the application with the Docker Compose from there.

#### Windows
For executing on Windows Systems it is necessary to install beforehand an X11 Server, we advise **VcXsrv Windows X Server** that can be found at the following [link](https://sourceforge.net/projects/vcxsrv/), as well as **Docker Desktop** at the following [link](https://www.docker.com/products/docker-desktop/).

The following are the preliminary steps for executing only for Windows Systems.

1. After having installed VcXsrv proceed to open with **XLaunch** 
2. Select **Multiple Windows** and specify 1 as **Display number**
3. Select **Start no client**
4. Ensure that **Disable access control** is checked
5. Click **Finish**
6. Open **Docker Desktop**
7. Proceed with the instruction for the launch with Docker Compose specified below.

#### Linux
For executing on Linux Systems it is just necessary to install **Docker Engine** by following the guide for your distro at the following [link](https://docs.docker.com/engine/). (**ATTENTION** Currently this version only work by using Docker Engine with sudo command and is not compatible with Docker Desktop for linux systems.)

The following are the preliminary steps for executing only for Linux Systems after having installed Docker Engine.

1. Open the terminal (Restart it if is the same terminal from which you have just installed Docker engine) and type:.
```bash
xhost +local:docker
```
2. Proceed with the instruction for the launch with Docker Compose specified below.
   
#### MacOs
For executing on MacOs Systems is necessary to install both an X11 server, we advise **XQuartz** downloadable from the following [link](https://www.xquartz.org/) and **Docker Desktop**, downloadable from the following [link](https://www.docker.com/products/docker-desktop/).

(**DISCLAIMER**: Currently on Apple Silicon Processors the software may present some slow down due to the translation layer from x64 to ARM.)

1. After having installed **XQuartz** proceed to open it.
2. Open a terminal and type:
```bash
      xhost +local:docker
      xhost + 127.0.0.1
```
3. Open the **docker-compose.yml** and comment the following line:
```bash
      - DISPLAY=${DISPLAY:-host.docker.internal:1}
```
4. And remove the comment from the following line:
```bash
      # - DISPLAY=host.docker.internal:0
```
5. Proceed with the instruction for the launch with Docker Compose specified below.

## Launch
Download the Docker Compose file at [https://github.com/isislab-unisa/3dify/blob/main/docker-compose.yml](https://github.com/isislab-unisa/3dify/blob/main/docker-compose.yml) for the version with authentication, otherwise download the Docker Compose file [here](https://github.com/isislab-unisa/3dify/blob/main-no-auth/docker-compose.yml).

Launch all the containers required to run the application:

```bash
docker compose up -d
```

Stop all the containers of the application:

```bash
docker compose down
```

If the application is correctly deployed, it can be run by default at the link [http://localhost:3000/](http://localhost:3000/).
