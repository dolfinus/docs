"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:1},o="About OpenLineage",l={unversionedId:"index",id:"index",title:"About OpenLineage",description:"OpenLineage is an open framework for data lineage collection and analysis. At its core is an extensible specification that systems can use to interoperate with lineage metadata.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Object Model",permalink:"/docs/spec/object-model"}},s={},p=[{value:"Design",id:"design",level:3},{value:"How OpenLineage Benefits the Ecosystem",id:"how-openlineage-benefits-the-ecosystem",level:3},{value:"BEFORE:",id:"before",level:4},{value:"WITH OPENLINEAGE:",id:"with-openlineage",level:4},{value:"Scope",id:"scope",level:2},{value:"Core model",id:"core-model",level:2},{value:"Spec",id:"spec",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Related projects",id:"related-projects",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-openlineage"},"About OpenLineage"),(0,i.kt)("p",null,"OpenLineage is an open framework for data lineage collection and analysis. At its core is an extensible specification that systems can use to interoperate with lineage metadata."),(0,i.kt)("h3",{id:"design"},"Design"),(0,i.kt)("p",null,"OpenLineage is an ",(0,i.kt)("em",{parentName:"p"},"Open Standard")," for lineage metadata collection designed to record metadata for a ",(0,i.kt)("em",{parentName:"p"},"job")," in execution."),(0,i.kt)("p",null,"The standard defines a generic model of ",(0,i.kt)("em",{parentName:"p"},"dataset"),", ",(0,i.kt)("em",{parentName:"p"},"job"),", and ",(0,i.kt)("em",{parentName:"p"},"run")," entities uniquely identified using consistent naming strategies. The core model is highly extensible via facets. A ",(0,i.kt)("strong",{parentName:"p"},"facet")," is user-defined metadata and enables entity enrichment. We encourage you to familiarize yourself with the core model below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(57816).Z,width:"516",height:"140"})),(0,i.kt)("h3",{id:"how-openlineage-benefits-the-ecosystem"},"How OpenLineage Benefits the Ecosystem"),(0,i.kt)("p",null,"Below, we illustrate the challenges of collecting lineage metadata from multiple sources, schedulers and/or data processing frameworks. We then outline the design benefits of defining an ",(0,i.kt)("em",{parentName:"p"},"Open Standard")," for lineage metadata collection."),(0,i.kt)("h4",{id:"before"},"BEFORE:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(95429).Z,width:"891",height:"425"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each project has to instrument its own custom metadata collection integration, therefore duplicating efforts."),(0,i.kt)("li",{parentName:"ul"},"Integrations are external and can break with new versions of the underlying scheduler and/or data processing framework, requiring projects to ensure ",(0,i.kt)("em",{parentName:"li"},"backwards")," compatibility.")),(0,i.kt)("h4",{id:"with-openlineage"},"WITH OPENLINEAGE:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(22769).Z,width:"811",height:"418"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integration efforts are shared ",(0,i.kt)("em",{parentName:"li"},"across")," projects."),(0,i.kt)("li",{parentName:"ul"},"Integrations can be ",(0,i.kt)("em",{parentName:"li"},"pushed")," to the underlying scheduler and/or data processing framework; no longer does one need to play catch up and ensure compatibility!")),(0,i.kt)("h2",{id:"scope"},"Scope"),(0,i.kt)("p",null,"OpenLineage defines the metadata for running jobs and their corresponding events.\nA configurable backend allows the user to choose what protocol to send the events to.\n",(0,i.kt)("img",{alt:"Scope",src:a(19042).Z,width:"889",height:"444"})),(0,i.kt)("h2",{id:"core-model"},"Core model"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Model",src:a(75574).Z,width:"769",height:"398"})),(0,i.kt)("p",null," A facet is an atomic piece of metadata attached to one of the core entities.\nSee the spec for more details."),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.md"},"specification")," is defined using OpenAPI and allows extension through custom facets."),(0,i.kt)("h2",{id:"integrations"},"Integrations"),(0,i.kt)("p",null,"The OpenLineage repository contains integrations with several systems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/airflow"},"Apache Airflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/flink"},"Apache Flink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/spark"},"Apache Spark")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/dagster"},"Dagster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/dbt"},"dbt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/sql"},"SQL"))),(0,i.kt)("h2",{id:"related-projects"},"Related projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marquezproject.ai/"},"Marquez"),": Marquez is an ",(0,i.kt)("a",{parentName:"li",href:"https://lfaidata.foundation/"},"LF AI & DATA")," project to collect, aggregate, and visualize a data ecosystem's metadata. It is the reference implementation of the OpenLineage API.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MarquezProject/marquez/blob/main/api/src/main/java/marquez/api/OpenLineageResource.java"},"OpenLineage collection implementation")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://egeria.odpi.org/"},"Egeria"),": Egeria Open Metadata and Governance. A metadata bus.")))}d.isMDXComponent=!0},95429:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/before-ol-66bced130b7917da3e28f441c04f8ba9.svg"},75574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datamodel-22f9e2e598515874eba01efe4b7f01dc.svg"},57816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model-a6a03d737a81fc07e1af16e1ccb695c7.svg"},19042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scope-b6ab2714276335333b9f3021fc5939a8.svg"},22769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/with-ol-ddff6a87da85a40c132be0b911b497e2.svg"}}]);