"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3476],{6403:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(85893),l=i(11151);const r={title:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",sidebar_position:6},d=void 0,a={id:"user-manual/graphics/lighting/clustered-lighting",title:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",description:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f\u3001PlayCanvas Engine v1.56\u4ee5\u964d\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u53e4\u3044\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u3057\u3070\u3089\u304f\u306e\u9593Engine\u306b\u6b8b\u308a\u307e\u3059\u304c\u3001\u5c06\u6765\u306e\u30de\u30a4\u30ca\u30fc\u30ea\u30ea\u30fc\u30b9\u3067\u5ec3\u6b62\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/clustered-lighting.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/clustered-lighting",permalink:"/ja/user-manual/graphics/lighting/clustered-lighting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/clustered-lighting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",sidebar_position:6},sidebar:"userManualSidebar",previous:{title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7",permalink:"/ja/user-manual/graphics/lighting/runtime-lightmaps"},next:{title:"\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0 (PBR)",permalink:"/ja/user-manual/graphics/physical-rendering/"}},h={},c=[{value:"\u5b9f\u88c5\u306e\u6982\u8981",id:"\u5b9f\u88c5\u306e\u6982\u8981",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30a8\u30c7\u30a3\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8abf\u6574",id:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8abf\u6574",level:2},{value:"\u6a5f\u80fd\u306e\u6709\u52b9\u5316",id:"\u6a5f\u80fd\u306e\u6709\u52b9\u5316",level:3},{value:"3D\u30b0\u30ea\u30c3\u30c9\u306e\u8a2d\u5b9a",id:"3d\u30b0\u30ea\u30c3\u30c9\u306e\u8a2d\u5b9a",level:3},{value:"\u30a2\u30c8\u30e9\u30b9\u306e\u8a2d\u5b9a",id:"\u30a2\u30c8\u30e9\u30b9\u306e\u8a2d\u5b9a",level:3},{value:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001<code>debugLayer</code>\u30d7\u30ed\u30d1\u30c6\u30a3\u306b<code>undefined</code>\u3092\u5272\u308a\u5f53\u3066\u3066\u304f\u3060\u3055\u3044\u3002",id:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u505c\u6b62\u3059\u308b\u306b\u306fdebuglayer\u30d7\u30ed\u30d1\u30c6\u30a3\u306bundefined\u3092\u5272\u308a\u5f53\u3066\u3066\u304f\u3060\u3055\u3044",level:3},{value:"\u30b7\u30e3\u30c9\u30a6\u30bf\u30a4\u30d7",id:"\u30b7\u30e3\u30c9\u30a6\u30bf\u30a4\u30d7",level:3},{value:"\u5236\u9650\u4e8b\u9805",id:"\u5236\u9650\u4e8b\u9805",level:2},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",level:2},{value:"\u30c7\u30d0\u30c3\u30b0\u30b0\u30ea\u30c3\u30c9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",id:"\u30c7\u30d0\u30c3\u30b0\u30b0\u30ea\u30c3\u30c9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",level:2}];function t(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f\u3001PlayCanvas Engine v1.56\u4ee5\u964d\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u53e4\u3044\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u3057\u3070\u3089\u304f\u306e\u9593Engine\u306b\u6b8b\u308a\u307e\u3059\u304c\u3001\u5c06\u6765\u306e\u30de\u30a4\u30ca\u30fc\u30ea\u30ea\u30fc\u30b9\u3067\u5ec3\u6b62\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u30e9\u30a4\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30a2\u30ea\u30ba\u30e0\u3092\u52a0\u3048\u308b\u826f\u3044\u65b9\u6cd5\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u306f\u3001\u5927\u91cf\u306e\u30b7\u30e3\u30c9\u30a6\u3092\u6295\u3052\u308b\u30e9\u30a4\u30c8\u304c\u591a\u6570\u5b58\u5728\u3059\u308b\u5834\u5408\u306a\u3069\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30b3\u30b9\u30c8\u3092\u5f15\u304d\u8d77\u3053\u3059\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u306e\u89e3\u6c7a\u7b56\u306e\u4e00\u90e8\u306f\u3001\u500b\u3005\u306e\u30e1\u30c3\u30b7\u30e5\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u30e9\u30a4\u30c8\u306e\u6570\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u901a\u5e38\u306f\u5404\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8fd1\u63a5\u3057\u305f\u30e9\u30a4\u30c8\u3092\u898b\u3064\u3051\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u5b9f\u88c5\u3055\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u6226\u7565\u306b\u306f\u8907\u6570\u306e\u30c7\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5404\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u7570\u306a\u308b\u30bb\u30c3\u30c8\u306e\u30e9\u30a4\u30c8\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3053\u306e\u6226\u7565\u304c\u52b9\u679c\u7684\u306b\u306a\u308b\u306b\u306f\u3001\u5927\u304d\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5c0f\u3055\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5206\u5272\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5927\u91cf\u306e\u30b7\u30e3\u30c9\u30a6\u30ad\u30e3\u30b9\u30c8\u30e9\u30a4\u30c8\u306f\u3001\u5f71\u30de\u30c3\u30d7\u3067\u4f7f\u7528\u3055\u308c\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u30b9\u30ed\u30c3\u30c8\u306e\u4f7f\u7528\u53ef\u80fd\u6570\u3092\u8d85\u904e\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u308c\u3089\u306e\u554f\u984c\u306b\u5bfe\u51e6\u3059\u308b\u305f\u3081\u306b\u3001PlayCanvas\u306f",(0,s.jsx)(e.strong,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001Omni Lights \u304a\u3088\u3073 Spot Lights \u306e\u9ad8\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5b9f\u88c5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30e9\u30a4\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u683c\u7d0d\u3057\u3001GPU\u304c\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u306b\u8fd1\u63a5\u3059\u308b\u30e9\u30a4\u30c8\u306e\u307f\u3092\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8907\u6570\u306e\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u306f\u3001\u8907\u6570\u306e\u30e9\u30a4\u30c8\u3092\u51e6\u7406\u3067\u304d\u308b\u305f\u3081\u3001\u30b7\u30fc\u30f3\u304b\u3089\u30e9\u30a4\u30c8\u304c\u8ffd\u52a0\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u305f\u3068\u304d\u306b\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u518d\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.li,{children:"(Shadow \u304a\u3088\u3073 Cookies\u3092\u542b\u3080)\u591a\u6570\u306e\u30e9\u30a4\u30c8\u304c\u30b7\u30fc\u30f3\u3067\u4f7f\u7528\u3067\u304d\u308b\u305f\u3081\u3001\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b\u8fd1\u63a5\u3059\u308b\u30e9\u30a4\u30c8\u306e\u307f\u304c\u8a55\u4fa1\u3055\u308c\u308b\u305f\u3081\u4f7f\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Directional Lights \u306f\u3001\u3059\u3079\u3066\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059\u305f\u3081\u3001\u30af\u30e9\u30b9\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9f\u88c5\u306e\u6982\u8981",children:"\u5b9f\u88c5\u306e\u6982\u8981"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u624b\u9806\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u5b9f\u88c5\u306e\u57fa\u672c\u7684\u306a\u6982\u8981\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u30ab\u30e1\u30e9\u306e\u9310\u53f0\u306b\u3088\u3063\u3066\u30e9\u30a4\u30c8\u306e\u30ea\u30b9\u30c8\u3092\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3067\u3001\u30ab\u30e1\u30e9\u306b\u5bfe\u3057\u3066\u53ef\u8996\u306a\u30e9\u30a4\u30c8\u306e\u30ea\u30b9\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u8996\u306a\u3059\u3079\u3066\u306e\u30e9\u30a4\u30c8\u306e\u8ef8\u306b\u6cbf\u3063\u305f\u5883\u754c\u4e0a\u306b\u3001\u30ef\u30fc\u30eb\u30c9\u30b9\u30da\u30fc\u30b93D\u30b0\u30ea\u30c3\u30c9\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/3d_grid.png",alt:"3D\u30b0\u30ea\u30c3\u30c9"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"3D\u30b0\u30ea\u30c3\u30c9\u306e\u5404\u30bb\u30eb\u306f\u3001\u305d\u308c\u3068\u4ea4\u5dee\u3059\u308b\u30e9\u30a4\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002CPU\u4e0a\u3067\u306f\u3001\u3053\u306e\u60c5\u5831\u306f\u6bce\u30d5\u30ec\u30fc\u30e0\u66f4\u65b0\u3055\u308c\u3001\u4efb\u610f\u306e\u4f4d\u7f6e\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u30e9\u30a4\u30c8\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u60c5\u5831\u306f\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u683c\u7d0d\u3055\u308c\u3001GPU\u3067\u4f7f\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3059\u3079\u3066\u306e\u53ef\u8996\u30e9\u30a4\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u5225\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u683c\u7d0d\u3055\u308c\u308b\u305f\u3081\u3001GPU\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30b7\u30e3\u30c9\u30a6\u30de\u30c3\u30d7\u3068Cookie\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u3001\u500b\u3005\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u306f\u306a\u304f\u30a2\u30c8\u30e9\u30b9\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u305f\u3081\u3001\u540c\u6642\u306b\u3059\u3079\u3066\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3092\u8a55\u4fa1\u3059\u308b\u969b\u306b\u3001\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30ef\u30fc\u30eb\u30c9\u30b9\u30da\u30fc\u30b9\u4f4d\u7f6e\u3092\u4f7f\u7528\u3057\u30663D\u30b0\u30ea\u30c3\u30c9\u306e\u30bb\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u683c\u7d0d\u3055\u308c\u305f\u30e9\u30a4\u30c8\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30a8\u30c7\u30a3\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3",children:"\u30a8\u30c7\u30a3\u30bf\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\n",(0,s.jsx)(e.p,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u8a2d\u5b9a\u306e\u300c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u300d\u306e\u4e0b\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/clustered_lighting_ui.png",alt:"Clustered Lighting Editor UI"})}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001\u4ee5\u524d\u306e\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3092\u7121\u52b9\u306b\u3057\u305f\u308a\u3001\u4ee5\u4e0b\u306e",(0,s.jsx)(e.a,{href:"#tuning-clustered-lighting",children:"tune performance and features"}),"\u3092\u8abf\u6574\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8abf\u6574",children:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8abf\u6574"}),"\n",(0,s.jsx)(e.h3,{id:"\u6a5f\u80fd\u306e\u6709\u52b9\u5316",children:"\u6a5f\u80fd\u306e\u6709\u52b9\u5316"}),"\n",(0,s.jsx)(e.p,{children:"Clustered Lighting\u30b7\u30a7\u30fc\u30c0\u30fc\u306f\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30e9\u30a4\u30c8\u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u306e\u6a5f\u80fd\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30a7\u30fc\u30c0\u30fc\u304c\u5fc5\u8981\u4ee5\u4e0a\u306b\u5927\u304d\u304f\u306a\u308a\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5fc5\u8981\u306e\u306a\u3044\u6a5f\u80fd\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u6a5f\u80fd\u30aa\u30d7\u30b7\u30e7\u30f3\u30bb\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5f71\u306e\u6709\u52b9\u5316"})," - Shadows\u306e\u30b5\u30dd\u30fc\u30c8\u306e\u6709\u52b9\u5316/\u7121\u52b9\u5316"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Cookies\u306e\u6709\u52b9\u5316"})," - \u8efd\u3044Cookies\u306e\u30b5\u30dd\u30fc\u30c8\u306e\u6709\u52b9\u5316/\u7121\u52b9\u5316"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Area Lights\u306e\u6709\u52b9\u5316"}),"- Area Lights\u306e\u30b5\u30dd\u30fc\u30c8\u306e\u6709\u52b9\u5316/\u7121\u52b9\u5316"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3d\u30b0\u30ea\u30c3\u30c9\u306e\u8a2d\u5b9a",children:"3D\u30b0\u30ea\u30c3\u30c9\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/3d_grid_config.png",alt:"3D\u30b0\u30ea\u30c3\u30c9\u306e\u8a2d\u5b9a"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Cells"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u5404\u30ef\u30fc\u30eb\u30c9\u8ef8\u306b\u6cbf\u3063\u3066\u30bb\u30eb\u306e\u6570\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u3059\u3079\u3066\u306e\u53ef\u8996\u30e9\u30a4\u30c8\u3092\u542b\u3080Axis Aligned Bounding Box\u304c\u3001\u6307\u5b9a\u3055\u308c\u305f\u6570\u306e\u30bb\u30eb\u306b\u52d5\u7684\u306b\u7d30\u5206\u5316\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Max Lights Per Cell"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u5404\u500b\u5225\u30bb\u30eb\u306b\u683c\u7d0d\u3055\u308c\u308b\u30e9\u30a4\u30c8\u306e\u6700\u5927\u6570\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30c3\u30d7\u3059\u308b\u30e9\u30a4\u30c8\u306e\u6700\u5927\u6570\u3092\u8868\u3057\u307e\u3059\u3002\u901a\u5e38\u306f\u3001\u30e9\u30a4\u30c8\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30c3\u30d7\u304c\u5927\u304d\u304f\u306a\u308b\u305f\u3081\u3001\u30e9\u30a4\u30c8\u306e\u6570\u3092\u7c97\u3044\u30b0\u30ea\u30c3\u30c9\u30b5\u30d6\u30c7\u30a3\u30d3\u30b8\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u5897\u3084\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u30a2\u30c8\u30e9\u30b9\u306e\u8a2d\u5b9a",children:"\u30a2\u30c8\u30e9\u30b9\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u8996\u306a\u3059\u3079\u3066\u306e\u30b7\u30e3\u30c9\u30a6\u30de\u30c3\u30d7\u3068Cookie\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u3001\u30a2\u30c8\u30e9\u30b9\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002Shadows\u7528\u306e1\u3064\u306e\u30a2\u30c8\u30e9\u30b9\u30c6\u30af\u30b9\u30c1\u30e3\u3068Cookie\u7528\u306e\u3082\u30461\u3064\u306e\u30a2\u30c8\u30e9\u30b9\u304c\u3042\u308a\u307e\u3059\u3002\u30a2\u30c8\u30e9\u30b9\u306e\u30b5\u30a4\u30ba\u306f\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u5185\u90e8\u7684\u306b\u306f\u3001\u500b\u3005\u306e\u30e9\u30a4\u30c8\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u308b\u5c0f\u3055\u306a\u9818\u57df\u306b\u5206\u5272\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Shadow Atlas Resolution"}),"\u306f\u3001Shadow\u30a2\u30c8\u30e9\u30b9\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3042\u308a\u3001 ",(0,s.jsx)(e.strong,{children:"Cookie Atlas Resolution"}),"\u306fCookie\u30a2\u30c8\u30e9\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30b5\u30a4\u30ba\u306f2\u306e\u7d2f\u4e57\u3067\u3042\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Atlas Split"}),"\u306f\u3001\u30a2\u30c8\u30e9\u30b9\u304c\u30e9\u30a4\u30c8\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u308b\u500b\u3005\u306e\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u3069\u306e\u3088\u3046\u306b\u5206\u5272\u3055\u308c\u308b\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u30022\u3064\u306e\u5206\u5272\u6226\u7565\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Automatic"})," \u2013 \u914d\u5217\u30b5\u30a4\u30ba\u304c0\u3068\u3057\u3066\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a8\u30f3\u30b8\u30f3\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30a2\u30c8\u30e9\u30b9\u3092\u81ea\u52d5\u7684\u306b\u5206\u5272\u3057\u3001\u5404\u53ef\u8996\u5149\u3092\u7b49\u3057\u304f\u30b5\u30a4\u30ba\u306e\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30d5\u30ec\u30fc\u30e0\u306b3\u3064\u306e\u30e9\u30a4\u30c8\u304c\u8868\u793a\u3055\u308c\u308b\u5834\u5408\u3001\u30a2\u30c8\u30e9\u30b9\u306f2x2\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u30fc\u306b\u5206\u5272\u3055\u308c\u3001\u3053\u308c\u3089\u306e4\u3064\u306e\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u30fc\u306e\u3046\u30613\u3064\u304c\u30e9\u30a4\u30c8\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/atlas_split_0.png",alt:"Atlas Split 0"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Manual"})," \u2013 \u30a2\u30c8\u30e9\u30b9\u3092\u56fa\u5b9a\u6570\u306e\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u5206\u5272\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b5\u30a4\u30ba\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u6570\u5b57\u306e\u914d\u5217\u3092\u4f7f\u7528\u3057\u3066\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002\u5404\u6570\u5024\u306f\u3001\u5782\u76f4\u304a\u3088\u3073\u6c34\u5e73\u306e\u4e21\u65b9\u3067\u5206\u5272\u3092\u8868\u3057\u307e\u3059\u3002\u30de\u30cb\u30e5\u30a2\u30eb\u30a2\u30c8\u30e9\u30b9\u30b9\u30d7\u30ea\u30c3\u30c8\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u505c\u6b62\u3059\u308b\u306b\u306fdebuglayer\u30d7\u30ed\u30d1\u30c6\u30a3\u306bundefined\u3092\u5272\u308a\u5f53\u3066\u3066\u304f\u3060\u3055\u3044",children:["\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.code,{children:"debugLayer"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b",(0,s.jsx)(e.code,{children:"undefined"}),"\u3092\u5272\u308a\u5f53\u3066\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u30a2\u30c8\u30e9\u30b9\u304c\u624b\u52d5\u3067\u3069\u306e\u3088\u3046\u306b\u5206\u5272\u3055\u308c\u308b\u304b\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u30012\u3064\u306e\u6570\u5b57\u304c\u5165\u3063\u305f\u914d\u5217\u3092\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff1a[2, 2]\u3002\u914d\u5217\u306e\u6700\u521d\u306e\u6570\u5b57\u306f\u30a2\u30c8\u30e9\u30b9\u30922x2\u306b\u5206\u5272\u3057\u3001\u5408\u8a08\u3067\u56db\u3064\u306e\u9818\u57df\u306b\u3057\u307e\u3059\u3002\u914d\u5217\u306e\u305d\u306e\u5f8c\u306e\u6570\u5b57\u306f\u3001\u3053\u308c\u3089\u306e\u9818\u57df\u3092\u518d\u5ea6\u5206\u5272\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u914d\u5217\u306e2\u756a\u76ee\u306e\u6570\u5b57\u306f\u65e2\u5b58\u306e\u9818\u57df\u306e1\u3064\u3092\u3055\u3089\u306b2x2\uff08\u3064\u307e\u308a4\u3064\u306e\u9818\u57df\uff09\u306b\u5206\u5272\u3057\u3001\u5408\u8a08\u30677\u3064\u306e\u9818\u57df\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/manual_split.png",alt:"Manual Split"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u753b\u50cf\u306f\u3001\u624b\u52d5\u3067\u30a2\u30c8\u30e9\u30b9\u5206\u5272\u3092\u6307\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/atlas_split_2.png",alt:"Atlas Split 2"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ed6\u306e\u4f8b:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"[3, 2] - \u6700\u521d\u306e\u6570\u5b57\u306f\u30a2\u30c8\u30e9\u30b9\u30923x3\uff089\u3064\u306e\u9818\u57df\uff09\u306b\u5206\u5272\u3057\u307e\u3059\u30022\u756a\u76ee\u306e\u6570\u5b57\u306f\u3001\u3053\u308c\u3089\u306e\u9818\u57df\u306e1\u3064\u30922x2\uff084\u3064\u306e\u9818\u57df\uff09\u306b\u5206\u5272\u3057\u3001\u5408\u8a08\u306712\u3064\u306e\u9818\u57df\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"[4] \u2013 \u30a2\u30c8\u30e9\u30b9\u306f4x4\uff0816\u30a8\u30ea\u30a2\uff09\u306b\u5206\u5272\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u624b\u52d5\u3067\u7d30\u5206\u5316\u3059\u308b\u6700\u5927\u306e\u5229\u70b9\u306f\u3001\u9054\u6210\u3067\u304d\u308b\u8a73\u7d30\u5ea6\u3067\u3059\u3002\u4e00\u5b9a\u91cf\u306e\u30b5\u30d6\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u3089\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u30b9\u30da\u30fc\u30b9\u306e\u30b5\u30a4\u30ba\u9806\u306b\u30e9\u30a4\u30c8\u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u3067\u5927\u304d\u3044\u30e9\u30a4\u30c8\u306f\u30a2\u30c8\u30e9\u30b9\u306e\u5927\u304d\u306a\u9818\u57df\u3092\u53d7\u3051\u53d6\u308a\u3001\u9060\u304f\u306e\u5c0f\u3055\u306a\u30e9\u30a4\u30c8\u306f\u30a2\u30c8\u30e9\u30b9\u306e\u5c0f\u3055\u306a\u9818\u57df\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u9818\u57df\u306e\u6570\u3088\u308a\u3082\u591a\u304f\u306e\u30e9\u30a4\u30c8\u304c\u3042\u308b\u5834\u5408\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b9\u30da\u30fc\u30b9\u304c\u6700\u3082\u5c0f\u3055\u3044\u30e9\u30a4\u30c8\u306f\u5f71\u3092\u843d\u3068\u3055\u306a\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u30b7\u30e3\u30c9\u30a6\u30bf\u30a4\u30d7",children:"\u30b7\u30e3\u30c9\u30a6\u30bf\u30a4\u30d7"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f71\u3092\u6295\u5f71\u3059\u308b\u5168\u3066\u306e\u30e9\u30a4\u30c8\u306f\u540c\u3058\u30b7\u30e3\u30c9\u30a6\u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30e3\u30c9\u30a6\u306e\u30bd\u30d5\u30c8\u30cd\u30b9\u3068\u95a2\u9023\u3059\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5f71\u97ff\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306fPCF1\u3001PCF3\u3001PCF5\u3067\u3059\u3002\u8a73\u7d30\u306f\u3001",(0,s.jsx)(e.a,{href:"/user-manual/graphics/lighting/shadows/#soft-shadows-vs-hard-shadows",children:"Shadows"}),"\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5236\u9650\u4e8b\u9805",children:"\u5236\u9650\u4e8b\u9805"}),"\n",(0,s.jsx)(e.p,{children:"\u5185\u90e8\u7684\u306b\u306f\u3001\u30e9\u30a4\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f8\u30d3\u30c3\u30c8\u3067\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u4efb\u610f\u306e\u30d5\u30ec\u30fc\u30e0\u3067\u53ef\u8996\u7684\u306a\u30e9\u30a4\u30c8\u306e\u6700\u5927\u6570\u306f254\uff081\u3064\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f\u4e88\u7d04\u3055\u308c\u3066\u3044\u307e\u3059\uff09\u3002\u5c06\u6765\u7684\u306b\u306f\u3001\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b16\u30d3\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u9650\u5ea6\u3092\u5897\u3084\u3059\u8ffd\u52a0\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",children:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Cell subdivisions"})," \u306f\u53ef\u80fd\u306a\u9650\u308a\u5c0f\u3055\u304f\u3059\u3079\u304d\u3067\u3059\u3002\u5927\u304d\u306a\u30bb\u30eb\u306e\u7d30\u5206\u5316\u306f\u3001\u30b0\u30ea\u30c3\u30c9\u304c\u6bce\u30d5\u30ec\u30fc\u30e0\u30e9\u30a4\u30c8\u3067\u57cb\u307e\u308b\u3068\u304d\u306bCPU\u306e\u4f7f\u7528\u91cf\u3092\u5897\u5927\u3055\u305b\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u5404\u30b7\u30fc\u30f3\u306e\u7167\u660e\u306e\u8907\u96d1\u3055\u306b\u5fdc\u3058\u3066\u6700\u9069\u5316\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u6700\u9069\u306b\u306f\u3001\u30e9\u30a4\u30c8\u306e\u91cd\u306a\u308a\u3068\u5404\u30bb\u30eb\u5185\u306e\u30e9\u30a4\u30c8\u306e\u6570\u3092\u5236\u9650\u3059\u308b\u305f\u3081\u306b\u5341\u5206\u306a\u30bb\u30eb\u3092\u6301\u3064\u3079\u304d\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Max Lights Per Cell"})," \u306f\u53ef\u80fd\u306a\u9650\u308a\u5c0f\u3055\u304f\u3059\u3079\u304d\u3067\u3059\u3002\u3053\u308c\u306f\u30013D\u30b0\u30ea\u30c3\u30c9\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30b5\u30a4\u30ba\u3092\u5236\u9650\u3057\u3001\u3053\u308c\u306f\u6bce\u30d5\u30ec\u30fc\u30e0\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53e4\u3044\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067 ",(0,s.jsx)(e.strong,{children:"\u9045\u304f\u52d5\u4f5c\u3059\u308b"})," \u5834\u5408\u306f\u3001Shadows\uff08\u30b7\u30e3\u30c9\u30a6\uff09\u3084Cookies\uff08\u30af\u30c3\u30ad\u30fc\uff09\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u5168\u4f53\u7684\u306b\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30c7\u30d0\u30c3\u30b0\u30b0\u30ea\u30c3\u30c9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",children:"\u30c7\u30d0\u30c3\u30b0\u30b0\u30ea\u30c3\u30c9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"}),"\n",(0,s.jsxs)(e.p,{children:["\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u30c7\u30d0\u30c3\u30b0\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(e.a,{href:"/api/pc.Layer.html",children:"Layer"})," ID\u306b\u30ec\u30f3\u30c0\u30fc\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u3092",(0,s.jsx)(e.a,{href:"/api/pc.LightingParams.html#debugLayer",children:"LightingParams\u306e debugLayer"})," \u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'// Assuming being in a script type\nthis.app.scene.lighting.debugLayer = this.app.scene.layers.getLayerByName("World").id;\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u305d\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.code,{children:"debugLayer"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b ",(0,s.jsx)(e.code,{children:"undefined"})," \u3092\u4ee3\u5165\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"// Assuming being in a script type\nthis.app.scene.lighting.debugLayer = undefined;\n"})})]})}function g(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>d});var s=i(67294);const l={},r=s.createContext(l);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);