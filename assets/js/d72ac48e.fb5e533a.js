"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[7063],{2200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"overview/architecture","title":"Architecture","description":"Agents","source":"@site/docs/overview/architecture.md","sourceDirName":"overview","slug":"/overview/architecture","permalink":"/docs/overview/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/overview/architecture.md","tags":[],"version":"current","sidebarPosition":0.0004,"frontMatter":{"sidebar_position":0.0004},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/overview/introduction"},"next":{"title":"Getting Started","permalink":"/docs/category/getting-started"}}');var r=i(4848),o=i(8453);const a={sidebar_position:4e-4},s="Architecture",c={},l=[{value:"Agents",id:"agents",level:2},{value:"Modular API-driven architecture",id:"modular-api-driven-architecture",level:2},{value:"Security",id:"security",level:2},{value:"Modules",id:"modules",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,r.jsx)(t.h2,{id:"agents",children:"Agents"}),"\n",(0,r.jsx)(t.p,{children:"The aim of the SERMS Agent is to provide a socially acceptable interaction that satisfies the goals and needs of the user, follows the social context in which the system is being used, and is transparent, safe, secure, explainable and is trusted by the user. To achieve these goals the Agent can take two different forms:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"digital: a virtual avatar that interacts with the user in a natural manner, and is immersed in the surrounding environment;"}),"\n",(0,r.jsx)(t.li,{children:"physical: a physical robotic agent that moves in the environment and physically interacts with the user and the environment."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Both forms share the same architecture, which is organized into a platform, called hereafter SERMAS Toolkit, hosting and orchestrating different functional modules."}),"\n",(0,r.jsx)(t.p,{children:"The Toolkit can connect to other external applications through APIs (Application Programming Interfaces) and communication models."}),"\n",(0,r.jsx)(t.h2,{id:"modular-api-driven-architecture",children:"Modular API-driven architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sermas architecture",src:i(8200).A+"",width:"646",height:"431"})}),"\n",(0,r.jsx)(t.p,{children:"The overall architecture enables fully distributed scenarios, regardless of the location of the involved runtime."}),"\n",(0,r.jsx)(t.p,{children:"Runtimes can leverage transparently on remote resources to enable complex services compositions and a mesh of different\nruntimes, eventually enabling multi-user and multi-domain interaction models."}),"\n",(0,r.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(t.p,{children:"To tackle security within this architecture, at communication-level the SERMAS Toolkit leverages the JSON Web Token (JWT) based message-signing approach, which contains non-private information of an acting user (or impersonation of a user, such as a module or application runtime).\nInformation consistency can be cryptographically verified to avoid JWT data being altered during transport over the network."}),"\n",(0,r.jsx)(t.p,{children:"Inspired by Zero Trust Architecture, a centralized component in charge of authentication and authorization identifies and decides which user or\nimpersonation may retrieve information or perform action on protected resources the network. Inspired by Zero Trust Architecture, a centralized component in charge of authentication and authorization identifies and decides which user or impersonation may retrieve information or perform action on protected resources."}),"\n",(0,r.jsx)(t.p,{children:"The SERMAS Toolkit follows an access-control list (ACL) pattern focusing on resource / scopes access control. Access and ACL are performed on JWT tokens obtained providing, for example, a clientId and its password (but other flows are possible, following the OpenID specifications)."}),"\n",(0,r.jsx)(t.p,{children:"At platform level there are two types of users identified by roles: admin and standard users.\nUsers can create applications and manage the applications they own."}),"\n",(0,r.jsx)(t.p,{children:"Admins have higher privileges that allow them to manage all the resources in the Toolkit (such as applications or modules)."}),"\n",(0,r.jsx)(t.p,{children:"An application can be managed  with a dedicated client that has full access to all the application specific resources\n(those enabled by modules at platform level). Applications can declare their own\nmodules that generate clients with ACL level mapping to specific resources and\nscopes constrained to the application context."}),"\n",(0,r.jsx)(t.p,{children:"Those clients should have the minimum permissions to deliver their objective and are supposed to be installed\nin the hardware or software implementations of the applications modules (such as\na kiosk or a robot)."}),"\n",(0,r.jsx)(t.h2,{id:"modules",children:"Modules"}),"\n",(0,r.jsx)(t.p,{children:"As regards the modules, they are defined with the aim of distributing responsibilities for the implementation of the required functionalities and simplifying the implementation of new requirements (identified in later stages of the project or related to other use cases and application scenarios)."}),"\n",(0,r.jsx)(t.p,{children:"To this end, to identify the required modules for the SERMAS Agent, we considered a bottom-up approach, which started from the requirements and, when possible, merged and abstracted them to identify the corresponding required functionality. As a result, a module will represent a (software and/or hardware) piece of the SERMAS Agent implementing a set of requirements, or a single requirement in some cases."}),"\n",(0,r.jsx)(t.p,{children:"First, it allows to clearly identify the responsibilities of each module  among project partners, thus identifying teams in charge of addressing each\nrequirement. As a result, the risk of leaving some requirements not addressed is reduced."}),"\n",(0,r.jsx)(t.p,{children:"Second, it allows scalability towards new application scenarios and use cases, which will follow with the second open call and after the end of the project."}),"\n",(0,r.jsx)(t.p,{children:"Indeed, any additional requirements introduced by a new use case can be addressed by the SERMAS Agent by implementing a corresponding module that\ndoes not conflict or overlap with the existing ones. This is also supported by the presence of an underlying architecture that allows simple integration of new modules and implements a communication protocol shared among the modules."}),"\n",(0,r.jsx)(t.p,{children:"As a result of this approach, a list of eight modules has been derived that define the functionalities that the SERMAS Agent has to implement to satisfy the requirements of the project use cases:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Detection: it provides support to the perception of the world from different\nsensors, including the detection of the interacting user(s);"}),"\n",(0,r.jsx)(t.li,{children:"Dialogue: it enables natural language interaction, offering interfaces to\nspeech to text, text to speech and large language models (LLMs) to manage\nthe interaction between the user and the SEMAS Agent;"}),"\n",(0,r.jsx)(t.li,{children:"Robotics: it oversees the control and integration of any robotic component\nof the Agent;"}),"\n",(0,r.jsx)(t.li,{children:"Security: it oversees the process of user\u2019s authentication and interaction\nauthorization;"}),"\n",(0,r.jsx)(t.li,{children:"Session: it tracks the interaction of a user with an instance of the Agent;"}),"\n",(0,r.jsx)(t.li,{children:"UI: it enables integrated multimodal interaction features;"}),"\n",(0,r.jsx)(t.li,{children:"XR: it tracks immersive experiences interactions;"}),"\n",(0,r.jsx)(t.li,{children:"Platform: it offers supporting functionalities to the other modules and provides management APIs to handle application configurations and generic maintenance capability for the overall system."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, other application-specific modules have been identified, considering requirements related to specific applications in the pilots. For each module, the required features have been analyzed in order to guarantee that system requirements are satisfied. Table 1 provides an overview of the modules and their features."}),"\n",(0,r.jsx)(t.p,{children:"It is important to point out that such modules comprise the functionalities required by the SERMAS Agent and do not represent the functionalities that are being implemented in the project. In other words, some of these functionalities are already available on the market or as part of suited development platforms and are simply integrated in the SERMAS architecture, with minor changes and  adaptations; conversely, some other modules functionalities have been developed from the early stage in the SERMAS Toolkit."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8200:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/arch1-68d8bacacbcfbf5da80e4f8d0b2e30dc.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);