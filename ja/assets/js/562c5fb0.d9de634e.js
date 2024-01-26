"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9099],{63387:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=i(85893),s=i(11151);const r={title:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3(AO)",sidebar_position:4},t=void 0,l={id:"user-manual/graphics/lighting/ambient-occlusion",title:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3(AO)",description:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u306f\u3001\u74b0\u5883\u306b\u3088\u308b\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u306b\u57fa\u3065\u3044\u3066\u3001\u3069\u308c\u304f\u3089\u3044\u306e\u5149\u304c\u8868\u9762\u306b\u5230\u9054\u3059\u308b\u304b\u3092\u4e88\u6e2c\u3059\u308b\u6280\u6cd5\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/ambient-occlusion.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/ambient-occlusion",permalink:"/ja/user-manual/graphics/lighting/ambient-occlusion",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/ambient-occlusion.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3(AO)",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0",permalink:"/ja/user-manual/graphics/lighting/lightmapping"},next:{title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7",permalink:"/ja/user-manual/graphics/lighting/runtime-lightmaps"}},c={},p=[{value:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b0\u30ed\u30fc\u30d0\u30ebAO",id:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b0\u30ed\u30fc\u30d0\u30ebao",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",id:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",level:2},{value:"\u4f8b",id:"\u4f8b",level:2}];function g(n){const e={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u306f\u3001\u74b0\u5883\u306b\u3088\u308b\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u306b\u57fa\u3065\u3044\u3066\u3001\u3069\u308c\u304f\u3089\u3044\u306e\u5149\u304c\u8868\u9762\u306b\u5230\u9054\u3059\u308b\u304b\u3092\u4e88\u6e2c\u3059\u308b\u6280\u6cd5\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:"PlayCanvas\u3067\u306f\u3001\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f\u62e1\u6563\u3068\u30b9\u30da\u30ad\u30e5\u30e9\u306e\u4e21\u65b9\u306eAO\u30de\u30c3\u30d7\u3067\u4e57\u7b97\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg",alt:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u6bd4\u8f03\uff1a\u4f7f\u7528/\u4e0d\u4f7f\u7528"}),"\n",(0,a.jsx)(e.em,{children:"\u5de6\uff1aAO\u306a\u3057; \u53f3\uff1a\u30b0\u30ed\u30fc\u30d0\u30ebAO\u4f7f\u7528"})]}),"\n",(0,a.jsx)(e.p,{children:"AO\u30de\u30c3\u30d7\u306f\u3001\u7570\u306a\u308b\u30b9\u30b1\u30fc\u30eb\u306e\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30c7\u30eb\u306e\u7570\u306a\u308b\u90e8\u5206\u306e\u5927\u304d\u306a\u30b7\u30e3\u30c9\u30fc\u30a4\u30f3\u30b0\u52b9\u679c\u3092\u4f34\u3046\u8868\u9762\u306e\u88c2\u3051\u76ee\u307e\u305f\u306f\u30ef\u30fc\u30eb\u30c9\u30b9\u30b1\u30fc\u30eb\u306eAO\u3092\u793a\u3059\u30c6\u30af\u30b9\u30c1\u30e3\u8a73\u7d30AO\u3002\u30b9\u30b1\u30fc\u30eb\u306e\u5927\u304d\u3044AO\u306f\u3001\u3088\u308a\u591a\u304f\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u3082\u305f\u3089\u3057\u3001\u901a\u5e38\u306fUV1\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3068\u4e00\u81f4\u3057\u3001\u3088\u308a\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b0\u30ed\u30fc\u30d0\u30ebao",children:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b0\u30ed\u30fc\u30d0\u30ebAO"}),"\n",(0,a.jsxs)(e.p,{children:["AO\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306f\u3001\u4e00\u822c\u7684\u306a3D\u30e2\u30c7\u30ea\u30f3\u30b0\u3068archviz\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,a.jsx)(e.a,{href:"/user-manual/graphics/lighting/lightmapping/",children:"Lightmapping Section"}),"\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308bLightmap\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3068\u4e8b\u5b9f\u4e0a\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u7279\u5225\u306a\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u3059\u3079\u3066\u306e\u30b8\u30aa\u30e1\u30c8\u30ea\u306b\u9069\u7528\u3055\u308c\u3001\u305d\u308c\u306b\u3088\u3063\u3066AO\u306e\u3088\u3046\u306b\u898b\u3048\u308b\u3088\u3046\u306b\u5857\u308a\u3064\u3076\u3055\u308c\u308b\u305f\u3081\u3001\u3044\u304f\u3064\u304b\u306e\u5c0f\u3055\u306a\u9055\u3044\u304c\u3042\u308a\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3078\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u306b\u7570\u306a\u308b\u8a2d\u5b9a\u304c\u884c\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["VRay\u3092\u4f7f\u7528\u3057\u305f3D's Max\u3067\u306f\u3001",(0,a.jsx)(e.strong,{children:"VRayDirt"}),"\u30bf\u30a4\u30d7\u3068",(0,a.jsx)(e.strong,{children:"Ambient Occlusion"}),"\u30e2\u30fc\u30c9\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u884c\u3044\u307e\u3059\u3002\u3053\u3053\u3067",(0,a.jsx)(e.strong,{children:"radius"}),"\u306f\u671b\u307e\u3057\u3044\u7d50\u679c\u3092\u5f97\u308b\u305f\u3081\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png",alt:"3D's Max: Ambient Occlusion VRay Material"})}),"\n",(0,a.jsxs)(e.p,{children:["\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u3001\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u30de\u30c3\u30d7\u5185\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u9759\u7684\u30b8\u30aa\u30e1\u30c8\u30ea\u306b\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u30023D's Max\u3067\u306f\u500b\u3005\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u624b\u52d5\u3067\u9069\u7528\u3059\u308b\u304b\u3001",(0,a.jsx)(e.strong,{children:"Override mtl"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066VRay Render Settings\u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u3001\u500b\u3005\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u4fdd\u5b58\u3055\u308c\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png",alt:"3D's Max VRay\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u8a2d\u5b9a: Override mtl"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6b21\u306b\u3001\u3053\u306e\u30c7\u30fc\u30bf\u3092\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u53d6\u308a\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u30023D's Max\u3067\u306f\u3001",(0,a.jsx)(e.a,{href:"/user-manual/graphics/lighting/lightmapping#render-to-texture",children:"Render To Texture"}),"\u3092\u4f7f\u7528\u3057\u3066\u884c\u3044\u307e\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u3068\u540c\u3058\u3067\u3059\u304c\u3001",(0,a.jsx)(e.strong,{children:"\u51fa\u529b"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u306f",(0,a.jsx)(e.strong,{children:"VRayCompleteMap"}),"\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"AO Texture\u306f\u975e\u5e38\u306b\u8a73\u7d30\u306a\u60c5\u5831\u3092\u683c\u7d0d\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u8996\u899a\u7684\u306b\u306f\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u306e\u60aa\u5f71\u97ff\u306f\u3042\u307e\u308a\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001JPEG\u306f\u7d4c\u6e08\u7684\u3067\u9069\u5207\u306a\u5f62\u5f0f\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",children:"\u30a8\u30c7\u30a3\u30bf\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),"\n",(0,a.jsx)(e.p,{children:"Editor\u3067\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306eAmbient Occlusion\u30b9\u30ed\u30c3\u30c8\u306b\u9069\u7528\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-ao-map.png",alt:"Editor\u306e\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u30de\u30c3\u30d7"})}),"\n",(0,a.jsx)(e.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0a\u3067\u8aac\u660e\u3057\u305f\u30b0\u30ed\u30fc\u30d0\u30eb\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b",(0,a.jsx)(e.a,{href:"https://playcanv.as/p/zdkARz26/",children:"\u4f8b"}),"\u3084\u305d\u306e",(0,a.jsx)(e.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"}),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,a.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lightmapping/playcanvas-lightmapping-scene.jpg",alt:"PlayCanvas Lightmapping"})}),"\n",(0,a.jsx)(e.em,{children:"\u3053\u306e\u30b7\u30fc\u30f3\u306e\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3068AO\u30c6\u30af\u30b9\u30c1\u30e3\u3068Box\u6295\u5f71IBL(\u53cd\u5c04)\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059"})]})]})}function o(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(g,{...n})}):g(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>t});var a=i(67294);const s={},r=a.createContext(s);function t(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);