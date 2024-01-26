"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[312],{98475:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(85893),s=a(11151);const r={title:"Loading Screen",sidebar_position:8},o=void 0,i={id:"user-manual/editor/loading-screen",title:"Loading Screen",description:"If you want to create a custom loading screen, you can go to the Scene Settings and click Create Default in the Loading Screen section. If you already have a valid loading screen script you can drag and drop it on the loading screen panel or click on Select Existing:",source:"@site/docs/user-manual/editor/loading-screen.md",sourceDirName:"user-manual/editor",slug:"/user-manual/editor/loading-screen",permalink:"/user-manual/editor/loading-screen",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/loading-screen.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Loading Screen",sidebar_position:8},sidebar:"userManualSidebar",previous:{title:"Settings",permalink:"/user-manual/editor/settings"},next:{title:"Scenes",permalink:"/user-manual/editor/scenes"}},c={},l=[];function p(n){const e={a:"a",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["If you want to create a custom loading screen, you can go to the ",(0,t.jsx)(e.a,{href:"/user-manual/editor/settings",children:"Scene Settings"})," and click ",(0,t.jsx)(e.strong,{children:"Create Default"})," in the ",(0,t.jsx)(e.em,{children:"Loading Screen"})," section. If you already have a valid loading screen script you can drag and drop it on the loading screen panel or click on ",(0,t.jsx)(e.strong,{children:"Select Existing"}),":"]}),"\n",(0,t.jsx)("img",{loading:"lazy",alt:"Loading Screen",src:"/images/user-manual/editor/loading-screen/loading-screen.png"}),"\n",(0,t.jsxs)(e.p,{children:["Clicking on ",(0,t.jsx)(e.strong,{children:"Create Default"})," will create a new script with some default contents. You can edit that script if you want to change the loading screen. Here is an example of a default script:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"pc.script.createLoadingScreen(function (app) {\n    var showSplash = function () {\n        // splash wrapper\n        var wrapper = document.createElement('div');\n        wrapper.id = 'application-splash-wrapper';\n        document.body.appendChild(wrapper);\n\n        // splash\n        var splash = document.createElement('div');\n        splash.id = 'application-splash';\n        wrapper.appendChild(splash);\n        splash.style.display = 'none';\n\n        var logo = document.createElement('img');\n        logo.src = 'https://playcanvas.com/static-assets/images/play_text_252_white.png';\n        splash.appendChild(logo);\n        logo.onload = function () {\n            splash.style.display = 'block';\n        };\n\n        var container = document.createElement('div');\n        container.id = 'progress-bar-container';\n        splash.appendChild(container);\n\n        var bar = document.createElement('div');\n        bar.id = 'progress-bar';\n        container.appendChild(bar);\n\n    };\n\n    var hideSplash = function () {\n        var splash = document.getElementById('application-splash-wrapper');\n        splash.parentElement.removeChild(splash);\n    };\n\n    var setProgress = function (value) {\n        var bar = document.getElementById('progress-bar');\n        if(bar) {\n            value = Math.min(1, Math.max(0, value));\n            bar.style.width = value * 100 + '%';\n        }\n    };\n\n    var createCss = function () {\n        var css = [\n            'body {',\n            '    background-color: #283538;',\n            '}',\n            '',\n            '#application-splash-wrapper {',\n            '    position: absolute;',\n            '    top: 0;',\n            '    left: 0;',\n            '    height: 100%;',\n            '    width: 100%;',\n            '    background-color: #283538;',\n            '}',\n            '',\n            '#application-splash {',\n            '    position: absolute;',\n            '    top: calc(50% - 28px);',\n            '    width: 264px;',\n            '    left: calc(50% - 132px);',\n            '}',\n            '',\n            '#application-splash img {',\n            '    width: 100%;',\n            '}',\n            '',\n            '#progress-bar-container {',\n            '    margin: 20px auto 0 auto;',\n            '    height: 2px;',\n            '    width: 100%;',\n            '    background-color: #1d292c;',\n            '}',\n            '',\n            '#progress-bar {',\n            '    width: 0%;',\n            '    height: 100%;',\n            '    background-color: #f60;',\n            '}',\n            '',\n            '@media (max-width: 480px) {',\n            '    #application-splash {',\n            '        width: 170px;',\n            '        left: calc(50% - 85px);',\n            '    }',\n            '}'\n        ].join('\\n');\n\n        var style = document.createElement('style');\n        style.type = 'text/css';\n        if (style.styleSheet) {\n            style.styleSheet.cssText = css;\n        } else {\n            style.appendChild(document.createTextNode(css));\n        }\n\n        document.head.appendChild(style);\n    };\n\n    createCss();\n    showSplash();\n\n    app.on('preload:end', function () {\n        app.off('preload:progress');\n    });\n    app.on('preload:progress', setProgress);\n    app.on('start', hideSplash);\n});\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>i,a:()=>o});var t=a(67294);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);