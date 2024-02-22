"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3148],{57543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(74848),s=t(28453);const o={title:"Anim"},i=void 0,c={id:"user-manual/scenes/components/anim",title:"Anim",description:"The anim component is used to connect an animstategraph asset and all of its required animation assets to a single entity.",source:"@site/docs/user-manual/scenes/components/anim.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/anim",permalink:"/user-manual/scenes/components/anim",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/anim.md",tags:[],version:"current",frontMatter:{title:"Anim"},sidebar:"userManualSidebar",previous:{title:"Components",permalink:"/user-manual/scenes/components/"},next:{title:"Animation",permalink:"/user-manual/scenes/components/animation"}},r={},l=[];function m(e){const n={code:"code",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The anim component is used to connect an animstategraph asset and all of its required animation assets to a single entity."}),"\n",(0,a.jsx)(n.p,{children:"Below you can see the anim component after it has been added to a component. It shows an available slot for an animstategraph asset to be selected."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"New Anim Component",src:t(35019).A+"",width:"620",height:"434"})}),"\n",(0,a.jsx)(n.p,{children:"After selecting an animstategraph asset, the anim component will display a list of animation asset slots. There will be one slot for each animation state in every layer of the state graph asset. This is where actual animation data is connected to the previously created state graph. Multiple anim components can use the same animstategraph asset, each with their own set of animation assets."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Anim Component With Graph",src:t(45414).A+"",width:"614",height:"984"})}),"\n",(0,a.jsxs)(n.p,{children:["After all animation state slots have been filled, the anim component will become playable. At this point the anim component can either be played via script by calling ",(0,a.jsx)(n.code,{children:"entity.anim.playing = true"})," or if the ",(0,a.jsx)(n.code,{children:"Activate"})," option is selected, it will play automatically upon the launch of the PlayCanvas project."]}),"\n",(0,a.jsx)(n.p,{children:"The anim component also offers the option to alter the speed of the animation playback. This speed will affect every animation within the state graph."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},45414:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/anim_component_with_graph-2156095cc6aeb9fa273955c6f3c33c3e.png"},35019:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/new_anim_component-7edabe1d37fd3d44d6cd92a733629783.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(96540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);