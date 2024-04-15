---
sidebar_position: 0.002
---

# Create an application

To create an application, we are going to use the [SERMAS CLI](./sermas-cli)

Let's create a commodity alias for `sermas-cli`. It uses our same system user ID to avoid file permission issues.

```sh
alias "sermas-cli=docker compose run --rm -it --user `echo $UID` cli"
```

## Login with the admin user

Use the following command and use the configured password (`admin` is the default).

`sermas-cli auth login admin`

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
    └── users.yaml
```

We'll learn more about the app structure later.

Let's create the application in the SERMAS API with 

```
sermas-cli app save /apps/myapp
```

You should see a confirmation message. 

Great, let's see our app at work in the kiosk on [http://localhost:8080](http://localhost:8080)