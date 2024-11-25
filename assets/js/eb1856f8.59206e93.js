"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[130],{8136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"applications/app-settings","title":"Settings","description":"Application settings are used as defaults in new interactions.","source":"@site/docs/applications/app-settings.md","sourceDirName":"applications","slug":"/applications/app-settings","permalink":"/docs/applications/app-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/applications/app-settings.md","tags":[],"version":"current","sidebarPosition":0.004,"frontMatter":{"sidebar_position":0.004},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/applications/introduction"},"next":{"title":"CLI management","permalink":"/docs/applications/cli-handling"}}');var i=t(4848),s=t(8453);const a={sidebar_position:.004},r="Settings",c={},p=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"settings",children:"Settings"})}),"\n",(0,i.jsx)(n.p,{children:"Application settings are used as defaults in new interactions."}),"\n",(0,i.jsx)(n.p,{children:"Depending on the setup, users may be allowed to change some of those settings during the interaction to customize their experience."}),"\n",(0,i.jsxs)(n.p,{children:["The application ",(0,i.jsx)(n.code,{children:"settings"})," field offers those options:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'\n# Users must login to use the application\nlogin: true\n\n# An id from repository.avatar\navatar: my_avatar\n\n# An id from repository.background\nbackground: my_background\n\n# language used in the interaction\nlanguage: en-GB\n\n# skip welcome message on interaction start\nskipWelcomeMessage: true\n\n# disable generated responses on tools matching\nskipToolResponse: true\n\n# define a prompt for the application, used as main context for the interaction\nprompt:\n  text: <application context prompt>\n\n# customize the kiosk UI colors, CSS compatible syntax\ntheme:\n  primaryBgColor: "purple"\n  primaryTextColor: "black"\n  secondaryBgColor: "#CCCCCC"\n  secondaryTextColor: "white"\n\n# use a specific LLM for a task, see LLM configuration for more details\nllm:\n  chat: openai/gpt-4o\n  tools: openai/gpt-4o\n  sentiment: openai/gpt-4o-mini\n  tasks: openai/gpt-4o-mini\n  intent: openai/gpt-4o\n  translation: openai/gpt-4o-mini\n\n# Skip the default tools response as generated by the LLM\nskipToolResponse: false\n\n# Toggle text to speech (TTS) rendering\nttsEnabled: false\n\n# Toggle the chat interaction, enabled by default. \n# This option can be used to override the chat interaction in favour of a third-party managed one\nchatModeEnabled: true\n\n# Defines how to start an interaction. Available options are:\n# - on-load On kiosk page load\n# - touch On kiosk welcome button click\n# - speak On first user voice interaction\n# - intent-detection On intent detection signal\ninteractionStart: on-load\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);