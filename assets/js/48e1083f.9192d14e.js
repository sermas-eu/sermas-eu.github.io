"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[9610],{247:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api-integration/mqtt-broker","title":"MQTT Broker","description":"The SERMAS platform is connected to an MQTT broker that act as a BUS.","source":"@site/docs/api-integration/20-mqtt-broker.md","sourceDirName":"api-integration","slug":"/api-integration/mqtt-broker","permalink":"/docs/api-integration/mqtt-broker","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/api-integration/20-mqtt-broker.md","tags":[],"version":"current","sidebarPosition":0.0002,"frontMatter":{"sidebar_position":0.0002},"sidebar":"tutorialSidebar","previous":{"title":"RESTful API","permalink":"/docs/api-integration/restful-api"},"next":{"title":"SERMAS Toolkit Node Library","permalink":"/docs/api-integration/sermas-toolkit-node-library"}}');var i=n(4848),o=n(8453);const r={sidebar_position:2e-4},a="MQTT Broker",c={},l=[{value:"Authentication",id:"authentication",level:2}];function p(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"mqtt-broker",children:"MQTT Broker"})}),"\n",(0,i.jsx)(e.p,{children:"The SERMAS platform is connected to an MQTT broker that act as a BUS."}),"\n",(0,i.jsx)(e.p,{children:"Every platform event results in a message published on an MQTT topic. To integrate with the SERMAS platform seamlessly, you must subscribe to the proper topics (and have the relative access rights)."}),"\n",(0,i.jsxs)(e.p,{children:["A mapping of source scopes and relative topics can be found on ",(0,i.jsx)(e.a,{href:"https://github.com/sermas-eu/sermas-api/blob/main/libs/sermas/sermas.topic.ts",children:"sermas.topic.ts"})]}),"\n",(0,i.jsxs)(e.p,{children:["The MQTT broker endpoint is reachable at ",(0,i.jsx)(e.a,{href:"http://localhost:8080/mqtt",children:"http://localhost:8080/mqtt"})," after starting the platform."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["NOTE: All examples here are in Python using the ",(0,i.jsx)(e.code,{children:"paho-mqtt"})," package. Check the SEMAS API Client for a TypeScript implementation."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsxs)(e.p,{children:["You will need a valid authentication token to connect to the MQTT broker (see ",(0,i.jsx)(e.a,{href:"restful-api",children:"RESTful API"}),").\nThe MQTT password is just a placeholder: any non-empty string will work."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import os\nimport json\nimport ssl\nimport uuid\nimport paho.mqtt.client as mqtt\nimport paho.mqtt.subscribeoptions\n\napp_id = 'myapp'\nclient_id = 'my-app-client'\nmqtt_client_id = str(uuid.uuid4())  # Random MQTT client ID\n\nif os.getenv('ENV') == 'development':\n    client = mqtt.Client(\n      client_id=mqtt_client_id,\n      callback_api_version=mqtt.CallbackAPIVersion.VERSION1\n    )\nelse: \n    client = mqtt.Client(\n      client_id=mqtt_client_id,\n      transport='websockets',\n      callback_api_version=mqtt.CallbackAPIVersion.VERSION1\n    )\n    ssl_context = ssl.create_default_context()\n    client.tls_set_context(ssl_context)\n\ntoken = 'abc'  # Get a JWT from the RESTful API\nclient.username_pw_set(username=token, password='sermas')\n\ndef on_message(msg):\n\tprint(f'Received message {msg}')\n\nclient.on_message = on_message\n\nurl = 'http://localhost:8080/mqtt'\nport = 8080\nself.connect(url, port)\n\nclient.loop_start()  # Start message loop\n\n# Subscribe to a topic\nsubscribe_options = paho.mqtt.subscribeoptions.SubscribeOptions(qos=1, noLocal=True)\ntopic = 'performance'\nclient.subscribe(f'app/{app_id}/{topic}', options=options)\n\n# Send a message\nmessage = {\n\t'appId': app_id,\n\t'clientId': client_id,\n\t'randomInfo': 'All is OK', \n}\ntopic = 'ui/status'\nclient.send(f'app/{app_id}/{topic}', json.dumps(message))\n"})})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);