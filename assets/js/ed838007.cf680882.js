"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6501],{11859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),a=n(11151);const s={title:"Anatomy of a script",sidebar_position:3},o="Script Methods",r={id:"user-manual/scripting/anatomy",title:"Anatomy of a script",description:"Here is a basic script. We can learn about the structure of a PlayCanvas script from it.",source:"@site/docs/user-manual/scripting/anatomy.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/anatomy",permalink:"/user-manual/scripting/anatomy",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/anatomy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Anatomy of a script",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Code Editor",permalink:"/user-manual/scripting/code-editor"},next:{title:"Application Lifecycle",permalink:"/user-manual/scripting/application-lifecyle"}},d={},c=[{value:"Declaration of Script Type",id:"declaration-of-script-type",level:2},{value:"Script Attributes",id:"script-attributes",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Update",id:"update",level:2},{value:"Swap",id:"swap",level:2},{value:"Additional Methods: postInitialize and postUpdate",id:"additional-methods-postinitialize-and-postupdate",level:2},{value:"state and enable/disable",id:"state-and-enabledisable",level:2},{value:"destroy",id:"destroy",level:2},{value:"attr and attr:[name]",id:"attr-and-attrname",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Here is a basic script. We can learn about the structure of a PlayCanvas script from it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var Rotate = pc.createScript('rotate');\n\nRotate.attributes.add('speed', { type: 'number', default: 10 });\n\n// initialize code called once per entity\nRotate.prototype.initialize = function() {\n    this.local = false; // choose local rotation or world rotation\n};\n\n// update code called every frame\nRotate.prototype.update = function(dt) {\n    if (this.local) {\n        this.entity.rotateLocal(0, this.speed * dt, 0);\n    } else {\n        this.entity.rotate(0, this.speed * dt, 0);\n    }\n};\n\n// swap method called for script hot-reloading\n// inherit your script state here\nRotate.prototype.swap = function(old) {\n    this.local = old.local;\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"We'll break down each section of the script"}),"\n",(0,i.jsx)(t.h1,{id:"script-methods",children:"Script Methods"}),"\n",(0,i.jsx)(t.h2,{id:"declaration-of-script-type",children:"Declaration of Script Type"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var Rotate = pc.createScript('rotate');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This line creates a new ScriptType called 'rotate'. The name of the script is used to identify the script in script components. Each ScriptType that is declared in a project must have a unique name. The returned function ",(0,i.jsx)(t.code,{children:"Rotate"})," is a javascript function which is ready to have its prototype extended with a standard set of methods. Somewhat like class inheritance."]}),"\n",(0,i.jsx)(t.h2,{id:"script-attributes",children:"Script Attributes"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"Rotate.attributes.add('speed', { type: 'number', default: 10 });\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This line declares a script attribute. A script attribute is a property of the script instance and it is exposed to the Editor UI. This allows you to customize individual entities in the Editor. In the above example, the attribute is called 'speed' and would be accessible in the script code as ",(0,i.jsx)(t.code,{children:"this.speed"}),". It is a number and by default is initialized to 10."]}),"\n",(0,i.jsx)(t.p,{children:"Attributes are automatically inherited from a new script instance during code hot-swap."}),"\n",(0,i.jsx)(t.h2,{id:"initialize",children:"Initialize"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// initialize code called once per entity\nRotate.prototype.initialize = function() {\n    // local rotation or world rotation\n    this.local = false;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"initialize"})," method is called on each entity that has the script attached to it. It is called after application loading is complete and the entity hierarchy has been constructed but before the first update loop or frame is rendered. The ",(0,i.jsx)(t.code,{children:"initialize"})," method is only called once for each entity. You can use it to define and initialize member variables of the script instance. If an entity or script is disabled when the application starts, the initialize method will be called the first time the entity is enabled."]}),"\n",(0,i.jsxs)(t.p,{children:["When an entity is cloned using the ",(0,i.jsx)(t.code,{children:"entity.clone"})," method, the ",(0,i.jsx)(t.code,{children:"initialize"})," method on the script is only called when the cloned entity is added to the scene hierarchy; as long as both the entity and script are enabled as well."]}),"\n",(0,i.jsxs)(t.p,{children:["If a script component has multiple scripts attached to it, the ",(0,i.jsx)(t.code,{children:"initialize"})," method is called in the order of the scripts on the component."]}),"\n",(0,i.jsx)(t.h2,{id:"update",children:"Update"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// update code called every frame\nRotate.prototype.update = function(dt) {\n    if (this.local) {\n        this.entity.rotateLocal(0, this.speed * dt, 0);\n    } else {\n        this.entity.rotate(0, this.speed * dt, 0);\n    }\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The update method is called for every frame; it is invoked within each entity that has an enabled script component and enabled script instance. Each frame is passed  the ",(0,i.jsx)(t.code,{children:"dt"})," argument containing the time, in seconds, since the last frame."]}),"\n",(0,i.jsxs)(t.p,{children:["If a script component has multiple scripts attached to it, ",(0,i.jsx)(t.code,{children:"update"})," is called in the order of the scripts on the component."]}),"\n",(0,i.jsx)(t.h2,{id:"swap",children:"Swap"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// swap method called for script hot-reloading\n// inherit your script state here\nRotate.prototype.swap = function(old) {\n    this.local = old.local;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"swap"}),' method is called whenever a ScriptType with same is added to registry. This is done automatically during Launch when a script is changed at runtime from the Editor. This method allows you to support "code hot reloading" whilst you continue to run your application. It is extremely useful if you wish to iterate on code that takes a while to reach while running your app. You can make changes and see them without having to reload and run through lots of set up or restoring the game state.']}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"swap"})," method is passed the old script instance as an argument and you can use this to copy the state from the old instance into the new one. You should also ensure that events are unsubscribed and re-subscribed to."]}),"\n",(0,i.jsx)(t.p,{children:"If you do not wish to support hot-swapping of code, you can delete the swap method and the engine will not attempt to refresh the script."}),"\n",(0,i.jsx)(t.h2,{id:"additional-methods-postinitialize-and-postupdate",children:"Additional Methods: postInitialize and postUpdate"}),"\n",(0,i.jsxs)(t.p,{children:["There are two more methods that are called by the engine on scripts if they are present. ",(0,i.jsx)(t.code,{children:"postInitialize"})," is called on all scripts that implement it after all scripts have been initialized. Use this method to perform functions that can assume all scripts are initialized. ",(0,i.jsx)(t.code,{children:"postUpdate"})," is an update method that is called after all scripts have been updated. Use this to perform functions that can assume that all scripts have been updated. For example, a camera that is tracking another entity should update its position in ",(0,i.jsx)(t.code,{children:"postUpdate"})," so that the other entity has completed its motion for the frame."]}),"\n",(0,i.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.p,{children:"Script instances fire a number of events that can be used to respond to specific circumstances."}),"\n",(0,i.jsx)(t.h2,{id:"state-and-enabledisable",children:"state and enable/disable"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"state"})," event is fired when the script instance changes running state from enabled to disabled or vice versa. The script instance state can be changed by enabling/disabling the script itself, the component the script is a member of, or the entity that the script component is attached to. The ",(0,i.jsx)(t.code,{children:"enable"})," event fires only when the state changes from disabled to enabled, and the ",(0,i.jsx)(t.code,{children:"disable"})," event fires only when the state changes from enabled to disabled."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("state", function (enabled) {\n        // play a sound effect when the entity is enabled or disabled\n        if (enabled) {\n            this.entity.sound.play("bell");\n        } else {\n            this.entity.sound.play("horn");\n        }\n    });\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["or the equivalent using ",(0,i.jsx)(t.code,{children:"enable"})," and ",(0,i.jsx)(t.code,{children:"disable"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("enable", function () {\n        this.entity.sound.play("bell");\n    });\n\n    this.on("disable", function () {\n        this.entity.sound.play("horn");\n    });\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"destroy",children:"destroy"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"destroy"})," event is fired when the script instance is destroyed. This could be because the script was removed from the component by calling the ",(0,i.jsx)(t.code,{children:"destroy()"})," method, or script component been removed from Entity, or because the Entity it was attached to was destroyed."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("destroy", function () {\n        // remove a DOM event listener when the entity is destroyed\n        window.removeEventListener("resize", this._onResize);\n    });\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"attr-and-attrname",children:"attr and attr:[name]"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"attr"})," and ",(0,i.jsx)(t.code,{children:"attr:[name]"})," events are fired when a declared script attribute value is changed. This could be in the course of running the application or it could be when changes are made to the value via the Editor. The ",(0,i.jsx)(t.code,{children:"attr"})," is fired for every attribute changed. The ",(0,i.jsx)(t.code,{children:"attr:[name]"})," is fired only for a specific attribute e.g. if you have an attribute called 'speed' the event ",(0,i.jsx)(t.code,{children:"attr:speed"})," would be fired when the speed is changed."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'Rotate.prototype.initialize = function () {\n    this.on("attr:speed", function (value, prev) {\n        // speed attribute has changed\n    });\n};\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);