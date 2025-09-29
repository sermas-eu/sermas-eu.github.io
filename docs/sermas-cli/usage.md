---
sidebar_position: 20
---

# Usage

- <a href="#sermas-cli">SERMAS CLI overview</a>

- <a href="#sermas-cli--app">Manage applications</a>

  - <a href="#sermas-cli--app--admin">Administer applications</a>

  - <a href="#sermas-cli--app--admin--export">Export applications</a>

  - <a href="#sermas-cli--app--admin--import">Import applications</a>

  - <a href="#sermas-cli--app--admin--remove">Delete applications</a>

  - <a href="#sermas-cli--app--batch">Run chats in batch to validate interactions</a>

  - <a href="#sermas-cli--app--chat">Chat with an agent</a>

  - <a href="#sermas-cli--app--init">Create a new application structure</a>

  - <a href="#sermas-cli--app--list">List user applications</a>

  - <a href="#sermas-cli--app--remove">Delete an application</a>

  - <a href="#sermas-cli--app--save">Create a new application</a>

  - <a href="#sermas-cli--app--select">Select an application</a>

  - <a href="#sermas-cli--app--sub">Subscribe to a topic</a>

  - <a href="#sermas-cli--app--token">Manage applications token</a>

  - <a href="#sermas-cli--app--token--get">Retrieve an app token</a>

  - <a href="#sermas-cli--app--update">Update an new application</a>
- <a href="#sermas-cli--auth">Handle users and authentication</a>

  - <a href="#sermas-cli--auth--admin">Manage users</a>

  - <a href="#sermas-cli--auth--admin--import">Import users</a>

  - <a href="#sermas-cli--auth--login">Login and obtain user credentials</a>

  - <a href="#sermas-cli--auth--token">Retrieve a user token</a>

  - <a href="#sermas-cli--auth--whoami">Show the user JWT information</a>
- <a href="#sermas-cli--completion">Generate bash completion</a>

- <a href="#sermas-cli--dialogue">Interact with dialogue models</a>

  - <a href="#sermas-cli--dialogue--models">List available models</a>
- <a href="#sermas-cli--docs-gen">Generate markdown documentation</a>

- <a href="#sermas-cli--platform">Manage platform</a>

  - <a href="#sermas-cli--platform--module">Manage platform modules</a>

  - <a href="#sermas-cli--platform--module--add">Add or update a platform module</a>
- <a href="#sermas-cli--session">Handle sessions</a>

  - <a href="#sermas-cli--session--history">Retrieve a chat history by session ID</a>

  - <a href="#sermas-cli--session--search">Retrieve a chat history by app ID</a>
- <a href="#sermas-cli--stats">Stats for the sermas api</a>

  - <a href="#sermas-cli--stats--get">Get stats</a>

### Manage and interact with the SERMAS Toolkit API
`sermas-cli [options] [command]`

#### Options:
- `-V, --version` output the version number
- `-l, --log-level <level>` Set log level (choices: &quot;error&quot;, &quot;warn&quot;, &quot;info&quot;, &quot;http&quot;, &quot;verbose&quot;, &quot;debug&quot;, &quot;silly&quot;, default: &quot;info&quot;, env: LOG_LEVEL)
- `-j, --json` Return as JSON output. This option will disable interactive prompts. (env: OUTPUT_JSON)
- `-y, --yaml` Return as YAML output. This option will disable interactive prompts. (env: OUTPUT_YAML)
- `-o, --output [format]` Return as parsable output. This option will disable interactive prompts. (choices: &quot;json&quot;, &quot;yaml&quot;, preset: &quot;json&quot;, env: OUTPUT)


#### Commands:
- `stats [options]` stats for the sermas api
- `session` handle sessions
- `platform` manage platform
- `dialogue` interact with dialogue models
- `auth` handle users and authentication
- `app` manage applications
- `docs-gen` generate markdown documentation
- `completion` generate bash completion

### <a name="sermas-cli--app"></a>Manage applications
`sermas-cli app [options] [command]`

