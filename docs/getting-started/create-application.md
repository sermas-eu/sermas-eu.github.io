---
sidebar_position: 0.002
---

# Create an application

To create an application, we are going to use the [SERMAS CLI](../sermas-cli/setup)

Let's create a commodity alias for `sermas-cli`. It uses our same system user ID to avoid file permission issues.

If you're using Windows make sure to install and use WSL ([Microsoft's tutorial to install WSL](https://learn.microsoft.com/en-us/windows/wsl/install))


**NOTE** We assume you can use docker with your user. Add `sudo` to the command if it is not the case e.g. `sudo docker ps`
## Create a command alias
The alias `sermas-cli` will be used for all following commands

### On Windows
```sh
alias "sermas-cli=docker compose run --rm -it cli"
```
### On Linux
On Linux we must run docker commands using our user id (not root) in order to own the generated files and folders.
```sh
alias "sermas-cli=docker compose run --user `id -u` --rm -it cli"
```

#### Solving permissions issues

It may happens that some directories get created with `root` ownership by docker and this causes your user to not being able to access them anymore.

You may notice errors like those 

- `error: Failed to write file /data/cli.json: EACCES: permission denied, open '/data/cli.json'`
- `error: Failed to create template EACCES: permission denied, mkdir '/apps/myapp'`

To fix those errors, set ownership of CLI related folders to your current user. E.g.

```sh
sudo chown -R `id -u` ./apps ./data/cli
```

#### Got stuck ?

In case you got stuck and want to start over you can remove all the database and local data. 

*This is a destructive operation and you will lose the data in the system*

```sh
# stop all the services and remove related volumes
docker compose down --volumes
# remove all local data
sudo rm -rf ./data && git restore ./data
```

## Login with the admin user

Use the following command and use the configured password (`admin` is the default).

```sh
sermas-cli auth login admin
```

## Create an application template

The CLI uses a directory structure to create and keep updated the application definition. It allows to specify configuration and assets to be uploaded.

```sh
sermas-cli app init /apps/myapp
```

The resulting structure is similar to the following

```
apps/
└── myapp
    ├── app.yaml
    ├── modules.yaml
    ├── repository
    │   ├── avatars
    │   │   └── anna.yaml
    │   ├── backgrounds
    │   │   ├── milkyway.jpg
    │   │   └── milkyway.yaml
    │   ├── documents
    │   │   ├── about.txt
    │   │   ├── about.yaml
    │   │   ├── toolkit.txt
    │   │   └── toolkit.yaml
    │   └── robots
    │       └── my-agv.yaml
    ├── repository.yaml
    ├── settings.yaml
    ├── tools.yaml
```

We'll learn more about the app structure later.

Let's create the application in the SERMAS API with 

```sh
sermas-cli app save /apps/myapp
```

You should see a confirmation message. 

The newly created app can be used in the kiosk app on [http://localhost:8080](http://localhost:8080)

In case you received an error, check for errors in the logs with `docker compose logs api`.
