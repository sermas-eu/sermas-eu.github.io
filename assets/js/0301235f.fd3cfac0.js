"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[6029],{1464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"agent/llm/ollama","title":"Ollama","description":"Let\'s setup a local LLMs service to run inference.","source":"@site/docs/agent/llm/ollama.md","sourceDirName":"agent/llm","slug":"/agent/llm/ollama","permalink":"/docs/agent/llm/ollama","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/agent/llm/ollama.md","tags":[],"version":"current","sidebarPosition":0.0002,"frontMatter":{"sidebar_position":0.0002},"sidebar":"tutorialSidebar","previous":{"title":"Mistral","permalink":"/docs/agent/llm/mistral"},"next":{"title":"OpenAI","permalink":"/docs/agent/llm/openai"}}');var a=t(4848),o=t(8453);const i={sidebar_position:2e-4},s="Ollama",r={},c=[{value:"Start ollama",id:"start-ollama",level:2},{value:"Configure the SERMAS Toolkit API",id:"configure-the-sermas-toolkit-api",level:2},{value:"Configuring the application settings",id:"configuring-the-application-settings",level:2},{value:"Updating the application",id:"updating-the-application",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"ollama",children:"Ollama"})}),"\n",(0,a.jsx)(n.p,{children:"Let's setup a local LLMs service to run inference."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"NOTE"})})," The LLM may use the GPU to improve performance, however the available resources may not be enough to complete all the requests."]}),"\n",(0,a.jsx)(n.h2,{id:"start-ollama",children:"Start ollama"}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://ollama.com/",children:"ollama docs"})," to start the service and obtain a model."]}),"\n",(0,a.jsxs)(n.p,{children:["We will use ",(0,a.jsx)(n.code,{children:"phi3"})," for chat and ",(0,a.jsx)(n.code,{children:"nomic-embed-text"})," for embeddings."]}),"\n",(0,a.jsx)(n.p,{children:"Download the models with"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"ollama pull phi3\nollama pull nomic-embed-text\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-sermas-toolkit-api",children:"Configure the SERMAS Toolkit API"}),"\n",(0,a.jsxs)(n.p,{children:["Locate the file ",(0,a.jsx)(n.code,{children:"./config/api/.env"})," and add the following configurations"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ini",children:"OLLAMA_BASEURL=http://172.17.0.1:11434\n\nOLLAMA_MODEL=phi3\nOLLAMA_CHAT_MODELS=phi3:*\n\nOLLAMA_EMBEDDINGS_MODEL=nomic-embed-text\n\nLLM_SERVICE=ollama\nLLM_EMBEDDINGS_SERVICE=ollama\n"})}),"\n",(0,a.jsxs)(n.p,{children:["then restart the api with ",(0,a.jsx)(n.code,{children:"docker compose restart api"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["NOTE: The ",(0,a.jsx)(n.code,{children:"OLLAMA_BASEURL"})," above may change based on your operating system and ollama installation.",(0,a.jsx)(n.br,{}),"\n","The example above assumes a standard installation on a linux machine and uses ",(0,a.jsx)(n.code,{children:"172.17.0.1"})," as the default gateway between the docker network and the host (",(0,a.jsx)(n.code,{children:"host.docker.internal"})," on MacOS and Windows) . ",(0,a.jsx)(n.code,{children:"localhost"})," and ",(0,a.jsx)(n.code,{children:"127.0.0.1"})," will typically ",(0,a.jsx)(n.strong,{children:"NOT"})," work."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"IMPORTANT: Ollama must be listening to all local interfaces"}),". By default a standard ollama installation will listen to ",(0,a.jsx)(n.code,{children:"localhost"})," and ",(0,a.jsx)(n.code,{children:"127.0.0.1"}),", both unreachable from a\ndocker container. To fix this, set ",(0,a.jsx)(n.code,{children:"OLLAMA_HOST=0.0.0.0"}),". See ",(0,a.jsx)(n.a,{href:"https://github.com/ollama/ollama/issues/703",children:"here"})," for more details"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuring-the-application-settings",children:"Configuring the application settings"}),"\n",(0,a.jsx)(n.p,{children:"In settings.yaml or app.yaml settings section add the following lines"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"llm:\n  chat: ollama/phi3\n  tools: ollama/phi3\n  sentiment: ollama/phi3\n  tasks: ollama/phi3\n  intent: ollama/phi3\n  translation: ollama/phi3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The pattern to follow is ",(0,a.jsx)(n.code,{children:"[provider]/[model]"}),". The list of available models is visible in the kiosk UI, opening the left menu, under LLM settings"]}),"\n",(0,a.jsx)(n.p,{children:"This allow to select the phi3 model for all the types of inference in the system. Depending on the setup, those could be changed to work with different providers and models configured."}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-application",children:"Updating the application"}),"\n",(0,a.jsxs)(n.p,{children:["Reimport the app from the CLI ",(0,a.jsx)(n.code,{children:"sermas-cli app save /apps/myapp"})]}),"\n",(0,a.jsxs)(n.p,{children:["Reloading the page at ",(0,a.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," you can start using the configured ollama model."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var l=t(6540);const a={},o=l.createContext(a);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);