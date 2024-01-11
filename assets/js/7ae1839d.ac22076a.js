"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6170],{93298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(85893),s=n(11151);const o={title:"First Person Movement",tags:["input","camera"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405842/JLWRE0-image-75.jpg"},i=void 0,a={id:"tutorials/first-person-movement",title:"First Person Movement",description:"This is an application that implements first person character movement.",source:"@site/docs/tutorials/first-person-movement.md",sourceDirName:"tutorials",slug:"/tutorials/first-person-movement",permalink:"/tutorials/first-person-movement",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/first-person-movement.md",tags:[{label:"input",permalink:"/tags/input"},{label:"camera",permalink:"/tags/camera"}],version:"current",frontMatter:{title:"First Person Movement",tags:["input","camera"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405842/JLWRE0-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Fading objects in and out",permalink:"/tutorials/fading-objects-in-and-out"},next:{title:"First Person Shooter Starter Kit",permalink:"/tutorials/first-person-shooter-starter-kit"}},c={},p=[];function l(e){const t={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/HzOzlZOC/",title:"First Person Movement"})}),"\n",(0,r.jsx)(t.p,{children:"This is an application that implements first person character movement."}),"\n",(0,r.jsx)(t.p,{children:"The scene setup for this controller is important as your character must have a rigidbody and collision component in addition to the script attached. In addition, the script supports adding a camera entity as a child of the Player and manually set in the inspector. If no camera entity is present a new entity is created."}),"\n",(0,r.jsxs)(t.p,{children:["See the full scene setup in the ",(0,r.jsx)(t.a,{href:"https://playcanvas.com/project/405842",children:"Tutorial Project"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The script below performs the following functions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Listen for mouse and keyboard input"}),"\n",(0,r.jsx)(t.li,{children:"Update a camera entity from the mouse input"}),"\n",(0,r.jsx)(t.li,{children:"Apply forces to move the player entity around the scene"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Note, the player's velocity is never set directly but it is moved by applying forces via the rigidbody's API function ",(0,r.jsx)(t.a,{href:"/api/pc.RigidBodyComponent.html#applyForce",children:(0,r.jsx)(t.code,{children:"applyForce"})}),"."]}),"\n",(0,r.jsx)(t.p,{children:"On the rigidbody component, we also have the following values set in the Editor Inspector:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"To limit the maximum velocity, we have linear damping applied that stops the player from sliding after the player has released input keys."}),"\n",(0,r.jsx)(t.li,{children:"To stop the player from rolling over, we also reduced the angular Factor to 0 on all axes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/tutorials/beginner/first_person_movement/rigidbody_attributes.jpg",alt:"Rigidbody Attributes"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var FirstPersonMovement = pc.createScript('firstPersonMovement');\n\nFirstPersonMovement.attributes.add('camera', {\n    type: 'entity',\n    description: 'Optional, assign a camera entity, otherwise one is created'\n});\n\nFirstPersonMovement.attributes.add('power', {\n    type: 'number',\n    default: 2500,\n    description: 'Adjusts the speed of player movement'\n});\n\nFirstPersonMovement.attributes.add('lookSpeed', {\n    type: 'number',\n    default: 0.25,\n    description: 'Adjusts the sensitivity of looking'\n});\n\n// initialize code called once per entity\nFirstPersonMovement.prototype.initialize = function() {\n    this.force = new pc.Vec3();\n    this.eulers = new pc.Vec3();\n\n    var app = this.app;\n\n    // Listen for mouse move events\n    app.mouse.on(\"mousemove\", this._onMouseMove, this);\n\n    // when the mouse is clicked hide the cursor\n    app.mouse.on(\"mousedown\", function () {\n        app.mouse.enablePointerLock();\n    }, this);\n\n    // Check for required components\n    if (!this.entity.collision) {\n        console.error(\"First Person Movement script needs to have a 'collision' component\");\n    }\n\n    if (!this.entity.rigidbody || this.entity.rigidbody.type !== pc.BODYTYPE_DYNAMIC) {\n        console.error(\"First Person Movement script needs to have a DYNAMIC 'rigidbody' component\");\n    }\n};\n\n// update code called every frame\nFirstPersonMovement.prototype.update = function(dt) {\n    // If a camera isn't assigned from the Editor, create one\n    if (!this.camera) {\n        this._createCamera();\n    }\n\n    var force = this.force;\n    var app = this.app;\n\n    // Get camera directions to determine movement directions\n    var forward = this.camera.forward;\n    var right = this.camera.right;\n\n\n    // movement\n    var x = 0;\n    var z = 0;\n\n    // Use W-A-S-D keys to move player\n    // Check for key presses\n    if (app.keyboard.isPressed(pc.KEY_A) || app.keyboard.isPressed(pc.KEY_Q)) {\n        x -= right.x;\n        z -= right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_D)) {\n        x += right.x;\n        z += right.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_W)) {\n        x += forward.x;\n        z += forward.z;\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_S)) {\n        x -= forward.x;\n        z -= forward.z;\n    }\n\n    // use direction from keypresses to apply a force to the character\n    if (x !== 0 || z !== 0) {\n        force.set(x, 0, z).normalize().scale(this.power);\n        this.entity.rigidbody.applyForce(force);\n    }\n\n    // update camera angle from mouse events\n    this.camera.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0);\n};\n\nFirstPersonMovement.prototype._onMouseMove = function (e) {\n    // If pointer is disabled\n    // If the left mouse button is down update the camera from mouse movement\n    if (pc.Mouse.isPointerLocked() || e.buttons[0]) {\n        this.eulers.x -= this.lookSpeed * e.dx;\n        this.eulers.y -= this.lookSpeed * e.dy;\n    }\n};\n\nFirstPersonMovement.prototype._createCamera = function () {\n    // If user hasn't assigned a camera, create a new one\n    this.camera = new pc.Entity();\n    this.camera.setName(\"First Person Camera\");\n    this.camera.addComponent(\"camera\");\n    this.entity.addChild(this.camera);\n    this.camera.translateLocal(0, 0.5, 0);\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);