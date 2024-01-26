"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7345],{32848:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),s=t(11151);const o={title:"Terrain Generation from Heightmap",tags:["procedural"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406046/W2AUF9-image-75.jpg"},r=void 0,a={id:"tutorials/terrain-generation",title:"Terrain Generation from Heightmap",description:"This project uses the pc.Mesh API to procedurally generate and texture a rolling hillside from a heightmap texture.",source:"@site/docs/tutorials/terrain-generation.md",sourceDirName:"tutorials",slug:"/tutorials/terrain-generation",permalink:"/tutorials/terrain-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/terrain-generation.md",tags:[{label:"procedural",permalink:"/tags/procedural"}],version:"current",frontMatter:{title:"Terrain Generation from Heightmap",tags:["procedural"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406046/W2AUF9-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Switching materials at runtime",permalink:"/tutorials/switching-materials-at-runtime"},next:{title:"Third Person Controller",permalink:"/tutorials/third-person-controller"}},p={},c=[];function h(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/CmcIlmPb/",title:"Terrain Generation from Heightmap"})}),"\n",(0,i.jsxs)(e.p,{children:["This project uses the ",(0,i.jsx)(e.a,{href:"https://api.playcanvas.com/classes/Engine.Mesh.html",children:(0,i.jsx)(e.code,{children:"pc.Mesh"})})," API to procedurally generate and texture a rolling hillside from a heightmap texture."]}),"\n",(0,i.jsxs)(e.p,{children:["Try it from the Editor in the ",(0,i.jsx)(e.a,{href:"https://playcanvas.com/project/406046",children:"tutorial project."})]}),"\n",(0,i.jsx)(e.p,{children:"The script below performs the terrain generation."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var Terrain = pc.createScript('terrain');\n\nTerrain.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture'\n});\n\nTerrain.attributes.add('minHeight', {\n    type: 'number',\n    default: 0\n});\n\nTerrain.attributes.add('maxHeight', {\n    type: 'number',\n    default: 10\n});\n\nTerrain.attributes.add('width', {\n    type: 'number',\n    default: 100\n});\n\nTerrain.attributes.add('depth', {\n    type: 'number',\n    default: 100\n});\n\nTerrain.attributes.add('subdivisions', {\n    type: 'number',\n    default: 250\n});\n\nTerrain.attributes.add('material', {\n    type: 'asset',\n    assetType: 'material'\n});\n\n// initialize code called once per entity\nTerrain.prototype.initialize = function() {\n    var img = this.heightMap.resource.getSource();\n    var visualMesh = this.createTerrainFromHeightMap(img, this.subdivisions);\n    var collisionMesh = this.createTerrainFromHeightMap(img, this.subdivisions / 2);\n\n    this.entity.addComponent('render', {\n        meshInstances: [new pc.MeshInstance(visualMesh, this.material.resource)]\n    });\n\n    this.entity.addComponent('collision', {\n        type: 'mesh'\n    });\n\n    // We still have to create a model resource to create a runtime\n    // collision mesh\n    var node = new pc.GraphNode();\n    var meshInstance = new pc.MeshInstance(node, collisionMesh, this.material.resource);\n    var collisionModel = new pc.Model();\n    collisionModel.graph = node;\n    collisionModel.meshInstances.push(meshInstance);\n\n    this.entity.collision.model = collisionModel;\n\n    this.entity.addComponent('rigidbody', {\n        friction: 0.5,\n        type: 'static'\n    });\n};\n\nTerrain.prototype.createTerrainVertexData = function (options) {\n    var positions = [];\n    var uvs = [];\n    var indices = [];\n    var row, col;\n\n    for (row = 0; row <= options.subdivisions; row++) {\n        for (col = 0; col <= options.subdivisions; col++) {\n            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));\n\n            var heightMapX = (((position.x + options.width / 2) / options.width) * (options.bufferWidth - 1)) | 0;\n            var heightMapY = ((1.0 - (position.z + options.height / 2) / options.height) * (options.bufferHeight - 1)) | 0;\n\n            var pos = (heightMapX + heightMapY * options.bufferWidth) * 4;\n            var r = options.buffer[pos] / 255.0;\n            var g = options.buffer[pos + 1] / 255.0;\n            var b = options.buffer[pos + 2] / 255.0;\n\n            var gradient = r * 0.3 + g * 0.59 + b * 0.11;\n\n            position.y = options.minHeight + (options.maxHeight - options.minHeight) * gradient;\n\n            positions.push(position.x, position.y, position.z);\n            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);\n        }\n    }\n\n    for (row = 0; row < options.subdivisions; row++) {\n        for (col = 0; col < options.subdivisions; col++) {\n            indices.push(col + row * (options.subdivisions + 1));\n            indices.push(col + 1 + row * (options.subdivisions + 1));\n            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));\n\n            indices.push(col + row * (options.subdivisions + 1));\n            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));\n            indices.push(col + (row + 1) * (options.subdivisions + 1));\n        }\n    }\n\n    var normals = pc.calculateNormals(positions, indices);\n\n    return {\n        indices: indices,\n        positions: positions,\n        normals: normals,\n        uvs: uvs\n    };\n};\n\nTerrain.prototype.createTerrainFromHeightMap = function (img, subdivisions) {\n    var canvas = document.createElement(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var bufferWidth = img.width;\n    var bufferHeight = img.height;\n    canvas.width = bufferWidth;\n    canvas.height = bufferHeight;\n\n    context.drawImage(img, 0, 0);\n\n    var buffer = context.getImageData(0, 0, bufferWidth, bufferHeight).data;\n    var vertexData = this.createTerrainVertexData({\n        width: this.width,\n        height: this.depth,\n        subdivisions: subdivisions,\n        minHeight: this.minHeight,\n        maxHeight: this.maxHeight,\n        buffer: buffer,\n        bufferWidth: bufferWidth,\n        bufferHeight: bufferHeight\n    });\n\n    var mesh = new pc.Mesh(this.app.graphicsDevice);\n    mesh.setPositions(vertexData.positions);\n    mesh.setNormals(vertexData.normals);\n    mesh.setUvs(0, vertexData.uvs);\n    mesh.setIndices(vertexData.indices);\n    mesh.update();\n\n    return mesh;\n};\n"})})]})}function l(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);