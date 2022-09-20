"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6311],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4703:(e,t,n)=>{n.d(t,{ZP:()=>u});var r=n(7462),a=n(7294),i=n(4137),o=n(3699),l=n(7325);const s=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return a.createElement("div",null,a.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),a.createElement(o.Z,{to:n},(0,l.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),a.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),a.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(s,{ticket:n.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},4306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137)),i=n(4703);const o={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},l="Design Principles",s={unversionedId:"about/alternatives/design-principles",id:"about/alternatives/design-principles",title:"Design Principles",description:"What are we talking about",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/alternatives/design-principles.mdx",sourceDirName:"about/alternatives",slug:"/about/alternatives/design-principles",permalink:"/docs/about/alternatives/design-principles",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/alternatives/design-principles.mdx",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"aboutSidebar",previous:{title:"Big Ball of Mud",permalink:"/docs/about/alternatives/big-ball-of-mud"},next:{title:"DDD",permalink:"/docs/about/alternatives/ddd"}},c={},u=[{value:"What are we talking about",id:"what-are-we-talking-about",level:2},{value:"Methodology position",id:"methodology-position",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design-principles"},"Design Principles"),(0,a.kt)(i.ZP,{ticket:"59",mdxType:"WIP"}),(0,a.kt)("h2",{id:"what-are-we-talking-about"},"What are we talking about"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SOLID, GRASP, KISS, YAGNI, ... - and why they don't work well together in practice")),(0,a.kt)("h2",{id:"methodology-position"},"Methodology position"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"And how does it aggregate these practices")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=380"},"(Talk) Ilya Azin - Feature-Sliced Design (fragment about Design Principles)"))))}d.isMDXComponent=!0}}]);