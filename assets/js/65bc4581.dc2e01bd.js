"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[4625],{907:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"3dforxr/web","title":"Web Application","description":"The web application aims to ease the usage of 3DforXR services and allow scheduling operations, viewing results, and post-processing of 3D models in a user-friendly manner.","source":"@site/docs/3dforxr/web.md","sourceDirName":"3dforxr","slug":"/3dforxr/web","permalink":"/docs/3dforxr/web","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/3dforxr/web.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Implementation","permalink":"/docs/3dforxr/implementation"},"next":{"title":"Avatar","permalink":"/docs/category/avatar"}}');var n=i(4848),r=i(8453);const o={sidebar_position:3},l="Web Application",d={},a=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"web-application",children:"Web Application"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/",children:"web application"})," aims to ease the usage of 3DforXR services and allow scheduling operations, viewing results, and post-processing of 3D models in a user-friendly manner."]}),"\n",(0,n.jsx)(t.p,{children:"The web application contains three discrete pages:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/",children:"3D Models"}),": The user can view the generated 3D models and click on them for more details. The 3D Models view contains various filters, enabling conditional viewing of the models and filtering out unwanted ones."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/services",children:"Services"}),": The user can select one of the available services, follow the service guide, fill out the input fields and generate a 3D model. The 3D model is displayed in the ",(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/",children:"3D Models"})," tab. The following 3D model generation services are supported.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Multiple Images to 3D"}),"\n",(0,n.jsx)(t.li,{children:"Single Image to 3D"}),"\n",(0,n.jsx)(t.li,{children:"Text to 3D"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/playground",children:"Playground"}),': The playground page is designed to contain various application demos showcasing the functionalities of 3DforXR services. Currently, it includes a "Basketball Challenge", a simple VR playground made in Unity. All the 3D models presented in the VR scene were created using 3DforXR services.']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The users can click on a generated model in the ",(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/",children:"3D Models"})," tab to view more details about it. A 3D scene displays the open model and contains the following tabs:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Details"}),": The users can view details about the model generation. That includes information about the generation parameters of the service as well as generated 3D object statistics (e.g. number of vertices, number of triangles)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"View"}),": It allows users to modify the viewport of the 3D scene. The users can also capture screenshots of the modified scene."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Edit"}),": It allows for post-processing refinement operations on the 3D model. After the users have iterated on the post-processing options, they can export the model alongside any changes."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The web application provides an export option containing additional features developed to make the generated models even more suitable for XR applications. Specifically, the extra features focus on enhancing the quality of mesh geometry (Re-meshing), reducing the number of 3D model faces while preserving visual consistency (Simplification), accelerating the rendering process (LODs generation), and providing a range of commonly used formats (Export Options)."}),"\n",(0,n.jsxs)(t.p,{children:["The described features are implemented as a part of a single endpoint available in the URL: ",(0,n.jsx)(t.a,{href:"https://3d4xr.homelab.up2metric.com/api/lods/export-model/",children:"https://3d4xr.homelab.up2metric.com/api/lods/export-model/"}),". The response content is a binary file in the specified output format, which can be directly saved."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"file"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[.glb, .fbx, .obj]"})," The input 3D mesh file. Supported formats: ",(0,n.jsx)(t.code,{children:".glb"}),", ",(0,n.jsx)(t.code,{children:".obj"}),", ",(0,n.jsx)(t.code,{children:".fbx"})," (required)"]}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_format"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[.glb, .fbx, .obj]"})," Output format for the exported mesh (required)"]}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"simplify_ratio"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"float"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[0.1-1]"})," If enabled, it reduces the number of model faces. Lower values result in higher simplification (optional)"]}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"remesh_quality"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[Low, Medium, High]"}),' If enabled, it generates more structured geometry. "Low" will generate larger faces relative to the input, "High" will generate a denser output. (optional)']}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optimization"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[true, false]"}),"  It improves mesh quality by merging vertices closer than a specified distance, ensuring a cleaner and more optimized mesh (optional)"]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"generate_lods"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"[true, false]"})," Whether to generate Levels of Detail (LODs) for the mesh file (optional)"]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Scan the QR code for automatic log-in."}),"\n",(0,n.jsx)("img",{src:"https://filebrowser.homelab.up2metric.com/api/public/dl/EpVo0IQz?inline=true",width:"300"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);