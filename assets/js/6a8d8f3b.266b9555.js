"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7186],{66936:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=i(85893),t=i(11151);const s={title:"WebXR Input Sources in PlayCanvas",sidebar_position:4},r=void 0,o={id:"user-manual/xr/input-sources",title:"WebXR Input Sources in PlayCanvas",description:"Input Source",source:"@site/docs/user-manual/xr/input-sources.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/input-sources",permalink:"/user-manual/xr/input-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/input-sources.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"WebXR Input Sources in PlayCanvas",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"Types of VR experiences",permalink:"/user-manual/xr/vr/types-of-vr"},next:{title:"Optimizing WebXR applications",permalink:"/user-manual/xr/optimizing-webxr"}},c={},d=[{value:"Input Source",id:"input-source",level:2},{value:"Accessing Input Sources",id:"accessing-input-sources",level:2},{value:"Primary Action (select)",id:"primary-action-select",level:2},{value:"Ray",id:"ray",level:2},{value:"Grip",id:"grip",level:2},{value:"GamePad",id:"gamepad",level:2},{value:"Hands",id:"hands",level:2},{value:"Profiles",id:"profiles",level:2},{value:"Tutorials",id:"tutorials",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"input-source",children:"Input Source"}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.a,{href:"/api/pc.XrInputSource.html",children:"XrInputSource"})," represents an input mechanism that allows the user to interact with a virtual world. Those include, but are not limited to: handheld controllers, optically tracked hands, gaze-based input methods and touch screens. But an input source is not explicitly associated with traditional gamepads, mice or keyboards."]}),"\n",(0,a.jsx)(n.h2,{id:"accessing-input-sources",children:"Accessing Input Sources"}),"\n",(0,a.jsxs)(n.p,{children:["A list of input sources is available on the ",(0,a.jsx)(n.a,{href:"/api/pc.XrInput.html",children:"XrInput"})," manager which is created by the ",(0,a.jsx)(n.a,{href:"/api/pc.XrManager.html",children:"XrManager"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var inputSources = app.xr.input.inputSources;\nfor (var i = 0; i < inputSources.length; i++) {\n    // iterate through each available input source\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Input sources can be added and removed dynamically. This can be done by connecting physical devices or by switching input devices by underlying platform, and some input sources have a lifespan only during their primary action (for example, a touchscreen in an AR-type session on mobile). You can subscribe to ",(0,a.jsx)(n.code,{children:"add"})," and ",(0,a.jsx)(n.code,{children:"remove"})," events:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('add', function (inputSource) {\n    // input source been added\n\n    inputSource.once('remove', function () {\n        // know when input source has been removed\n    });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"primary-action-select",children:"Primary Action (select)"}),"\n",(0,a.jsxs)(n.p,{children:["Each input source can have a primary action ",(0,a.jsx)(n.code,{children:"select"}),". On gaze-based input sources, it is the touch of a screen/button. On handheld devices, it is the primary button/trigger. For tracked hands it is emulated by PlayCanvas engine when thumb and index tips are touching. There are also ",(0,a.jsx)(n.code,{children:"selectstart"})," and ",(0,a.jsx)(n.code,{children:"selectend"})," events which you can subscribe to as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"inputSource.on('select', function () {\n    // primary action\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or through the input manager:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('select', function (inputSource) {\n    // primary action\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ray",children:"Ray"}),"\n",(0,a.jsx)(n.p,{children:"Each input source has a ray which has an origin where it points from, and a direction in which it is pointing. A ray is transformed to world space. Some examples of input sources might be, but not limited to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Gaze-based input, such as a mobile device which is inserted into a Google Cardboard\u2122 style device. It will have an input source with ",(0,a.jsx)(n.code,{children:"targetRayMode"})," set to ",(0,a.jsx)(n.code,{children:"pc.XRTARGETRAY_GAZE"}),", and will originate from the viewer's position and point straight where the user is facing."]}),"\n",(0,a.jsx)(n.li,{children:"Screen-based input. This might be available on mobile devices in Augmented Reality session types, where the user can interact with the virtual world by touchscreen."}),"\n",(0,a.jsx)(n.li,{children:"Handheld devices, like the Oculus Touch\u2122, will have a ray originating from the tip of the handheld device and the direction is based on the rotation of device."}),"\n",(0,a.jsx)(n.li,{children:"Tracked Hands have an emulated by PlayCanvas engine ray that originates from point between thumb and index tips, and pointing forward."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example illustrating how to check whether a ray has intersected with the bounding-box of a mesh:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// update ray with input source data\nray.set(inputSource.getOrigin(), inputSource.getDirection());\n// check if mesh bounding box intersects with ray\nif (meshInstance.aabb.intersectsRay(ray)) {\n    // input source is pointing on a mesh\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"grip",children:"Grip"}),"\n",(0,a.jsx)(n.p,{children:"Some input sources are associated with a physical handheld device, such as an Oculus Touch\u2122, and can have position and rotation. Their position and rotation are provided in world space."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.grip) {\n    // can render device model\n    // position and rotate associated entity with model\n    entity.setPosition(inputSource.getPosition());\n    entity.setRotation(inputSource.getRotation());\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gamepad",children:"GamePad"}),"\n",(0,a.jsxs)(n.p,{children:["If the platform supports the ",(0,a.jsx)(n.a,{href:"https://www.w3.org/TR/webxr-gamepads-module-1/",children:"WebXR Gamepads Module"}),", then an input source might have an associated ",(0,a.jsx)(n.a,{href:"https://w3c.github.io/gamepad/",children:"GamePad"})," object with it, which can be accessed to get buttons, triggers, axes and other input hardware states:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var gamepad = inputSource.gamepad;\nif (gamepad) {\n    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {\n        // user pressed a button on a gamepad\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"hands",children:"Hands"}),"\n",(0,a.jsxs)(n.p,{children:["If platform supports ",(0,a.jsx)(n.a,{href:"https://immersive-web.github.io/webxr-hand-input/",children:"WebXR Hand Input"}),", then an input source might have an associated hand data, which is exposed as ",(0,a.jsx)(n.a,{href:"/api/pc.XrHand.html",children:"XrHand"}),", and provides convenient information in form of ",(0,a.jsx)(n.a,{href:"/api/pc.XrFinger.html",children:"XrFinger"})," and ",(0,a.jsx)(n.a,{href:"/api/pc.XrJoint.html",children:"XrJoint"})," for application developer to use, such as wrist, fingers, each joint, tips and events for detecting when hands loose/restore tracking."]}),"\n",(0,a.jsx)(n.p,{children:"Creating basic hand model:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"var joints = [ ];\nvar hand = inputSource.hand;\n\nif (hand) {\n    for(var i = 0; i < hand.joints.length; i++) {\n        var entity = new pc.Entity();\n        entity.joint = hand.joints[i];\n        entity.addComponent('model', { type: 'box' });\n        parent.addChild(entity);\n        joints.push(entity);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"And synchronising it on every update:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"for(var i = 0; i < joints.length; i++) {\n    var entity = joints[i];\n    var joint = entity.joint;\n    var radius = joint.radius * 2;\n    entity.setLocalScale(radius, radius, radius);\n    entity.setPosition(joint.getPosition());\n    entity.setRotation(joint.getRotation());\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"profiles",children:"Profiles"}),"\n",(0,a.jsxs)(n.p,{children:["Each input source might have a list of strings describing a type of input source, which is described in a ",(0,a.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry",children:"profile registry"}),". Based on this, you can figure out what type of model to render for handheld device or what capabilities it might have. Additionally, the profile registry lists gamepad mapping details, such as buttons and axes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.profiles.indexOf('oculus-touch-v2') !== -1) {\n    // it is an Oculus Touch\u2122 handheld device\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,a.jsxs)(n.p,{children:["PlayCanvas provides a number of ",(0,a.jsx)(n.a,{href:"/tutorials/?tags=vr",children:"tutorials and samples"})," on the usage of WebXR functionality. Users are able to fork them and examine how code and components are structured to allow for XR to be used."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var a=i(67294);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);