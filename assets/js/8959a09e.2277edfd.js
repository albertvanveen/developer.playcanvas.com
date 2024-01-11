"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7419],{84987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>h,toc:()=>o});var n=a(85893),r=a(11151);const s={title:"Custom Shaders",tags:["shaders","materials"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg"},i=void 0,h={id:"tutorials/custom-shaders",title:"Custom Shaders",description:"This tutorial uses a custom shader on a material to create a dissolve effect in GLSL",source:"@site/docs/tutorials/custom-shaders.md",sourceDirName:"tutorials",slug:"/tutorials/custom-shaders",permalink:"/tutorials/custom-shaders",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/custom-shaders.md",tags:[{label:"shaders",permalink:"/tags/shaders"},{label:"materials",permalink:"/tags/materials"}],version:"current",frontMatter:{title:"Custom Shaders",tags:["shaders","materials"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Custom Post Effects",permalink:"/tutorials/custom-posteffect"},next:{title:"Detecting a double click",permalink:"/tutorials/detecting-a-double-click"}},d={},o=[{value:"Shaders and Shader Definition",id:"shaders-and-shader-definition",level:2},{value:"Vertex Shader",id:"vertex-shader",level:3},{value:"Fragment Shader",id:"fragment-shader",level:3},{value:"Shader Definition",id:"shader-definition",level:3},{value:"GLSL <code>varying</code> variables",id:"glsl-varying-variables",level:2},{value:"GLSL <code>uniform</code> variables",id:"glsl-uniform-variables",level:2},{value:"Creating Materials",id:"creating-materials",level:2},{value:"Using a texture in a new Material",id:"using-a-texture-in-a-new-material",level:2},{value:"Updating uniforms",id:"updating-uniforms",level:2},{value:"Complete listing",id:"complete-listing",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/zwvhLoS9/",title:"Custom Shaders"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This tutorial uses a custom shader on a material to create a dissolve effect in GLSL"})}),"\n",(0,n.jsxs)(t.p,{children:["Complete project can be found ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/406044/overview/tutorial-custom-shaders",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When you import your 3D models into PlayCanvas by default they will use our ",(0,n.jsx)(t.a,{href:"/user-manual/graphics/physical-rendering/physical-materials/",children:"Physical Material"}),". This is a versatile material type that can cover a lot of your rendering needs."]}),"\n",(0,n.jsx)(t.p,{children:"However, you will often want to perform special effects or special cases for your materials. To do this you will need to write a custom shader."}),"\n",(0,n.jsx)(t.h2,{id:"shaders-and-shader-definition",children:"Shaders and Shader Definition"}),"\n",(0,n.jsxs)(t.p,{children:["WebGL uses the GLSL language to write shaders that can be run across all browsers. In PlayCanvas you create this code in shader assets and then assign the code to a ",(0,n.jsx)(t.a,{href:"/api/pc.Shader.html",children:"Shader Definition"})," before using this to create a new ",(0,n.jsx)(t.code,{children:"pc.Shader"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"vertex-shader",children:"Vertex Shader"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"attribute vec3 aPosition;\nattribute vec2 aUv0;\n\nuniform mat4 matrix_model;\nuniform mat4 matrix_viewProjection;\n\nvarying vec2 vUv0;\n\nvoid main(void)\n{\n    vUv0 = aUv0;\n    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fragment-shader",children:"Fragment Shader"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"varying vec2 vUv0;\n\nuniform sampler2D uDiffuseMap;\nuniform sampler2D uHeightMap;\nuniform float uTime;\n\nvoid main(void)\n{\n    float height = texture2D(uHeightMap, vUv0).r;\n    vec4 color = texture2D(uDiffuseMap, vUv0);\n    if (height < uTime) {\n      discard;\n    }\n    if (height < (uTime+0.04)) {\n      color = vec4(0, 0.2, 1, 1.0);\n    }\n    gl_FragColor = color;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The two shaders above define the functionality of the new Material. In the Vertex Shader we are transforming the vertex positions of the mesh into screen space. In the Fragment Shader we are setting the color of the pixel. This pixel color is chosen based on the two textures that are provided into this asset. If the value uTime is less than the color in the heightmap then we don't render any pixel (the model is invisible). If the value of uTime is greater than the heightmap value then we get the color from the diffuse map texture that we provide"}),"\n",(0,n.jsx)(t.h3,{id:"shader-definition",children:"Shader Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var vertexShader = this.vs.resource;\n\n// dynamically set the precision depending on device.\nvar fragmentShader = "precision " + gd.precision + " float;\\n";\nfragmentShader = fragmentShader + this.fs.resource;\n\n\n// A shader definition used to create a new shader.\nvar shaderDefinition = {\n    attributes: {\n        aPosition: pc.SEMANTIC_POSITION,\n        aUv0: pc.SEMANTIC_TEXCOORD0\n    },\n    vshader: vertexShader,\n    fshader: fragmentShader\n};\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The shader definition contains three sections. In ",(0,n.jsx)(t.code,{children:"attributes"})," you must specify the variable names and the value of attributes that will be defined for each Vertex that your vertex shader is executed for. These values are later declared in your vertex shader as an ",(0,n.jsx)(t.code,{children:"attribute"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The Vertex Shader code is supplied as a string in the ",(0,n.jsx)(t.code,{children:"vshader"})," property and the Fragment Shader is supplied as a string in the 'fshader' property."]}),"\n",(0,n.jsxs)(t.p,{children:["Above is the shader definition used to make the dissolving effect. Notice that we're getting the shader code from two assets. These assets are supplied using ",(0,n.jsx)(t.a,{href:"/user-manual/scripting/script-attributes/",children:"script attributes"})," which make it easy to access assets from a script."]}),"\n",(0,n.jsxs)(t.p,{children:["Aside from attributes there are two other special types of variable in the GLSL shaders: ",(0,n.jsx)(t.code,{children:"varying"})," and ",(0,n.jsx)(t.code,{children:"uniform"})]}),"\n",(0,n.jsxs)(t.h2,{id:"glsl-varying-variables",children:["GLSL ",(0,n.jsx)(t.code,{children:"varying"})," variables"]}),"\n",(0,n.jsxs)(t.p,{children:["A variable that is declared ",(0,n.jsx)(t.strong,{children:"varying"})," will be set in the vertex shader, but used in the fragment shader. It's a way of passing data on from the first program to the second."]}),"\n",(0,n.jsxs)(t.h2,{id:"glsl-uniform-variables",children:["GLSL ",(0,n.jsx)(t.code,{children:"uniform"})," variables"]}),"\n",(0,n.jsxs)(t.p,{children:["A variable declared ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"uniform"})})," will be declared in both vertex and fragment shaders. The value of this variable must be passed into the shader from the main application. For example, the position of a light in your scene."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-materials",children:"Creating Materials"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Create the shader from the definition\nthis.shader = new pc.Shader(gd, shaderDefinition);\n\n// Create a new material and set the shader\nthis.material = new pc.Material();\nthis.material.shader = this.shader;\n\n// Set the initial time parameter\nthis.material.setParameter('uTime', 0);\n\n// Set the diffuse texture\nthis.material.setParameter('uDiffuseMap', diffuseTexture);\n\n// Use the \"clouds\" texture as the height map property\nthis.material.setParameter('uHeightMap', heightTexture);\n\n// Replace the material on the model with our new material\nmodel.meshInstances[0].material = this.material;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once we've got the shader definition we create a new Shader and a new Material and pass the shader onto the material using ",(0,n.jsx)(t.code,{children:"setShader()"}),". The uniforms are then initialized using the ",(0,n.jsx)(t.code,{children:"setParameter()"})," method. Finally we replace the original material on the model with the new material we've created. Notice, that each mesh in a model has it's own material. So if your model has more than one mesh, you may need to set the material onto more than one mesh instance."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"You can (and should) use the same material on more than one mesh."})}),"\n",(0,n.jsx)(t.h2,{id:"using-a-texture-in-a-new-material",children:"Using a texture in a new Material"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var diffuseTexture = this.app.assets.get(this.diffuseMap).resource;\n//...\nthis.material.setParameter('uDiffuseMap', diffuseTexture);\n"})}),"\n",(0,n.jsx)(t.p,{children:"The effect demonstrated in this tutorial is achieved using a height map texture. We access the texture from the asset registry using the code above. At the\ntop of our script we have declared a script attribute called 'maps' which allows us to set a texture from the PlayCanvas Editor:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"CustomShader.attributes.add('vs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Vertex Shader'\n});\n\nCustomShader.attributes.add('fs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Fragment Shader'\n});\n\nCustomShader.attributes.add('diffuseMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Diffuse Map'\n});\n\nCustomShader.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Height Map'\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When our height map texture is loaded we can set the uniform ",(0,n.jsx)(t.code,{children:"uHeightMap"})," to be the ",(0,n.jsx)(t.code,{children:"pc.Texture"})," object."]}),"\n",(0,n.jsx)(t.h2,{id:"updating-uniforms",children:"Updating uniforms"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// update code called every frame\nCustomShader.prototype.update = function(dt) {\n    this.time += dt;\n\n    // Bounce value of t 0->1->0\n    var t = (this.time % 2);\n    if (t > 1) {\n        t = 1 - (t - 1);\n    }\n\n    // Update the time value in the material\n    this.material.setParameter('uTime', t);\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To achieve the disappearing effect we use the height map value as a threshold, and we increase the threshold over time. In the update method above we bounce the value of ",(0,n.jsx)(t.code,{children:"t"})," between 0 and 1 and we set this as the ",(0,n.jsx)(t.code,{children:"uTime"})," uniform."]}),"\n",(0,n.jsx)(t.p,{children:"In our shader if the value of the heightmap on a pixel is less than the value time value we don't draw the pixel. In addition at values that are close to the threshold, we draw the pixel in blue to display a nice 'edge' to the effect."}),"\n",(0,n.jsx)(t.h2,{id:"complete-listing",children:"Complete listing"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var CustomShader = pc.createScript('customShader');\n\nCustomShader.attributes.add('vs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Vertex Shader'\n});\n\nCustomShader.attributes.add('fs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Fragment Shader'\n});\n\nCustomShader.attributes.add('diffuseMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Diffuse Map'\n});\n\nCustomShader.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Height Map'\n});\n\n// initialize code called once per entity\nCustomShader.prototype.initialize = function() {\n    this.time = 0;\n\n    var app = this.app;\n    var gd = app.graphicsDevice;\n\n    var diffuseTexture = this.diffuseMap.resource;\n    var heightTexture = this.heightMap.resource;\n\n    var vertexShader = this.vs.resource;\n    var fragmentShader = \"precision \" + gd.precision + \" float;\\n\";\n    fragmentShader = fragmentShader + this.fs.resource;\n\n    // A shader definition used to create a new shader.\n    var shaderDefinition = {\n        attributes: {\n            aPosition: pc.SEMANTIC_POSITION,\n            aUv0: pc.SEMANTIC_TEXCOORD0\n        },\n        vshader: vertexShader,\n        fshader: fragmentShader\n    };\n\n    // Create the shader from the definition\n    this.shader = new pc.Shader(gd, shaderDefinition);\n\n    // Create a new material and set the shader\n    this.material = new pc.Material();\n    this.material.shader = this.shader;\n\n    // Set the initial time parameter\n    this.material.setParameter('uTime', 0);\n\n    // Set the diffuse texture\n    this.material.setParameter('uDiffuseMap', diffuseTexture);\n\n    // Use the \"clouds\" texture as the height map property\n    this.material.setParameter('uHeightMap', heightTexture);\n\n    // Replace the material on the model with our new material\n    var renders = this.entity.findComponents('render');\n\n    for (var i = 0; i < renders.length; ++i) {\n        var meshInstances = renders[i].meshInstances;\n        for (var j = 0; j < meshInstances.length; j++) {\n            meshInstances[j].material = this.material;\n        }\n    }\n};\n\n// update code called every frame\nCustomShader.prototype.update = function(dt) {\n    this.time += dt;\n\n    // Bounce value of t 0->1->0\n    var t = (this.time % 2);\n    if (t > 1) {\n        t = 1 - (t - 1);\n    }\n\n    // Update the time value in the material\n    this.material.setParameter('uTime', t);\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"Here is the complete script. Remember you'll need to create vertex shader and fragment shader assets in order for it to work."})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>h,a:()=>i});var n=a(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);