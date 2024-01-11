"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9839],{61322:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(85893),i=s(11151);const o={title:"Touchscreen Joypad Controls",tags:["input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1007506/2F5E56-image-75.jpg"},a=void 0,r={id:"tutorials/touch-joypad",title:"Touchscreen Joypad Controls",description:"Click here to see the project.",source:"@site/docs/tutorials/touch-joypad.md",sourceDirName:"tutorials",slug:"/tutorials/touch-joypad",permalink:"/tutorials/touch-joypad",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/touch-joypad.md",tags:[{label:"input",permalink:"/tags/input"},{label:"ui",permalink:"/tags/ui"}],version:"current",frontMatter:{title:"Touchscreen Joypad Controls",tags:["input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1007506/2F5E56-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Timers",permalink:"/tutorials/timers"},next:{title:"Tutorial: Layout Groups",permalink:"/tutorials/tutorial-layout-groups"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"Adding your joystick",id:"adding-your-joystick",level:2},{value:"Behavior Types",id:"behavior-types",level:3},{value:"Reading joystick values",id:"reading-joystick-values",level:3},{value:"Adding your buttons",id:"adding-your-buttons",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/kvE0iJWc/",title:"Touchscreen Joypad Controls"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"Click here to see the project"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial shares a Touchscreen Joypad library that can be installed and customized for any project that needs touch screen controls."}),"\n",(0,n.jsxs)(t.p,{children:["We recommend reading about the ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/",children:"PlayCanvas UI system"})," if you have not used it before as it is used to render and position the controls for this library."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/preview.gif",alt:""})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"example project"}),", right click on the folder 'touch-joypad' and click on 'Copy'.\n",(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/copy-folder.gif",alt:""})]}),"\n",(0,n.jsxs)(t.p,{children:["Open your project, right click in the assets panel and click on 'Paste'\n",(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/paste-folder.gif",alt:""})]}),"\n",(0,n.jsx)(t.h2,{id:"adding-your-joystick",children:"Adding your joystick"}),"\n",(0,n.jsx)(t.p,{children:"In the folder we've just pasted, open the 'templates' folder and there will be 4 preconfigured templates for the joysticks to cover the most common use cases."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Left/Right Fixed Touch Joystick"})," - A fixed joystick that is anchored to the bottom left/right of the screen corners. Recommended for quick reaction games where an instant response is expected such as a retro platforming game."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Left/Right Half Touch Joystick"})," - A joystick where the input area the left/right half of the screen and the joystick will move to where you touch in that area and them requires dragging for movement. Recommended for when 'pushing' or 'pulling' an object in the application."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For this example, let's use the 'Left Half Touch Joystick' template."}),"\n",(0,n.jsxs)(t.p,{children:["Create a 2D screen Entity and ",(0,n.jsx)(t.a,{href:"/user-manual/templates/#adding-templates-in-your-scene",children:"add the template"})," as a child of the screen Entity."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/adding-left-half-joystick.gif",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The joystick is made of three Entities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Input area (outlined in red)"}),"\n",(0,n.jsx)(t.li,{children:"Base (outlined in blue)"}),"\n",(0,n.jsx)(t.li,{children:"Nub (outlined in blue)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-layout.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The input area will listen for touch and mouse (for debugging purposes) events and also stops the propagation of the event."}),"\n",(0,n.jsxs)(t.p,{children:["This means that any UI Elements under this and any ",(0,n.jsx)(t.a,{href:"/api/pc.Mouse.html",children:"pc.Mouse"})," or ",(0,n.jsx)(t.a,{href:"/api/pc.Touch.html",children:"pc.Touch"})," events will not be fired if this area is interacted with first."]}),"\n",(0,n.jsxs)(t.p,{children:["As the input area is an UI Element, it can be positioned, sized and anchored specifically for your needs via the ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/elements/",children:"UI system layout"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It also has the 'touchJoystick' which has all the logic and attributes for the joystick. Each attribute has tooltips describing what they are for with some more details below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-script-attributes.gif",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The base and nub Entities are controlled by the script and are UI Elements. If you would like the joystick to be in a different place than where it is in the template, please position and anchor the base Entity to where you need them to be and not the input area."}),"\n",(0,n.jsx)(t.h3,{id:"behavior-types",children:"Behavior Types"}),"\n",(0,n.jsx)(t.p,{children:"There are 3 behavior types for the joystick that are commonly found in touch screen games and applications."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-type.png",alt:""})}),"\n",(0,n.jsxs)(t.p,{children:["'Fixed in place' where the base of the joystick does not move from it's position:\n",(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-fixed.gif",alt:""})]}),"\n",(0,n.jsxs)(t.p,{children:["'Move to first touch and fixed' where the base of the joystick moves to where the user first touches in the input area and then stays fixed:\n",(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-relative-fixed.gif",alt:""})]}),"\n",(0,n.jsxs)(t.p,{children:["'Move to first touch and drags' where the base of the joystick moves to where the user first touches in the input area and then is dragged when the user drags pass the joystick range:\n",(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-relative-drag.gif",alt:""})]}),"\n",(0,n.jsx)(t.p,{children:"This can be changed at runtime so it's possible to add this as a user option in the application as part of the in-application settings."}),"\n",(0,n.jsx)(t.h3,{id:"reading-joystick-values",children:"Reading joystick values"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/joystick-deadzone-range.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The red circle is dead zone and if the nub position is within that circle, the value from the joystick will return 0 for both axes. The blue circle is the range and the nub cannot go outside that circle."}),"\n",(0,n.jsx)(t.p,{children:"The values are always normalized between -1 and 1 on both axes based on the where the nub is between the dead zone (red circle) and the range (blue circle)."}),"\n",(0,n.jsx)(t.p,{children:"The size of the circles can be set in the Editor via the script attributes."}),"\n",(0,n.jsxs)(t.p,{children:["Joystick values can accessed in code from the global Javascript object ",(0,n.jsx)(t.code,{children:"window.touchJoypad.sticks"})," with the identifier. By default, the identifier is 'joystick0' but can be changed in the Editor on the script to be more specific."]}),"\n",(0,n.jsx)(t.p,{children:"Example code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Get the joystick by the identifier from the global object\nvar joystick = window.touchJoypad.sticks['joystick0'];\n\n// Get the normalized values of both joystick axes and print to console\nconsole.log('X: ' + joystick.x + ', Y: ' + joystick.y);\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"In the demo"}),", the camera is controlled by the right joystick and you can see how it gets and uses the values in the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/editor/code/1007506?tabs=111433673",children:"script here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-your-buttons",children:"Adding your buttons"}),"\n",(0,n.jsxs)(t.p,{children:["Buttons are fixed position UI Elements on the screen. There is a template for button in the 'templates' folder and ",(0,n.jsx)(t.a,{href:"/user-manual/templates/#adding-templates-in-your-scene",children:"should be added"})," as a child of the screen Entity."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"/images/tutorials/touchscreen-joypad-controls/adding-button.gif",alt:""})}),"\n",(0,n.jsxs)(t.p,{children:["As they are UI Elements, they can be positioned, sized and anchored specifically for your needs via the ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/elements/",children:"UI system layout"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Like the joysticks, they have an identifier so they can be accessed in code from the global Javascript object ",(0,n.jsx)(t.code,{children:"window.touchJoypad.buttons"})," with the following API."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isPressed"}),(0,n.jsx)(t.td,{children:"Takes the button identifier and returns true if the button is currently being pressed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wasPressed"}),(0,n.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was pressed since the last frame."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wasReleased"}),(0,n.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was released since the last frame."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wasTapped"}),(0,n.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was pressed and released within 200ms. i.e. A quick tap."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The joysticks are also buttons which gives extra flexibility in how they can be used. For example, using the ",(0,n.jsx)(t.code,{children:"wasTapped"})," API with a joystick identifier can act like a L3/R3 input on a PlayStation controller."]}),"\n",(0,n.jsx)(t.p,{children:"Example code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Get the button global object\nvar buttons = window.touchJoypad.buttons\n\n// Check if the button was pressed since the last frame\nconsole.log('Was pressed: ' + buttons.wasPressed('button0'));\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"In the demo"}),", the character is controlled by the left joystick and buttons. You can see how it gets and uses the buttons in the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/editor/code/1007506?tabs=111432679",children:"script here"})," to play attack animations."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);