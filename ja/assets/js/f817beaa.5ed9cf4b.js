"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1193],{49673:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=n(85893),s=n(11151);const t={title:"AR",layout:"usermanual-page.hbs",sidebar_position:2},i=void 0,l={id:"user-manual/xr/ar/index",title:"AR",description:"AR View",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/index.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/",permalink:"/ja/user-manual/xr/ar/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AR",layout:"usermanual-page.hbs",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"PlayCanvas\u3067\u306eWebXR\u306e\u4f7f\u7528\u65b9\u6cd5",permalink:"/ja/user-manual/xr/using-webxr"},next:{title:"8th Wall",permalink:"/ja/user-manual/xr/ar/8th-wall-integration"}},c={},o=[{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",level:2},{value:"WebXR AR\u306e\u958b\u59cb",id:"webxr-ar\u306e\u958b\u59cb",level:2},{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",level:2}];function u(e){const a={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"/images/user-manual/xr/ar-view.png",alt:"AR View"})}),"\n",(0,r.jsx)(a.p,{children:"PlayCanvas\u3067\u306f\u3001WebXR API\u3092\u901a\u3058\u3066\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u5411\u3051\u306e\u62e1\u5f35\u73fe\u5b9f(AR)\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001\u4eba\u6c17\u306e\u3042\u308bAR\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u306e\u7d71\u5408\u3082\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.h2,{id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"}),"\n",(0,r.jsxs)(a.p,{children:["AR\u6a5f\u80fd\u306f\u3001Android Chrome\u30d6\u30e9\u30a6\u30b6\u3092\u4f7f\u7528\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u3059\u3002iOS Safari\u306eWebXR\u30b5\u30dd\u30fc\u30c8\u306f",(0,r.jsx)(a.a,{href:"https://webkit.org/status/#specification-webxr",children:"\u9032\u884c\u4e2d"}),"\u3067\u3059\u3002\u3055\u3089\u306b\u3001",(0,r.jsx)(a.a,{href:"/user-manual/xr/ar/8th-wall-integration/",children:"8th Wall"}),"\u304a\u3088\u3073",(0,r.jsx)(a.a,{href:"/user-manual/xr/ar/zappar-integration/",children:"Zappar"}),"\u306a\u3069\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Safari\u3092\u542b\u3080\u307b\u3068\u3093\u3069\u306e\u30e2\u30d0\u30a4\u30eb\u30d6\u30e9\u30a6\u30b6\u3067AR\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f53\u9a13\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"\u4e0a\u8a18\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306f\u5916\u90e8\u306e\u3082\u306e\u3067\u3042\u308a\u3001\u5404\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u5225\u500b\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"})}),"\n",(0,r.jsx)(a.h2,{id:"webxr-ar\u306e\u958b\u59cb",children:"WebXR AR\u306e\u958b\u59cb"}),"\n",(0,r.jsx)(a.p,{children:"PlayCanvas\u306e\u7d44\u307f\u8fbc\u307fAR\u30b5\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30b7\u30fc\u30f3\u306e\u4e3b\u8981\u30ab\u30e1\u30e9\u306e\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u306f\u900f\u660e\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"/images/user-manual/xr/ar/transparent-clear-color.png",alt:"Transparent Clear Color"})}),"\n",(0,r.jsx)(a.p,{children:"AR\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30b5\u30dd\u30fc\u30c8\u3068\u5229\u7528\u53ef\u80fd\u6027\u3092\u307e\u305a\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u64cd\u4f5c(\u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u306a\u3069)\u306b\u5fdc\u3058\u3066\u3001AR\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // XR\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3001AR\u304c\u5229\u7528\u53ef\u80fd\u304b\u3092\u30c1\u30a7\u30c3\u30af\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {\n        // Camera\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066AR\u3092\u958b\u59cb\u3059\u308b\n        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_VIEWER);\n    }\n});\n"})}),"\n",(0,r.jsx)(a.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u7d42\u4e86\u3057\u305f\u3089\u3001immerse-xr\u30e2\u30fc\u30c9\u306f\u4ee5\u4e0b\u3067\u7d42\u4e86\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,r.jsx)(a.p,{children:"\u62e1\u5f35\u73fe\u5b9f\u3067\u306f\u3001\u73fe\u5b9f\u4e16\u754c\u3068\u4eee\u60f3\u7684\u306a\u30a4\u30e1\u30fc\u30b8\u3092\u30d6\u30ec\u30f3\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30d0\u30c3\u30d5\u30a1\u3092\u30ab\u30e1\u30e9\u306e\u30d5\u30a3\u30fc\u30c9\u4e0a\u306b\u5408\u6210\u3059\u308b\u304b\u3001\u900f\u904e\u6027\u306e\u3042\u308b\u30b0\u30e9\u30b9\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30d0\u30c3\u30d5\u30a1\u3092\u7279\u5225\u306a\u6295\u5f71\u306b\u3088\u3063\u3066\u5408\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u884c\u308f\u308c\u307e\u3059\u3002\u901a\u5e38\u3001\u73fe\u5b9f\u4e16\u754c\u306e\u74b0\u5883\u306b\u5bfe\u3057\u3066\u7a7a\u9593\u8ffd\u8de1\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(a.p,{children:["\u9069\u5207\u306a\u53c2\u7167\u7a7a\u9593: ",(0,r.jsx)(a.code,{children:"pc.XRSPACE_VIEWER"}),"\u3002"]}),"\n",(0,r.jsx)(a.h2,{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8",children:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8"}),"\n",(0,r.jsx)(a.p,{children:"PlayCanvas\u3067\u306f\u3001AR\u4f53\u9a13\u3092\u3088\u308a\u8fc5\u901f\u306b\u958b\u59cb\u3059\u308b\u305f\u3081\u306e\u300c\u30b9\u30bf\u30fc\u30bf\u30fc\u30ad\u30c3\u30c8\u300d\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3044\u304f\u3064\u304b\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u304b\u3089\u6700\u9069\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var r=n(67294);const s={},t=r.createContext(s);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);