"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9399],{11872:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var n=i(85893),s=i(11151);const t={title:"Optimization Guidelines",sidebar_position:1},r=void 0,l={id:"user-manual/optimization/guidelines",title:"Optimization Guidelines",description:"Here are some tips and hints on how to achieve good performance in your PlayCanvas app.",source:"@site/docs/user-manual/optimization/guidelines.md",sourceDirName:"user-manual/optimization",slug:"/user-manual/optimization/guidelines",permalink:"/user-manual/optimization/guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/guidelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Optimization Guidelines",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"Performance",permalink:"/user-manual/optimization/"},next:{title:"Profiler",permalink:"/user-manual/optimization/profiler"}},o={},c=[{value:"JavaScript",id:"javascript",level:2},{value:"Graphics - CPU",id:"graphics---cpu",level:2},{value:"Graphics - GPU",id:"graphics---gpu",level:2},{value:"Graphics - CPU and GPU",id:"graphics---cpu-and-gpu",level:2},{value:"Physics",id:"physics",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Here are some tips and hints on how to achieve good performance in your PlayCanvas app."}),"\n",(0,n.jsx)(a.h2,{id:"javascript",children:"JavaScript"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Calling 'new' to allocate a JavaScript object (particularly vectors, matrices and quaternions) represents a dynamic allocation and can be expensive. Therefore you should, where possible, preallocate objects in a script's initialize function and reuse them in the update function. It also leads to Garbage Collection which can cause periodical freezes."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"graphics---cpu",children:"Graphics - CPU"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"In PlayCanvas, a mesh instance is a draw call (a command to draw an individual graphical primitive). Each draw call requires some effort on the CPU to dispatch to WebGL. Therefore, keeping the number of draw calls low is advisable, particularly on mobile. You can see a list of the draw calls for a particular Model by selecting the model asset and viewing it in the Inspector. 100-200 draw calls is a rough target for low end mobile devices. High end desktop machines on the other hand can process thousands every frame and still maintain 60fps."}),"\n",(0,n.jsxs)(a.li,{children:["Use ",(0,n.jsx)(a.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"Batching"})," to reduce draw calls. By creating Batch Groups in your Project and assigning them to Render, Model and Element components, the engine will try to merge them in as few mesh instances as possible, reducing draw calls and increasing performance."]}),"\n",(0,n.jsx)(a.li,{children:"Try to keep the number of shaders generated by your app as low as possible. Shaders have to be compiled and linked on demand and this operation is expensive, causing delay in app startup and glitches in frame rate. If material A has an emissive map but material B doesn't, two shaders will be generated. If you set a black emissive map on material B, the materials can share the same shader. Reducing the number of materials in your scene should also reduce the number of generated shaders."}),"\n",(0,n.jsxs)(a.li,{children:["For skinned meshes, the engine generates precise bounding box, required by the camera frustum culling, each frame. This operation has a cost for each bone, and executes even when the character is completely outside of the view frustum. To avoid this cost, consider setting up a custom AABB for the character, which is a property of the ",(0,n.jsx)(a.a,{href:"https://api.playcanvas.com/classes/Engine.RenderComponent.html#customAabb",children:(0,n.jsx)(a.code,{children:"Render"})})," or ",(0,n.jsx)(a.a,{href:"https://api.playcanvas.com/classes/Engine.ModelComponent.html#customAabb",children:(0,n.jsx)(a.code,{children:"Model"})})," component."]}),"\n",(0,n.jsx)(a.li,{children:"Only enable frustum culling on a camera component if, on balance, it is likely to save more performance than it costs to calculate visibility. If you are rendering a scene where all mesh instances are always visible, disable this option."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"graphics---gpu",children:"Graphics - GPU"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Be careful when enabling 'Use Device Pixel Ratio' in your project settings. This will cause your PlayCanvas app to utilize the native resolution of a device reducing pixelation but can result in many more pixels being filled, which can cause a significant drop in frame rate. This can be adjusted at runtime after assessing the user's device capabilities. Read more at ",(0,n.jsx)(a.a,{href:"/user-manual/optimization/runtime-devicepixelratio",children:"Adjusting Device Pixel Ratio"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Be mindful of the number of dynamic lights in your scene. Keep them to a minimum."}),"\n",(0,n.jsx)(a.li,{children:"As the value for texture anisotropy increases, visual improve but performance decreases. Be careful to balance visuals against performance."}),"\n",(0,n.jsx)(a.li,{children:"Look for opportunities to pack multiple textures into single images. For example, a grayscale opacity map can be stored in the alpha channel of a diffuse map. Or a grayscale gloss map can be stored in the alpha channel of a specular map. This results in lower VRAM usage."}),"\n",(0,n.jsx)(a.li,{children:"Post effects can be expensive so think carefully before you enable them. They can cost a lot in terms of pixel fill."}),"\n",(0,n.jsx)(a.li,{children:"Enabling backface culling on a material will be cheaper than disabling it. Generally speaking, backface culling reduces the number of pixels that the GPU has to fill. This is the default setting for newly created materials."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"graphics---cpu-and-gpu",children:"Graphics - CPU and GPU"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["For applications where there is little visual change over a period such as product configurators, there is a special property to reduce CPU and GPU usage. ",(0,n.jsx)(a.a,{href:"https://api.playcanvas.com/classes/Engine.Application.html#autoRender",children:(0,n.jsx)(a.code,{children:"pc.Application#autoRender"})})," can be set to ",(0,n.jsx)(a.code,{children:"false"})," so that frames are rendered on demand via ",(0,n.jsx)(a.a,{href:"https://api.playcanvas.com/classes/Engine.Application.html#renderNextFrame",children:(0,n.jsx)(a.code,{children:"pc.Application#renderNextFrame"})})," when there is a visual change such as the user moving the camera or adding a part to the product."]}),"\n",(0,n.jsx)(a.li,{children:"Enabling shadow casting on dynamic lights is expensive. Omni light shadows are particularly expensive. For each omni light that casts shadow, the scene must be rendered 6 times into a shadow map."}),"\n",(0,n.jsx)(a.li,{children:"Keep the number of blended mesh instances in your scene to a minimum. Blended meshes are deferred until all opaque mesh instances have been dispatched and are then submitted in back to front camera depth order. This results in pixels being filled multiple times and can result in a lot of render state changes since blended meshes cannot be sorted by material."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"physics",children:"Physics"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Collision meshes do not need to be the same level of detail as the renderable mesh. It is recommended that you set a lower resolution mesh for collision."}),"\n",(0,n.jsx)(a.li,{children:"Keep the number of dynamic rigid bodies in your scene to a minimum, particularly on mobile."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>r});var n=i(67294);const s={},t=n.createContext(s);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);