#### Commands:
- `update <path>` Update an new application
- `select [appId]` Select an application
- `sub <topic...>` Subscribe to a topic
- `save [options] [name]` Create a new application
- `remove [options] [appId]` Delete an application
- `list` List user applications
- `init [options] <path>` Create a new application structure
- `chat [options] [appId]` Chat with an agent
- `batch [options] [path]` Run chats in batch to validate interactions
- `token` manage applications token
- `admin` administer applications

### <a name="sermas-cli--app--admin"></a>Administer applications
`sermas-cli app admin [options] [command]`

#### Commands:
- `remove <appId...>` Delete applications
- `import [options] <dirpath>` import applications
- `export [options] [filepath]` export applications

### <a name="sermas-cli--app--admin--export"></a>Export applications
`sermas-cli app admin export [options] [filepath]`

#### Arguments:
- `filepath` File where to save the export. Leave empty to print to stdout


#### Options:
- `-n, --filter-name [filterName]` Filter applications with name matching the provided filter
- `-id, --filter-id [filterName]` Filter applications with id matching the provided filter

### <a name="sermas-cli--app--admin--import"></a>Import applications
`sermas-cli app admin import [options] <dirpath>`

#### Arguments:
- `dirpath` The repository containing applications structures to import


#### Options:
- `-s, --skip-clients` Skip the update of the authorization clients and only update the application. Defaults to false
- `-u, --skip-upload` Skip upload of the repository files. Default to false
- `-f, --filter [filterName]` Import only applications with a directory name matching the provided filter. Provide a list separated by comma.
- `-iw, --import-websites` Import RAG scraping the website list in the app configuration

### <a name="sermas-cli--app--admin--remove"></a>Delete applications
`sermas-cli app admin remove [options] <appId...>`

#### Arguments:
- `appId` Applications ID

### <a name="sermas-cli--app--batch"></a>Run chats in batch to validate interactions
`sermas-cli app batch [options] [path]`

#### Arguments:
- `path` Path to load chat definitions


#### Options:
- `-n, --name <string...>` Name of the batch to run (can be repeated)
- `-o, --output <string>` Output path where to store results
- `-f, --only-failed` Store only failed results
- `-s, --show-chat` Show chat messages
- `-p, --parallelize <number>` Parallelize tests (default: 1)

### <a name="sermas-cli--app--chat"></a>Chat with an agent
`sermas-cli app chat [options] [appId]`

#### Arguments:
- `appId` Reference to an application or the selected one will be used


#### Options:
- `-l, --language [language]` Language used in the format `en-US` (choices: &quot;es-ES&quot;, &quot;pt-PT&quot;, &quot;it-IT&quot;, &quot;de-DE&quot;, &quot;en-GB&quot;, &quot;fr-FR&quot;, default: &quot;en-GB&quot;)
- `-m, --message [message]` Message to send to the avatar

### <a name="sermas-cli--app--init"></a>Create a new application structure
`sermas-cli app init [options] <path>`

#### Arguments:
- `path` Destination path


#### Options:
- `-f, --force` Force creation, overwriting the directory if it exists

### <a name="sermas-cli--app--list"></a>List user applications
`sermas-cli app list [options]`
### <a name="sermas-cli--app--remove"></a>Delete an application
`sermas-cli app remove [options] [appId]`

#### Arguments:
- `appId` Application ID


#### Options:
- `--public` Save credentials locally

### <a name="sermas-cli--app--save"></a>Create a new application
`sermas-cli app save [options] [name]`

#### Arguments:
- `name` Application name


#### Options:
- `--public` Expose as a public application

### <a name="sermas-cli--app--select"></a>Select an application
`sermas-cli app select [options] [appId]`

#### Arguments:
- `appId` Application ID

### <a name="sermas-cli--app--sub"></a>Subscribe to a topic
`sermas-cli app sub [options] <topic...>`

#### Arguments:
- `topic` The topic(s) to subscribe in the form &#039;app/&lt;appId&gt;/resource/scope[/more]&#039;. Specify more topics separated by space. Wildcard are supported.

### <a name="sermas-cli--app--token"></a>Manage applications token
`sermas-cli app token [options] [command]`

#### Commands:
- `get` retrieve an app token

### <a name="sermas-cli--app--token--get"></a>Retrieve an app token
`sermas-cli app token get [options]`
### <a name="sermas-cli--app--update"></a>Update an new application
`sermas-cli app update [options] <path>`

