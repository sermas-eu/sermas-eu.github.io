---
sidebar_position: 0.002
---

# Troubleshooting

## Error opening an app

![Error opening app](images/generic_error.png)

If you see this kind of error when opening an app, you should try saving it
```bash
$ sermas-cli app save /apps/myapp
```
 or importing it again
```bash
$ sermas-cli app admin import /apps/myapp
```
In case you're still experiencing problems opening the app, you can try clearing the data and restarting the services with:

```
docker compose down
docker volume rm sermas-toolkit-api_mongodb
sudo rm -r ./apps/myapp ./data/keycloak ./data/mongodb ./data/minio
docker compose up -d
```

## MQTT connection errors

If you notice MQTT connection errors in the logs (like `token expired` or similar), please get the container IDs running `docker ps`, then restart the MQTT service, followed by any other disconnecting service using `docker restart [CONTAINER_ID]`.
