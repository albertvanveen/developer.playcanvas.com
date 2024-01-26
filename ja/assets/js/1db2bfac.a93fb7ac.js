"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2358],{77725:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=a(85893),t=a(11151);const s={title:"\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",sidebar_position:2},r=void 0,l={id:"user-manual/graphics/lighting/index",title:"\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",description:"\u30b7\u30fc\u30f3\u306e\u7167\u660e\u306f\u3001\u8868\u9762\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u7279\u6027\u3068\u9069\u7528\u3055\u308c\u305f\u5149\u6e90\u306b\u57fa\u3065\u3044\u3066\u3001\u753b\u9762\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3084\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u8a08\u7b97\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/index.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/",permalink:"/ja/user-manual/graphics/lighting/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Depth\u30ec\u30a4\u30e4\u30fc",permalink:"/ja/user-manual/graphics/cameras/depth-layer"},next:{title:"\u30e9\u30a4\u30c8",permalink:"/ja/user-manual/graphics/lighting/lights"}},c={},o=[{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8 (Dynamic Lights)",id:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8-dynamic-lights",level:2},{value:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7 (Lightmaps)",id:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7-lightmaps",level:2},{value:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",id:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",level:3},{value:"PlayCanvas\u5b9f\u884c\u6642\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",id:"playcanvas\u5b9f\u884c\u6642\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",level:3}];function d(e){const n={h2:"h2",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u30b7\u30fc\u30f3\u306e\u7167\u660e\u306f\u3001\u8868\u9762\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u7279\u6027\u3068\u9069\u7528\u3055\u308c\u305f\u5149\u6e90\u306b\u57fa\u3065\u3044\u3066\u3001\u753b\u9762\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3084\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u8a08\u7b97\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"PlayCanvas\u3067\u306f\u3001\u7167\u660e\u306f\u5927\u304d\u304f\u300c\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8\u300d\u3068\u300c\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u300d\u306e2\u3064\u306b\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8-dynamic-lights",children:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8 (Dynamic Lights)"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9f\u884c\u6642\u306b\u8a08\u7b97\u3055\u308c\u308b\u7167\u660e\u306e\u8a08\u7b97\u306f\u3001\u300c\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u300d\u3068\u3057\u3066\u5206\u985e\u3055\u308c\u307e\u3059\u3002\u6bce\u30d5\u30ec\u30fc\u30e0\u3001\u30a8\u30f3\u30b8\u30f3\u306f\u30e9\u30a4\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u7a2e\u985e\u3001\u4f4d\u7f6e\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u304b\u3089\u8868\u9762\u306b\u843d\u3061\u308b\u5149\u306e\u91cf\u3092\u8a08\u7b97\u3057\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u8272\u3092\u4ed8\u3051\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7-lightmaps",children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7 (Lightmaps)"}),"\n",(0,i.jsx)(n.p,{children:"\u79fb\u52d5\u3057\u306a\u3044\u30e9\u30a4\u30c8\u3084\u30b8\u30aa\u30e1\u30c8\u30ea\u306b\u5bfe\u3057\u3066\u306f\u3001\u7167\u660e\u60c5\u5831\u3092\u4e8b\u524d\u306b\u6c7a\u5b9a\u3059\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u60c5\u5831\u306f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u4fdd\u5b58\u3055\u308c\u3001\u8868\u9762\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u65b9\u6cd5\u306f\u3001\u9759\u7684\u306a\u30e9\u30a4\u30c8\u3092\u6301\u3061\u3001\u524d\u8a08\u7b97\u6642\u9593\u3092\u639b\u3051\u308b\u4ee3\u511f\u3068\u3057\u3066\u30e9\u30f3\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u304c\u975e\u5e38\u306b\u4f4e\u3044\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",children:"\u5916\u90e8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210"}),"\n",(0,i.jsx)(n.p,{children:"\u591a\u304f\u306e3D\u5236\u4f5c\u30c4\u30fc\u30eb\u306b\u306f\u30013DS Max\u3001Maya\u3001Blender\u306a\u3069\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u3001\u30a2\u30c9\u30aa\u30f3\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u306f\u4e00\u822c\u7684\u306b\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u751f\u6210\u3057\u3001\u901a\u5e38\u306e\u30a2\u30bb\u30c3\u30c8\u3068\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u6a19\u6e96\u306e\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb\u306eLightmap\u30b9\u30ed\u30c3\u30c8\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"playcanvas\u5b9f\u884c\u6642\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",children:"PlayCanvas\u5b9f\u884c\u6642\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210"}),"\n",(0,i.jsx)(n.p,{children:"PlayCanvas\u30a8\u30f3\u30b8\u30f3\u306b\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3059\u308b\u7d44\u307f\u8fbc\u307f\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b2\u30fc\u30e0\u3092\u5b9f\u884c\u3059\u308b\u76f4\u524d\u306b\u81ea\u52d5\u7684\u306b\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u65b9\u6cd5\u3067\u306f\u3001\u6a19\u6e96\u306eLight\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30fc\u30f3\u3092\u5909\u66f4\u3057\u3001\u76f4\u63a5\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30b7\u30fc\u30f3\u3092\u30d7\u30ec\u30d3\u30e5\u30fc\u3067\u304d\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var i=a(67294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);