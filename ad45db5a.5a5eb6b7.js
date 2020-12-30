(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),O=m(a),o=b,j=O["".concat(c,".").concat(o)]||O[o]||d[o]||n;return a?r.a.createElement(j,i(i({ref:t},l),{},{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=o;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:b,c[1]=i;for(var l=2;l<n;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},745:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var b=a(3),r=a(7),n=(a(0),a(1086)),c={id:"metadatastorage",title:"Class: MetadataStorage",sidebar_label:"MetadataStorage"},i={unversionedId:"api/classes/metadatastorage",id:"version-4.2/api/classes/metadatastorage",isDocsHomePage:!1,title:"Class: MetadataStorage",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/metadatastorage.md",slug:"/api/classes/metadatastorage",permalink:"/docs/4.2/api/classes/metadatastorage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/metadatastorage.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1609355136,sidebar_label:"MetadataStorage",sidebar:"version-4.2/API",previous:{title:"Class: MetadataProvider",permalink:"/docs/4.2/api/classes/metadataprovider"},next:{title:"Class: MetadataValidator",permalink:"/docs/4.2/api/classes/metadatavalidator"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"metadata",id:"metadata",children:[]},{value:"metadata",id:"metadata-1",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"decorate",id:"decorate",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"getAll",id:"getall",children:[]},{value:"has",id:"has",children:[]},{value:"reset",id:"reset",children:[]},{value:"set",id:"set",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMetadataFromDecorator",id:"getmetadatafromdecorator",children:[]},{value:"getSubscriberMetadata",id:"getsubscribermetadata",children:[]},{value:"init",id:"init",children:[]},{value:"isKnownEntity",id:"isknownentity",children:[]}]}],l={rightToc:p};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"MetadataStorage"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new MetadataStorage"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata?"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L12"}),"packages/core/src/metadata/MetadataStorage.ts:12"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"{}")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L12"}),"packages/core/src/metadata/MetadataStorage.ts:12"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata-1"},"metadata"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"> = Utils.getGlobalStorage('metadata')"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L10"}),"packages/core/src/metadata/MetadataStorage.ts:10"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"subscribers"},"subscribers"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"subscribers"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),"> = Utils.getGlobalStorage('subscribers')"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L11"}),"packages/core/src/metadata/MetadataStorage.ts:11"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"decorate"},"decorate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"decorate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"em"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymanager"}),"EntityManager"),"): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L86"}),"packages/core/src/metadata/MetadataStorage.ts:86"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"em")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymanager"}),"EntityManager"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"find"},"find"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"find"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T> ","|"," undefined"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L70"}),"packages/core/src/metadata/MetadataStorage.ts:70"))),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T> ","|"," undefined"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"get"},"get"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"init?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"validate?"),": boolean): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L58"}),"packages/core/src/metadata/MetadataStorage.ts:58"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"init")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getall"},"getAll"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getAll"),"(): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L54"}),"packages/core/src/metadata/MetadataStorage.ts:54"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"has"},"has"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"has"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L74"}),"packages/core/src/metadata/MetadataStorage.ts:74"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"reset"},"reset"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"reset"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L82"}),"packages/core/src/metadata/MetadataStorage.ts:82"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"set"},"set"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L78"}),"packages/core/src/metadata/MetadataStorage.ts:78"))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadata"},"getMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadata"),"(): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L18"}),"packages/core/src/metadata/MetadataStorage.ts:18"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),">"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadata"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"path"),": string): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L19"}),"packages/core/src/metadata/MetadataStorage.ts:19"))),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadatafromdecorator"},"getMetadataFromDecorator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadataFromDecorator"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"target"),": T & ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L38"}),"packages/core/src/metadata/MetadataStorage.ts:38"))),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"target")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T & ",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getsubscribermetadata"},"getSubscriberMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getSubscriberMetadata"),"(): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L46"}),"packages/core/src/metadata/MetadataStorage.ts:46"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"<",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/eventsubscriber"}),"EventSubscriber"),">"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"init"),"(): ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L50"}),"packages/core/src/metadata/MetadataStorage.ts:50"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isknownentity"},"isKnownEntity"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isKnownEntity"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": string): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/metadata/MetadataStorage.ts#L34"}),"packages/core/src/metadata/MetadataStorage.ts:34"))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"))}m.isMDXComponent=!0}}]);