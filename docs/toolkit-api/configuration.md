---
sidebar_position: 10
---

# Configuration

The Toolkit API can be  configured using different sets of environment variables

#### IMPORT_USER 

default user used when importing apps (default: `admin'`)

#### API_URL 

public API url (default: `http://localhost:8080'`)

#### API_URL_INTERNAL 

Internal API url (default: `http://127.0.0.1:3000/api'`)


#### AUTH_KEYCLOAK_URL 

set the keycloack endpoint URL (default: `http://172.17.0.1:8080/keycloak'`)

#### AUTH_KEYCLOAK_REALM 

set the keycloack realm (default: `sermas-local'`)

#### AUTH_KEYCLOAK_CLIENT_ID 

set the keycloack client ID used for administrative purposes (default: `platform'`)

#### AUTH_KEYCLOAK_SECRET 

set the keycloack client password used for administrative purposes (default: `platform'`)

#### ADMIN_SERVICE_ACCOUNT_USERNAME 

set the keycloack admin user (default: `admin'`)

#### ADMIN_SERVICE_ACCOUNT_PASSWORD 

set the keycloack admin password (default: `admin'`)

#### AUTH_KEYCLOAK_ADMIN_CLIENT_ID 

set the admin client used for keycloak configuration (default: `admin-cli'`)

#### AUTH_KEYCLOAK_ADMIN_REALM 

set the admin realm used for keycloak configuration (default: `master'`)

#### AUTH_KEYCLOAK_SYSTEM_CLIENT_ID 

Additonal system clients, separated by comma (default: `'`)


#### MQTT_URL 

the mqtt service url (default: `mqtt'`)


#### REDIS_URL 

the redis service url, used for caching (default: `redis://redis:6379'`)

#### CACHE_TTL_SEC 

default cache time to live (default: `24 * 60 * 60`)


#### MINIO_URL 

Url to Minio service or S3 compatible system (default: `http://minio:9000'`)

#### MINIO_ACCESSKEY 

Minio Access key (default: `minioadmin'`)

#### MINIO_SECRETKEY 

Minio Secret key (default: `minioadmin'`)

#### REPOSITORY_BUCKET 

Minio bucket (default: `sermas-repository'`)

#### REPOSITORY_BUCKET_REGION 

Minio region (default: `'`)


#### SPEECHBRAIN_URL 

Url to the speechbrain service (for audio detection) (default: `http://speechbrain'`)


#### FORCE_LANGUAGE 

default language to use if not provided, it will be used to translate messages or select a TTS model (default: `en-GB'`)


#### IMPORT_USERS_FILENAME 

path to the users.json file (default: `/data/users.json``)


#### ASYNCAPI_PUBLIC_URL 

public URL path to mqtt over websocket (default: `/mqtt'`)

#### OPENAPI_PUBLIC_URL 

default path to the open api endpoint (default: `/``)


#### MODULES_IMPORT_PATH 

path to the modules.json file (default: `/data/modules.json``)


#### WAKE_WORDS 

wake words for the avatar (default: `Hello,Hi,Good morning,Ciao'`)


#### CHROMA_URL 

Url to chroma DB (default: `http://chromadb:8000'`)


#### DEFAULT_MODEL_PATH 

Minio based path to the default avatar glb model (default: `default/models/default/654cc759f1a79ed2ebab0207.glb'`)

#### DEFAULT_BACKGROUND_PATH 

Minio based path to the default background for the kiosk (default: `default/backgrounds/default/milad-fakurian-nY14Fs8pxT8-unsplash.jpg'`)


#### TRANSLATION_SERVICE 

Provider name to translate messages (default: `openai'`)

#### STT_SERVICE 

Service for Speech to Text (default: `openai'`)

#### TTS_SERVICE 

Service for Text to Speech (default: `openai'`)


#### LLM_SERVICE 

default LLM service to use (supported: openai, groq, ollama) (default: `openai'`)

#### LLM_PRINT_PROMPT 

Print prompts to console for debug purposes (default: `0'`)

#### LLM_EMBEDDINGS_SERVICE 

Embedding service to use (default: `openai'`)

#### LLM_EMBEDDINGS_BINARY_QUANTIZATION 

Enable binary quantization for embeddings (default: `0'`)

#### OPENAI_EMBEDDINGS_MODEL 

OpenAi Embedding model (default: `text-embedding-3-small'`)

#### OPENAI_CHAT_MODELS 

Supported chat models from OpenAI. Leave empty to allow all available. (default: `gpt-4,gpt-4-turbo,gpt-3.5-turbo,gpt-3.5-turbo-16k'`)

#### OPENAI_MODEL 

Default OpenAI model used as fallback (default: `gpt-4'`)


#### LITELLM_URL 

LiteLLM endpoint URL (default: `http://litellm'`)


#### OLLAMA_URL 

Url to Ollama (default: `http://ollama:11434'`)

#### OLLAMA_MODEL 

Default Ollama model used as fallback (default: `sermas-llama2'`)

#### OLLAMA_CHAT_MODELS 

Supported chat models from Ollama. Leave empty to allow all available. (default: `sermas-llama2:latest'`)


#### GROQ_MODEL 

Default Groq model used as fallback (default: `mixtral-8x7b-32768'`)

#### GROQ_CHAT_MODELS 

Supported chat models from Groq. Leave empty to allow all available. (default: `gemma-7b-it,llama2-70b-4096,llama3-70b-8192,llama3-8b-8192,mixtral-8x7b-32768'`)


#### DATALOGGER_ENABLED 

Enable data logging (default: `0'`)

