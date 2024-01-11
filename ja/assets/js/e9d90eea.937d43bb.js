"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9653],{52485:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>h,toc:()=>c});var s=n(85893),l=n(11151);const t={title:"\u30e9\u30a4\u30c8",layout:"usermanual-page.hbs",sidebar_position:1},r=void 0,h={id:"user-manual/graphics/lighting/lights",title:"\u30e9\u30a4\u30c8",description:"\u73fe\u5b9f\u4e16\u754c\u3067\u306f\u3001\u5468\u56f2\u306e\u74b0\u5883\u306f\u591a\u304f\u306e\u5149\u6e90\u304b\u3089\u7167\u3089\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u592a\u967d\u3001\u8857\u706f\u3001\u30c6\u30ec\u30d3\u753b\u9762\u306a\u3069\u3067\u3059\u3002PlayCanvas\u306e\u30b7\u30fc\u30f3\u3067\u306f\u3001\u73fe\u5b9f\u306b\u898b\u3089\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u5149\u3092\u8fd1\u4f3c\u3059\u308b\u305f\u3081\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u5149\u6e90\u3068\u5149\u6e90\u306e\u5f62\u72b6\u3092\u8a2d\u5b9a\u3059\u308b\u80fd\u529b\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/lights.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/lights",permalink:"/ja/user-manual/graphics/lighting/lights",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/lights.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u30e9\u30a4\u30c8",layout:"usermanual-page.hbs",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/user-manual/graphics/lighting/"},next:{title:"\u30b7\u30e3\u30c9\u30a6",permalink:"/ja/user-manual/graphics/lighting/shadows"}},a={},c=[{value:"\u30e9\u30a4\u30c8\u306e\u7a2e\u985e",id:"\u30e9\u30a4\u30c8\u306e\u7a2e\u985e",level:2},{value:"\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8 (Directional Lights)",id:"\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8-directional-lights",level:3},{value:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8 (Omni Lights)",id:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8-omni-lights",level:3},{value:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8 (Spot Lights)",id:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8-spot-lights",level:3},{value:"\u5149\u6e90\u306e\u5f62\u72b6",id:"\u5149\u6e90\u306e\u5f62\u72b6",level:2},{value:"\u70b9\u5149\u6e90 (Punctual)",id:"\u70b9\u5149\u6e90-punctual",level:3},{value:"\u9577\u65b9\u5f62 (Rectangle)",id:"\u9577\u65b9\u5f62-rectangle",level:3},{value:"\u5186\u76e4 (Disk)",id:"\u5186\u76e4-disk",level:3},{value:"\u7403\u4f53 (Sphere)",id:"\u7403\u4f53-sphere",level:3},{value:"\u4f7f\u7528\u4f8b",id:"\u4f7f\u7528\u4f8b",level:2},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",level:2}];function d(i){const e={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u73fe\u5b9f\u4e16\u754c\u3067\u306f\u3001\u5468\u56f2\u306e\u74b0\u5883\u306f\u591a\u304f\u306e\u5149\u6e90\u304b\u3089\u7167\u3089\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u592a\u967d\u3001\u8857\u706f\u3001\u30c6\u30ec\u30d3\u753b\u9762\u306a\u3069\u3067\u3059\u3002PlayCanvas\u306e\u30b7\u30fc\u30f3\u3067\u306f\u3001\u73fe\u5b9f\u306b\u898b\u3089\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u5149\u3092\u8fd1\u4f3c\u3059\u308b\u305f\u3081\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u5149\u6e90\u3068\u5149\u6e90\u306e\u5f62\u72b6\u3092\u8a2d\u5b9a\u3059\u308b\u80fd\u529b\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5404\u7a2e\u30e9\u30a4\u30c8\u30bf\u30a4\u30d7\u3068\u5149\u6e90\u5f62\u72b6\u306e\u8aac\u660e\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u7570\u306a\u308b\u30e9\u30a4\u30c8\u30bf\u30a4\u30d7\u306e\u7d44\u307f\u5408\u308f\u305b\u306e\u4f8b\u306f\u3001\u4e0b\u8a18\u306e",(0,s.jsx)(e.a,{href:"#use-cases",children:"\u8868"}),"\u306b\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30e9\u30a4\u30c8\u306e\u7a2e\u985e",children:"\u30e9\u30a4\u30c8\u306e\u7a2e\u985e"}),"\n",(0,s.jsx)(e.p,{children:"PlayCanvas\u306b\u306f3\u3064\u306e\u7a2e\u985e\u306e\u5149\u6e90\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8 (Directional Lights)"}),"\n",(0,s.jsx)(e.li,{children:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8 (Omni Lights)"}),"\n",(0,s.jsx)(e.li,{children:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8 (Spot Lights)"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8-directional-lights",children:"\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8 (Directional Lights)"}),"\n",(0,s.jsx)(e.p,{children:"\u79c1\u305f\u3061\u306b\u3068\u3063\u3066\u6700\u3082\u8eab\u8fd1\u306a\u5149\u6e90\u306f\u592a\u967d\u3067\u3059\u3002\u592a\u967d\u306f\u5730\u7403\u304b\u3089\u9060\u3044\u305f\u3081\u3001\u5730\u7403\u306e\u8868\u9762\u306b\u5f53\u305f\u308b\u5149\u306f\u4e00\u65b9\u5411\u304b\u3089\u6765\u305f\u304b\u306e\u3088\u3046\u306b\u8fd1\u4f3c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002PlayCanvas\u3067\u306f\u3001\u3053\u306e\u30bf\u30a4\u30d7\u306e\u5149\u6e90\u3092\u300c\u65b9\u5411\u6027(\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb)\u5149\u300d\u3068\u547c\u3073\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u975e\u9078\u629e\u6642\u3001\u65b9\u5411\u6027\u5149\u306f\u4ee5\u4e0b\u306e\u30a2\u30a4\u30b3\u30f3\u3067\u30a8\u30c7\u30a3\u30bf\u306e3D\u30d3\u30e5\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/directional_icon.jpg",alt:"Directional light icon"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d1\u30cd\u30eb\u3068\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb\u3067\u30e9\u30a4\u30c8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u65b9\u5411\u6027\u5149\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7167\u3089\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/directional.jpg",alt:"Directional light"})}),"\n",(0,s.jsx)(e.h3,{id:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8-omni-lights",children:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8 (Omni Lights)"}),"\n",(0,s.jsxs)(e.p,{children:["\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8\u306f\u3001\u3059\u3079\u3066\u306e\u65b9\u5411\u306b\u5149\u3092\u767a\u3059\u308b\u5149\u6e90\u3067\u3059\u3002\u3053\u306e\u30bf\u30a4\u30d7\u306e\u5149\u6e90\u306e\u4f8b\u3068\u3057\u3066\u3001\u30ad\u30e3\u30f3\u30c9\u30eb\u3084\u305d\u306e\u4ed6\u306e\u4f8b\u304c\u4ee5\u4e0b\u306e",(0,s.jsx)(e.a,{href:"#use-cases",children:"table"}),"\u306b\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u975e\u9078\u629e\u6642\u3001\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8\u306f\u4ee5\u4e0b\u306e\u30a2\u30a4\u30b3\u30f3\u3067\u30a8\u30c7\u30a3\u30bf\u306e3D\u30d3\u30e5\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/point_icon.jpg",alt:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8\u30a2\u30a4\u30b3\u30f3"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d1\u30cd\u30eb\u3068\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb\u3067\u30e9\u30a4\u30c8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7167\u3089\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/point.jpg",alt:"\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8"})}),"\n",(0,s.jsx)(e.h3,{id:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8-spot-lights",children:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8 (Spot Lights)"}),"\n",(0,s.jsx)(e.p,{children:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u3082\u30aa\u30e0\u30cb\u30e9\u30a4\u30c8\u3068\u540c\u69d8\u306b\u3001\u3059\u3079\u3066\u306e\u65b9\u5411\u306b\u5149\u3092\u767a\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u304b\u3089\u306e\u5149\u306f\u5186\u9310\u5f62\u306b\u5236\u9650\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u975e\u9078\u629e\u6642\u3001\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u306f\u4ee5\u4e0b\u306e\u30a2\u30a4\u30b3\u30f3\u3067\u30a8\u30c7\u30a3\u30bf\u30fc\u306e3D\u30d3\u30e5\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/spot_icon.jpg",alt:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u30a2\u30a4\u30b3\u30f3"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u30d1\u30cd\u30eb\u3068\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb\u3067\u30e9\u30a4\u30c8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7167\u3089\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/spot.jpg",alt:"\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5149\u6e90\u306e\u5f62\u72b6",children:"\u5149\u6e90\u306e\u5f62\u72b6"}),"\n",(0,s.jsx)(e.p,{children:"\u5149\u6e90\u306e\u5f62\u72b6\u306b\u306f4\u3064\u306e\u30bf\u30a4\u30d7\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u70b9\u5149\u6e90 (Punctual)"}),"\n",(0,s.jsx)(e.li,{children:"\u9577\u65b9\u5f62 (Rectangle)"}),"\n",(0,s.jsx)(e.li,{children:"\u5186\u76e4 (Disk)"}),"\n",(0,s.jsx)(e.li,{children:"\u7403\u4f53 (Sphere)"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u70b9\u5149\u6e90-punctual",children:"\u70b9\u5149\u6e90 (Punctual)"}),"\n",(0,s.jsx)(e.p,{children:"\u70b9\u5149\u6e90\u306e\u5f62\u72b6\u306f\u6975\u3081\u3066\u5c0f\u3055\u306a\u70b9\u3067\u3059\u3002\u3053\u308c\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5149\u6e90\u5f62\u72b6\u3067\u3042\u308a\u3001\u7269\u7406\u7684\u306b\u306f\u6b63\u78ba\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u6bd4\u8f03\u7684\u4f4e\u30b3\u30b9\u30c8\u3067\u5149\u6e90\u3092\u8fd1\u4f3c\u3057\u3066\u3044\u307e\u3059\u3002\u4ed6\u306e\u5149\u6e90\u5f62\u72b6\u306f\u63cf\u753b\u306b\u3088\u308a\u9ad8\u3044\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u3059\u304c\u3001\u3088\u308a\u6b63\u78ba\u306a\u7167\u660e\u3068\u93e1\u9762\u53cd\u5c04\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u9577\u65b9\u5f62-rectangle",children:"\u9577\u65b9\u5f62 (Rectangle)"}),"\n",(0,s.jsx)(e.p,{children:"\u9577\u65b9\u5f62\u306e\u5149\u6e90\u5f62\u72b6\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u5e45\u3068\u9ad8\u3055\u3092\u6301\u3064\u5e73\u3089\u306a4\u3064\u306e\u8fba\u304b\u3089\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5186\u76e4-disk",children:"\u5186\u76e4 (Disk)"}),"\n",(0,s.jsx)(e.p,{children:"\u5186\u76e4\u306e\u5149\u6e90\u5f62\u72b6\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u534a\u5f84\u3092\u6301\u3064\u5186\u5f62\u3067\u5e73\u3089\u306a\u5f62\u72b6\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u7403\u4f53-sphere",children:"\u7403\u4f53 (Sphere)"}),"\n",(0,s.jsx)(e.p,{children:"\u7403\u4f53\u306e\u5149\u6e90\u5f62\u72b6\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u534a\u5f84\u3092\u6301\u3064\u7403\u5f62\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/images/user-manual/graphics/lighting/lights/shapes.jpg",alt:"Shapes"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u4f8b",children:"\u4f7f\u7528\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee5\u4e0b\u306e",(0,s.jsx)(e.a,{href:"#use-cases",children:"table"}),"\u306b\u3001\u5404\u5149\u6e90\u5f62\u72b6\u3068\u5149\u6e90\u30bf\u30a4\u30d7\u306b\u5bfe\u3059\u308b\u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5f62\u72b6/\u30bf\u30a4\u30d7"}),(0,s.jsx)(e.th,{children:"\u70b9\u5149\u6e90"}),(0,s.jsx)(e.th,{children:"\u9577\u65b9\u5f62"}),(0,s.jsx)(e.th,{children:"\u5186\u76e4"}),(0,s.jsx)(e.th,{children:"\u7403\u72b6"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65b9\u5411\u6027"}),(0,s.jsx)(e.td,{children:"\u592a\u967d"}),(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"\u592a\u967d\u307e\u305f\u306f\u6708"}),(0,s.jsx)(e.td,{children:"\u592a\u967d\u307e\u305f\u306f\u6708"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Omni"}),(0,s.jsx)(e.td,{children:"\u5f71\u306e\u306a\u3044\u96fb\u7403"}),(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"\u5f71\u306e\u306a\u3044\u4e38\u3044\u96fb\u7403"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30b9\u30dd\u30c3\u30c8"}),(0,s.jsx)(e.td,{children:"\u30c8\u30fc\u30c1"}),(0,s.jsx)(e.td,{children:"\u30c6\u30ec\u30d3\u753b\u9762"}),(0,s.jsx)(e.td,{children:"\u5f71\u306e\u3042\u308b\u96fb\u7403"}),(0,s.jsx)(e.td,{children:"\u5f71\u306e\u3042\u308b\u4e38\u3044\u96fb\u7403"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"x = \u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b\u306f\u7121\u3057 - \u305f\u3060\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30b2\u30fc\u30e0\u56fa\u6709\u306e\u7167\u660e\u52b9\u679c\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805",children:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u8003\u616e\u4e8b\u9805"}),"\n",(0,s.jsx)(e.p,{children:"\u9577\u65b9\u5f62\u3001\u5186\u76e4\u3001\u7403\u4f53\u306e\u5f62\u72b6\u3092\u6301\u3064\u5149\u6e90\u306f\u3001\u70b9\u5149\u6e90\u306b\u6bd4\u3079\u3066\u63cf\u753b\u306b\u3088\u308a\u9ad8\u3044\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bd4\u8f03\u7684\u5c0f\u3055\u306a\u5149\u6e90\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3084\u3001\u70b9\u5149\u6e90\u304c\u660e\u3089\u304b\u306b\u4e0d\u6b63\u78ba\u306b\u898b\u3048\u308b\u3088\u3046\u306a\u53cd\u5c04\u9762\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u306f\u3001\u70b9\u5149\u6e90\u306e\u5f62\u72b6\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})}function g(i={}){const{wrapper:e}={...(0,l.a)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(d,{...i})}):d(i)}},11151:(i,e,n)=>{n.d(e,{Z:()=>h,a:()=>r});var s=n(67294);const l={},t=s.createContext(l);function r(i){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function h(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(l):i.components||l:r(i.components),s.createElement(t.Provider,{value:e},i.children)}}}]);