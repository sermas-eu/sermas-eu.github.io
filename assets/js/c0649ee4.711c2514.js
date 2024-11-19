"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[981],{6735:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>t,contentTitle:()=>r,default:()=>_,frontMatter:()=>s,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"toolkit-api/configuration","title":"Configuration","description":"The Toolkit API can be configured using different sets of environment variables","source":"@site/docs/toolkit-api/configuration.md","sourceDirName":"toolkit-api","slug":"/toolkit-api/configuration","permalink":"/docs/toolkit-api/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/toolkit-api/configuration.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Toolkit API","permalink":"/docs/category/toolkit-api"},"next":{"title":"ROS Proxy","permalink":"/docs/category/ros-proxy"}}');var n=i(4848),a=i(8453);const s={sidebar_position:10},r="Configuration",t={},o=[{value:"IMPORT_USER",id:"import_user",level:4},{value:"API_URL",id:"api_url",level:4},{value:"API_URL_INTERNAL",id:"api_url_internal",level:4},{value:"AUTH_KEYCLOAK_URL",id:"auth_keycloak_url",level:4},{value:"AUTH_KEYCLOAK_REALM",id:"auth_keycloak_realm",level:4},{value:"AUTH_KEYCLOAK_CLIENT_ID",id:"auth_keycloak_client_id",level:4},{value:"AUTH_KEYCLOAK_SECRET",id:"auth_keycloak_secret",level:4},{value:"ADMIN_SERVICE_ACCOUNT_USERNAME",id:"admin_service_account_username",level:4},{value:"ADMIN_SERVICE_ACCOUNT_PASSWORD",id:"admin_service_account_password",level:4},{value:"AUTH_KEYCLOAK_ADMIN_CLIENT_ID",id:"auth_keycloak_admin_client_id",level:4},{value:"AUTH_KEYCLOAK_ADMIN_REALM",id:"auth_keycloak_admin_realm",level:4},{value:"AUTH_KEYCLOAK_SYSTEM_CLIENT_ID",id:"auth_keycloak_system_client_id",level:4},{value:"MQTT_URL",id:"mqtt_url",level:4},{value:"REDIS_URL",id:"redis_url",level:4},{value:"CACHE_TTL_SEC",id:"cache_ttl_sec",level:4},{value:"MINIO_URL",id:"minio_url",level:4},{value:"MINIO_ACCESSKEY",id:"minio_accesskey",level:4},{value:"MINIO_SECRETKEY",id:"minio_secretkey",level:4},{value:"REPOSITORY_BUCKET",id:"repository_bucket",level:4},{value:"REPOSITORY_BUCKET_REGION",id:"repository_bucket_region",level:4},{value:"SPEECHBRAIN_URL",id:"speechbrain_url",level:4},{value:"FORCE_LANGUAGE",id:"force_language",level:4},{value:"IMPORT_USERS_FILENAME",id:"import_users_filename",level:4},{value:"ADMIN_USER",id:"admin_user",level:4},{value:"ADMIN_PASSWORD",id:"admin_password",level:4},{value:"ASYNCAPI_PUBLIC_URL",id:"asyncapi_public_url",level:4},{value:"OPENAPI_PUBLIC_URL",id:"openapi_public_url",level:4},{value:"MODULES_IMPORT_PATH",id:"modules_import_path",level:4},{value:"WAKE_WORDS",id:"wake_words",level:4},{value:"CHROMA_URL",id:"chroma_url",level:4},{value:"DEFAULT_MODEL_PATH",id:"default_model_path",level:4},{value:"DEFAULT_BACKGROUND_PATH",id:"default_background_path",level:4},{value:"TRANSLATION_SERVICE",id:"translation_service",level:4},{value:"STT_SERVICE",id:"stt_service",level:4},{value:"TTS_SERVICE",id:"tts_service",level:4},{value:"LLM_SERVICE",id:"llm_service",level:4},{value:"LLM_PRINT_PROMPT",id:"llm_print_prompt",level:4},{value:"LLM_EMBEDDINGS_SERVICE",id:"llm_embeddings_service",level:4},{value:"LLM_EMBEDDINGS_BINARY_QUANTIZATION",id:"llm_embeddings_binary_quantization",level:4},{value:"OPENAI_API_KEY",id:"openai_api_key",level:4},{value:"OPENAI_EMBEDDINGS_MODEL",id:"openai_embeddings_model",level:4},{value:"OPENAI_CHAT_MODELS",id:"openai_chat_models",level:4},{value:"OPENAI_MODEL",id:"openai_model",level:4},{value:"LITELLM_URL",id:"litellm_url",level:4},{value:"OLLAMA_BASEURL",id:"ollama_baseurl",level:4},{value:"OLLAMA_MODEL",id:"ollama_model",level:4},{value:"OLLAMA_CHAT_MODELS",id:"ollama_chat_models",level:4},{value:"GROQ_API_KEY",id:"groq_api_key",level:4},{value:"GROQ_MODEL",id:"groq_model",level:4},{value:"GROQ_CHAT_MODELS",id:"groq_chat_models",level:4},{value:"ANTROPHIC_API_KEY",id:"antrophic_api_key",level:4},{value:"ANTROPHIC_MODEL",id:"antrophic_model",level:4},{value:"ANTROPHIC_MODELS",id:"antrophic_models",level:4},{value:"DATASET_ENABLED",id:"dataset_enabled",level:4}];function c(e){const l={code:"code",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.header,{children:(0,n.jsx)(l.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,n.jsx)(l.p,{children:"The Toolkit API can be configured using different sets of environment variables"}),"\n",(0,n.jsx)(l.h4,{id:"import_user",children:"IMPORT_USER"}),"\n",(0,n.jsxs)(l.p,{children:["default user used when importing apps (default: ",(0,n.jsx)(l.code,{children:"admin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"api_url",children:"API_URL"}),"\n",(0,n.jsxs)(l.p,{children:["public API url (default: ",(0,n.jsx)(l.code,{children:"http://localhost:8080"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"api_url_internal",children:"API_URL_INTERNAL"}),"\n",(0,n.jsxs)(l.p,{children:["Internal API url (default: ",(0,n.jsx)(l.code,{children:"http://127.0.0.1:3000/api"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_url",children:"AUTH_KEYCLOAK_URL"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack endpoint URL (default: ",(0,n.jsx)(l.code,{children:"http://172.17.0.1:8080/keycloak"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_realm",children:"AUTH_KEYCLOAK_REALM"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack realm (default: ",(0,n.jsx)(l.code,{children:"sermas-local"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_client_id",children:"AUTH_KEYCLOAK_CLIENT_ID"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack client ID used for administrative purposes (default: ",(0,n.jsx)(l.code,{children:"platform"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_secret",children:"AUTH_KEYCLOAK_SECRET"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack client password used for administrative purposes (default: ",(0,n.jsx)(l.code,{children:"platform"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"admin_service_account_username",children:"ADMIN_SERVICE_ACCOUNT_USERNAME"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack admin user (default: ",(0,n.jsx)(l.code,{children:"admin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"admin_service_account_password",children:"ADMIN_SERVICE_ACCOUNT_PASSWORD"}),"\n",(0,n.jsxs)(l.p,{children:["set the keycloack admin password (default: ",(0,n.jsx)(l.code,{children:"admin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_admin_client_id",children:"AUTH_KEYCLOAK_ADMIN_CLIENT_ID"}),"\n",(0,n.jsxs)(l.p,{children:["set the admin client used for keycloak configuration (default: ",(0,n.jsx)(l.code,{children:"admin-cli"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_admin_realm",children:"AUTH_KEYCLOAK_ADMIN_REALM"}),"\n",(0,n.jsxs)(l.p,{children:["set the admin realm used for keycloak configuration (default: ",(0,n.jsx)(l.code,{children:"master"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"auth_keycloak_system_client_id",children:"AUTH_KEYCLOAK_SYSTEM_CLIENT_ID"}),"\n",(0,n.jsx)(l.p,{children:"Additonal system clients, separated by comma (default: ``)"}),"\n",(0,n.jsx)(l.h4,{id:"mqtt_url",children:"MQTT_URL"}),"\n",(0,n.jsxs)(l.p,{children:["the mqtt service url (default: ",(0,n.jsx)(l.code,{children:"mqtt"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"redis_url",children:"REDIS_URL"}),"\n",(0,n.jsxs)(l.p,{children:["the redis service url, used for caching (default: ",(0,n.jsx)(l.code,{children:"redis://redis:6379"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"cache_ttl_sec",children:"CACHE_TTL_SEC"}),"\n",(0,n.jsxs)(l.p,{children:["default cache time to live (default: ",(0,n.jsx)(l.code,{children:"24 * 60 * 60"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"minio_url",children:"MINIO_URL"}),"\n",(0,n.jsxs)(l.p,{children:["Url to Minio service or S3 compatible system (default: ",(0,n.jsx)(l.code,{children:"http://minio:9000"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"minio_accesskey",children:"MINIO_ACCESSKEY"}),"\n",(0,n.jsxs)(l.p,{children:["Minio Access key (default: ",(0,n.jsx)(l.code,{children:"minioadmin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"minio_secretkey",children:"MINIO_SECRETKEY"}),"\n",(0,n.jsxs)(l.p,{children:["Minio Secret key (default: ",(0,n.jsx)(l.code,{children:"minioadmin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"repository_bucket",children:"REPOSITORY_BUCKET"}),"\n",(0,n.jsxs)(l.p,{children:["Minio bucket (default: ",(0,n.jsx)(l.code,{children:"sermas-repository"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"repository_bucket_region",children:"REPOSITORY_BUCKET_REGION"}),"\n",(0,n.jsx)(l.p,{children:"Minio region (default: ``)"}),"\n",(0,n.jsx)(l.h4,{id:"speechbrain_url",children:"SPEECHBRAIN_URL"}),"\n",(0,n.jsxs)(l.p,{children:["Url to the speechbrain service (for audio detection) (default: ",(0,n.jsx)(l.code,{children:"http://speechbrain"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"force_language",children:"FORCE_LANGUAGE"}),"\n",(0,n.jsxs)(l.p,{children:["default language to use if not provided, it will be used to translate messages or select a TTS model (default: ",(0,n.jsx)(l.code,{children:"en-GB"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"import_users_filename",children:"IMPORT_USERS_FILENAME"}),"\n",(0,n.jsxs)(l.p,{children:["path to the users.json file (default: ",(0,n.jsx)(l.code,{children:"./users.json"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"admin_user",children:"ADMIN_USER"}),"\n",(0,n.jsxs)(l.p,{children:["default admin username (default: ",(0,n.jsx)(l.code,{children:"admin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"admin_password",children:"ADMIN_PASSWORD"}),"\n",(0,n.jsxs)(l.p,{children:["default admin password (default: ",(0,n.jsx)(l.code,{children:"admin"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"asyncapi_public_url",children:"ASYNCAPI_PUBLIC_URL"}),"\n",(0,n.jsxs)(l.p,{children:["public URL path to mqtt over websocket (default: ",(0,n.jsx)(l.code,{children:"/mqtt"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"openapi_public_url",children:"OPENAPI_PUBLIC_URL"}),"\n",(0,n.jsxs)(l.p,{children:["default path to the open api endpoint (default: ",(0,n.jsx)(l.code,{children:"/"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"modules_import_path",children:"MODULES_IMPORT_PATH"}),"\n",(0,n.jsxs)(l.p,{children:["path to the modules.json file (default: ",(0,n.jsx)(l.code,{children:"./modules.json"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"wake_words",children:"WAKE_WORDS"}),"\n",(0,n.jsxs)(l.p,{children:["wake words for the avatar (default: ",(0,n.jsx)(l.code,{children:"Hello,Hi,Good morning,Ciao"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"chroma_url",children:"CHROMA_URL"}),"\n",(0,n.jsxs)(l.p,{children:["Url to chroma DB (default: ",(0,n.jsx)(l.code,{children:"http://chromadb:8000"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"default_model_path",children:"DEFAULT_MODEL_PATH"}),"\n",(0,n.jsxs)(l.p,{children:["Minio based path to the default avatar glb model (default: ",(0,n.jsx)(l.code,{children:"default/models/default/654cc759f1a79ed2ebab0207.glb"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"default_background_path",children:"DEFAULT_BACKGROUND_PATH"}),"\n",(0,n.jsxs)(l.p,{children:["Minio based path to the default background for the kiosk (default: ",(0,n.jsx)(l.code,{children:"default/backgrounds/default/milad-fakurian-nY14Fs8pxT8-unsplash.jpg"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"translation_service",children:"TRANSLATION_SERVICE"}),"\n",(0,n.jsxs)(l.p,{children:["Provider name to translate messages (default: ",(0,n.jsx)(l.code,{children:"openai"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"stt_service",children:"STT_SERVICE"}),"\n",(0,n.jsxs)(l.p,{children:["Service for Speech to Text (default: ",(0,n.jsx)(l.code,{children:"openai"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"tts_service",children:"TTS_SERVICE"}),"\n",(0,n.jsxs)(l.p,{children:["Service for Text to Speech (default: ",(0,n.jsx)(l.code,{children:"openai"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"llm_service",children:"LLM_SERVICE"}),"\n",(0,n.jsxs)(l.p,{children:["default LLM service to use (supported: openai, groq, ollama) (default: ",(0,n.jsx)(l.code,{children:"openai"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"llm_print_prompt",children:"LLM_PRINT_PROMPT"}),"\n",(0,n.jsxs)(l.p,{children:["Print prompts to console for debug purposes (default: ",(0,n.jsx)(l.code,{children:"0"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"llm_embeddings_service",children:"LLM_EMBEDDINGS_SERVICE"}),"\n",(0,n.jsxs)(l.p,{children:["Embedding service to use (default: ",(0,n.jsx)(l.code,{children:"openai"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"llm_embeddings_binary_quantization",children:"LLM_EMBEDDINGS_BINARY_QUANTIZATION"}),"\n",(0,n.jsxs)(l.p,{children:["Enable binary quantization for embeddings (default: ",(0,n.jsx)(l.code,{children:"0"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"openai_api_key",children:"OPENAI_API_KEY"}),"\n",(0,n.jsx)(l.p,{children:"OpenAI api key (default: ``)"}),"\n",(0,n.jsx)(l.h4,{id:"openai_embeddings_model",children:"OPENAI_EMBEDDINGS_MODEL"}),"\n",(0,n.jsxs)(l.p,{children:["OpenAi Embedding model (default: ",(0,n.jsx)(l.code,{children:"text-embedding-3-small"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"openai_chat_models",children:"OPENAI_CHAT_MODELS"}),"\n",(0,n.jsxs)(l.p,{children:["Supported chat models from OpenAI. Leave empty to allow all available. (default: ",(0,n.jsx)(l.code,{children:"gpt-4o,gpt-4,gpt-4-turbo,gpt-3.5-turbo,gpt-3.5-turbo-16k"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"openai_model",children:"OPENAI_MODEL"}),"\n",(0,n.jsxs)(l.p,{children:["Default OpenAI model used as fallback (default: ",(0,n.jsx)(l.code,{children:"gpt-4o"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"litellm_url",children:"LITELLM_URL"}),"\n",(0,n.jsxs)(l.p,{children:["LiteLLM endpoint URL (default: ",(0,n.jsx)(l.code,{children:"http://litellm"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"ollama_baseurl",children:"OLLAMA_BASEURL"}),"\n",(0,n.jsxs)(l.p,{children:["Url to Ollama (default: ",(0,n.jsx)(l.code,{children:"http://ollama:11434"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"ollama_model",children:"OLLAMA_MODEL"}),"\n",(0,n.jsxs)(l.p,{children:["Default Ollama model used as fallback (default: ",(0,n.jsx)(l.code,{children:"sermas-llama2"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"ollama_chat_models",children:"OLLAMA_CHAT_MODELS"}),"\n",(0,n.jsxs)(l.p,{children:["Supported chat models from Ollama. Leave empty to allow all available. (default: ",(0,n.jsx)(l.code,{children:"sermas-llama2:latest,mistral:latest"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"groq_api_key",children:"GROQ_API_KEY"}),"\n",(0,n.jsx)(l.p,{children:"Groq api key (default: ``)"}),"\n",(0,n.jsx)(l.h4,{id:"groq_model",children:"GROQ_MODEL"}),"\n",(0,n.jsxs)(l.p,{children:["Default Groq model used as fallback (default: ",(0,n.jsx)(l.code,{children:"mixtral-8x7b-32768"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"groq_chat_models",children:"GROQ_CHAT_MODELS"}),"\n",(0,n.jsxs)(l.p,{children:["Supported chat models from Groq. Leave empty to allow all available. (default: ",(0,n.jsx)(l.code,{children:"gemma-7b-it,llama2-70b-4096,llama3-70b-8192,llama3-8b-8192,mixtral-8x7b-32768"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"antrophic_api_key",children:"ANTROPHIC_API_KEY"}),"\n",(0,n.jsx)(l.p,{children:"Antrophic api key (default: ``)"}),"\n",(0,n.jsx)(l.h4,{id:"antrophic_model",children:"ANTROPHIC_MODEL"}),"\n",(0,n.jsxs)(l.p,{children:["Default Antrophic model used as fallback (default: ",(0,n.jsx)(l.code,{children:"claude-3-haiku-20240307"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"antrophic_models",children:"ANTROPHIC_MODELS"}),"\n",(0,n.jsxs)(l.p,{children:["Supported chat models from Antrophic. Leave empty to allow all available. (default: ",(0,n.jsx)(l.code,{children:"claude-3-opus-20240229,claude-3-sonnet-20240229,claude-3-haiku-20240307"}),")"]}),"\n",(0,n.jsx)(l.h4,{id:"dataset_enabled",children:"DATASET_ENABLED"}),"\n",(0,n.jsxs)(l.p,{children:["Enable data logging (default: ",(0,n.jsx)(l.code,{children:"0"}),")"]})]})}function _(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,l,i)=>{i.d(l,{R:()=>s,x:()=>r});var d=i(6540);const n={},a=d.createContext(n);function s(e){const l=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),d.createElement(a.Provider,{value:l},e.children)}}}]);