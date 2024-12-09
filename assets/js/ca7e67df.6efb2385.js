"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[9972],{9697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"custom-integrations-and-extensions/restful-api","title":"RESTful API","description":"The RESTful API is described according to the OpenAPI specification (formerly known as Swagger specification).","source":"@site/docs/custom-integrations-and-extensions/10-restful-api.md","sourceDirName":"custom-integrations-and-extensions","slug":"/custom-integrations-and-extensions/restful-api","permalink":"/docs/custom-integrations-and-extensions/restful-api","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/custom-integrations-and-extensions/10-restful-api.md","tags":[],"version":"current","sidebarPosition":0.0001,"frontMatter":{"sidebar_position":0.0001},"sidebar":"tutorialSidebar","previous":{"title":"Key concepts","permalink":"/docs/custom-integrations-and-extensions/key-concepts"},"next":{"title":"MQTT Broker","permalink":"/docs/custom-integrations-and-extensions/mqtt-broker"}}');var s=t(4848),o=t(8453);const r={sidebar_position:1e-4},a="RESTful API",c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication",id:"client-authentication",level:3},{value:"User authentication",id:"user-authentication",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"restful-api",children:"RESTful API"})}),"\n",(0,s.jsxs)(n.p,{children:["The RESTful API is described according to the ",(0,s.jsx)(n.a,{href:"https://spec.openapis.org/oas/latest.html",children:"OpenAPI specification"})," (formerly known as Swagger specification)."]}),"\n",(0,s.jsxs)(n.p,{children:["Interactive documentation is included in the toolkit and it is browsable at ",(0,s.jsx)(n.a,{href:"http://localhost:8080/api/swagger",children:"http://localhost:8080/api/swagger"})," after starting the SERMAS API."]}),"\n",(0,s.jsx)(n.p,{children:"The RESTful API allows you to retrieve all information and perform any operations on the platform, apart from receiving event notifications."}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["The authentication is token-based (JWT): all requests to restricted API endpoints must contain an ",(0,s.jsx)(n.code,{children:"Authorization"})," header of the form ",(0,s.jsx)(n.code,{children:"Bearer <TOKEN>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Two different methods exist for client (machine-to-machine) and user (human-to-machine) authentication."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTE: All examples here are in Python using the ",(0,s.jsx)(n.code,{children:"requests"})," package. Check the SEMAS API Client for TypeScript implementation."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"client-authentication",children:"Client authentication"}),"\n",(0,s.jsxs)(n.p,{children:["Call the ",(0,s.jsx)(n.code,{children:"access_token"})," endpoint providing your ",(0,s.jsx)(n.code,{children:"appId"})," and the client credentials."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, client are configured as modules, in the ",(0,s.jsx)(n.code,{children:"modules.yaml"})," settings file. The ",(0,s.jsx)(n.code,{children:"supports"})," attribute\ndescribes the client access permissions in form of source scopes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- moduleId: <client ID>\n  secret: <client secret>\n  supports:\n  - dialogue\n  - detection\n  - ui\n  - session\n  - platform\n"})}),"\n",(0,s.jsxs)(n.p,{children:["New clients can also be created using the ",(0,s.jsx)(n.code,{children:"api/platform/app/{appId}/client"})," endpoint."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import datetime\nimport urllib.parse\nimport os\nimport requests\n\nurl = 'http://localhost:8080/api/platform/token/access_token'\npayload = {\n  'appId': 'my_app',\n  'clientId': 'my-app-client',\n  'clientSecret': 'secret-password', \t\n}\nverify_tls = True\n    if os.getenv('ENV') == 'development' or url.startswith('http:'):\n        verify_tls = False\nnow = datetime.datetime.now(datetime.timezone.utc)\n\nresponse = requests.post(url, json=payload, verify=verify_tls)\n\nresponse.raise_for_status()  # Throws exception in case of HTTP error\ncontent = response.json()\naccess_token = content['access_token']\nrefresh_token = content['refresh_token']\nnow = datetime.datetime.now(datetime.timezone.utc)\ntoken_expiration = now + datetime.timedelta(seconds=content['expires_in'])\n\n# Set authorization header\nheaders = {\n  'Authorization': f'Bearer {access_token}'\n}\n\n# Make an authenticated request\nurl = 'http://localhost:8080/api/auth/whoami'\nresponse = requests.get(url, headers=headers)\n# ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After the ",(0,s.jsx)(n.code,{children:"token_expiration"})," time has passed, the token must be renewed calling ",(0,s.jsx)(n.code,{children:"api/platform/token/refresh_token"})]}),"\n",(0,s.jsx)(n.h3,{id:"user-authentication",children:"User authentication"}),"\n",(0,s.jsxs)(n.p,{children:["When you need to model the direct interaction of a user with the platform use the ",(0,s.jsx)(n.code,{children:"login"})," endpoint."]}),"\n",(0,s.jsxs)(n.p,{children:["New users can be created using the ",(0,s.jsx)(n.code,{children:"api/auth/admin/user"})," or ",(0,s.jsx)(n.code,{children:"api/auth/admin/import"})," endpoints, or\nwith the CLI command ",(0,s.jsx)(n.code,{children:"sermas-cli auth admin import <file>"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"\nurl = 'http://localhost:8080/api/auth/login'\nnow = datetime.datetime.now(datetime.timezone.utc)\npayload = {\n  'appId': 'my_app',\n  'ts': now.isoformat(),\n  'username': 'ENTER_USER',\n  'password': 'ENTER_PASSWORD'\n}\n\n# ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The refresh token endpoint for user authentication is ",(0,s.jsx)(n.code,{children:"api/auth/refresh"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);