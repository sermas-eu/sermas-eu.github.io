"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[1155],{4476:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"3dify/application-front-end","title":"Application front end","description":"The front end provides users with a gallery of pictures they have uploaded to generate their avatars. The gallery is proposed as a grid of photos to make it look familiar to users accustomed to picture galleries installed on their smartphones. Alongside the gallery, users are provided with a box to upload their pictures through drag-and-drop and selection from their computer.","source":"@site/docs/3dify/application-front-end.md","sourceDirName":"3dify","slug":"/3dify/application-front-end","permalink":"/docs/3dify/application-front-end","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/3dify/application-front-end.md","tags":[],"version":"current","sidebarPosition":0.0003,"frontMatter":{"sidebar_position":0.0003},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/3dify/introduction"},"next":{"title":"Architecture","permalink":"/docs/3dify/architecture"}}');var n=i(4848),o=i(8453);const s={sidebar_position:3e-4},r="Application front end",d={},h=[];function l(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"application-front-end",children:"Application front end"})}),"\n",(0,n.jsx)(t.p,{children:"The front end provides users with a gallery of pictures they have uploaded to generate their avatars. The gallery is proposed as a grid of photos to make it look familiar to users accustomed to picture galleries installed on their smartphones. Alongside the gallery, users are provided with a box to upload their pictures through drag-and-drop and selection from their computer."}),"\n",(0,n.jsx)(t.p,{children:"Consider that a user uploads a picture either way; the platform shows users the update's progress to keep them informed about what is happening to avoid refreshes or other actions that could only worsen the user experience, even though loading a picture does not take much time. When the loading is complete, users can access the picture from the gallery, and by clicking on it, they can preview the picture and gain access to several features. Below the preview, they have an action bar with options such as zoom-in, zoom-out, flip horizontally and vertically, rotate in both directions and the most important one\u2013the customization option, which is dedicated to avatar customization and rendering using the Unity-based front end."}),"\n",(0,n.jsx)(t.p,{children:"The application does not support logging in yet, but it is already designed with the capabilities to do so, and this is why users can already see buttons for logging in and out. This functionality will be enabled in future versions using the MongoDB database."}),"\n",(0,n.jsx)(t.p,{children:"The WebGL front-end, developed using the Unity game engine, allows users to preview an initial version of their avatar based on the image uploaded to the web application described above."}),"\n",(0,n.jsx)(t.p,{children:"After initial facial feature inference and avatar generation, the application displays a high-fidelity rendering of the fully animated avatar. This avatar includes a mesh with attached materials and textures, as well as a skeleton for use in applications such as XR and video games."}),"\n",(0,n.jsx)(t.p,{children:"If the user is not satisfied with the initial results, the application offers extensive customization of facial features, including the head, eyes, nose, hair, and other details, using the panel on the left."}),"\n",(0,n.jsx)(t.p,{children:"Customization is done by adjusting position and size values using sliders or by selecting from graphical options (eyes, hair, etc.)."}),"\n",(0,n.jsx)(t.p,{children:"By pressing the Build button in the lower left corner, the user initiates the avatar generation pipeline. This process, which takes more than 10 seconds, sends the new face parameters to the backend services to generate a modified version of the avatar."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var a=i(6540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);