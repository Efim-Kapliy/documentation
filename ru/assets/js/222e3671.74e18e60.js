"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5672],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:6},l="\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430",o={unversionedId:"concepts/naming-adaptability",id:"concepts/naming-adaptability",title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430",description:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",sourceDirName:"concepts",slug:"/concepts/naming-adaptability",permalink:"/ru/docs/concepts/naming-adaptability",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"20 \u0441\u0435\u043d\u0442. 2022 \u0433.",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"conceptsSidebar",previous:{title:"Decouple entities",permalink:"/ru/docs/concepts/decouple-entities"},next:{title:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438",permalink:"/ru/docs/concepts/abstractions"}},p={},s=[{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"problem",level:2},{value:"\u041d\u0435\u0439\u043c\u0438\u043d\u0433 \u0432 FSD",id:"naming-in-fsd",level:2},{value:"\u041a\u043e\u0433\u0434\u0430 \u043d\u0435\u0439\u043c\u0438\u043d\u0433 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u0435\u0448\u0430\u0442\u044c?",id:"when-can-naming-interfere",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c-\u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430"},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430"),(0,r.kt)("h2",{id:"problem"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"),(0,r.kt)("p",null,"\u0412 \u0441\u0438\u043b\u0443 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0441\u0432\u043e\u0439 \u043e\u043f\u044b\u0442 \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"\u043c\u044b \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0432\u044b\u043a\u043b\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438"),", \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043d\u0435\u0434\u043e\u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044e \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f - ",(0,r.kt)("inlineCode",{parentName:"em"},"ui")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"components")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"ui-kit")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"views")," / ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u041a\u043e\u0434 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0432\u043e \u0432\u0441\u0435\u0445 \u0447\u0430\u0441\u0442\u044f\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - ",(0,r.kt)("inlineCode",{parentName:"em"},"core"),"/ ",(0,r.kt)("inlineCode",{parentName:"em"},"shared")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"app")," / ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u041a\u043e\u0434 \u0431\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0438 - ",(0,r.kt)("inlineCode",{parentName:"em"},"store")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"model")," / ",(0,r.kt)("inlineCode",{parentName:"em"},"state")," / ..."))),(0,r.kt)("h2",{id:"naming-in-fsd"},"\u041d\u0435\u0439\u043c\u0438\u043d\u0433 \u0432 FSD"),(0,r.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043e\u043f\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043c\u0438, \u043a\u0430\u043a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"process"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"feature"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"shared")," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/docs/reference/layers/overview"},"layers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ui"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"model"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lib"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"api")," - ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"/docs/reference/segments"},"segments")))),(0,r.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference"},"\u0447\u0435\u0442\u043a\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435")),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044f \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"\u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430, \u0432\u043e \u0438\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u0435 \u043d\u0435\u0434\u043e\u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f")," \u043a\u0430\u043a \u0441\u0440\u0435\u0434\u0438 \u0447\u043b\u0435\u043d\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u0442\u0430\u043a \u0438 \u0437\u0430 \u0435\u0451 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0439 \u0441 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0435\u0439, ",(0,r.kt)("strong",{parentName:"li"},"\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u0438\u0434\u0435\u0442\u044c \u0443\u0436\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0435 \u0435\u043c\u0443 \u0442\u0435\u0440\u043c\u0438\u043d\u044b")),(0,r.kt)("li",{parentName:"ul"},"\u041e\u0431\u0440\u0430\u0449\u0430\u044f\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432 \u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438, \u0432\u044b \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441, ",(0,r.kt)("strong",{parentName:"li"},"\u0435\u0441\u043b\u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0443 \u0436\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u043b\u043e\u0433\u0438\u044e"))),(0,r.kt)("h2",{id:"when-can-naming-interfere"},"\u041a\u043e\u0433\u0434\u0430 \u043d\u0435\u0439\u043c\u0438\u043d\u0433 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u0435\u0448\u0430\u0442\u044c?"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044f \u043f\u0440\u043e\u0435\u043a\u0442, \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f/\u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f/\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432, \u0438\u043b\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0436\u0443\u0440\u043d\u0430\u043b\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439, \u0447\u0442\u043e ",(0,r.kt)("strong",{parentName:"p"},"\u0442\u0435\u0440\u043c\u0438\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0442\u0441\u044f \u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043c\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043e\u043f\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0448 \u0431\u0438\u0437\u043d\u0435\u0441"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#process")," vs \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#page")," vs \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0436\u0443\u0440\u043d\u0430\u043b\u0430"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FSD#model")," vs \u043c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f")),(0,r.kt)("p",null,"\u0422\u0430\u043a\u0438\u0435 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0438 \u0438\u043c\u0435\u043d \u043c\u043e\u0433\u0443\u0442 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u043e \u043e\u0442\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0432\u0438\u0434\u044f \u0441\u043b\u043e\u0432\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u0440\u043e\u0446\u0435\u0441\u0441")," \u0432 \u043a\u043e\u0434\u0435, \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043b\u0438\u0448\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043e \u043a\u0430\u043a\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0438\u0434\u0435\u0442 \u0440\u0435\u0447\u044c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0431\u0449\u0430\u044f\u0441\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u0433\u043e\u0432\u043e\u0440\u044f \u0441\u043b\u043e\u0432\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u0440\u043e\u0446\u0435\u0441\u0441"),", \u0432\u0441\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0447\u0435\u0442\u043a\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c \u043e \u0447\u0435\u043c \u0438\u0434\u0435\u0442 \u0440\u0435\u0447\u044c, \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043a\u0430\u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0438\u0437 ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0431\u0449\u0430\u044f\u0441\u044c \u0441 \u0431\u0438\u0437\u043d\u0435\u0441\u043e\u043c, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0438\u043d\u043e\u0433\u0434\u0430 \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u044e\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u044b \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0431\u0438\u0437\u043d\u0435\u0441 \u043d\u0435 \u0437\u043d\u0430\u043a\u043e\u043c. \u0422\u0430\u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0432 \u0442\u0435\u0440\u043c\u0438\u043d ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u0440\u043e\u0446\u0435\u0441\u0441"),", \u0438\u043c\u0435\u044f \u0432 \u0432\u0438\u0434\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u0437 ",(0,r.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),", \u0432\u043d\u0435\u0441\u0435\u0442 \u043d\u0435\u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0432 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u0440\u0430\u0437\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435"))),(0,r.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/16"},"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) \u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"\u041e\u043f\u0440\u043e\u0441 \u043f\u043e \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,r.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,r.kt)("inlineCode",{parentName:"a"},"flows")," vs ...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,r.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,r.kt)("inlineCode",{parentName:"a"},"store")," vs ..."))))))}c.isMDXComponent=!0}}]);