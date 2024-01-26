"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6507],{14199:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var a=n(85893),l=n(11151);const t={title:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",sidebar_position:3},r=void 0,i={id:"user-manual/assets/models/exporting",title:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",description:"PlayCanvas\u306f\u3001glTF\u30d0\u30a4\u30ca\u30ea(GLB)\u3001FBX\u3001OBJ\u30013DS\u3001COLLADA(DAE)\u306e\u4ee5\u4e0b\u306e\u5f62\u5f0f\u306e3D\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002 GLB\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u6a19\u6e96\u898f\u683c\u3067\u3042\u308a\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u975e\u5e38\u306b\u3088\u304f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001GLB\u306e\u4f7f\u7528\u3092\u5f37\u304f\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/models/exporting.md",sourceDirName:"user-manual/assets/models",slug:"/user-manual/assets/models/exporting",permalink:"/ja/user-manual/assets/models/exporting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/models/exporting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u4f5c\u6210",permalink:"/ja/user-manual/assets/models/building"},next:{title:"Shader",permalink:"/ja/user-manual/assets/shader"}},o={},c=[{value:"\u4e00\u822c\u7684\u306a\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",id:"\u4e00\u822c\u7684\u306a\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",level:2},{value:"GLB\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",id:"glb\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",level:2},{value:"FBX\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",id:"fbx\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",level:2}];function d(e){const s={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"PlayCanvas\u306f\u3001glTF\u30d0\u30a4\u30ca\u30ea(GLB)\u3001FBX\u3001OBJ\u30013DS\u3001COLLADA(DAE)\u306e\u4ee5\u4e0b\u306e\u5f62\u5f0f\u306e3D\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002 GLB\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u6a19\u6e96\u898f\u683c\u3067\u3042\u308a\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u975e\u5e38\u306b\u3088\u304f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001GLB\u306e\u4f7f\u7528\u3092\u5f37\u304f\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/assets/models/building/glb-import.gif",alt:"GLB Import Example"})}),"\n",(0,a.jsxs)(s.p,{children:["(Lo\xefc Norgeot\u6c0f\u306b\u3088\u308b\u30e2\u30c7\u30eb\u3068Geoffrey Marchal\u6c0f\u306b\u3088\u308b\u30e2\u30b9\u30ad\u30fc\u30c8\u30b9\u30ad\u30e3\u30f3\u306f",(0,a.jsx)(s.a,{href:"https://sketchfab.com/3d-models/",children:"Sketchfab"}),"\u306b\u3066\u30e9\u30a4\u30bb\u30f3\u30b9\u3055\u308c\u3001[CC BY 4.0] ",(0,a.jsx)(s.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"cc-40"}),"\u3067\u3042\u308b\u3002)"]}),"\n",(0,a.jsx)(s.p,{children:"GLB\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u30ed\u30d0\u30b9\u30c8\u3067\u5341\u5206\u306b\u30c6\u30b9\u30c8\u3055\u308c\u305f\u696d\u754c\u6a19\u6e96\u5f62\u5f0f\u3067\u3042\u308bFBX\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"\u4e00\u822c\u7684\u306a\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",children:"\u4e00\u822c\u7684\u306a\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\u30b7\u30fc\u30f3\u304b\u3089\u5fc5\u8981\u306a\u3082\u306e\u3060\u3051\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001\u8d64\u3044\u8eca\u3068\u9752\u3044\u8eca\u304c\u542b\u307e\u308c\u308b\u30b7\u30fc\u30f3\u304c\u3042\u308b\u304c\u3001\u8d64\u3044\u8eca\u306e\u307f\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u8d64\u3044\u8eca\u3060\u3051\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f7f\u7528\u3059\u308b\u30e2\u30c7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u3001\u300c\u9078\u629e\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u307f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u300d\u306a\u3069\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"glb\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",children:"GLB\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092glTF\u30d0\u30a4\u30ca\u30ea(GLB)\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3068\u753b\u50cf\u304cGLB\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u304a\u3088\u3073\u57cb\u3081\u8fbc\u307e\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u3046\u3057\u306a\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30b7\u30fc\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u5225\u9014\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u3059\u3079\u3066\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30ea\u30f3\u30af\u3057\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u518d\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"fbx\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8",children:"FBX\u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u30d2\u30f3\u30c8"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"\u30e2\u30c7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u53ef\u80fd\u306a\u6700\u65b0\u306eFBX\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u30fc\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsx)(s.li,{children:"FBX\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u30fc\u30d1\u30cd\u30eb\u3067 'Embed Media' \uff08\u30e1\u30c7\u30a3\u30a2\u306e\u57cb\u3081\u8fbc\u307f\uff09\u300d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u305fFBX\u306b\u30b7\u30fc\u30f3\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001PlayCanvas\u3078\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u6642\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3068\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30ea\u30f3\u30af\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30b7\u30fc\u30f3\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u5225\u3005\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u3059\u3079\u3066\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u518d\u30ea\u30f3\u30af\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.li,{children:"FBX\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u30fc\u30d1\u30cd\u30eb\u3067 'Binary' \u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306b\u3088\u308a\u3001FBX\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u5e45\u306b\u524a\u6e1b\u3055\u308c\u307e\u3059\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var a=n(67294);const l={},t=a.createContext(l);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);