"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8930],{88610:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),n=t(11151);const s={title:"Multiple Render Targets",layout:"usermanual-page.hbs",sidebar_position:5},i=void 0,o={id:"user-manual/graphics/advanced-rendering/multiple-render-targets",title:"Multiple Render Targets",description:"The multiple render targets feature allows to simultaneously render to multiple textures. This manual page explores implementation, configuration, and an example use case of multiple render targets.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/advanced-rendering/multiple-render-targets.md",sourceDirName:"user-manual/graphics/advanced-rendering",slug:"/user-manual/graphics/advanced-rendering/multiple-render-targets",permalink:"/ja/user-manual/graphics/advanced-rendering/multiple-render-targets",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/advanced-rendering/multiple-render-targets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Multiple Render Targets",layout:"usermanual-page.hbs",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0",permalink:"/ja/user-manual/graphics/advanced-rendering/hardware-instancing"},next:{title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/user-manual/animation/"}},l={},c=[{value:"How to use MRT",id:"how-to-use-mrt",level:2},{value:"Standard Materials",id:"standard-materials",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",id:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"The multiple render targets feature allows to simultaneously render to multiple textures. This manual page explores implementation, configuration, and an example use case of multiple render targets."}),"\n",(0,a.jsxs)(r.p,{children:["For its support on a device, check ",(0,a.jsx)(r.code,{children:"pc.GraphicsDevice.supportsMrt"}),". In general, it is supported on all WebGL2 and WebGPU devices and also on WebGL1 devices that support the ",(0,a.jsx)(r.code,{children:"WEBGL_draw_buffers"})," extension. Note that on WebGL1 devices, the support is very high apart from on Android, where it is very low."]}),"\n",(0,a.jsxs)(r.p,{children:["Additionally, you can detect the number of color attachments you can use by checking ",(0,a.jsx)(r.code,{children:"pc.GraphicsDevice.maxColorAttachments"}),". Typically, 8 attachments are supported."]}),"\n",(0,a.jsx)(r.p,{children:"Multiple render targets have the following restrictions:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"All color attachments of a multiple render target must have the same width and height."}),"\n",(0,a.jsxs)(r.li,{children:["All color attachments are cleared to the same value, specified using ",(0,a.jsx)(r.code,{children:"pc.CameraComponent.clearColor"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["All color attachments use the same write mask and alpha blend mode, as specified using ",(0,a.jsx)(r.code,{children:"pc.BlendState"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"how-to-use-mrt",children:"How to use MRT"}),"\n",(0,a.jsx)(r.p,{children:"Create a render target using multiple color textures:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"const colorBuffers = app.graphicsDevice.supportsMrt ? [texture0, texture1, texture2] : [texture0];\nconst renderTarget = new pc.RenderTarget({\n    name: 'MRT',\n    colorBuffers: colorBuffers,\n    depth: true\n    samples: 2\n});\n"})}),"\n",(0,a.jsx)(r.p,{children:"Create a camera which will be used to render to MRT:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"const camera = new pc.Entity('MRTCamera');\ncamera.addComponent('camera', {\n    // set its priority to make it render before the main camera each frame\n    priority: -1,\n\n    // this camera renders into MRT\n    renderTarget: renderTarget\n});\napp.root.addChild(camera);\n\n// if MRT is supported, set the camera to use a custom shader pass called MyMRT\nif (app.graphicsDevice.supportsMrt) {\n    camera.camera.setShaderPass('MyMRT');\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"standard-materials",children:"Standard Materials"}),"\n",(0,a.jsxs)(r.p,{children:["When rendering using ",(0,a.jsx)(r.code,{children:"StandardMaterial"})," into Multiple Render Targets (MRT), it is necessary to override the output shader chunk to direct values to additional color buffers. It is important to note that the modification in this example does not affect ",(0,a.jsx)(r.code,{children:"gl_FragColor"}),", which is used for the forward pass output in target 0. If you wish to override it as well, you can output values to ",(0,a.jsx)(r.code,{children:"pcFragColor0"})," as well."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"materials.forEach((material) => {\n    material.chunks.outputPS = `\n        #ifdef MYMRT_PASS\n            // output world normal to target 1\n            pcFragColor1 = vec4(litArgs_worldNormal * 0.5 + 0.5, 1.0);\n\n            // output gloss to target 2\n            pcFragColor2 = vec4(vec3(litArgs_gloss) , 1.0);\n        #endif\n    `;\n});\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",children:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc"}),"\n",(0,a.jsxs)(r.p,{children:["When not using ",(0,a.jsx)(r.code,{children:"StandardMaterial"})," for rendering and instead employing a fully custom fragment shader, you can directly output the desired values to ",(0,a.jsx)(r.code,{children:"pcFragColor0...pcFragColor7"}),". If you only need to modify the rendering for a specific camera, utilize the ",(0,a.jsx)(r.code,{children:"MYMRT_PASS"})," define, which corresponds to the shader pass configured for that camera."]})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var a=t(67294);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);