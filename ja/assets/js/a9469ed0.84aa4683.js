"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6244],{49431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(85893),s=t(11151);const o={title:"\u4e00\u4eba\u79f0\u8996\u70b9\u3067\u306e\u79fb\u52d5\u65b9\u6cd5",tags:["input","camera"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405842/JLWRE0-image-75.jpg"},i=void 0,a={id:"tutorials/first-person-movement",title:"\u4e00\u4eba\u79f0\u8996\u70b9\u3067\u306e\u79fb\u52d5\u65b9\u6cd5",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30d5\u30a1\u30fc\u30b9\u30c8\u30d1\u30fc\u30bd\u30f3\u3067\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u79fb\u52d5\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/first-person-movement.md",sourceDirName:"tutorials",slug:"/tutorials/first-person-movement",permalink:"/ja/tutorials/first-person-movement",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/first-person-movement.md",tags:[{label:"input",permalink:"/ja/tags/input"},{label:"camera",permalink:"/ja/tags/camera"}],version:"current",frontMatter:{title:"\u4e00\u4eba\u79f0\u8996\u70b9\u3067\u306e\u79fb\u52d5\u65b9\u6cd5",tags:["input","camera"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405842/JLWRE0-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Fading objects in and out",permalink:"/ja/tutorials/fading-objects-in-and-out"},next:{title:"First Person Shooter Starter Kit",permalink:"/ja/tutorials/first-person-shooter-starter-kit"}},c={},p=[];function d(e){const n={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/HzOzlZOC/",title:"First Person Movement"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30d5\u30a1\u30fc\u30b9\u30c8\u30d1\u30fc\u30bd\u30f3\u3067\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u79fb\u52d5\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30b7\u30fc\u30f3\u8a2d\u5b9a\u306f\u91cd\u8981\u3067\u3059\u3002\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u305f\u4e0a\u306bRigidBody\u3068Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u5b50\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u306b\u624b\u52d5\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://playcanvas.com/project/405842",children:"Tutorial Project"}),"\u3067\u5168\u30b7\u30fc\u30f3\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u6a5f\u80fd\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30de\u30a6\u30b9\u3068\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5165\u529b\u3092\u53d7\u3051\u53d6\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u30de\u30a6\u30b9\u306e\u5165\u529b\u304b\u3089\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u66f4\u65b0\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u91cd\u529b\u3092\u9069\u7528\u3057\u3066\u30d7\u30ec\u30a4\u30e4\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30b7\u30fc\u30f3\u5185\u3067\u79fb\u52d5\u3059\u308b"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f:\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u901f\u5ea6\u306f\u76f4\u63a5\u8a2d\u5b9a\u3055\u308c\u305a\u3001",(0,r.jsx)(n.a,{href:"/api/pc.RigidBodyComponent.html#applyForce",children:(0,r.jsx)(n.code,{children:"applyForce"})}),"\u3092\u4f7f\u7528\u3057\u3066\u529b\u3092\u52a0\u3048\u308b\u3053\u3068\u3067\u79fb\u52d5\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u5024\u304c\u30a8\u30c7\u30a3\u30bf\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6700\u5927\u901f\u5ea6\u3092\u5236\u9650\u3059\u308b\u306b\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u5165\u529b\u30ad\u30fc\u3092\u96e2\u3057\u305f\u5f8c\u306b\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u30b9\u30e9\u30a4\u30c9\u3057\u306a\u3044\u3088\u3046\u306b\u7dda\u5f62\u6e1b\u8870\u3092\u9069\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u8ee2\u304c\u3063\u3066\u3057\u307e\u3046\u306e\u3092\u9632\u3050\u305f\u3081\u3001\u3059\u3079\u3066\u306e\u8ef8\u306e\u89d2\u5ea6\u8981\u7d20\u30920\u306b\u6e1b\u3089\u3057\u307e\u3057\u305f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/tutorials/beginner/first_person_movement/rigidbody_attributes.jpg",alt:"Rigidbody Attributes"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var FirstPersonMovement = pc.createScript('firstPersonMovement');\n\nFirstPersonMovement.attributes.add('camera', {\n    type: 'entity',\n    description: 'Optional, assign a camera entity, otherwise one is created'\n});\n\nFirstPersonMovement.attributes.add('power', {\n    type: 'number',\n    default: 2500,\n    description: 'Adjusts the speed of player movement'\n});\n\nFirstPersonMovement.attributes.add('lookSpeed', {\n    type: 'number',\n    default: 0.25,\n    description: 'Adjusts the sensitivity of looking'\n});\n\n// initialize code called once per entity\nFirstPersonMovement.prototype.initialize = function() {\n    this.force = new pc.Vec3();\n    this.eulers = new pc.Vec3();\n\n    var app = this.app;\n\n    // Listen for mouse move events\n    app.mouse.on(\"mousemove\", this._onMouseMove, this);\n\n    // when the mouse is clicked hide the cursor\n    app.mouse.on(\"mousedown\", function () {\n        app.mouse.enablePointerLock();\n    }, this);\n\n    // Check for required components\n    if (!this.entity.collision) {\n        console.error(\"First Person Movement script needs to have a 'collision' component\");\n    }\n\n    if (!this.entity.rigidbody || this.entity.rigidbody.type !== pc.BODYTYPE_DYNAMIC) {\n        console.error(\"First Person Movement script needs to have a DYNAMIC 'rigidbody' component\");\n    }\n};\n\n// update code called every frame\nFirstPersonMovement.prototype.update = function(dt) {\n    // If a camera isn't assigned from the Editor, create one\n    if (!this.camera) {\n        this._createCamera();\n    }\n\n    var force = this.force;\n    var app = this.app;\n\n    // Get camera directions to determine movement directions\n    var forward = this.camera.forward;\n    var right = this.camera.right;\n\n\n    // movement\n    var x = 0;\n    var z = 0;\n\n    // Use W-A-S-D keys to move player\n    // Check for key presses\n    if (app.keyboard.isPressed(pc.KEY_A) || app.keyboard.isPressed(pc.KEY_Q)) {\n        x -= right.x;\n        z -= right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_D)) {\n        x += right.x;\n        z += right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_W)) {\n        x += forward.x;\n        z += forward.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_S)) {\n        x -= forward.x;\n        z -= forward.z;\n    }\n\n    // use direction from keypresses to apply a force to the character\n    if (x !== 0 || z !== 0) {\n        force.set(x, 0, z).normalize().scale(this.power);\n        this.entity.rigidbody.applyForce(force);\n    }\n\n    // update camera angle from mouse events\n    this.camera.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0);\n};\n\nFirstPersonMovement.prototype._onMouseMove = function (e) {\n    // If pointer is disabled\n    // If the left mouse button is down update the camera from mouse movement\n    if (pc.Mouse.isPointerLocked() || e.buttons[0]) {\n        this.eulers.x -= this.lookSpeed * e.dx;\n        this.eulers.y -= this.lookSpeed * e.dy;\n    }\n};\n\nFirstPersonMovement.prototype._createCamera = function () {\n    // If user hasn't assigned a camera, create a new one\n    this.camera = new pc.Entity();\n    this.camera.setName(\"First Person Camera\");\n    this.camera.addComponent(\"camera\");\n    this.entity.addChild(this.camera);\n    this.camera.translateLocal(0, 0.5, 0);\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);