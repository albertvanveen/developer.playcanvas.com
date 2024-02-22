"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9578],{81922:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>A,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var n=i(74848),o=i(28453);const r={title:"Layout Groups",sidebar_position:7},A=void 0,a={id:"user-manual/user-interface/layout-groups",title:"Layout Groups",description:"The Layout Group Component is used to automatically set the position and size of child Elements. A Layout Group Component can be used to align child elements into vertical or horizontal columns or a grid. A Layout Group Component applies the layout rules to all its direct children, you can override the Layout Group rules on a single child using a Layout Child Component.",source:"@site/docs/user-manual/user-interface/layout-groups.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/layout-groups",permalink:"/user-manual/user-interface/layout-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/layout-groups.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Layout Groups",sidebar_position:7},sidebar:"userManualSidebar",previous:{title:"Text Elements",permalink:"/user-manual/user-interface/text-elements"},next:{title:"Input",permalink:"/user-manual/user-interface/input"}},l={},s=[{value:"Creating a Layout Group",id:"creating-a-layout-group",level:2},{value:"Layout Group Properties",id:"layout-group-properties",level:2},{value:"Orientation",id:"orientation",level:4},{value:"Reverse",id:"reverse",level:4},{value:"Alignment",id:"alignment",level:4},{value:"Padding",id:"padding",level:4},{value:"Spacing",id:"spacing",level:4},{value:"Fitting",id:"fitting",level:4},{value:"Wrap",id:"wrap",level:4},{value:"Layout Children",id:"layout-children",level:2},{value:"Example Layouts",id:"example-layouts",level:2},{value:"Vertical Leaderboard",id:"vertical-leaderboard",level:3},{value:"Horizontal Buttons",id:"horizontal-buttons",level:3},{value:"Grid",id:"grid",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Layout Group Component is used to automatically set the position and size of child Elements. A Layout Group Component can be used to align child elements into vertical or horizontal columns or a grid. A Layout Group Component applies the layout rules to all its direct children, you can override the Layout Group rules on a single child using a Layout Child Component."}),"\n",(0,n.jsxs)(t.p,{children:["The Layout Group Component can be used to generate common layouts, for example, a ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/layout-groups#grid",children:"grid"}),", a fixed width ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/layout-groups#vertical-leaderboard",children:"vertical column"}),", or ",(0,n.jsx)(t.a,{href:"/user-manual/user-interface/layout-groups#horizontal-buttons",children:"horizontal row"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-layout-group",children:"Creating a Layout Group"}),"\n",(0,n.jsx)(t.p,{children:"Add a Layout Group by adding the LayoutGroup Component to an existing Element Entity."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create Layout Group",src:i(66670).A+"",width:"424",height:"455"})}),"\n",(0,n.jsx)(t.h2,{id:"layout-group-properties",children:"Layout Group Properties"}),"\n",(0,n.jsx)(t.h4,{id:"orientation",children:"Orientation"}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.code,{children:"Orientation"})," to Horizontal to organize your layout from left-to-right or right-to-left. Or Vertical to organize your layout top-to-bottom or bottom-to-top"]}),"\n",(0,n.jsx)(t.h4,{id:"reverse",children:"Reverse"}),"\n",(0,n.jsx)(t.p,{children:"ReverseX and ReverseY properties are used to set the direction the layout group is built out in. The default is left-to-right and bottom-to-top."}),"\n",(0,n.jsx)(t.h4,{id:"alignment",children:"Alignment"}),"\n",(0,n.jsxs)(t.p,{children:["Alignment is used to align the child elements to the edges of the Layout Group. ",(0,n.jsx)(t.code,{children:"[0,0]"})," aligns to the bottom left, ",(0,n.jsx)(t.code,{children:"[1,1]"})," aligns to the top right."]}),"\n",(0,n.jsx)(t.h4,{id:"padding",children:"Padding"}),"\n",(0,n.jsx)(t.p,{children:"Padding adds a space to the inside of the Layout Group before positioning any children."}),"\n",(0,n.jsx)(t.h4,{id:"spacing",children:"Spacing"}),"\n",(0,n.jsx)(t.p,{children:"Spacing determines the gap between each child."}),"\n",(0,n.jsx)(t.h4,{id:"fitting",children:"Fitting"}),"\n",(0,n.jsx)(t.p,{children:"The Width Fitting and Height Fitting properties determine how a child element's width or height will be adjusted by the Layout Group."}),"\n",(0,n.jsxs)(t.p,{children:["A value of ",(0,n.jsx)(t.strong,{children:"None"})," will apply no fitting."]}),"\n",(0,n.jsxs)(t.p,{children:["A value of ",(0,n.jsx)(t.strong,{children:"Stretch"})," will stretch the children to fill the width or height of the container using the following procedure:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Sum the fitWidthProportion/fitHeightProportion values of each child and normalize so that all values sum to 1."}),"\n",(0,n.jsx)(t.li,{children:"Apply the natural width/height for each child."}),"\n",(0,n.jsx)(t.li,{children:"If there is space remaining in the container, distribute it to each child based on the normalized fitWidthProportion/fitHeightProportion values, but do not exceed the maxWidth/maxHeight of each child."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A value of ",(0,n.jsx)(t.strong,{children:"Shrink"})," will shrink the children to fit the container using the following procedure:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Sum the fitWidthProportion/fitHeightProportion values of each child and normalize so that all values sum to 1."}),"\n",(0,n.jsx)(t.li,{children:"Apply the natural width/height for each child."}),"\n",(0,n.jsx)(t.li,{children:"If the new total width/height of all children exceeds the available space of the container, reduce each child's width/height proportionally based on the normalized fitWidthProportion/fitHeightProportion values, but do not exceed the minWidth/minHeight of each child."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A value of ",(0,n.jsx)(t.strong,{children:"Both"})," will apply both ",(0,n.jsx)(t.strong,{children:"Stretch"})," and ",(0,n.jsx)(t.strong,{children:"Shrink"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"wrap",children:"Wrap"}),"\n",(0,n.jsx)(t.p,{children:"The wrap property causes children that are outside of the width (for vertical groups) or height (for horizontal groups) to be moved to a new row or column. Using the wrap property you can create grid-based layouts."}),"\n",(0,n.jsx)(t.h2,{id:"layout-children",children:"Layout Children"}),"\n",(0,n.jsx)(t.p,{children:"A Layout Group applies its rules to all of its direct children. If you want to override these rules for a specific child you can do that by adding a LayoutChild Component to that child."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Layout Child",src:i(74222).A+"",width:"1232",height:"356"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the horizontal layout is using the ",(0,n.jsx)(t.strong,{children:"Stretch"})," width fitting to stretch each button to fit evenly into the container. The center button has a Layout Child Component with a ",(0,n.jsx)(t.code,{children:"maxWidth"})," value set to 64, so it will not be stretched."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Layout Child Setup",src:i(59256).A+"",width:"317",height:"139"})}),"\n",(0,n.jsx)(t.h2,{id:"example-layouts",children:"Example Layouts"}),"\n",(0,n.jsx)(t.h3,{id:"vertical-leaderboard",children:"Vertical Leaderboard"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Leaderboard",src:i(44022).A+"",width:"1874",height:"1488"})}),"\n",(0,n.jsx)(t.p,{children:"This Leaderboard is setup as vertical column aligned to the top center. We're using the Width Fitting property to stretch each item to be the full width. And using the Padding and Spacing properties to leave clear gaps between the cells."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Leaderboard Setup",src:i(29730).A+"",width:"311",height:"315"})}),"\n",(0,n.jsx)(t.h3,{id:"horizontal-buttons",children:"Horizontal Buttons"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Horizontal Buttons",src:i(21004).A+"",width:"1508",height:"418"})}),"\n",(0,n.jsx)(t.p,{children:"This row of buttons is laid out using a Horizontal Layout Group with some Spacing and Padding settings to make the buttons fit the correct width. No width or height fitting is used."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Horizontal Setup",src:i(93079).A+"",width:"317",height:"309"})}),"\n",(0,n.jsx)(t.h3,{id:"grid",children:"Grid"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Grid",src:i(72988).A+"",width:"232",height:"585"})}),"\n",(0,n.jsxs)(t.p,{children:["This row of buttons is laid out using a Layout Group with the Wrap setting enabled to set up a grid. The Group Element the Layout Group is attached to is set to the correct width (button width + spacing) to force the wrap to generate a two column grid. The Horizontal layout means that the grid fills in rows not columns and the Alignment property is set to ",(0,n.jsx)(t.code,{children:"[0.5, 1]"}),' which means that any "loose" elements (a row with only one element) will be centered in the X axis.']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Setup",src:i(59527).A+"",width:"317",height:"307"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},66670:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-layout-group-fa0623010df9cfb4d5d339df58ca4d9b.jpg"},72988:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/grid-layout-997da341802fc1d952634ff544e923b2.jpg"},59527:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/grid-setup-2cf7940f75a06efd395e927b662d772e.jpg"},21004:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/horizontal-layout-ba653138a184b91db657a5939194311e.jpg"},93079:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/horizontal-setup-747e265cb82ea2869a36d9fdd303728c.jpg"},74222:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/layout-child-max-width-1033888e33e2c54ce61011069f706168.jpg"},59256:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/jpeg;base64,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"},29730:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/leaderboard-setup-00ec894341ac6daf11e78c4a06d72ee9.jpg"},44022:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/leaderboard-20ef01facaceae82a95c66bbb946a373.jpg"},28453:(e,t,i)=>{i.d(t,{R:()=>A,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function A(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:A(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);