"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9873],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4703:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(7462),a=r(7294),i=r(4137),o=r(3699),l=r(7325);const s=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return a.createElement("div",null,a.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),a.createElement(o.Z,{to:r},(0,l.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),a.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),a.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(s,{ticket:r.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},6011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(4137)),i=r(4703);const o={sidebar_class_name:"sidebar-item--wip"},l="SSR",s={unversionedId:"guides/examples/ssr",id:"guides/examples/ssr",title:"SSR",description:"About the implementation of SSR using the methodology",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/ssr.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/ssr",permalink:"/docs/guides/examples/ssr",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/ssr.mdx",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Desktop/Touch platforms",permalink:"/docs/guides/examples/platforms"},next:{title:"Migration from legacy",permalink:"/docs/guides/migration/from-legacy"}},c={},u=[],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssr"},"SSR"),(0,a.kt)(i.ZP,{ticket:"173",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"About the implementation of SSR using the methodology")))}d.isMDXComponent=!0}}]);