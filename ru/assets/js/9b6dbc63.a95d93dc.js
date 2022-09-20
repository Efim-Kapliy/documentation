"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8015],{5750:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"};var o=n(281),i=function(e,t){return r.createElement(o.Z,Object.assign({},e,{ref:t,icon:a}))};i.displayName="StarOutlined";const c=r.forwardRef(i)},4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7798:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(7462),a=(n(7294),n(4137)),o=n(8462);const i={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,(0,r.Z)({},n,{mdxType:"NavCard"})))}c.isMDXComponent=!0},7169:(e,t,n)=>{n.d(t,{ga:()=>r});var r={};n.r(r),n.d(r,{CATEGORIES:()=>o,sendEvent:()=>a});const a=e=>{let{category:t,action:n,label:r,value:a}=e;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:a})},o={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},8462:(e,t,n)=>{n.d(t,{J:()=>s,Z:()=>d});var r=n(7294),a=n(6010),o=n(3699),i=n(7169);const c={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},s=e=>{const{title:t,description:n,to:s,Icon:d,tags:u,className:m,disabled:p,theme:f="default"}=e,b=(0,r.useCallback)((()=>{i.ga.sendEvent({category:i.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(o.Z,{className:(0,a.Z)(c.root,m,p&&c.rootDisabled,c[`${f}Theme`]),to:s,onClick:b},r.createElement(l,{Icon:d}),r.createElement("div",{className:c.details},r.createElement("div",{className:c.detailsMain},r.createElement("span",{className:c.title},t),r.createElement("p",{className:c.description},n)),u&&r.createElement("div",{className:c.detailsTags},u.join(" \u2022 "))))},l=e=>{let{Icon:t}=e;return t?"string"==typeof t?r.createElement("span",{className:c.icon},t):r.createElement(t,{className:c.icon}):null},d=s},3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var r=n(7462),a=n(7294),o=n(4137),i=n(7798);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"}}]},name:"trophy",theme:"outlined"};var s=n(281),l=function(e,t){return a.createElement(s.Z,Object.assign({},e,{ref:t,icon:c}))};l.displayName="TrophyOutlined";const d=a.forwardRef(l);var u=n(5750);const m={sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/about",pagination_prev:"reference/index"},p="\ud83c\udf70 \u041e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",f={unversionedId:"about/index",id:"about/index",title:"\ud83c\udf70 \u041e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",description:"BACKGROUND-ORIENTED",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/about/index.mdx",sourceDirName:"about",slug:"/about",permalink:"/ru/docs/about",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/about/index.mdx",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"20 \u0441\u0435\u043d\u0442. 2022 \u0433.",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/about",pagination_prev:"reference/index"},sidebar:"aboutSidebar",previous:{title:"\ud83d\udcda \u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",permalink:"/ru/docs/reference"},next:{title:"\u041c\u0438\u0441\u0441\u0438\u044f",permalink:"/ru/docs/about/mission"}},b={},v=[{value:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435",id:"main",level:2}],y={toc:v};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u043e-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"},"\ud83c\udf70 \u041e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438"),(0,o.kt)("span",{class:"badge badge--violet margin-bottom--md"},"BACKGROUND-ORIENTED"),(0,o.kt)("p",{class:"summary"},"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u043c\u0430\u043d\u0434\u0435, \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f"),(0,o.kt)("h2",{id:"main"},"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"),(0,o.kt)(i.ZP,{title:"\u041c\u0438\u0441\u0441\u0438\u044f",description:"\u0426\u0435\u043b\u0438 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",to:"/docs/about/mission",Icon:d,mdxType:"NavCard"}),(0,o.kt)(i.ZP,{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",description:"\u041f\u0440\u0438\u0447\u0438\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",to:"/docs/about/motivation",Icon:u.Z,mdxType:"NavCard"}))}g.isMDXComponent=!0}}]);