"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8225],{96085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(85893),s=n(11151);const i={title:"Tween\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",tags:["animation","entities"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/452634/BDFB7E-image-75.jpg"},r=void 0,c={id:"tutorials/tweening",title:"Tween\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",description:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3084\u30012\u70b9\u306e\u9593\u306e\u4efb\u610f\u306e\u5024\u3092\u30a2\u30cb\u30e1\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30c8\u30a5\u30a4\u30fc\u30f3\u3068\u547c\u3070\u308c\u3001\u305d\u306e\u76ee\u7684\u306e\u305f\u3081\u306b\u30c8\u30a5\u30a4\u30fc\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u30e9\u30a4\u30d6\u30e9\u30ea\u306f https://github.com/playcanvas/playcanvas-tween \u306b\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tweening.md",sourceDirName:"tutorials",slug:"/tutorials/tweening",permalink:"/ja/tutorials/tweening",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/tweening.md",tags:[{label:"animation",permalink:"/ja/tags/animation"},{label:"entities",permalink:"/ja/tags/entities"}],version:"current",frontMatter:{title:"Tween\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",tags:["animation","entities"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/452634/BDFB7E-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Tutorial: Shop User Interface",permalink:"/ja/tutorials/tutorial-shop-user-interface"},next:{title:"UI - \u30dc\u30bf\u30f3",permalink:"/ja/tutorials/ui-elements-buttons"}},o={},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3084\u30012\u70b9\u306e\u9593\u306e\u4efb\u610f\u306e\u5024\u3092\u30a2\u30cb\u30e1\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30c8\u30a5\u30a4\u30fc\u30f3\u3068\u547c\u3070\u308c\u3001\u305d\u306e\u76ee\u7684\u306e\u305f\u3081\u306b\u30c8\u30a5\u30a4\u30fc\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u30e9\u30a4\u30d6\u30e9\u30ea\u306f ",(0,a.jsx)(t.a,{href:"https://github.com/playcanvas/playcanvas-tween",children:"https://github.com/playcanvas/playcanvas-tween"})," \u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u5358\u306b",(0,a.jsx)(t.code,{children:"tween.js"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306bEntity\u306e\u30d7\u30ed\u30d1\u30c6\u30a3(\u4f4d\u7f6e\u3001\u56de\u8ee2\u3001\u30b9\u30b1\u30fc\u30eb\u306a\u3069)\u3092\u30c8\u30a5\u30a4\u30fc\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"entity.tween(entity.getLocalPosition()).to({x: 10, y: 0, z: 0}, 1, pc.SineOut);\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u3053\u3067\u306f\u3001Entity\u306e\u30ed\u30fc\u30ab\u30eb\u4f4d\u7f6e\u3092\u30c8\u30a5\u30a4\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/wEftzstB/",title:"Using the Tween library"})}),"\n",(0,a.jsxs)(t.p,{children:["\u3053\u306e\u4f8b\u306e",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/452634/overview/using-the-tween-library",children:"Project"}),"\u3068",(0,a.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/491504",children:"Editor"}),"\u3078\u306e\u30ea\u30f3\u30af\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u4e0a\u8a18\u3092\u5f97\u308b\u305f\u3081\u306b\u4ee5\u4e0b\u3092\u884c\u3044\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"this.entity\n    .tween(this.entity.getLocalPosition())\n    .to(new pc.Vec3(4, 0, 0), 1.0, pc.SineOut)\n    .loop(true)\n    .yoyo(true)\n    .start();\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30eb\u56de\u8ee2\u3092\u30c8\u30a5\u30a4\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/H8553dGa/",title:"Tween Local Rotation"})}),"\n",(0,a.jsxs)(t.p,{children:["\u3053\u306e\u4f8b\u306e",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/452634/overview/using-the-tween-library",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3068",(0,a.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/491558",children:"\u30a8\u30c7\u30a3\u30bf"}),"\u3078\u306e\u30ea\u30f3\u30af\u3092\u8cbc\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"this.entity\n    .tween(this.entity.getLocalEulerAngles())\n    .rotate(new pc.Vec3(180, 0, 180), 1.0, pc.Linear)\n    .loop(true)\n    .yoyo(true)\n    .start();\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u6b21\u306b\u3001Entity\u306e\u30ed\u30fc\u30ab\u30eb\u30b9\u30b1\u30fc\u30eb\u3092\u30c8\u30a5\u30a4\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/ndTiHCpD/",title:"Tween Local Scale"})}),"\n",(0,a.jsxs)(t.p,{children:["\u3053\u306e\u4f8b\u306e",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/452634/overview/using-the-tween-library",children:"Project"}),"\u3068",(0,a.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/491585",children:"Editor"}),"\u3078\u306e\u30ea\u30f3\u30af\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"this.entity\n    .tween(this.entity.getLocalScale())\n    .to(new pc.Vec3(3, 3, 3), 1.0, pc.SineOut)\n    .loop(true)\n    .yoyo(true)\n    .start();\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3001\u8272\u3092\u30c8\u30a5\u30a4\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\u3067\u3059\uff1a"}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/aoRYsYrc/",title:"Tween Material Color"})}),"\n",(0,a.jsxs)(t.p,{children:["\u3053\u306e\u4f8b\u306e",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/452634/overview/using-the-tween-library",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3068",(0,a.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/491559",children:"\u30a8\u30c7\u30a3\u30bf"}),"\u3078\u306e\u30ea\u30f3\u30af\u3092\u8cbc\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var color = new pc.Color(0, 0, 0);\nvar material = this.entity.render.material;\nthis.app\n    .tween(color)\n    .to(new pc.Color(1, 1, 1), 1.0, pc.Linear)\n    .loop(true)\n    .yoyo(true)\n    .on('update', function () {\n        material.diffuse = color;\n        material.update();\n    })\n    .start();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u3053\u3053\u3067\u3082\u3046\u4e00\u5ea6\u3001Tween\u30e9\u30a4\u30d6\u30e9\u30ea\u306f ",(0,a.jsx)(t.a,{href:"https://github.com/playcanvas/playcanvas-tween",children:"https://github.com/playcanvas/playcanvas-tween"})," \u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);