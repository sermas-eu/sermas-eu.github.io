"use strict";(self.webpackChunksermas_eu_github_io=self.webpackChunksermas_eu_github_io||[]).push([[185],{2476:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"sermas-ros-proxy/integrations","title":"Integrations","description":"This guide explains how to integrate a robotic platform to the SERMAS toolkit.\\\\","source":"@site/docs/sermas-ros-proxy/integrations.md","sourceDirName":"sermas-ros-proxy","slug":"/sermas-ros-proxy/integrations","permalink":"/docs/sermas-ros-proxy/integrations","draft":false,"unlisted":false,"editUrl":"https://github.com/sermas-eu/sermas-eu.github.io/sidebar.ts/docs/sermas-ros-proxy/integrations.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Usage","permalink":"/docs/sermas-ros-proxy/usage"},"next":{"title":"FAQs & Troubleshooting","permalink":"/docs/category/faqs--troubleshooting"}}');var o=n(4848),i=n(8453);const r={sidebar_position:2},a="Integrations",d={},l=[{value:"Add a new integration",id:"add-a-new-integration",level:2},{value:"Load it",id:"load-it",level:2},{value:"Test it",id:"test-it",level:2},{value:"Example of an integration",id:"example-of-an-integration",level:2}];function c(e){const s={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"integrations",children:"Integrations"})}),"\n",(0,o.jsxs)(s.p,{children:["This guide explains how to integrate a robotic platform to the SERMAS toolkit.",(0,o.jsx)(s.br,{}),"\n","Existing integrations can be found inside the folder ",(0,o.jsx)(s.code,{children:"ros_proxy/ros_proxy/integrations"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"add-a-new-integration",children:"Add a new integration"}),"\n",(0,o.jsxs)(s.p,{children:["The integration is a python class that inherit from the ",(0,o.jsx)(s.code,{children:"IntegrationBaseClass"})," in ",(0,o.jsx)(s.code,{children:"ros_proxy/ros_proxy/integrations/base_class.py"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"class IntegrationBaseClass(ABC):\n  ...\n  @abstractmethod\n  def handle_sermas_message(self, msg):\n    raise NotImplementedError()\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The derived class must implement the ",(0,o.jsx)(s.code,{children:"handle_sermas_message"})," method, which is called when a new message is received from the SERMAS toolkit (see the example below), for example:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"class NewRobot(IntegrationBaseClass):\n  def __init__(self, ros_node):\n      super().__init__(ros_node, SERMAS_TOPIC)\n  def handle_sermas_message(self, msg):\n      ...\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"SERMAS_TOPIC"})," is a string defining the topic the integration wants to send or receive messages on.",(0,o.jsx)(s.br,{}),"\n","Place the file containing the new implemented class in a folder under ",(0,o.jsx)(s.code,{children:"ros_proxy/ros_proxy/integrations"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"load-it",children:"Load it"}),"\n",(0,o.jsxs)(s.p,{children:["Each integration can be loaded by importing and adding them to the list in the ",(0,o.jsx)(s.code,{children:"load_integrations"})," method, inside the ",(0,o.jsx)(s.code,{children:"SermasRosProxy"})," class (",(0,o.jsx)(s.code,{children:"ros_proxy/ros_proxy/sermas_ros_proxy.py"}),")."]}),"\n",(0,o.jsx)(s.h2,{id:"test-it",children:"Test it"}),"\n",(0,o.jsx)(s.p,{children:"Compile and run the ROS proxy with:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"docker compose build\ndocker compose up\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"NOTE:"})})," in order to communicate, the ROS proxy must run in the same network with the same DOMAIN_ID of the robot environment"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"example-of-an-integration",children:"Example of an integration"}),"\n",(0,o.jsxs)(s.p,{children:["In this example the integration subscribes to the odometry topic of the robot and publish it on the ",(0,o.jsx)(s.code,{children:"robotics/status"})," topic of the SERMAS toolkit."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'class NewRobot(IntegrationBaseClass):\n  def __init__(self, ros_node):\n    super().__init__(ros_node, \'robotics/status\')\n    # subscribe to robot odometry topic\n    self.ros_node.create_subscription(\n        Odometry, \'/odom\', self.handle_ros_message, 10)\n\n  def handle_mqtt_message(self, client, userdata, msg):\n    # not listening for messages, just publishing\n    pass\n\n  def handle_ros_message(self, msg):\n    # build the message\n    d = { \n        "status": {\n          "actualPosition": {\n            "position": {\n              "x": msg.pose.pose.position.x, "y": msg.pose.pose.position.y, "z": msg.pose.pose.position.z\n              },\n            "orientation": {\n              "x": msg.pose.pose.orientation.x, "y": msg.pose.pose.orientation.y, "z": msg.pose.pose.orientation.z, "w": msg.pose.pose.orientation.w\n              }\n            },\n          "velocity": {\n            "linear": {\n              "x": msg.twist.twist.linear.x, "y": msg.twist.twist.linear.y, "z": msg.twist.twist.linear.z\n              },\n            "angular": {\n              "x": msg.twist.twist.angular.x, "y": msg.twist.twist.angular.y, "z": msg.twist.twist.angular.z\n              }\n            }\n          }\n        }\n    # send the message to SERMAS toolkit\n    self.mqtt_client.publish(self.sermas_topic, d)\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(6540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);