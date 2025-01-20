"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[4195],{4464:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"applications/introduction","title":"Introduction","description":"An application (or app) wraps together the configuration for different components available in the SERMAS Toolkit.","source":"@site/docs/applications/introduction.md","sourceDirName":"applications","slug":"/applications/introduction","permalink":"/docs/applications/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/applications/introduction.md","tags":[],"version":"current","sidebarPosition":0.002,"frontMatter":{"sidebar_position":0.002},"sidebar":"tutorialSidebar","previous":{"title":"Applications","permalink":"/docs/category/applications"},"next":{"title":"Settings","permalink":"/docs/applications/app-settings"}}');var t=n(4848),o=n(8453);const l={sidebar_position:.002},c="Introduction",d={},r=[{value:"Application details",id:"application-details",level:2},{value:"Modules",id:"modules",level:2},{value:"Platform-level modules",id:"platform-level-modules",level:3},{value:"Repository",id:"repository",level:2},{value:"Avatars",id:"avatars",level:3},{value:"Backgrounds",id:"backgrounds",level:3},{value:"Documents",id:"documents",level:3},{value:"Clients",id:"clients",level:2}];function a(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(i.p,{children:"An application (or app) wraps together the configuration for different components available in the SERMAS Toolkit."}),"\n",(0,t.jsx)(i.h2,{id:"application-details",children:"Application details"}),"\n",(0,t.jsx)(i.p,{children:"An application is composed of base information such as"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"appId"})," A unique identifier"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"name"})," The name for the app"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"description"})," Description text for the app"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"public"})," flag if the application can be listed (without authorization)"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"modules",children:"Modules"}),"\n",(0,t.jsx)(i.p,{children:"Defines the modules the application can access within the Toolkit."}),"\n",(0,t.jsx)(i.p,{children:"Each module definition will enable client credentials to be used for JWT access token retrieval."}),"\n",(0,t.jsxs)(i.p,{children:["The client will use the ",(0,t.jsx)(i.code,{children:"moduleId"})," as client id and ",(0,t.jsx)(i.code,{children:"secret"})," as client secret. If ",(0,t.jsx)(i.code,{children:"secret"})," is not defined, it will be generated randomly."]}),"\n",(0,t.jsxs)(i.p,{children:["The client can then be used to access the Toolkit API to interact with the modules specified in the ",(0,t.jsx)(i.code,{children:"supports"})," list."]}),"\n",(0,t.jsx)(i.p,{children:"An example of a module definition follow:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"- moduleId: <id of the module>\n  secret: <module secret>\n  supports:\n  - dialogue\n  - detection\n  - ui\n  - session\n  - platform\n"})}),"\n",(0,t.jsx)(i.h3,{id:"platform-level-modules",children:"Platform-level modules"}),"\n",(0,t.jsxs)(i.p,{children:["While some modules are natively part of the Toolkit, developers may add new modules by providing the details in the ",(0,t.jsx)(i.code,{children:"config"})," field of the definition."]}),"\n",(0,t.jsx)(i.p,{children:"This will lookup and proxy requests toward an OpenAPI / AsyncAPI service and expose the signature as part of the main Toolkit API."}),"\n",(0,t.jsx)(i.h2,{id:"repository",children:"Repository"}),"\n",(0,t.jsx)(i.p,{children:"The repository configuration collects configuration defining specific assetts to be used by the application"}),"\n",(0,t.jsx)(i.h3,{id:"avatars",children:"Avatars"}),"\n",(0,t.jsx)(i.p,{children:"Define an avatar, which is a virtual representation of an Agent."}),"\n",(0,t.jsx)(i.p,{children:"The relevant fields follows:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," Unique id of the avatar, used to select it in the settings"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"name"})," Friendly name of the avatar"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," 3D object asset path (suppoerted format are ",(0,t.jsx)(i.code,{children:"glb"})," or ",(0,t.jsx)(i.code,{children:"fbx"}),"), loaded via the assets API e.g. ",(0,t.jsx)(i.code,{children:"avatars/avatar1.glb"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"gender"}),": M or F, used in answer generation and for TTS model selection."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"prompt"})," Dedicated prompt used to define, characterize or constrain the avatar personality"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"camera"}),", ",(0,t.jsx)(i.code,{children:"cameraMobile"})," defines the camera position in the kiosk to position the avatar."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"backgrounds",children:"Backgrounds"}),"\n",(0,t.jsx)(i.p,{children:"Provides a background image in the kiosk."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"id"})," background identifier"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," relative path to the assets API"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"name"})," Friendly name of the backgroun"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"documents",children:"Documents"}),"\n",(0,t.jsxs)(i.p,{children:["List of documents to import in the RAG pipeline. The Toolkit supports ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.strong,{children:"only text files"})}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The text files are vectorized following three strategies that can be specified in the ",(0,t.jsx)(i.code,{children:"metadata.options.parser"})," field."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"sentence"})," (default) chunck the file text by sentences and handle them as documents."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"single-line"})," assume each single line (",(0,t.jsx)(i.code,{children:"\\n"}),") in a text file is a document"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"double-line"})," assume each double line (",(0,t.jsx)(i.code,{children:"\\n\\n"}),") in a text file is a document"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsxs)(i.p,{children:["Clients allow third-party access to the API. Each client defines a ",(0,t.jsx)(i.code,{children:"clientId"})," and ",(0,t.jsx)(i.code,{children:"secret"})," used to obtain a temporary JWT token."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"permissions"})," defines the list of ",(0,t.jsx)(i.code,{children:"<resource>.<scope>"})," that client is allowed to access."]}),"\n",(0,t.jsxs)(i.p,{children:["As example, ",(0,t.jsx)(i.code,{children:"dialogue"})," or ",(0,t.jsx)(i.code,{children:"dialogue.*"})," allow to access all the dialoge related functionalities."]}),"\n",(0,t.jsxs)(i.p,{children:["The list of resources and scopes can be found in the API at\n",(0,t.jsx)(i.code,{children:"http://localhost:8080/api/swagger#/PLATFORM/getSettings"})," assuming  you have a local instance running."]}),"\n",(0,t.jsxs)(i.p,{children:["Otherwise you can derive the list from the ",(0,t.jsx)(i.a,{href:"https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.topic.ts",children:"topics in the source code"})," (the pattern is ",(0,t.jsx)(i.code,{children:"app/:appId/<resource>/<scope>"}),")"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var s=n(6540);const t={},o=s.createContext(t);function l(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);