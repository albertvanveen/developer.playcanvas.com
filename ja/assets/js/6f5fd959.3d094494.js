"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8902],{98045:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const d={title:"\u30a2\u30bb\u30c3\u30c8 - Update asset",sidebar_position:10},i=void 0,a={id:"user-manual/api/asset-update",title:"\u30a2\u30bb\u30c3\u30c8 - Update asset",description:"\u30eb\u30fc\u30c8URL",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/asset-update.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/asset-update",permalink:"/ja/user-manual/api/asset-update",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-update.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u30a2\u30bb\u30c3\u30c8 - Update asset",sidebar_position:10},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30bb\u30c3\u30c8 - List assets",permalink:"/ja/user-manual/api/asset-list"},next:{title:"\u30d6\u30e9\u30f3\u30c1 - List branches",permalink:"/ja/user-manual/api/branch-list"}},l={},c=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"PUT https://playcanvas.com/api/assets/:assetId\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u65e2\u5b58\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u73fe\u5728\u3001\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f ",(0,t.jsx)(n.code,{children:"script"}),"\u3001",(0,t.jsx)(n.code,{children:"html"}),"\u3001",(0,t.jsx)(n.code,{children:"css"}),"\u3001",(0,t.jsx)(n.code,{children:"text"}),"\u3001",(0,t.jsx)(n.code,{children:"shader"}),"\u3001",(0,t.jsx)(n.code,{children:"json"})," \u306e\u30bf\u30a4\u30d7\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u66f4\u65b0\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u4ed6\u306eREST API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u306f\u7570\u306a\u308a\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30a2\u30bb\u30c3\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u30c7\u30fc\u30bf\u3092 ",(0,t.jsx)(n.code,{children:"multipart/form-data"})," \u3067\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u3067\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"curl -H \"Authorization: Bearer {accessToken}\" -X PUT -F 'pow2={pow2}' -F 'file=@./script.js' \"https://playcanvas.com/api/assets/{assetId}\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u524d"}),(0,t.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"assetId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,t.jsx)(n.td,{children:"The id of the asset."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,t.jsx)(n.td,{children:"Data to update asset file with."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pow2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{children:"Only used for textures and defaults to false. Resize the texture to power of two dimensions (true"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:200\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": int,\n    "modifiedAt": date,\n    "createdAt": date,\n    "state": "ready" | "processing" | "error",\n    "name": string,\n    "type": string,\n    "scope":{\n        "type": string,\n        "id": int\n    },\n    "source": bool,\n    "sourceId": bool,\n    "tags": list of strings,\n    "preload": bool,\n    "data": {\n        ... asset data\n    },\n    "file": {\n        "hash": string,\n        "filename": string,\n        "size": int,\n        "url": string\n    },\n    "parent": int\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Unauthorized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Forbidden"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Project or Asset not found"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"429"}),(0,t.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,t.jsxs)(n.p,{children:["This route uses an ",(0,t.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"assets"})," rate limit."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(67294);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);