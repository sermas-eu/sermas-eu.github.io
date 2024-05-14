---
sidebar_position: 0.001
---

# Getting Started

Let's discover **SERMAS in ~10 minutes**.

## What you'll need

We use containers to deliver the ready-to-use serivces.

Ensure you have installed

- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/install/)

## Running the Toolkit API

Obtain a copy of the SERMAS Toolkit API deployment files

```sh
git clone https://github.com/sermas-eu/sermas-toolkit-api
cd sermas-toolkit-api
```

To use the Avatar capabilities (such as text to speech, speech to text, embeddings and chatting) we  need to set an [OpenAI Api Key](https://platform.openai.com/api-keys). The toolkit supports also other options (such as Google services and open-source based models) but to ease the process, we will start with this.

Create a copy of the `.env.example` and name it `.env`. Set the variable `OPENAI_API_KEY` with the OpenAI obtained key.


```env
OPENAI_API_KEY="..."
```

**NOTE** OpenAI offers a free tier but for frequent usage you may need to setup a billing account. 


### Configuration

A default user with admin privileges (role `platform-admin`) is created by default with username `admin` and password `admin`. Those defaults can be controlled by settings `ADMIN_USER` and `ADMIN_PASSWORD` environment variables.

The system can create additional users at bootstrap from the file `./config/api/user.json`

### Start the system

Start the system with docker compose

```sh
docker compose up -d
```

The command will dowload the docker images and boostrap the services. It may take a while dependending on your connection.

Once completed, the API and the related services will be available on `http://localhost:8080`

As an example, you can try visiting [the kiosk homepage](http://localhost:8080/) or the [API documentation](http://localhost:8080/api/swagger) to see if everything has worked as expected.
