"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2043],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:3},i="Cross-communication",l={unversionedId:"concepts/cross-communication",id:"concepts/cross-communication",title:"Cross-communication",description:"Within the framework of the methodology, all modules are distributed by scopes of responsibility (layer, slice, segment)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",sourceDirName:"concepts",slug:"/concepts/cross-communication",permalink:"/docs/concepts/cross-communication",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",tags:[],version:"current",lastUpdatedAt:1663673420,formattedLastUpdatedAt:"Sep 20, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"conceptsSidebar",previous:{title:"Needs driven",permalink:"/docs/concepts/needs-driven"},next:{title:"App splitting",permalink:"/docs/concepts/app-splitting"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Rule",id:"rule",level:2},{value:"Identifying problems",id:"identifying-problems",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-communication"},"Cross-communication"),(0,o.kt)("p",null,"Within the framework of the methodology, all modules are distributed by scopes of responsibility ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"(layer, slice, segment)")),(0,o.kt)("p",null,"The layers, in turn, are organized vertically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"At the bottom" are the reused modules (ui-kit, internal libraries of the project), as the most abstract'),(0,o.kt)("li",{parentName:"ul"},'And as you move "up", more specific modules are located.')),(0,o.kt)("p",null,"Regardless of whether it belongs to any slice, each module ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/public-api"},(0,o.kt)("strong",{parentName:"a"},"is required to provide a public access interface")),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The interaction of each module with the rest of the application is designed taking into account a number of requirements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Low coupling")," with other modules"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"A change in one module should have a weak and predictable effect on others")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High cohesion"),' - the responsibilities of each module are "focused" on one task'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'If the module has too many responsibilities (starts "doing too much") - this should be noticed as soon as possible')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Absence of cyclic dependencies")," on the scale of the entire application"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Often lead to unexpected, undesirable behavior, it is better to avoid them altogether"))))),(0,o.kt)("h2",{id:"rule"},"Rule"),(0,o.kt)("p",null,"To meet these requirements, within the framework of the methodology, it is necessary to observe the basic rule:"),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'A module can depend only on "underlying" modules, but not on modules from the same or higher layer')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,o.kt)("strong",{parentName:"li"},"cannot")," depend on ",(0,o.kt)("inlineCode",{parentName:"li"},"features/filters")," ",(0,o.kt)("strong",{parentName:"li"},"and vice versa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,o.kt)("strong",{parentName:"li"},"may")," depend on ",(0,o.kt)("inlineCode",{parentName:"li"},"shared/ui/button"),", ",(0,o.kt)("strong",{parentName:"li"},"but not vice versa"))),(0,o.kt)("p",null,"Following this rule allows you to keep dependencies ",(0,o.kt)("strong",{parentName:"p"},'"unidirectional"')," - which automatically ",(0,o.kt)("strong",{parentName:"p"},"eliminates cyclic imports")," and significantly ",(0,o.kt)("strong",{parentName:"p"},"simplifies tracking dependencies")," between modules in the application."),(0,o.kt)("h2",{id:"identifying-problems"},"Identifying problems"),(0,o.kt)("p",null,"Violation of this rule is a signal of problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The module has ",(0,o.kt)("strong",{parentName:"p"},"import from another module")," from its own layer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Perhaps the module was ",(0,o.kt)("strong",{parentName:"li"},"unnecessarily fragmented")," or has ",(0,o.kt)("strong",{parentName:"li"},"unnecessary responsibility.")),(0,o.kt)("li",{parentName:"ul"},"You should ",(0,o.kt)("strong",{parentName:"li"},"combine")," it with the imported module or ",(0,o.kt)("strong",{parentName:"li"},"move it (partially or completely) to the layer below")," or transfer the logic of relationships to modules on higher layers."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The module ",(0,o.kt)("strong",{parentName:"p"},"is imported by many modules")," from its own layer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Perhaps the module has ",(0,o.kt)("strong",{parentName:"li"},"extra responsibility.")),(0,o.kt)("li",{parentName:"ul"},"You should ",(0,o.kt)("strong",{parentName:"li"},"move it (partially or entirely) to the layer below"),", or transfer the logic of connections to modules on higher layers."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The module ",(0,o.kt)("strong",{parentName:"p"},"has imports from many modules")," from its own layer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Perhaps the module belongs to ",(0,o.kt)("strong",{parentName:"li"},"another scope of responsibility.")),(0,o.kt)("li",{parentName:"ul"},"You should ",(0,o.kt)("strong",{parentName:"li"},"move it (partially or completely) to the layer above"),".")))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/low-coupling"},"(Guide) About achieving low coupling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/49"},"(Discussion) Coupled entities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822"},"(Discussion) About cross-imports and analysis \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GRASP"},(0,o.kt)("strong",{parentName:"a"},"GRASP")," Patterns"))))}m.isMDXComponent=!0}}]);