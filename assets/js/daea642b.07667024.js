"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8377],{50155:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(85893),a=n(11151);const s={title:"Ambient Occlusion",sidebar_position:4},r=void 0,l={id:"user-manual/graphics/lighting/ambient-occlusion",title:"Ambient Occlusion",description:"Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its occlusion by the environment.",source:"@site/docs/user-manual/graphics/lighting/ambient-occlusion.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/ambient-occlusion",permalink:"/user-manual/graphics/lighting/ambient-occlusion",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/ambient-occlusion.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Ambient Occlusion",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"Lightmapping",permalink:"/user-manual/graphics/lighting/lightmapping"},next:{title:"Runtime Lightmaps",permalink:"/user-manual/graphics/lighting/runtime-lightmaps"}},o={},c=[{value:"Rendering Global AO",id:"rendering-global-ao",level:2},{value:"Upload to Editor",id:"upload-to-editor",level:2},{value:"Example",id:"example",level:2}];function p(e){const i={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its occlusion by the environment."}),"\n",(0,t.jsx)(i.p,{children:"In PlayCanvas, ambient lighting is multiplied by the AO map, both diffuse and specular."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg",alt:"Ambient Occlusion comparison: without/with"}),"\n",(0,t.jsx)(i.em,{children:"Left: without AO; Right: with Global AO"})]}),"\n",(0,t.jsx)(i.p,{children:"AO map can be of different scale. E.g. a texture detail AO, showing surface crevices or a world-scale AO with large shadowing effect of different parts of the model. Large-scale AO will give more effect, it usually matches lightmaps on UV1, and is more important."}),"\n",(0,t.jsx)(i.h2,{id:"rendering-global-ao",children:"Rendering Global AO"}),"\n",(0,t.jsxs)(i.p,{children:["Rendering AO can be done using popular 3D modelling and archviz tools. It is practically same as rendering Lightmap that is described in ",(0,t.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping/",children:"Lightmapping Section"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"With few small differences where special material is applied on all geometry that will paint it so it looks like AO, and different settings during rendering into texture."}),"\n",(0,t.jsxs)(i.p,{children:["In 3D's Max with VRay it is done by creating a material of ",(0,t.jsx)(i.strong,{children:"VRayDirt"})," type and ",(0,t.jsx)(i.strong,{children:"Ambient Occlusion"})," mode, where ",(0,t.jsx)(i.strong,{children:"radius"})," can be changed to get desirable results."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png",alt:"3D's Max: Ambient Occlusion VRay Material"})}),"\n",(0,t.jsxs)(i.p,{children:["This material should be applied on all static geometry that have to be in ambient occlusion map. In 3D's Max this can be done either by manually applying it on individual objects or by using VRay Render Settings, using ",(0,t.jsx)(i.strong,{children:"Override mtl"})," property. This way individual materials are preserved and it makes life easier."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png",alt:"3D's Max VRay Render Settings: Override mtl"})}),"\n",(0,t.jsxs)(i.p,{children:["Then we need to get this data out into the texture. In 3D's Max this is done by using ",(0,t.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping#render-to-texture",children:"Render To Texture"}),", same as during Lightmapping rendering, except ",(0,t.jsx)(i.strong,{children:"output"})," option should be using ",(0,t.jsx)(i.strong,{children:"VRayCompleteMap"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"AO Texture does not need to store very detailed information, and visually does not suffers from texture compression artifacts much. So JPEG is economical and is suitable format for it."}),"\n",(0,t.jsx)(i.h2,{id:"upload-to-editor",children:"Upload to Editor"}),"\n",(0,t.jsx)(i.p,{children:"Simply upload texture in Editor and apply it on Ambient Occlusion slot on materials."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-ao-map.png",alt:"Editor Ambient Occlusion Map"})}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["You can ",(0,t.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:"explore example"})," that uses global Ambient Occlusion described above and its ",(0,t.jsx)(i.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,t.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/playcanvas-lightmapping-scene.jpg",alt:"PlayCanvas Lightmapping"})}),"\n",(0,t.jsx)(i.em,{children:"The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)"})]})]})}function d(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var t=n(67294);const a={},s=t.createContext(a);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);