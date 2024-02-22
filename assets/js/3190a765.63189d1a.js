"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7859],{15942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"Audio Listener"},a=void 0,r={id:"user-manual/scenes/components/audiolistener",title:"Audio Listener",description:"The Audio Listener component specifies the listener's position in 3D space. All 3D audio playback will be relative to this position.",source:"@site/docs/user-manual/scenes/components/audiolistener.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/audiolistener",permalink:"/user-manual/scenes/components/audiolistener",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/audiolistener.md",tags:[],version:"current",frontMatter:{title:"Audio Listener"},sidebar:"userManualSidebar",previous:{title:"Animation",permalink:"/user-manual/scenes/components/animation"},next:{title:"Button",permalink:"/user-manual/scenes/components/button"}},A={},c=[{value:"Scripting Interface",id:"scripting-interface",level:2}];function p(e){const n={a:"a",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Audio Listener component specifies the listener's position in 3D space. All 3D audio playback will be relative to this position."}),"\n",(0,s.jsx)(n.p,{children:"The Audio Listener component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the component will act as the listener position for 3D sound effects."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Audio Listener component",src:t(37472).A+"",width:"629",height:"48"})}),"\n",(0,s.jsx)(n.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,s.jsxs)(n.p,{children:["You can control an Audio Listener component's properties using a ",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The Audio Listener component's scripting interface is ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.AudioListenerComponent.html",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},37472:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);