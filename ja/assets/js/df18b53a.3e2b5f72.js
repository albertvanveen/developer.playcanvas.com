"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5e3],{56419:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var s=r(85893),t=r(11151);const c={title:"Scrollbar"},l=void 0,a={id:"user-manual/scenes/components/scrollbar",title:"Scrollbar",description:"Scrollbar\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001Scrollview\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e\u30b9\u30af\u30ed\u30fc\u30eb\u5236\u5fa1\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scenes/components/scrollbar.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/scrollbar",permalink:"/ja/user-manual/scenes/components/scrollbar",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/scrollbar.md",tags:[],version:"current",frontMatter:{title:"Scrollbar"},sidebar:"userManualSidebar",previous:{title:"\u30b9\u30af\u30ea\u30d7\u30c8 (Script)",permalink:"/ja/user-manual/scenes/components/script"},next:{title:"Scrollview",permalink:"/ja/user-manual/scenes/components/scrollview"}},o={},i=[{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Scrollbar\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/scrollview",children:"Scrollview"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e\u30b9\u30af\u30ed\u30fc\u30eb\u5236\u5fa1\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"/user-manual/user-interface",children:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9"}),"\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-scrollbar.png",alt:"Scrollbar\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3 (Orientation)"}),(0,s.jsx)(n.td,{children:"\u30b9\u30af\u30ed\u30fc\u30eb\u30d0\u30fc\u304c\u6c34\u5e73\u65b9\u5411\u306b\u52d5\u304f\u304b\u3001\u5782\u76f4\u65b9\u5411\u306b\u52d5\u304f\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Value"}),(0,s.jsx)(n.td,{children:"\u30b9\u30af\u30ed\u30fc\u30eb\u30d0\u30fc\u306e\u73fe\u5728\u4f4d\u7f6e\u306e\u5024\u3002\u5024\u306e\u7bc4\u56f2\u306f0\u304b\u30891\u3067\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Handle"}),(0,s.jsx)(n.td,{children:"\u30b9\u30af\u30ed\u30fc\u30eb\u30d0\u30fc\u306e\u30cf\u30f3\u30c9\u30eb\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002\u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u306fScrollbar\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Handle Size"}),(0,s.jsx)(n.td,{children:"\u30cf\u30f3\u30c9\u30eb\u306e\u30b5\u30a4\u30ba\u3002\u30c8\u30e9\u30c3\u30af\u306e\u30b5\u30a4\u30ba\u306b\u5bfe\u3059\u308b\u76f8\u5bfe\u7684\u306a\u30b5\u30a4\u30ba\u3002\u5024\u306e\u7bc4\u56f2\u306f0\u304b\u30891\u3067\u3059\u3002\u5782\u76f4\u30b9\u30af\u30ed\u30fc\u30eb\u30d0\u30fc\u306e\u5834\u5408\u3001\u5024\u304c1\u306e\u5834\u5408\u3001\u30cf\u30f3\u30c9\u30eb\u306f\u30c8\u30e9\u30c3\u30af\u306e\u5168\u9ad8\u3092\u5360\u3081\u307e\u3059\u3002"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var s=r(67294);const t={},c=s.createContext(t);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);