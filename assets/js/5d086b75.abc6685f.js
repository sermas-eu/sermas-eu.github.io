"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[8852],{1453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"avatar/introduction","title":"Introduction","description":"It is possible to customize the avatar by creating a new model and loading it into SERMAS.","source":"@site/docs/avatar/introduction.md","sourceDirName":"avatar","slug":"/avatar/introduction","permalink":"/docs/avatar/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/avatar/introduction.md","tags":[],"version":"current","sidebarPosition":0.0001,"frontMatter":{"sidebar_position":0.0001},"sidebar":"tutorialSidebar","previous":{"title":"Avatar","permalink":"/docs/category/avatar"},"next":{"title":"ReadyPlayerMe models","permalink":"/docs/avatar/rpm-models"}}');var n=a(4848),o=a(8453);const i={sidebar_position:1e-4},s="Introduction",d={},l=[{value:"Create a model",id:"create-a-model",level:3},{value:"Load the model",id:"load-the-model",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.p,{children:"It is possible to customize the avatar by creating a new model and loading it into SERMAS."}),"\n",(0,n.jsx)(t.h3,{id:"create-a-model",children:"Create a model"}),"\n",(0,n.jsx)(t.p,{children:"We provide two options to create a personalized avatar model compatible with the SERMAS toolkit:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./rpm-models",children:"ReadyPlayerMe"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./3dify/introduction",children:"3Dify"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A third options might be to build the model from scratch.\nThe current version of Avatar uses readyplayer.me (RPM) models to render the avatar.\nRPM follow some rules for their avatar generator that if followed in the design of a custom avatar would result in a compatible model for the SERMAS Toolkit.\nThe two main references are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.readyplayer.me/ready-player-me/api-reference/avatars/full-body-avatars",children:"Body skeleton"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/apple-arkit",children:"Face mesh targets"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As long that face and skeleton fit the naming conventions and design principle described in the pages above it should work out of the box.\nA suggestion for designing a new avatar could be to start from a RPM model and customize it."}),"\n",(0,n.jsx)(t.p,{children:"The output format should by in GLB format. Also take care to keep the weight of the model low (eg. < 50MB) to ensure loading and rendering is fast on most mobile phones."}),"\n",(0,n.jsxs)(t.p,{children:["A nice tool to try the resulting model is ",(0,n.jsx)(t.a,{href:"https://gltf-viewer.donmccurdy.com/",children:"https://gltf-viewer.donmccurdy.com/"})]}),"\n",(0,n.jsx)(t.h3,{id:"load-the-model",children:"Load the model"}),"\n",(0,n.jsxs)(t.p,{children:["The GLB file must be placed in a folder under ",(0,n.jsx)(t.code,{children:"repository/avatars"}),", followed by a ",(0,n.jsx)(t.code,{children:".yaml"})," file describing the content (see ",(0,n.jsx)(t.a,{href:"/docs/applications/cli-handling#avatars",children:"repository documentation"}),").\nHere an example of the resulting folder structure:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\u251c\u2500\u2500 avatars\n\u2502\xa0\xa0 \u251c\u2500\u2500 marco\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 avatar.glb\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 avatar.glb.yaml\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then update the application with the new model (see ",(0,n.jsx)(t.a,{href:"/docs/getting-started/create-application#create-an-application-template",children:"application creation"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var r=a(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);