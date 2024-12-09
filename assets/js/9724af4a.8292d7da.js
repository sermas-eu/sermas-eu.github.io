"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[8921],{8256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"agent/tools/index","title":"Introduction","description":"LLM Tools in SERMAS are used to trigger specific actions from user requests.","source":"@site/docs/agent/tools/index.md","sourceDirName":"agent/tools","slug":"/agent/tools/","permalink":"/docs/agent/tools/","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/agent/tools/index.md","tags":[],"version":"current","sidebarPosition":0.00002,"frontMatter":{"sidebar_label":"Tools","sidebar_position":0.00002},"sidebar":"tutorialSidebar","previous":{"title":"OpenAI","permalink":"/docs/agent/llm/openai"},"next":{"title":"Tasks","permalink":"/docs/agent/tasks/"}}');var o=s(4848),r=s(8453);const t={sidebar_label:"Tools",sidebar_position:2e-5},l="Introduction",c={},d=[{value:"Tools repositories",id:"tools-repositories",level:2},{value:"Tools granularity",id:"tools-granularity",level:3},{value:"Tool configuration",id:"tool-configuration",level:2},{value:"Tools Parameters (schema)",id:"tools-parameters-schema",level:3},{value:"Request configuration",id:"request-configuration",level:3},{value:"Tool matching event",id:"tool-matching-event",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,o.jsx)(n.p,{children:"LLM Tools in SERMAS are used to trigger specific actions from user requests."}),"\n",(0,o.jsxs)(n.p,{children:["As an example we have tool called ",(0,o.jsx)(n.code,{children:"request for appointment"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If the user ask ",(0,o.jsx)(n.code,{children:"I want an appointment"})," the tool will trigger, creating an internal tool-related event that can be used by other connect systems."]}),"\n",(0,o.jsx)(n.p,{children:"Considering a third-party service connected to the Toolkit API, receiving such event would trigger an agent response offering a list of calendar availability."}),"\n",(0,o.jsx)(n.h2,{id:"tools-repositories",children:"Tools repositories"}),"\n",(0,o.jsx)(n.p,{children:"Tools are grouped by repositories, an aggregation that allow to apply logical operations to control availability of certain tools during an interaction."}),"\n",(0,o.jsx)(n.p,{children:"A repository is composed of the following fields"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"appId"}),"\t",(0,o.jsx)(n.em,{children:"string"})," reference to the application"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sessionId"}),"\t",(0,o.jsx)(n.em,{children:"string"})," Track the interaction session, if available"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"repositoryId"}),"\t",(0,o.jsx)(n.em,{children:"string"})," Unique tools repository ID"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"options"})," Tool repository options dictionary, with the following properties"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"triggerOnce"}),"\t",(0,o.jsx)(n.em,{children:"boolean"})," Trigger one of the tools in the list once, then remove the tools. Useful to offer a list of options and have on selcted."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"exclusive"}),"\t",(0,o.jsx)(n.em,{children:"boolean"})," Alter the normal chat flow, assuming one of the available tools will provide an answer."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"tools"}),"\tTools list"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"tools-granularity",children:"Tools granularity"}),"\n",(0,o.jsx)(n.p,{children:"Tools can be enabled at application level or at session level."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application level"})," tools can trigger anytime during the interaction."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Session level"})," tools can be created, updated or removed during a session, creating more flexibility during the user interaction."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tool-configuration",children:"Tool configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Following the SERMAS CLI structure to configure an application, create a ",(0,o.jsx)(n.code,{children:"tools.yaml"})," file to create your tools."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," Refer to the ",(0,o.jsx)(n.a,{href:"http://localhost:8080/api/swagger#model-AppToolsDTO",children:"OpenAPI model (local link)"})," or ",(0,o.jsx)(n.a,{href:"https://github.com/search?q=repo%3Asermas-eu%2Fsermas-api+AppToolsDTO+path%3A%2F%5Eapps%5C%2Fplatform%5C%2Fsrc%5C%2Fapp%5C%2F%2F&type=code",children:"source code"})," for the full model definition."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:" - name: request-for-appointment\n   description: User need an appointment\n   returnDirect: true\n   skipResponse: true\n"})}),"\n",(0,o.jsx)(n.p,{children:"The field for a tool are as follow"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"})," tool name, used as reference when the tool trigger"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"description"})," additional context used to better match the tool from user message"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"schema"})," a list of parameters to extract from the user context. Described in detail later."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"request"})," configure an HTTP request when a tool trigger, detailed later"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"url"})," API url to call on tool match, defaults to unauthenticated POST if no ",(0,o.jsx)(n.code,{children:"request"}),"  configuration are provided."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"emitter"})," emit an event on the broker, in the form ",(0,o.jsx)(n.code,{children:"resource.scope"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"tools-parameters-schema",children:"Tools Parameters (schema)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"schema"})," field provides a list of parameters to infer from the user messages. Tools are inferred from the chat history, thus can collect different contextual information from the context."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," Parameters collected from the chat history are subject to allucinations and should not be used without proper validation."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"parameter"})," name of the parameter"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"type"})," data type of the parameter, possible options are ",(0,o.jsx)(n.code,{children:"string"}),", ",(0,o.jsx)(n.code,{children:"number"}),", ",(0,o.jsx)(n.code,{children:"boolean"})," and ",(0,o.jsx)(n.code,{children:"object"})," (as key-value dictionary)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"description"})," description of the parameter (currently not used for inference)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ignore"})," indicate if the parameter should be ignored from inference. This is to be used in conjuction with ",(0,o.jsx)(n.code,{children:"value"})," to provide precalculated value"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"value"})," A static value for this parameter. This is useful to popoulate values that are available when creating a session tool."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"request-configuration",children:"Request configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To trigger an HTTP request when a tool matches, the ",(0,o.jsx)(n.code,{children:"url"})," and ",(0,o.jsx)(n.code,{children:"request"})," field should be configured."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"url"})," is an http endpoint to call. By default a POST request with the tool triggering details will be sent."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"request"})," can provide those details"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"description"})," Provide details to trigger an HTTP API call on tool match"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"auth"}),"\tSupported options are ",(0,o.jsx)(n.code,{children:"basic"}),", ",(0,o.jsx)(n.code,{children:"bearer"})," and ",(0,o.jsx)(n.code,{children:"module"}),".  Defaults to module if not specified."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"basic"}),"\tan object with ",(0,o.jsx)(n.code,{children:"username"})," and ",(0,o.jsx)(n.code,{children:"password"})," fields"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bearer"}),"\tand object with the following fields"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clientType"}),' Supported options are "client_credentials" or "password".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clientId"}),' Client ID. Required for client type "client_credentials"']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clientSecret"}),' Client secret. Required for client type "client_credentials"']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"username"}),'  Required for client type "password"']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"password"}),'  Required for client type "password"']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"audience"})," token audience"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tokenUrl"})," URL to call to retrieve the access token"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"refreshUrl"})," URL to call to refresh the token before expiration"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"moduleId"})," Reference to one of the modules (or clients) ids available in the app"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"headers"}),"\ta key-value dictionary with additional headers"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tool-matching-event",children:"Tool matching event"}),"\n",(0,o.jsx)(n.p,{children:"When a tool trigger, an event is generated with the following payload"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"appId"})," ID of the application"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sessionId"})," ID of the session"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"repositoryId"})," ID of the repository"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"source"})," one of message, ui, task, agent"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"})," name of the tool"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"schema"})," schema of the tool"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"values"})," values extracted from the schema and inferred by the LLM"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);