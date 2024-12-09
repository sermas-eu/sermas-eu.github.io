"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[5644],{8973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"avatar/3dify/architecture","title":"Architecture","description":"The application front end architecture comprises a web application, a file store, and a NoSQL database.","source":"@site/docs/avatar/3dify/architecture.md","sourceDirName":"avatar/3dify","slug":"/avatar/3dify/architecture","permalink":"/docs/avatar/3dify/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/avatar/3dify/architecture.md","tags":[],"version":"current","sidebarPosition":0.0004,"frontMatter":{"sidebar_position":0.0004},"sidebar":"tutorialSidebar","previous":{"title":"Application front end","permalink":"/docs/avatar/3dify/application-front-end"},"next":{"title":"Application deployment","permalink":"/docs/avatar/3dify/application-deployement"}}');var a=n(4848),s=n(8453);const r={sidebar_position:4e-4},o="Architecture",c={},h=[{value:"Where to Apply Changes?",id:"where-to-apply-changes",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,a.jsx)(t.p,{children:"The application front end architecture comprises a web application, a file store, and a NoSQL database."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"web application"})," is built with the ",(0,a.jsx)(t.strong,{children:"Next.js"})," framework, which allows us to develop both the front-end and back-end using ",(0,a.jsx)(t.strong,{children:"TypeScript"}),".\nThe front-end is designed as a Single-Page Application (SPA) and written in ",(0,a.jsx)(t.strong,{children:"React"}),", also taking advantage of the abstractions offered by Next.js.\nAnother benefit of Next.js is the possibility to use ",(0,a.jsx)(t.strong,{children:"Next.js API Routes"})," to create a serverless back-end to optimize resource utilization."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"MinIO"})," is used as ",(0,a.jsx)(t.code,{children:"file store"})," for persisting uploaded photos, generated avatars, etc."]}),"\n",(0,a.jsxs)(t.li,{children:["Part of the back-end is implemented in the ",(0,a.jsx)(t.strong,{children:"Python"})," language, which handles the facial feature extraction and communication with the Makehuman daemon"]}),"\n",(0,a.jsxs)(t.li,{children:["For the ",(0,a.jsx)(t.code,{children:"database"}),", the application leverages ",(0,a.jsx)(t.strong,{children:"MongoDB"})," capabilities for storing users' information and more."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"WebGL application"})," is built with the ",(0,a.jsx)(t.strong,{children:"Unity"})," game engine and the ",(0,a.jsx)(t.strong,{children:"C#"})," language and lets users customize and preview the avatar and download its 3D model."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"avatar generation"})," is handled by a ",(0,a.jsx)(t.strong,{children:"Makehuman"})," process running in background."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Architecture",src:n(1523).A+"",title:"Architecture",width:"1627",height:"1168"})}),"\n",(0,a.jsx)(t.h2,{id:"where-to-apply-changes",children:"Where to Apply Changes?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/isislab-unisa/3dify/tree/main/app/api",children:"/app/api"}),": in this folder you will find the code for the serverless APIs that power the application back end."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"genderAge"}),": which estimates the gender and the age of a person given a picture of the face."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"photos, uploadPhotos"}),": that lets the application read and write image files on the MinIO storage."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/isislab-unisa/3dify/tree/main/app/components",children:"/app/components"}),": in this folder you will find the code for the UI elements of the application front end, such as the photos gallery."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/isislab-unisa/3dify/tree/main/app/pythonServices",children:"/app/pythonServices"}),": in this folder you will find the code for the python-based back end."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"scanFace"}),": extracts the 478 landmarks that map the face of the input face portrayed in the image"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"extractFeatures"}),": the outputs of genderAge and scanFace are processed to calculate facial parameters in terms of sizes and distances of all parts of the face (head, eyes, nose, mouth,...). Such parameters are numerical normalized in the [-1, 1] interval or a choice in an enumeration"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"applyAndDownload"}),": communicates with the makehuman daemon which will in turn generate an avatar based on a series of facial parameters given in input"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1523:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3dify_architecture_release_2-9398a3266be0af0c13a677352916d0c9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);