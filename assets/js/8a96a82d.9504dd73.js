"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5412],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4703:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(7462),s=r(7294),o=r(4137),i=r(3699),a=r(7325);const l=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return s.createElement("div",null,s.createElement("p",null,(0,a.I)({id:"shared.wip.title"})),s.createElement("p",null,(0,a.I)({id:"shared.wip.subtitle"})),s.createElement("ul",null,s.createElement("li",null,(0,a.I)({id:"shared.wip.var.feedback.base"}),s.createElement(i.Z,{to:r},(0,a.I)({id:"shared.wip.var.feedback.link"}))),s.createElement("li",null,(0,a.I)({id:"shared.wip.var.material.base"}),s.createElement(i.Z,{to:"https://t.me/feature_sliced"},(0,a.I)({id:"shared.wip.var.material.link"}))),s.createElement("li",null,(0,a.I)({id:"shared.wip.var.contribute.base"}),s.createElement(i.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,a.I)({id:"shared.wip.var.contribute.link"})))),s.createElement("br",null),s.createElement("p",null,s.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"WIP",type:"caution"},(0,o.kt)(l,{ticket:r.ticket,mdxType:"WIP"})))}p.isMDXComponent=!0},3195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),s=(r(7294),r(4137)),o=r(4703);const i={sidebar_position:4,sidebar_class_name:"sidebar-item--wip"},a="Cross-imports",l={unversionedId:"concepts/issues/cross-imports",id:"concepts/issues/cross-imports",title:"Cross-imports",description:"Cross-imports appear when the layer or abstraction begins to take too much responsibility than it should. That is why the methodology identifies new layers that allow you to uncouple these cross-imports",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/issues/cross-imports.mdx",sourceDirName:"concepts/issues",slug:"/concepts/issues/cross-imports",permalink:"/docs/concepts/issues/cross-imports",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/issues/cross-imports.mdx",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_class_name:"sidebar-item--wip"},sidebar:"conceptsSidebar",previous:{title:"Routing",permalink:"/docs/concepts/issues/routes"}},c={},p=[{value:"See also",id:"see-also",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cross-imports"},"Cross-imports"),(0,s.kt)(o.ZP,{ticket:"220",mdxType:"WIP"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Cross-imports appear when the layer or abstraction begins to take too much responsibility than it should. That is why the methodology identifies new layers that allow you to uncouple these cross-imports")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4515"},"(Thread) About the supposed inevitability of cross-ports")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3678"},"(Thread) About resolving cross-ports in entities")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3287"},"(Thread) About cross-imports and responsibility")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4021"},"(Thread) About imports between segments")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3618"},"(Thread) About cross-imports inside shared"))))}m.isMDXComponent=!0}}]);