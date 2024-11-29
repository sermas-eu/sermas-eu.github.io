"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[1926],{3018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"3dify/application-deployement","title":"Application deployment","description":"The application consists of seven docker containers:","source":"@site/docs/3dify/application-deployement.md","sourceDirName":"3dify","slug":"/3dify/application-deployement","permalink":"/docs/3dify/application-deployement","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/3dify/application-deployement.md","tags":[],"version":"current","sidebarPosition":0.0005,"frontMatter":{"sidebar_position":0.0005},"sidebar":"tutorialSidebar","previous":{"title":"Architecture","permalink":"/docs/3dify/architecture"},"next":{"title":"Run the Application Locally","permalink":"/docs/3dify/run-application-locally"}}');var o=t(4848),a=t(8453);const s={sidebar_position:5e-4},r="Application deployment",c={},l=[];function d(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"application-deployment",children:"Application deployment"})}),"\n",(0,o.jsx)(n.p,{children:"The application consists of seven docker containers:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/repository/docker/isislab/3dify-makehuman/general",children:"3dify-makehuman"}),": The container that executes a customized version of MakeHuman that permits to elaborate the sliders value extracted from a photo into a rendered 3D avatar."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/repository/docker/isislab/3dify-unity/general",children:"3dify-unity"}),": The container which starts a simple python HTTP web server which hosts the WebGL application for the avatar preview"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/repository/docker/isislab/3dify-python/general",children:"3dify-python"}),": Container containing the logic behind the conversion between facial landmarks and MakeHuman \u2019s parameters, as well as the logic connecting the application to MakeHuman for sending new sliders value and for exporting and downloading the final 3D model .FBX file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/r/minio/minio",children:"filestore"}),": Container including MinIO, an object storage application compatible with the Amazon S3 API"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/r/isislab/3dify-auth",children:"3dify"}),": Containers based on this image start the web application for the avatar management front-end."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/_/mongo",children:"mongo"}),": Container including MongoDB, an open-source document-oriented database based on NoSQL."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://hub.docker.com/extensions/saniewski/mongo-express-docker-extension",children:"mongo-express"}),": Extension that allows to connect to any (local or remote) MongoDB server without having to install Mongo Express locally."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The deployment of these containers is coordinated by the ",(0,o.jsx)(n.a,{href:"https://github.com/isislab-unisa/3dify/blob/main/docker-compose.yml",children:"Docker Compose"})," configuration file."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);