"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[488],{80038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=n(85893),s=n(11151);const o={title:"Controlling Lights",tags:["lighting"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405812/9D487A-image-75.jpg"},a=void 0,r={id:"tutorials/controlling-lights",title:"Controlling Lights",description:"Press 1, 2 or 3 to enable/disable the spot, point and directional lights respectively.",source:"@site/docs/tutorials/controlling-lights.md",sourceDirName:"tutorials",slug:"/tutorials/controlling-lights",permalink:"/tutorials/controlling-lights",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/controlling-lights.md",tags:[{label:"lighting",permalink:"/tags/lighting"}],version:"current",frontMatter:{title:"Controlling Lights",tags:["lighting"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405812/9D487A-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Compound Physics Shapes",permalink:"/tutorials/compound-physics-shapes"},next:{title:"Crash Course - Make a Game",permalink:"/tutorials/crash-course"}},l={},h=[{value:"The lighting commands",id:"the-lighting-commands",level:2},{value:"General setup",id:"general-setup",level:2}];function c(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/tiKpka9M/",title:"Controlling Lights"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"Press 1, 2 or 3 to enable/disable the spot, point and directional lights respectively."})}),"\n",(0,i.jsxs)(e.p,{children:["In this tutorial we will show you how to enable/disable lights in PlayCanvas and to change light color and intensity. Note that there are many more controllable light features and properties, such as the light range. See the ",(0,i.jsx)(e.a,{href:"/api/pc.LightComponent.html",children:"API listing here"})," for more details."]}),"\n",(0,i.jsx)(e.p,{children:"It is also important to be aware of the different limits for differing light properties, for example red, green and blue values are set between 0 and 1, but intensity reaches from 0 up to 10. Also some lights have properties unique to them, such as the cone angles for the spot light."}),"\n",(0,i.jsx)(e.h2,{id:"the-lighting-commands",children:"The lighting commands"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"if (app.keyboard.wasPressed(pc.KEY_1)) {\n    this.spot.light.enabled = !this.spot.light.enabled;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"This line toggles on and off the light component of the 'spot' entity."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"this.color1 = new pc.Color(1, 1, 1);\n"})}),"\n",(0,i.jsx)(e.p,{children:"A new color array is declared, the first three values affect red, green and blue values respectively."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var s = Math.abs(Math.sin(1 + this.timer));\nvar r = 1-s/2;\nvar g = s-0.2;\nvar b = 0.55+s/2;\nthis.color1.set(r, g, b);\nthis.spot.light.color = this.color1;\nthis.spot.light.intensity = 10*s;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["These lines assign values to r, g and b variables based on a sin wave and then assign these values to the previously declared color array via ",(0,i.jsx)(e.code,{children:"color1.set(x, y, z)"})," and then onto the light property. The intensity is set to vary sinusoidally from the max light intensity value of 10 down to 0."]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["Using ",(0,i.jsx)(e.code,{children:"entity.light.color.r"})," to access and change the red value of a light's color will not work. Only changes to the light property ",(0,i.jsx)(e.code,{children:"color"})," are detected, so you must assign a complete ",(0,i.jsx)(e.code,{children:"pc.Color"})," to the property e.g. ",(0,i.jsx)(e.code,{children:"entity.light.color = new pc.Color(1, 1, 1);"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"general-setup",children:"General setup"}),"\n",(0,i.jsxs)(e.p,{children:["We added a spot light (attached to a parent assembly of a basic torch model), an omni light attached to a parent sphere model, in addition to the default directional light that is created for every new Scene. The controlling script was attached to the root entity. The sphere and torch were made children of a blank entity residing in the centre of the scene to enable easy rotation. The ",(0,i.jsx)(e.a,{href:"https://playcanvas.com/project/405812/overview/tutorial-controlling-lights",children:"full Editor scene and scripts can be accessed here"})," in the 'controllingLights' Scene."]}),"\n",(0,i.jsx)(e.p,{children:"The full code used for the above PlayCanvas app is as follows."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'var LightHandler = pc.createScript(\'lightHandler\');\n\n// initialize code called once per entity\nLightHandler.prototype.initialize = function() {\n    var app = this.app;\n\n    this.spot = app.root.findByName("SpotLight");\n    this.point = app.root.findByName("PointLight");\n    this.directional = app.root.findByName("DirectionalLight");\n    this.pivot1 = app.root.findByName("Pivot1");\n    this.pivot2 = app.root.findByName("Pivot2");\n    this.timer = 0;\n    this.color1 = new pc.Color(1, 1, 1);\n    this.color2 = new pc.Color(1, 1, 1);\n    this.color3 = new pc.Color(1, 1, 1);\n};\n\n// update code called every frame\nLightHandler.prototype.update = function(dt) {\n    var app = this.app;\n\n    this.pivot();\n\n    if (app.keyboard.wasPressed(pc.KEY_1)) {\n        this.spot.light.enabled = !this.spot.light.enabled;\n    }\n    if (app.keyboard.wasPressed(pc.KEY_2)) {\n        this.point.light.enabled = !this.point.light.enabled;\n    }\n    if (app.keyboard.wasPressed(pc.KEY_3)) {\n        this.directional.light.enabled = !this.directional.light.enabled;\n    }\n\n    // a counter that is used as input to sin the functions determining light properties for all lights.\n    this.timer += dt;\n\n    // these 3 code blocks assign color and intensity values that vary according to a sin function\n    // all sin inputs are in radians\n    var s = Math.abs(Math.sin(1 + this.timer));\n    var r = 1-s/2;\n    var g = s-0.2;\n    var b = 0.55+s/2;\n    this.color1.set(r, g, b);\n    this.spot.light.color = this.color1;\n    this.spot.light.intensity = 10*s;\n\n    s = Math.abs(Math.sin(2 + this.timer));\n    r = s/2;\n    g = 0.25+s/2;\n    b = 1.0-s;\n    this.color2.set(r, g, b);\n    this.point.light.color = this.color2;\n    this.point.light.intensity = 10*s;\n\n    s = Math.abs(Math.sin(3 + this.timer));\n    r = 0.25+s/2;\n    g = 0.75-s/2;\n    b = 0.25+s/2;\n    this.color3.set(r, g, b);\n    this.directional.light.color = this.color3;\n    this.directional.light.intensity = 3*(1-s);\n};\n\n// this function rotates all three lights about their parent entities (all at the centre of the scene) to easily create circular motion.\nLightHandler.prototype.pivot = function () {\n    this.pivot1.rotate(0, 2, 0);\n    this.pivot2.rotate(0, -3, 0);\n};\n'})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>a});var i=n(67294);const s={},o=i.createContext(s);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);