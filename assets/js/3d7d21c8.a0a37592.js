"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7349],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:1},s="Glossary",l={unversionedId:"reference/glossary",id:"reference/glossary",title:"Glossary",description:"Module",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/glossary.md",sourceDirName:"reference",slug:"/reference/glossary",permalink:"/docs/reference/glossary",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/glossary.md",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"\ud83d\udcda Reference",permalink:"/docs/reference"},next:{title:"Overview",permalink:"/docs/reference/layers/overview"}},o={},p=[{value:"Module",id:"module",level:2},{value:"Layer",id:"layer",level:2},{value:"Slice",id:"slice",level:2},{value:"Segment",id:"segment",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h2",{id:"module"},"Module"),(0,r.kt)("p",null,"Structural unit of the project"),(0,r.kt)("p",null,"A module usually means a specific file or directory ",(0,r.kt)("em",{parentName:"p"},"(an abstraction in the context of a structure)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"authorization module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"page module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"the module of the component in the feature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"action module in the entity model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"etc."))),(0,r.kt)("h2",{id:"layer"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/layers/overview"},"Layer")),(0,r.kt)("p",null,"Each of the directories located at the topmost level of the application."),(0,r.kt)("p",null,"This level defines the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-layers"},"scope of responsibility of modules"),", as well as the level of danger of changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/app"},(0,r.kt)("inlineCode",{parentName:"a"},"app")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/processes"},(0,r.kt)("inlineCode",{parentName:"a"},"processes")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/pages"},(0,r.kt)("inlineCode",{parentName:"a"},"pages")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/widgets"},(0,r.kt)("inlineCode",{parentName:"a"},"widgets")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/features"},(0,r.kt)("inlineCode",{parentName:"a"},"features")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entities")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/shared"},(0,r.kt)("inlineCode",{parentName:"a"},"shared")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # Initializing application logic\n    \u251c\u2500\u2500 processes/              # (Optional) Application processes running over pages\n    \u251c\u2500\u2500 pages/                  # Application pages\n    \u251c\u2500\u2500 widgets/                # Independent and self-contained blocks for pages\n    \u251c\u2500\u2500 features/               # (Optional) Processing of user scenarios\n    \u251c\u2500\u2500 entities/               # (Optional) Business entities that domain logic operates with\n    \u2514\u2500\u2500 shared/                 # Reused modules, non business specific\n")),(0,r.kt)("h2",{id:"slice"},"Slice"),(0,r.kt)("p",null,"Each of the elements located at the top level of the layers"),(0,r.kt)("p",null,"This level is ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-slices"},"poorly regulated")," is a methodology, but a lot depends on the specific project, stack and team"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives (from each layer)")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/processes"},(0,r.kt)("inlineCode",{parentName:"a"},"process")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/pages"},(0,r.kt)("inlineCode",{parentName:"a"},"page")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/widgets"},(0,r.kt)("inlineCode",{parentName:"a"},"widget")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/features"},(0,r.kt)("inlineCode",{parentName:"a"},"feature")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entity")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # Does not have specific slices, \n|   # Because it contains meta-logic on the project and its initialization\n\u251c\u2500\u2500 processes/\n|   # Slices implementing processes on pages\n|   \u251c\u2500\u2500 payment\n|   \u251c\u2500\u2500 auth\n|   \u251c\u2500\u2500 quick-tour\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 pages/\n|   # Slices implementing application pages\n|   # At the same time, due to the specifics of routing, they can be invested in each other\n|   \u251c\u2500\u2500 profile\n|   \u251c\u2500\u2500 sign-up\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 widgets/\n|   # Slices implementing independent page blocks\n|   \u251c\u2500\u2500 header\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 features/\n|   # Slices implementing user scenarios on pages\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 inline-post\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 entities/\n|   # Slices of business entities for implementing a more complex BL\n|   \u251c\u2500\u2500 viewer\n|   \u251c\u2500\u2500 posts\n|   \u251c\u2500\u2500 i18n\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 shared/\n|   # Does not have specific slices\n|   # is rather a set of commonly used segments, without binding to the BL\n")),(0,r.kt)("h2",{id:"segment"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/segments"},"Segment")),(0,r.kt)("p",null,"Each of the modules located at the top level of each slice"),(0,r.kt)("p",null,"This level determines ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-segments"},"the purpose of modules in the code and implementation"),", according to classical design models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments#ui"},(0,r.kt)("inlineCode",{parentName:"a"},"ui")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments#model"},(0,r.kt)("inlineCode",{parentName:"a"},"model")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments#lib"},(0,r.kt)("inlineCode",{parentName:"a"},"lib")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments#api"},(0,r.kt)("inlineCode",{parentName:"a"},"api")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments#config"},(0,r.kt)("inlineCode",{parentName:"a"},"config")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-logic (components, ui-widgets, ...)\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers, ...)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config/                 # Application configuration (env-vars, ...)\n    |   \u2514\u2500\u2500 api/                    # Logic of API requests (api instances, requests, ...)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since not every layer explicitly uses slices (app, shared)"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Segments can be arranged according to their own rules ",(0,r.kt)("inlineCode",{parentName:"li"},"shared/{api, config}")),(0,r.kt)("li",{parentName:"ul"},"Or not to use ",(0,r.kt)("inlineCode",{parentName:"li"},"app/{providers, styles}")," at all"))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/app-splitting"},"Abstraction levels by methodology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/layers/overview"},"Layers in the methodology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/segments"},"Segments in the methodology"))))}m.isMDXComponent=!0}}]);