"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[9202],{8733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"RAG-support/text","title":"Text files","description":"The toolkit provide an API for importing text documents to be used for enhancing LLM knowledge on particular topics.","source":"@site/docs/RAG-support/text.md","sourceDirName":"RAG-support","slug":"/RAG-support/text","permalink":"/docs/RAG-support/text","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/RAG-support/text.md","tags":[],"version":"current","sidebarPosition":0.0002,"frontMatter":{"sidebar_position":0.0002},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/RAG-support/introduction"},"next":{"title":"Web crawling","permalink":"/docs/RAG-support/web"}}');var i=n(4848),r=n(8453);const s={sidebar_position:2e-4},a="Text files",c={},d=[];function p(e){const t={a:"a",br:"br",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"text-files",children:"Text files"})}),"\n",(0,i.jsx)(t.p,{children:"The toolkit provide an API for importing text documents to be used for enhancing LLM knowledge on particular topics.\nThe SERMAS toolkit processes a list of document descriptors and creates the emdeddings of the content storing them in a vector database. The new information is then used by the LLM provider at inference time."}),"\n",(0,i.jsx)(t.p,{children:"The documents can be added by:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["adding them to the ",(0,i.jsx)(t.a,{href:"../applications/introduction#repository",children:"Repository configuration"}),": the documents are automatically imported during the application import phase"]}),"\n",(0,i.jsxs)(t.li,{children:["calling the import API:",(0,i.jsx)(t.br,{}),"\n","Endpoint: ",(0,i.jsx)(t.code,{children:"POST api/dialogue/document"}),(0,i.jsx)(t.br,{}),"\n","Payload: a list of ",(0,i.jsx)(t.code,{children:"DialogueDocumentDto"})," object in the form:","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:"{\n  appId: string;\n  documentId: string;\n  content?: string;\n  metadata?: DialogueDocumentMetadataDto;\n}\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);