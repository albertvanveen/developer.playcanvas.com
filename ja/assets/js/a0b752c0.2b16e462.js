"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6786],{49419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=t(85893),r=t(11151);const s={title:"Image Elements",sidebar_position:5},i=void 0,l={id:"user-manual/user-interface/image-elements",title:"Image Elements",description:"\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8 (Image Element) \u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3084\u5358\u4e00\u306e\u8272\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u3001\u30dc\u30bf\u30f3\u306a\u3069\u306e\u3088\u308a\u8907\u96d1\u306a\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u57fa\u76e4\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/user-interface/image-elements.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/image-elements",permalink:"/ja/user-manual/user-interface/image-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/image-elements.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Image Elements",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Group Elements",permalink:"/ja/user-manual/user-interface/group-elements"},next:{title:"Text Elements",permalink:"/ja/user-manual/user-interface/text-elements"}},c={},m=[{value:"\u7740\u8272 (Tinting)",id:"\u7740\u8272-tinting",level:2},{value:"\u900f\u660e\u6027 (Transparency)",id:"\u900f\u660e\u6027-transparency",level:2},{value:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30de\u30c6\u30ea\u30a2\u30eb (Advanced Material)",id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30de\u30c6\u30ea\u30a2\u30eb-advanced-material",level:2},{value:"\u30de\u30b9\u30af\u3068\u30de\u30b9\u30ad\u30f3\u30b0",id:"\u30de\u30b9\u30af\u3068\u30de\u30b9\u30ad\u30f3\u30b0",level:2}];function u(e){const n={code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8 (Image Element) \u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3084\u5358\u4e00\u306e\u8272\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u3001\u30dc\u30bf\u30f3\u306a\u3069\u306e\u3088\u308a\u8907\u96d1\u306a\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u57fa\u76e4\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7740\u8272-tinting",children:"\u7740\u8272 (Tinting)"}),"\n",(0,a.jsx)(n.p,{children:"\u5404\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306b\u306f\u30ab\u30e9\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u9069\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u5358\u306b\u8272\u306e\u3064\u3044\u305f\u9577\u65b9\u5f62\u306b\u306a\u308a\u307e\u3059\u3002\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u9069\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u8272\u306f\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u7740\u8272\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\uff11\u3064\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb\u30c6\u30af\u30b9\u30c1\u30e3\u3060\u3051\u3092\u4f7f\u3063\u3066\u30ab\u30e9\u30fc\u30d0\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/user-interface/image-element/image-tinted.png",alt:"Tinting"})}),"\n",(0,a.jsx)(n.h2,{id:"\u900f\u660e\u6027-transparency",children:"\u900f\u660e\u6027 (Transparency)"}),"\n",(0,a.jsx)(n.p,{children:"\u30ab\u30e9\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u540c\u69d8\u306b\u3001\u4e0d\u900f\u660e\u5ea6\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30ec\u30e1\u30f3\u30c8\u306e\u900f\u660e\u5ea6\u30ec\u30d9\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/user-interface/image-element/image-transparent.png",alt:"Transparent"})}),"\n",(0,a.jsx)(n.h2,{id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30de\u30c6\u30ea\u30a2\u30eb-advanced-material",children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30de\u30c6\u30ea\u30a2\u30eb (Advanced Material)"}),"\n",(0,a.jsxs)(n.p,{children:["\u30c6\u30af\u30b9\u30c1\u30e3\u3001\u30ab\u30e9\u30fc\u3001\u4e0d\u900f\u660e\u5ea6\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3082\u6c42\u3081\u3066\u3044\u308b\u7d50\u679c\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8 (Image Element) \u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6b63\u3057\u3044\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3046\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u306e ",(0,a.jsx)(n.em,{children:"Depth Write\u3092\u7121\u52b9"})," \u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5099\u8003\uff1a\u30b9\u30af\u30ea\u30fc\u30f3\u30b9\u30da\u30fc\u30b9\u30a8\u30ec\u30e1\u30f3\u30c8\u3067\u306f\u3001\u30e9\u30a4\u30f3\u30c6\u30a3\u30f3\u30b0\u306f\u4e88\u60f3\u3069\u304a\u308a\u306b\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002\u30b9\u30af\u30ea\u30fc\u30f3\u30b9\u30da\u30fc\u30b9\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3084\u30b7\u30e3\u30c9\u30a6\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u30de\u30b9\u30af\u3068\u30de\u30b9\u30ad\u30f3\u30b0",children:"\u30de\u30b9\u30af\u3068\u30de\u30b9\u30ad\u30f3\u30b0"}),"\n",(0,a.jsxs)(n.p,{children:["\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u3001\u5b50\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u30de\u30b9\u30af\u307e\u305f\u306f\u975e\u8868\u793a\u306b\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306e",(0,a.jsx)(n.code,{children:"mask"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u30de\u30b9\u30ad\u30f3\u30b0\u306b\u4f7f\u7528\u3055\u308c\u308b\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306bTexture\u30a2\u30bb\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30de\u30b9\u30af\u306f\u5e45\u3068\u9ad8\u3055\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u9577\u65b9\u5f62\u3068\u306a\u308a\u307e\u3059\u3002\n\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u30de\u30b9\u30af\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\n\u753b\u50cf\u30de\u30b9\u30af\u306f1\u30d3\u30c3\u30c8\u3067\u3042\u308b\u305f\u3081\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30de\u30b9\u30af\u3092\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);