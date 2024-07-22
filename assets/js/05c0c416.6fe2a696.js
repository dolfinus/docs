"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={title:"0.30.1",sidebar_position:9958},l="0.30.1 - 2023-07-25",o={unversionedId:"releases/0_30_1",id:"releases/0_30_1",title:"0.30.1",description:"Added",source:"@site/docs/releases/0_30_1.md",sourceDirName:"releases",slug:"/releases/0_30_1",permalink:"/docs/releases/0_30_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_30_1.md",tags:[],version:"current",sidebarPosition:9958,frontMatter:{title:"0.30.1",sidebar_position:9958},sidebar:"tutorialSidebar",previous:{title:"1.0.0",permalink:"/docs/releases/1_0_0"},next:{title:"0.29.2",permalink:"/docs/releases/0_29_2"}},p={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0301---2023-07-25"},"0.30.1 - 2023-07-25"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flink: support Iceberg sinks")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1960"},(0,i.kt)("inlineCode",{parentName:"a"},"#1960"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Detects output datasets when using an Iceberg table as a sink.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: column-level lineage for ",(0,i.kt)("inlineCode",{parentName:"strong"},"merge into")," on Delta tables")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1958"},(0,i.kt)("inlineCode",{parentName:"a"},"#1958"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Makes column-level lineage support ",(0,i.kt)("inlineCode",{parentName:"em"},"merge into")," on Delta tables. Also refactors column-level lineage to deal with multiple Spark versions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: column-level lineage for ",(0,i.kt)("inlineCode",{parentName:"strong"},"merge into")," on Iceberg tables")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1971"},(0,i.kt)("inlineCode",{parentName:"a"},"#1971"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Makes column-level lineage support ",(0,i.kt)("inlineCode",{parentName:"em"},"merge into")," on Iceberg tables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: add supprt for Iceberg REST catalog")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1963"},(0,i.kt)("inlineCode",{parentName:"a"},"#1963"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/juancappi"},"@juancappi"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds ",(0,i.kt)("inlineCode",{parentName:"em"},"rest")," to the existing options of ",(0,i.kt)("inlineCode",{parentName:"em"},"hive")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"hadoop")," in ",(0,i.kt)("inlineCode",{parentName:"em"},"IcebergHandler.getDatasetIdentifier()")," to add support for Iceberg's ",(0,i.kt)("inlineCode",{parentName:"em"},"RestCatalog"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airflow: add possibility to force direct-execution based on environment variable")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1934"},(0,i.kt)("inlineCode",{parentName:"a"},"#1934"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds the option to use the direct-execution method on the Airflow listener when the existence of a non-SQLAlchemy-based Airflow event mechanism is confirmed. This happens when using Airflow 2.6 or when the ",(0,i.kt)("inlineCode",{parentName:"em"},"OPENLINEAGE_AIRFLOW_ENABLE_DIRECT_EXECUTION")," environment variable exists.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SQL: add support for Apple Silicon to ",(0,i.kt)("inlineCode",{parentName:"strong"},"openlineage-sql-java"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1981"},(0,i.kt)("inlineCode",{parentName:"a"},"#1981"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/davidjgoss"},"@davidjgoss"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Expands the OS/architecture checks when compiling to produce a specific file for Apple Silicon. Also expands the corresponding OS/architecture checks when loading the binary at runtime from Java code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spec: add facet deletion")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1975"},(0,i.kt)("inlineCode",{parentName:"a"},"#1975"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/julienledem"},"@julienledem"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"In order to add a mechanism for deleting job and dataset facets, adds a ",(0,i.kt)("inlineCode",{parentName:"em"},"{ _deleted: true }")," object that can take the place of any job or dataset facet (but not run or input/output facets, which are valid only for a specific run).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client: add a file transport")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1891"},(0,i.kt)("inlineCode",{parentName:"a"},"#1891"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Alexkuva"},"@Alexkuva"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Creates a ",(0,i.kt)("inlineCode",{parentName:"em"},"FileTransport")," and its configuration classes supporting append mode or write-new-file mode, which is especially useful when an object store does not support append mode, e.g. in the case of Databricks DBFS FUSE."))),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airflow: do not run plugin if OpenLineage provider is installed")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1999"},(0,i.kt)("inlineCode",{parentName:"a"},"#1999"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Sets ",(0,i.kt)("inlineCode",{parentName:"em"},"OPENLINEAGE_DISABLED")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"true")," if the provider is installed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python: rename ",(0,i.kt)("inlineCode",{parentName:"strong"},"config")," to ",(0,i.kt)("inlineCode",{parentName:"strong"},"config_class"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1998"},(0,i.kt)("inlineCode",{parentName:"a"},"#1998"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Renames the ",(0,i.kt)("inlineCode",{parentName:"em"},"config")," class variable to ",(0,i.kt)("inlineCode",{parentName:"em"},"config_class")," to avoid potential conflict with the config instance."))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airflow: add workaround for airflow-sqlalchemy event mechanism bug")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1959"},(0,i.kt)("inlineCode",{parentName:"a"},"#1959"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Due to known issues with the fork and thread model in the Airflow-SQLAlchemy-based event-delivery mechanism, a Kafka producer left alone does not emit a `COMPLETE`` event. This creates a producer for each event when we detect that we're under Airflow 2.3 - 2.5.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: fix custom environment variables facet")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1973"},(0,i.kt)("inlineCode",{parentName:"a"},"#1973"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Enables sending the Spark environment variables facet in a non-deterministic way.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark: filter unwanted Delta events")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1968"},(0,i.kt)("inlineCode",{parentName:"a"},"#1968"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Clears events generated by logical plans having ",(0,i.kt)("inlineCode",{parentName:"em"},"Project")," node as root.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python: allow modification of ",(0,i.kt)("inlineCode",{parentName:"strong"},"openlineage.*")," logging levels via environment variables")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1974"},(0,i.kt)("inlineCode",{parentName:"a"},"#1974"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds ",(0,i.kt)("inlineCode",{parentName:"em"},"OPENLINEAGE_{CLIENT/AIRFLOW/DBT}_LOGGING")," environment variables that can be set according to module logging levels and cleans up some logging calls in ",(0,i.kt)("inlineCode",{parentName:"em"},"openlineage-airflow"),"."))))}c.isMDXComponent=!0}}]);