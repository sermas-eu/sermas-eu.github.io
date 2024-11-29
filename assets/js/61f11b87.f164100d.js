"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[4693],{5237:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"getting-started/system-setup","title":"System setup","description":"Let\'s discover SERMAS in ~10 minutes.","source":"@site/docs/getting-started/system-setup.md","sourceDirName":"getting-started","slug":"/getting-started/system-setup","permalink":"/docs/getting-started/system-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/getting-started/system-setup.md","tags":[],"version":"current","sidebarPosition":0.001,"frontMatter":{"sidebar_position":0.001},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/category/getting-started"},"next":{"title":"Create an application","permalink":"/docs/getting-started/create-application"}}');var i=s(4848),o=s(8453);const r={sidebar_position:.001},a="System setup",d={},c=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Running the Toolkit API",id:"running-the-toolkit-api",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Start the system",id:"start-the-system",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"system-setup",children:"System setup"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's discover ",(0,i.jsx)(t.strong,{children:"SERMAS in ~10 minutes"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,i.jsx)(t.p,{children:"We use containers to deliver the ready-to-use serivces."}),"\n",(0,i.jsx)(t.p,{children:"Ensure you have installed"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker compose"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"})," The guide assume a Linux Ubuntu/Debian environment. WSL has also been reported to work."]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-toolkit-api",children:"Running the Toolkit API"}),"\n",(0,i.jsx)(t.p,{children:"Obtain a copy of the SERMAS Toolkit API deployment files"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/sermas-eu/sermas-toolkit-api\ncd sermas-toolkit-api\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To use the Avatar capabilities (such as text to speech, speech to text, embeddings and chatting) we  need to set an ",(0,i.jsx)(t.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI Api Key"}),". The toolkit supports also other options (such as Google services and open-source based models) but to ease the process, we will start with this."]}),"\n",(0,i.jsxs)(t.p,{children:["Create a copy of the ",(0,i.jsx)(t.code,{children:".env.example"})," and name it ",(0,i.jsx)(t.code,{children:".env"}),". Set the variable ",(0,i.jsx)(t.code,{children:"OPENAI_API_KEY"})," with the OpenAI obtained key."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-env",children:'OPENAI_API_KEY="..."\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"})," OpenAI offers a free tier but for frequent usage you may need to setup a billing account."]}),"\n",(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["A default user with admin privileges (role ",(0,i.jsx)(t.code,{children:"platform-admin"}),") is created by default with username ",(0,i.jsx)(t.code,{children:"admin"})," and password ",(0,i.jsx)(t.code,{children:"admin"}),". Those defaults can be controlled by settings ",(0,i.jsx)(t.code,{children:"ADMIN_USER"})," and ",(0,i.jsx)(t.code,{children:"ADMIN_PASSWORD"})," environment variables."]}),"\n",(0,i.jsxs)(t.p,{children:["The system can create additional users at bootstrap from the file ",(0,i.jsx)(t.code,{children:"./config/api/user.json"})]}),"\n",(0,i.jsx)(t.h3,{id:"start-the-system",children:"Start the system"}),"\n",(0,i.jsx)(t.p,{children:"Start the system with docker compose"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker compose up -d\n"})}),"\n",(0,i.jsx)(t.p,{children:"The command will dowload the docker images and boostrap the services. It may take a while dependending on your connection."}),"\n",(0,i.jsxs)(t.p,{children:["Once completed, the API and the related services will be available on ",(0,i.jsx)(t.code,{children:"http://localhost:8080"})]}),"\n",(0,i.jsxs)(t.p,{children:["As an example, you can try visiting ",(0,i.jsx)(t.a,{href:"http://localhost:8080/",children:"the kiosk homepage"})," or the ",(0,i.jsx)(t.a,{href:"http://localhost:8080/api/swagger",children:"API documentation"})," to see if everything has worked as expected."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);