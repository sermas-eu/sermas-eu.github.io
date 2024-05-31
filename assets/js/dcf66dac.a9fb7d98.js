"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[105],{8399:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=i(4848),s=i(8453);const t={sidebar_position:.002},o="Create an application",l={id:"create-application",title:"Create an application",description:"To create an application, we are going to use the SERMAS CLI",source:"@site/docs/create-application.md",sourceDirName:".",slug:"/create-application",permalink:"/docs/create-application",draft:!1,unlisted:!1,editUrl:"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/create-application.md",tags:[],version:"current",sidebarPosition:.002,frontMatter:{sidebar_position:.002},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Customizing the application",permalink:"/docs/customize-application"}},r={},c=[{value:"On Linux",id:"on-linux",level:3},{value:"On Windows (using WSL console)",id:"on-windows-using-wsl-console",level:3},{value:"Login with the admin user",id:"login-with-the-admin-user",level:2},{value:"Same on Linux and Windows",id:"same-on-linux-and-windows",level:3},{value:"Create an application template",id:"create-an-application-template",level:2},{value:"Same on Linux and Windows",id:"same-on-linux-and-windows-1",level:3},{value:"Same on Linux and Windows",id:"same-on-linux-and-windows-2",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-an-application",children:"Create an application"}),"\n",(0,a.jsxs)(n.p,{children:["To create an application, we are going to use the ",(0,a.jsx)(n.a,{href:"./sermas-cli/setup",children:"SERMAS CLI"})]}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a commodity alias for ",(0,a.jsx)(n.code,{children:"sermas-cli"}),". It uses our same system user ID to avoid file permission issues."]}),"\n",(0,a.jsxs)(n.p,{children:["If you're using Windows make sure to install and use WSL (",(0,a.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Microsoft's tutorial to install WSL"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"on-linux",children:"On Linux"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'alias "sermas-cli=docker compose run --rm -it --user `echo $UID` cli"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"on-windows-using-wsl-console",children:"On Windows (using WSL console)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'alias "sermas-cli=docker compose run --rm -it cli"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"login-with-the-admin-user",children:"Login with the admin user"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following command and use the configured password (",(0,a.jsx)(n.code,{children:"admin"})," is the default)."]}),"\n",(0,a.jsx)(n.h3,{id:"same-on-linux-and-windows",children:"Same on Linux and Windows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sermas-cli auth login admin\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-an-application-template",children:"Create an application template"}),"\n",(0,a.jsx)(n.p,{children:"The CLI uses a directory structure to create and keep updated the application definition. It allows to specify configuration and assets to be uploaded."}),"\n",(0,a.jsx)(n.h3,{id:"same-on-linux-and-windows-1",children:"Same on Linux and Windows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sermas-cli app init /apps/myapp\n"})}),"\n",(0,a.jsx)(n.p,{children:"The resulting structure is similar to the following"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"apps/\n\u2514\u2500\u2500 myapp\n    \u251c\u2500\u2500 app.yaml\n    \u251c\u2500\u2500 modules.yaml\n    \u251c\u2500\u2500 repository\n    \u2502   \u251c\u2500\u2500 avatars\n    \u2502   \u2502   \u2514\u2500\u2500 anna.yaml\n    \u2502   \u251c\u2500\u2500 backgrounds\n    \u2502   \u2502   \u251c\u2500\u2500 milkyway.jpg\n    \u2502   \u2502   \u2514\u2500\u2500 milkyway.yaml\n    \u2502   \u251c\u2500\u2500 documents\n    \u2502   \u2502   \u251c\u2500\u2500 about.txt\n    \u2502   \u2502   \u251c\u2500\u2500 about.yaml\n    \u2502   \u2502   \u251c\u2500\u2500 toolkit.txt\n    \u2502   \u2502   \u2514\u2500\u2500 toolkit.yaml\n    \u2502   \u2514\u2500\u2500 robots\n    \u2502       \u2514\u2500\u2500 my-agv.yaml\n    \u251c\u2500\u2500 repository.yaml\n    \u251c\u2500\u2500 settings.yaml\n    \u251c\u2500\u2500 tools.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"We'll learn more about the app structure later."}),"\n",(0,a.jsx)(n.p,{children:"Let's create the application in the SERMAS API with"}),"\n",(0,a.jsx)(n.h3,{id:"same-on-linux-and-windows-2",children:"Same on Linux and Windows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sermas-cli app save /apps/myapp\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should see a confirmation message."}),"\n",(0,a.jsxs)(n.p,{children:["Great, let's see our app at work in the kiosk on ",(0,a.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var a=i(6540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);