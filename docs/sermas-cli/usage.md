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

  - <a href="#sermas-cli--app--chat">Chat with an agent</a>

  - <a href="#sermas-cli--app--init">Create a new application structure</a>

  - <a href="#sermas-cli--app--remove">Delete an application</a>

  - <a href="#sermas-cli--app--save">Create a new application</a>

  - <a href="#sermas-cli--app--select">Select an application</a>

  - <a href="#sermas-cli--app--sub">Subscribe to a topic</a>

  - <a href="#sermas-cli--app--token">Manage applications token</a>

  - <a href="#sermas-cli--app--token--get">Retrieve an app token</a>

  - <a href="#sermas-cli--app--update">Update an new application</a>
- <a href="#sermas-cli--auth">Handle users and authentication</a>

  - <a href="#sermas-cli--auth--login">Login and obtain user credentials</a>

  - <a href="#sermas-cli--auth--token">Retrieve a user token</a>

  - <a href="#sermas-cli--auth--whoami">Show the user JWT information</a>
- <a href="#sermas-cli--completion">Generate bash completion</a>

- <a href="#sermas-cli--docs-gen">Generate markdown documentation</a>

- <a href="#sermas-cli--platform">Manage platform</a>

  - <a href="#sermas-cli--platform--module">Manage platform modules</a>

  - <a href="#sermas-cli--platform--module--add">Add or update a platform module</a>

### Manage and interact with the SERMAS Toolkit API
`sermas-cli [options] [command]`

#### Options:
- `-V, --version` output the version number
- `-l, --log-level &lt;level&gt;` Set log level (choices: &quot;error&quot;, &quot;warn&quot;, &quot;info&quot;, &quot;http&quot;, &quot;verbose&quot;, &quot;debug&quot;, &quot;silly&quot;, default: &quot;info&quot;, env: LOG_LEVEL)
- `-j, --json` Return as JSON output. This option will disable interactive prompts. (env: OUTPUT_JSON)
- `-y, --yaml` Return as YAML output. This option will disable interactive prompts. (env: OUTPUT_YAML)
- `-o, --output [format]` Return as parsable output. This option will disable interactive prompts. (choices: &quot;json&quot;, &quot;yaml&quot;, preset: &quot;json&quot;, env: OUTPUT)


#### Commands:
- `platform` manage platform
- `auth` handle users and authentication
- `app` manage applications
- `docs-gen` generate markdown documentation
- `completion` generate bash completion
- `help [command]` display help for command

### <a name="sermas-cli--app"></a>Manage applications
`sermas-cli app [options] [command]`

#### Commands:
- `update &lt;path&gt;` Update an new application
- `sub &lt;topic...&gt;` Subscribe to a topic
- `select [appId]` Select an application
- `save [options] [name]` Create a new application
- `remove [options] [appId]` Delete an application
- `init [options] &lt;path&gt;` Create a new application structure
- `chat [options] [appId] [sessionId]` Chat with an agent
- `token` manage applications token
- `admin` administer applications
- `help [command]` display help for command

### <a name="sermas-cli--app--admin"></a>Administer applications
`sermas-cli app admin [options] [command]`

#### Commands:
- `remove &lt;appId...&gt;` Delete applications
- `import [options] &lt;dirpath&gt;` import applications
- `export [options] [filepath]` export applications
- `help [command]` display help for command

### <a name="sermas-cli--app--admin--export"></a>Export applications
`sermas-cli app admin export [options] [filepath]`

#### Arguments:
- `filepath` File where to save the export. Leave empty to print to stdout


#### Options:
- `-n, --filter-name [filterName]` Filter applications with name matching the provided filter
- `-id, --filter-id [filterName]` Filter applications with id matching the provided filter

### <a name="sermas-cli--app--admin--remove"></a>Delete applications
`sermas-cli app admin remove [options] <appId...>`

#### Arguments:
- `appId` Applications ID

### <a name="sermas-cli--app--admin--import"></a>Import applications
`sermas-cli app admin import [options] <dirpath>`

#### Arguments:
- `dirpath` The repository containing applications structures to import


#### Options:
- `-s, --skip-clients` Skip the update of the authorization clients and only update the application. Defaults to false
- `-u, --skip-upload` Skip upload of the repository files. Default to false
- `-f, --filter [filterName]` Import only applications with a directory name matching the provided filter. Provide a list separated by comma.

### <a name="sermas-cli--app--chat"></a>Chat with an agent
`sermas-cli app chat [options] [appId] [sessionId]`

#### Arguments:
- `appId` Reference to an application or the selected one will be used
- `sessionId` A session ID to reuse or a new one is created


#### Options:
- `-l, --language [language]` Language used in the format `en-US` (choices: &quot;es-ES&quot;, &quot;pt-PT&quot;, &quot;it-IT&quot;, &quot;de-DE&quot;, &quot;en-GB&quot;, &quot;fr-FR&quot;, default: &quot;en-GB&quot;)
- `-g, --gender [gender]` Gender of the avatar (used by TTS) (choices: &quot;F&quot;, &quot;M&quot;, &quot;X&quot;, default: &quot;F&quot;)
- `-m, --llm [llm]` LLM model to use (default: &quot;chatgpt&quot;)

### <a name="sermas-cli--app--init"></a>Create a new application structure
`sermas-cli app init [options] <path>`

#### Arguments:
- `path` Destination path


#### Options:
- `-f, --force` Force creation, overwriting the directory if it exists

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
- `help [command]` display help for command

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
- `help [command]` display help for command

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
### <a name="sermas-cli--docs-gen"></a>Generate markdown documentation
`sermas-cli docs-gen [options]`
### <a name="sermas-cli--platform"></a>Manage platform
`sermas-cli platform [options] [command]`

#### Commands:
- `module` manage platform modules
- `help [command]` display help for command

### <a name="sermas-cli--platform--module"></a>Manage platform modules
`sermas-cli platform module [options] [command]`

#### Commands:
- `add [openapiSpec]` Add or update a platform module
- `help [command]` display help for command

### <a name="sermas-cli--platform--module--add"></a>Add or update a platform module
`sermas-cli platform module add [options] [openapiSpec]`

#### Arguments:
- `openapiSpec` Module Open API specification URL
