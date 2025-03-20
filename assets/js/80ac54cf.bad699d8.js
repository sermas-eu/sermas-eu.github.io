"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[1243],{5657:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"deployment/introduction","title":"Introduction","description":"SERMAS deployment is composed of different services. The main reference for the deployment is the sermas-toolkit-api repository.","source":"@site/docs/deployment/introduction.md","sourceDirName":"deployment","slug":"/deployment/introduction","permalink":"/docs/deployment/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/deployment/introduction.md","tags":[],"version":"current","sidebarPosition":0.002,"frontMatter":{"sidebar_position":0.002},"sidebar":"tutorialSidebar","previous":{"title":"Deployment","permalink":"/docs/category/deployment"},"next":{"title":"API variables","permalink":"/docs/deployment/api"}}');var i=s(4848),t=s(8453);const r={sidebar_position:.002},d="Introduction",l={},c=[{value:"Internal service communication",id:"internal-service-communication",level:2},{value:"Exposing the development setup",id:"exposing-the-development-setup",level:2},{value:"Configure Caddy proxy",id:"configure-caddy-proxy",level:3},{value:"Expose ports 80 and 443",id:"expose-ports-80-and-443",level:3},{value:"Persist Proxy Data",id:"persist-proxy-data",level:3},{value:"Update URLs",id:"update-urls",level:3},{value:"Advanced deployment configuration",id:"advanced-deployment-configuration",level:2},{value:"API configuration",id:"api-configuration",level:3},{value:"Kiosk configuration",id:"kiosk-configuration",level:3},{value:"Securing the setup",id:"securing-the-setup",level:2},{value:"API",id:"api",level:3},{value:"KIOSK",id:"kiosk",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsxs)(n.p,{children:["SERMAS deployment is composed of different services. The main reference for the deployment is the ",(0,i.jsx)(n.a,{href:"https://github.com/sermas-eu/sermas-toolkit-api",children:"sermas-toolkit-api repository"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It's a docker compose setup with pre-defined defaults to ease the testing of the system on a single machine."}),"\n",(0,i.jsx)(n.h2,{id:"internal-service-communication",children:"Internal service communication"}),"\n",(0,i.jsxs)(n.p,{children:["The SERMAS services need to communicate among them. If you use the aforementioned docker compose setup,\na custom docker network named ",(0,i.jsx)(n.code,{children:"sermas_dev"})," is created and used by all services,\nthat will therefore be able to reach each others using the default URLs.\nTo expose this setup on a public URL you will only need some minor changes (see below)."]}),"\n",(0,i.jsx)(n.p,{children:"The more you depart from the development docker compose setup (for instance deploying the services in\ndifferent machines or using kubernetes), the more you will need to provide the correct urls to each service\n(using environment variables), and ensure the connectivity among them."}),"\n",(0,i.jsx)(n.p,{children:"In the most agnostic configuration, you will have a separate (possibly public) host for each service and you will need\nto properly configure every other service that interact with it."}),"\n",(0,i.jsx)(n.h2,{id:"exposing-the-development-setup",children:"Exposing the development setup"}),"\n",(0,i.jsx)(n.p,{children:"Assuming that you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A server running the default docker compose setup, reachable from the internet on ports 80 and 443"}),"\n",(0,i.jsxs)(n.li,{children:["A public domain pointing to that server, for example ",(0,i.jsx)(n.code,{children:"mysermas.com"})]}),"\n",(0,i.jsx)(n.li,{children:"A Letsencrypt TLS setup, or TLS/SSL server certificates"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then you need to:"}),"\n",(0,i.jsx)(n.h3,{id:"configure-caddy-proxy",children:"Configure Caddy proxy"}),"\n",(0,i.jsxs)(n.p,{children:["To let Caddy proxy handle the SSL certificates and the traffic pointed at your domain,\nadd the following block at the end of your ",(0,i.jsx)(n.code,{children:"Caddyfile"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Public endpoints\nhttp://mysermas.com, https://mysermas.com {\n\n  log {\n    output stdout\n    level debug\n  }\n\n  route /mqtt* {\n    uri strip_prefix /mqtt\n    reverse_proxy mqtt:1884\n  }\n\n  route /.well-known/sermas.json {\n    rewrite /.well-known/sermas.json /api/.well-known/sermas.json\n  }\n\n  route /keycloak* {\n    reverse_proxy keycloak:8080\n  }\n\n  route /api* {\n    reverse_proxy api:3000\n  }\n  \n  route /* {\n    reverse_proxy kiosk:3000\n  }\n\n}\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["NOTE: Depending on your TLS setup, you might need to specify also a ",(0,i.jsx)(n.a,{href:"https://caddyserver.com/docs/caddyfile/directives/tls",children:"tls directive"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"expose-ports-80-and-443",children:"Expose ports 80 and 443"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following lines to the ",(0,i.jsx)(n.code,{children:"proxy"})," service of your ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file,\nso that the traffic entering ports 80 and 443 reaches Caddy:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  proxy:\n    # ...\n    ports:\n      - 8080:8080\n      - 80:80\n      - 443:443\n"})}),"\n",(0,i.jsx)(n.h3,{id:"persist-proxy-data",children:"Persist Proxy Data"}),"\n",(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.em,{children:"Letsencrypt"})," or another similar services, you need to persist\nthe SSL server certificate between container restarts.\nIn order to do so, add the following volume to the ",(0,i.jsx)(n.code,{children:"proxy"})," service of your ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  proxy:\n    # ...\n    volumes:\n      - ./data/caddy:/data\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-urls",children:"Update URLs"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following lines to the ",(0,i.jsx)(n.code,{children:"api"})," and ",(0,i.jsx)(n.code,{children:"kiosk"})," services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  api:\n    # ...\n    environment:\n      - ENV_PATH=/config/.env\n      - CONFIG_BASEPATH=/config\n      - API_URL=https://mysermas.com/api\n\n  kiosk:\n    # ...\n    environment:\n      - PUBLIC_TOOLKIT_URL=https://mysermas.com\n"})}),"\n",(0,i.jsx)(n.h2,{id:"advanced-deployment-configuration",children:"Advanced deployment configuration"}),"\n",(0,i.jsx)(n.p,{children:"Follow this section if you deploy the SERMAS services under URLs different from the default ones."}),"\n",(0,i.jsx)(n.h3,{id:"api-configuration",children:"API configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Read here for the ",(0,i.jsx)(n.a,{href:"/docs/deployment/api",children:"API env configurations"})," options."]}),"\n",(0,i.jsx)(n.h3,{id:"kiosk-configuration",children:"Kiosk configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The Kiosk is a browser-based web application. It uses camera and video access, thus it require a ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts",children:"secure context"})," to work."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, it works on ",(0,i.jsx)(n.code,{children:"localhost:8080"}),". ",(0,i.jsx)(n.code,{children:"localhost"})," is considered a secure context mostly for development activities."]}),"\n",(0,i.jsx)(n.p,{children:"To serve the kiosk on the network or over a website, we need to add some additional configuration."}),"\n",(0,i.jsxs)(n.p,{children:["Follow the configuration needed to serve from an IP in the local network. We will use ",(0,i.jsx)(n.code,{children:"sermas.lan"})," as a placeholder (but could be an IP)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PRIVATE_API_BASE_URL=http://sermas.lan:8080/api"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PUBLIC_API_BASE_URL=http://sermas.lan:8080/api"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PUBLIC_AUTH_URL=http://sermas.lan:8080/keycloak"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PUBLIC_MQTT_BASE_URL=sermas.lan:8080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PUBLIC_TOOLKIT_URL=http://sermas.lan:8080"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," The kiosk on a local network should still run in ",(0,i.jsx)(n.code,{children:"localhost"})," to ensure microphone and camera access. Alternatively, the system should be exposed on the web over https."]}),"\n",(0,i.jsx)(n.h2,{id:"securing-the-setup",children:"Securing the setup"}),"\n",(0,i.jsx)(n.p,{children:"Some defaults are used to simplify the development but should be changed in real deployments."}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_REALM"})," set the keycloack realm (default: sermas-local)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_CLIENT_ID"})," set the keycloack client ID used for administrative purposes (default: platform)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_SECRET"})," set the keycloack client password used for administrative purposes (default: platform)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ADMIN_SERVICE_ACCOUNT_USERNAME"})," set the keycloack admin user (default: admin)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ADMIN_SERVICE_ACCOUNT_PASSWORD"})," set the keycloack admin password (default: admin)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"kiosk",children:"KIOSK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PRIVATE_AUTH_CLIENT_ID=platform"})," should match API ",(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_CLIENT_ID"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PRIVATE_AUTH_CLIENT_SECRET=platform"})," should match API ",(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_CLIENT_SECRET"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PUBLIC_AUTH_REALM"})," should match API ",(0,i.jsx)(n.code,{children:"AUTH_KEYCLOAK_REALM"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(6540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);