---
sidebar_position: 0.002
---

# Troubleshooting

## App not listed in Kiosk

If your app is not listed in the Kiosk, be sure that the app is public: the configuration `app.yaml` file must contain
`public: true`.

Then, save it
```bash
sermas-cli app save /apps/myapp
```
 or import it again, if saving the app fails.
```bash
sermas-cli app admin import /apps/myapp
```

## Error opening an app

![Error opening app](images/generic_error.png)

If you see this kind of error when opening an app, you should try saving it
 or importing it again (see commands above).


In case you're still experiencing problems opening the app, you can try clearing the data and restarting the services with:

```bash
# stop all the services and remove related volumes
docker compose down -v
# remove all local data
sudo rm -rf ./data && git restore ./data
# restart the services
docker compose up -d
```

## MQTT connection errors

If you notice MQTT connection errors in the logs (like `token expired` or similar), please get the container IDs running `docker ps`, then restart the MQTT service, followed by any other disconnecting service using `docker restart [CONTAINER_ID]`.


## Hallucinations and inference errors

In case of (random) chat hallucinations or tools inference errors, 
please try to lower the `LLM_TEMPERATURE` **or** the `LLM_TOP_P`
parameters in the api `.env` file.
