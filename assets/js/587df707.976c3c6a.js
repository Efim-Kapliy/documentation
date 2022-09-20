"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2153],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const r={sidebar_position:6},o="Naming adaptability",l={unversionedId:"concepts/naming-adaptability",id:"concepts/naming-adaptability",title:"Naming adaptability",description:"Problem",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",sourceDirName:"concepts",slug:"/concepts/naming-adaptability",permalink:"/docs/concepts/naming-adaptability",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/naming-adaptability.md",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"conceptsSidebar",previous:{title:"Decouple entities",permalink:"/docs/concepts/decouple-entities"},next:{title:"Abstractions",permalink:"/docs/concepts/abstractions"}},s={},p=[{value:"Problem",id:"problem",level:2},{value:"Naming in FSD",id:"naming-in-fsd",level:2},{value:"When can naming interfere?",id:"when-can-naming-interfere",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"naming-adaptability"},"Naming adaptability"),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"Due to the fact that each developer has his own experience and development context - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"we are used to calling the same entities differently"),", which can lead to misunderstandings within the team."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Components to be displayed - ",(0,i.kt)("inlineCode",{parentName:"em"},"ui")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"components")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"ui-kit")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"views")," / ...")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Code reusable in all parts of the application - the ",(0,i.kt)("inlineCode",{parentName:"em"},"core"),"/ ",(0,i.kt)("inlineCode",{parentName:"em"},"shared")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"app")," / ...")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Code business logic ",(0,i.kt)("inlineCode",{parentName:"em"},"store")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"model")," / ",(0,i.kt)("inlineCode",{parentName:"em"},"state")," / ..."))),(0,i.kt)("h2",{id:"naming-in-fsd"},"Naming in FSD"),(0,i.kt)("p",null,"The methodology uses such terms as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"process"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"feature"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"shared")," - ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"/docs/reference/layers/overview"},"layers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"model"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lib"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"api")," - ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"/docs/reference/segments"},"segments")))),(0,i.kt)("p",null,"Within the framework of the methodology, each of these terms has a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference"},"clear definition")),(0,i.kt)("p",null,"When developing a project using the ",(0,i.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," methodology, it is very important ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/16"},"to adhere to the original naming, in order to avoid misunderstandings")," both among the team members and outside of it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a new developer comes to the project who is familiar with the methodology, ",(0,i.kt)("strong",{parentName:"li"},"he should see the terms already familiar to him")),(0,i.kt)("li",{parentName:"ul"},"If you ask for help in the community, you will get an answer to your question faster, ",(0,i.kt)("strong",{parentName:"li"},"if you use the same terminology"))),(0,i.kt)("h2",{id:"when-can-naming-interfere"},"When can naming interfere?"),(0,i.kt)("p",null,"When developing a project for displaying/building/modeling any processes, or developing an application for the layout of magazine pages, you may face the problem that ",(0,i.kt)("strong",{parentName:"p"},"the terms used in the methodology overlap with the terms that your business operates"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FSD#process")," vs simulated process in your application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FSD#page")," vs magazine page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FSD#model")," vs car model")),(0,i.kt)("p",null,"Such name collisions can negatively affect the development process."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The developer, seeing the word ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," in the code, will spend extra time understanding which process is being discussed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When communicating within the development team, saying the word ",(0,i.kt)("inlineCode",{parentName:"p"},"process"),", all participants in the conversation should clearly understand what is being discussed, about the process as a business entity or about the process from ",(0,i.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When communicating with business, developers sometimes use technical terms that the business is not familiar with. So the developer, using the term ",(0,i.kt)("inlineCode",{parentName:"p"},"process"),", referring to the process from ",(0,i.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),", will introduce a misunderstanding into the conversation, which may require additional time for clarification"))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/16"},"(Discussion) Naming adaptability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Discussions on naming entities"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"Naming survey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,i.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,i.kt)("inlineCode",{parentName:"a"},"flows")," vs ...")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,i.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,i.kt)("inlineCode",{parentName:"a"},"store")," vs ..."))))))}c.isMDXComponent=!0}}]);