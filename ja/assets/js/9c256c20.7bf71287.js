"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1363],{6799:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(85893),t=r(11151);const i={title:"VR",sidebar_position:3},s=void 0,l={id:"user-manual/xr/vr/index",title:"VR",description:"VR View",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/vr/index.md",sourceDirName:"user-manual/xr/vr",slug:"/user-manual/xr/vr/",permalink:"/ja/user-manual/xr/vr/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/vr/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"VR",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Capabilities",permalink:"/ja/user-manual/xr/capabilities"},next:{title:"VR\u4f53\u9a13\u306e\u7a2e\u985e",permalink:"/ja/user-manual/xr/vr/types-of-vr"}},c={},o=[{value:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",level:2},{value:"WebXR VR\u306e\u59cb\u3081\u65b9",id:"webxr-vr\u306e\u59cb\u3081\u65b9",level:2},{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/xr/vr-view.png",alt:"VR View"})}),"\n",(0,a.jsx)(n.p,{children:"PlayCanvas\u3067\u306f\u3001WebXR API\u3092\u4f7f\u7528\u3057\u3066\u30d8\u30c3\u30c9\u30bb\u30c3\u30c8\u3084\u30e2\u30d0\u30a4\u30eb\u30d5\u30a9\u30f3\u5411\u3051\u306e\u30d0\u30fc\u30c1\u30e3\u30eb\u30ea\u30a2\u30ea\u30c6\u30a3\uff08VR\uff09\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002WebXR\u306fWebVR API\u306e\u9032\u5316\u5f62\u3067\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d6\u30e9\u30a6\u30b6\u3067\u5e83\u304f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",children:"\u5bfe\u5fdc\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"}),"\n",(0,a.jsx)(n.p,{children:"VR\u6a5f\u80fd\u306fChrome\u3068Edge\u30d6\u30e9\u30a6\u30b6\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u30c7\u30d0\u30a4\u30b9\u306f\u3001Windows Mixed Reality\u3001OpenXR\u306a\u3069\u306e\u3055\u307e\u3056\u307e\u306a\u30cd\u30a4\u30c6\u30a3\u30d6API\u3092\u901a\u3058\u3066\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d9\u30fc\u30b9\u306eVR\u30c7\u30d0\u30a4\u30b9\u306e\u5927\u534a\u3092\u30ab\u30d0\u30fc\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"webxr-vr\u306e\u59cb\u3081\u65b9",children:"WebXR VR\u306e\u59cb\u3081\u65b9"}),"\n",(0,a.jsx)(n.p,{children:"VR\u30bb\u30c3\u30b7\u30e7\u30f3 (VR session) \u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30c7\u30d0\u30a4\u30b9\u306e\u30b5\u30dd\u30fc\u30c8\u3068\u5229\u7528\u53ef\u80fd\u6027\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30dc\u30bf\u30f3\u306e\u30af\u30ea\u30c3\u30af\u3084\u4ed6\u306e\u5165\u529b\u306a\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308a\u3001VR\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // XR\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3001VR\u304c\u5229\u7528\u53ef\u80fd\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_VR)) {\n        // Camera\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066AR\u3092\u958b\u59cb\u3059\u308b\n        entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);\n    }\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u7d42\u4e86\u3057\u305f\u3089\u3001VR\u30e2\u30fc\u30c9\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u7d42\u4e86\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",children:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8"}),"\n",(0,a.jsx)(n.p,{children:"PlayCanvas\u306f\u300cVR Kit\u300d\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u3053\u308c\u306b\u3088\u308a\u3042\u306a\u305f\u306eVR\u4f53\u9a13\u3092\u3088\u308a\u8fc5\u901f\u306b\u7acb\u3061\u4e0a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u304b\u3089\u300cVR Kit\u300d\u3092\u9078\u629e\u3059\u308b\u3060\u3051\u3067\u3059\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var a=r(67294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);