#### Arguments:
- `path` a JSON with one or more application definition

### <a name="sermas-cli--auth"></a>Handle users and authentication
`sermas-cli auth [options] [command]`

#### Commands:
- `whoami [options]` Show the user JWT information
- `token` retrieve a user token
- `login [options] [username] [password]` Login and obtain user credentials
- `admin` manage users

### <a name="sermas-cli--auth--admin"></a>Manage users
`sermas-cli auth admin [options] [command]`

#### Commands:
- `import <file>` import users

### <a name="sermas-cli--auth--admin--import"></a>Import users
`sermas-cli auth admin import [options] <file>`

#### Arguments:
- `file` A file with the list of users to import

### <a name="sermas-cli--auth--login"></a>Login and obtain user credentials
`sermas-cli auth login [options] [username] [password]`

#### Arguments:
- `username` Your username
- `password` Your password


#### Options:
- `--saveLocally` Save credentials locally

### <a name="sermas-cli--auth--token"></a>Retrieve a user token
`sermas-cli auth token [options]`
### <a name="sermas-cli--auth--whoami"></a>Show the user JWT information
`sermas-cli auth whoami [options]`

#### Options:
- `--token` Return the JWT token

### <a name="sermas-cli--completion"></a>Generate bash completion
`sermas-cli completion [options]`
### <a name="sermas-cli--dialogue"></a>Interact with dialogue models
`sermas-cli dialogue [options] [command]`

#### Commands:
- `models` List available models

### <a name="sermas-cli--dialogue--models"></a>List available models
`sermas-cli dialogue models [options]`
### <a name="sermas-cli--docs-gen"></a>Generate markdown documentation
`sermas-cli docs-gen [options]`
### <a name="sermas-cli--platform"></a>Manage platform
`sermas-cli platform [options] [command]`

#### Commands:
- `module` manage platform modules

### <a name="sermas-cli--platform--module"></a>Manage platform modules
`sermas-cli platform module [options] [command]`

#### Commands:
- `add [openapiSpec]` Add or update a platform module

### <a name="sermas-cli--platform--module--add"></a>Add or update a platform module
`sermas-cli platform module add [options] [openapiSpec]`

#### Arguments:
- `openapiSpec` Module Open API specification URL

### <a name="sermas-cli--session"></a>Handle sessions
`sermas-cli session [options] [command]`

#### Commands:
- `search [options] [appId]` Retrieve a chat history by app ID
- `history [appId] [sessionId]` Retrieve a chat history by session ID

### <a name="sermas-cli--session--history"></a>Retrieve a chat history by session ID
`sermas-cli session history [options] [appId] [sessionId]`

#### Arguments:
- `appId` The appId reference
- `sessionId` The sessionId to retrieve

### <a name="sermas-cli--session--search"></a>Retrieve a chat history by app ID
`sermas-cli session search [options] [appId]`

#### Arguments:
- `appId` The appId reference


#### Options:
- `-l, --limit [limit]` Limit the number of results. Defaults to 10 (default: &quot;10&quot;)
- `--from [from]` From date
- `--to [to]` To date
- `-d, --dump [path]` Export session contents as yaml files to path
- `-s, --stats` Export also stats as yaml, depends on --dump
- `-f, --dump-format [format]` history format (raw or simple). Default to simple (default: &quot;simple&quot;)
- `-s, --skip-empty` skip empty session, where the user has not interacted. default true (default: true)
- `-p, --print` print history to screen (default: false)

### <a name="sermas-cli--stats"></a>Stats for the sermas api
`sermas-cli stats [options] [command]`

#### Options:
- `--since <iso_datetime|timestamp_in_ms|interval_string>` collect stats since this UTC moment. Also accepts XX[d|h|m|s] intervals like &#039;10m&#039;, &#039;30s&#039;, etc. (default: &quot;60s&quot;)
- `--until <iso_datetime|timestamp_in_ms>` collect stats until this UTC moment. Defaults to now.
- `--output-file <file_path>` Save stats in this CSV file


#### Commands:
- `get` get stats

### <a name="sermas-cli--stats--get"></a>Get stats
`sermas-cli stats get [options]`