"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[4990],{1863:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"faqs-and-troubleshooting/troubleshooting","title":"Troubleshooting","description":"App not listed in Kiosk","source":"@site/docs/faqs-and-troubleshooting/troubleshooting.md","sourceDirName":"faqs-and-troubleshooting","slug":"/faqs-and-troubleshooting/troubleshooting","permalink":"/docs/faqs-and-troubleshooting/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/faqs-and-troubleshooting/troubleshooting.md","tags":[],"version":"current","sidebarPosition":0.002,"frontMatter":{"sidebar_position":0.002},"sidebar":"tutorialSidebar","previous":{"title":"FAQs & Troubleshooting","permalink":"/docs/category/faqs--troubleshooting"}}');var r=o(4848),t=o(8453);const i={sidebar_position:.002},a="Troubleshooting",c={},l=[{value:"App not listed in Kiosk",id:"app-not-listed-in-kiosk",level:2},{value:"Error opening an app",id:"error-opening-an-app",level:2},{value:"MQTT connection errors",id:"mqtt-connection-errors",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(n.h2,{id:"app-not-listed-in-kiosk",children:"App not listed in Kiosk"}),"\n",(0,r.jsxs)(n.p,{children:["If your app is not listed in the Kiosk, be sure that the app is public: the configuration ",(0,r.jsx)(n.code,{children:"app.yaml"})," file must contain\n",(0,r.jsx)(n.code,{children:"public: true"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Then, save it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sermas-cli app save /apps/myapp\n"})}),"\n",(0,r.jsx)(n.p,{children:"or import it again, if saving the app fails."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sermas-cli app admin import /apps/myapp\n"})}),"\n",(0,r.jsx)(n.h2,{id:"error-opening-an-app",children:"Error opening an app"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Error opening app",src:o(884).A+"",width:"1222",height:"451"})}),"\n",(0,r.jsx)(n.p,{children:"If you see this kind of error when opening an app, you should try saving it\nor importing it again (see commands above)."}),"\n",(0,r.jsx)(n.p,{children:"In case you're still experiencing problems opening the app, you can try clearing the data and restarting the services with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# stop all the services and remove related volumes\ndocker compose down -v\n# remove all local data\nsudo rm -rf ./data && git restore ./data\n# restart the services\ndocker compose up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mqtt-connection-errors",children:"MQTT connection errors"}),"\n",(0,r.jsxs)(n.p,{children:["If you notice MQTT connection errors in the logs (like ",(0,r.jsx)(n.code,{children:"token expired"})," or similar), please get the container IDs running ",(0,r.jsx)(n.code,{children:"docker ps"}),", then restart the MQTT service, followed by any other disconnecting service using ",(0,r.jsx)(n.code,{children:"docker restart [CONTAINER_ID]"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},884:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/generic_error-7551baf30af0d6bfa48a2cb8d0cff79a.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var s=o(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);