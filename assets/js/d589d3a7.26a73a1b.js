"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[924],{8578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const o={sidebar_position:.001},r="Getting Started",a={id:"getting-started",title:"Getting Started",description:"Let's discover SERMAS in ~10 minutes.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/getting-started.md",tags:[],version:"current",sidebarPosition:.001,frontMatter:{sidebar_position:.001},sidebar:"tutorialSidebar",next:{title:"Create an application",permalink:"/docs/create-application"}},c={},d=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Running the Toolkit API",id:"running-the-toolkit-api",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Start the system",id:"start-the-system",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["Let's discover ",(0,s.jsx)(t.strong,{children:"SERMAS in ~10 minutes"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,s.jsx)(t.p,{children:"We use containers to deliver the ready-to-use serivces."}),"\n",(0,s.jsx)(t.p,{children:"Ensure you have installed"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker compose"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-toolkit-api",children:"Running the Toolkit API"}),"\n",(0,s.jsx)(t.p,{children:"Obtain a copy of the SERMAS Toolkit API deployment files"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/sermas-eu/sermas-toolkit-api\ncd sermas-toolkit-api\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To use the Avatar capabilities (such as text to speech, speech to text, embeddings and chatting) we  need to set an ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI Api Key"}),". The toolkit supports also other options (such as Google services and open-source based models) but to ease the process, we will start with this."]}),"\n",(0,s.jsxs)(t.p,{children:["Create a copy of the ",(0,s.jsx)(t.code,{children:".env.example"})," and name it ",(0,s.jsx)(t.code,{children:".env"}),". Set the variable ",(0,s.jsx)(t.code,{children:"OPENAI_API_KEY"})," with the OpenAI obtained key."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-env",children:'OPENAI_API_KEY="..."\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE"})," OpenAI offers a free tier but for frequent usage you may need to setup a billing account."]}),"\n",(0,s.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["The system can create users at bootstrap from the file ",(0,s.jsx)(t.code,{children:"./config/api/user.json"})]}),"\n",(0,s.jsxs)(t.p,{children:["A default user with admin privileges (role ",(0,s.jsx)(t.code,{children:"platform-admin"}),") is created by default with username ",(0,s.jsx)(t.code,{children:"admin"})," and password ",(0,s.jsx)(t.code,{children:"admin"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You can customize the initial user creation by changing username / password or also adding new users."}),"\n",(0,s.jsx)(t.h3,{id:"start-the-system",children:"Start the system"}),"\n",(0,s.jsx)(t.p,{children:"Start the system with docker compose"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"docker compose up -d\n"})}),"\n",(0,s.jsx)(t.p,{children:"The command will dowload the docker images and boostrap the services. It may take a while dependending on your connection."}),"\n",(0,s.jsxs)(t.p,{children:["Once completed, the API and the related services will be available on ",(0,s.jsx)(t.code,{children:"http://localhost:8080"})]}),"\n",(0,s.jsxs)(t.p,{children:["As an example, you can try visiting ",(0,s.jsx)(t.a,{href:"http://localhost:8080/",children:"the kiosk homepage"})," or the ",(0,s.jsx)(t.a,{href:"http://localhost:8080/api/swagger",children:"API documentation"})," to see if everything has worked as expected."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);