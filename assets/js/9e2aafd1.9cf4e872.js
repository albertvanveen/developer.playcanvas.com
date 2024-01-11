"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6722],{96258:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=a(85893),r=a(11151);const t={title:"Assets - List assets",sidebar_position:9},i=void 0,l={id:"user-manual/api/asset-list",title:"Assets - List assets",description:"Route URL",source:"@site/docs/user-manual/api/asset-list.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/asset-list",permalink:"/user-manual/api/asset-list",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-list.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Assets - List assets",sidebar_position:9},sidebar:"userManualSidebar",previous:{title:"Assets - Get Asset",permalink:"/user-manual/api/asset-get"},next:{title:"Assets - Update asset",permalink:"/user-manual/api/asset-update"}},c={},o=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"route-url",children:"Route URL"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId&skip=:skip&limit=:limit\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Get the details of all assets in a project for a specific branch"}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}&skip={number}&limit={number}"\n'})}),"\n",(0,n.jsx)(s.p,{children:"HTTP Request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}&skip={number}&limit={number}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("div",{class:"params",children:[(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"projectId: number"}),(0,n.jsx)("p",{children:"The id of the project to list assets from."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"branchId: string"}),(0,n.jsx)("p",{children:"The id of the branch."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"skip [optional]: number"}),(0,n.jsx)("p",{children:"Number of assets to skip before listing. Used for pagination. Defaults to 0."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"limit [optional]: number"}),(0,n.jsx)("p",{children:"Maximum number of assets to list. Defaults to 16. Maximum 100000."})]})]}),"\n",(0,n.jsx)(s.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "result": [{\n        "id": int,\n        "modifiedAt": date,\n        "createdAt": date,\n        "state": "ready" | "processing" | "error",\n        "name": string,\n        "type": string,\n        "scope":{\n            "type": string,\n            "id": int\n        },\n        "source": bool,\n        "sourceId": bool,\n        "tags": list of strings,\n        "preload": bool,\n        "file": {\n            "hash": string,\n            "filename": string,\n            "size": int,\n            "url": string\n        },\n        "parent": int\n    }, ...],\n    "pagination": {\n        "skip": int,\n        "limit": int,\n        "total": int,\n    }\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,n.jsxs)("div",{class:"params",children:[(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"401"}),(0,n.jsx)("p",{children:"Unauthorized"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"403"}),(0,n.jsx)("p",{children:"Forbidden"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"404"}),(0,n.jsx)("p",{children:"Project not found"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"429"}),(0,n.jsx)("p",{children:"Too many requests"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,n.jsxs)(s.p,{children:["This route uses a ",(0,n.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>i});var n=a(67294);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);