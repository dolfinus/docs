"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2132],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"1.3.1",sidebar_position:9954},l="1.3.1 - 2023-10-03",o={unversionedId:"releases/1_3_1",id:"releases/1_3_1",title:"1.3.1",description:"Added",source:"@site/docs/releases/1_3_1.md",sourceDirName:"releases",slug:"/releases/1_3_1",permalink:"/docs/releases/1_3_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_3_1.md",tags:[],version:"current",sidebarPosition:9954,frontMatter:{title:"1.3.1",sidebar_position:9954},sidebar:"tutorialSidebar",previous:{title:"1.4.1",permalink:"/docs/releases/1_4_1"},next:{title:"1.2.2",permalink:"/docs/releases/1_2_2"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"131---2023-10-03"},"1.3.1 - 2023-10-03"),(0,n.kt)("h3",{id:"added"},"Added"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Airflow: add some basic stats to the Airflow integration")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1845"},(0,n.kt)("inlineCode",{parentName:"a"},"#1845"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harels"},"@harels"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Uses the statsd component that already exists in the Airflow codebase and wraps the section that emits to event with a timer, as well as emitting a counter for exceptions in sending the event.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Airflow: add columns as schema facet for ",(0,n.kt)("inlineCode",{parentName:"strong"},"airflow.lineage.Table")," (if defined)")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2138"},(0,n.kt)("inlineCode",{parentName:"a"},"#2138"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/erikalfthan"},"@erikalfthan"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Adds columns (if set) from ",(0,n.kt)("inlineCode",{parentName:"em"},"airflow.lineage.Table")," inlets/outlets to the OpenLineage Dataset.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DBT: add SQLSERVER to supported dbt profile types")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2136"},(0,n.kt)("inlineCode",{parentName:"a"},"#2136"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/erikalfthan"},"@erikalfthan"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Adds support for dbt-sqlserver, solving ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/issues/2129"},"#2129"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spark: support for latest 3.5")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2118"},(0,n.kt)("inlineCode",{parentName:"a"},"#2118"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Integration tests are now run on Spark 3.5. Also upgrades 3.3 branch to 3.3.3. Please note that ",(0,n.kt)("inlineCode",{parentName:"em"},"delta")," and ",(0,n.kt)("inlineCode",{parentName:"em"},"iceberg")," are not supported for Spark ",(0,n.kt)("inlineCode",{parentName:"em"},"3.5")," at this time."))),(0,n.kt)("h3",{id:"fixed"},"Fixed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Airflow: fix find-links path in tox")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2139"},(0,n.kt)("inlineCode",{parentName:"a"},"#2139"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Fixes a broken link.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Airflow: add more graceful logging when no OpenLineage provider installed")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2141"},(0,n.kt)("inlineCode",{parentName:"a"},"#2141"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Recognizes a failed import of ",(0,n.kt)("inlineCode",{parentName:"em"},"airflow.providers.openlineage")," and adds more graceful logging to fix a corner case.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spark: fix bug in PathUtils' prepareDatasetIdentifierFromDefaultTablePath(CatalogTable) to correctly preserve scheme from CatalogTable's location")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2142"},(0,n.kt)("inlineCode",{parentName:"a"},"#2142"))," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("em",{parentName:"li"},"Previously, the ",(0,n.kt)("inlineCode",{parentName:"em"},"prepareDatasetIdentifierFromDefaultTablePath"),' method would override the scheme with the value of "file" when constructing a dataset identifier. It now uses the scheme of the ',(0,n.kt)("inlineCode",{parentName:"em"},"CatalogTable"),"'s URI for this. Thank you @pawel-big-lebowski for the quick triage and suggested fix."))))}d.isMDXComponent=!0}}]);