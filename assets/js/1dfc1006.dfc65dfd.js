"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=m(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||d[u]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"1.17.1",sidebar_position:9940},l="1.17.1 - 2024-06-21",p={unversionedId:"releases/1_17_1",id:"releases/1_17_1",title:"1.17.1",description:"Added",source:"@site/docs/releases/1_17_1.md",sourceDirName:"releases",slug:"/releases/1_17_1",permalink:"/docs/releases/1_17_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_17_1.md",tags:[],version:"current",sidebarPosition:9940,frontMatter:{title:"1.17.1",sidebar_position:9940},sidebar:"tutorialSidebar",previous:{title:"1.18.0",permalink:"/docs/releases/1_18_0"},next:{title:"1.16.0",permalink:"/docs/releases/1_16_0"}},o={},m=[{value:"Added",id:"added",level:3},{value:"Removed",id:"removed",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1171---2024-06-21"},"1.17.1 - 2024-06-21"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java: dataset namespace resolver feature")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2720"},(0,r.kt)("inlineCode",{parentName:"a"},"#2720"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a dataset namespace resolving mechanism that resolves dataset namespaces based on the resolvers configured. The core mechanism is implemented in openlineage-java and can be used within the Flink and Spark integrations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add transformation extraction")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2758"},(0,r.kt)("inlineCode",{parentName:"a"},"#2758"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a transformation type extraction mechanism.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add GCP run and job facets")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2643"},(0,r.kt)("inlineCode",{parentName:"a"},"#2643"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/codelixir"},"@codelixir"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds ",(0,r.kt)("inlineCode",{parentName:"em"},"GCPRunFacetBuilder")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"GCPJobFacetBuilder")," to report additional facets when running on Google Cloud Platform.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: improve namespace format for SQLServer")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2773"},(0,r.kt)("inlineCode",{parentName:"a"},"#2773"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Improves the namespace format for SQLServer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: verify jar content after build")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2698"},(0,r.kt)("inlineCode",{parentName:"a"},"#2698"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a tool to verify ",(0,r.kt)("inlineCode",{parentName:"em"},"shadowJar")," content and prevent reported issues. These are hard to prevent currently and require manual verification of manually unpacked jar content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spec: add transformation type info")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2756"},(0,r.kt)("inlineCode",{parentName:"a"},"#2756"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds information about the transformation type in ",(0,r.kt)("inlineCode",{parentName:"em"},"ColumnLineageDatasetFacet"),". ",(0,r.kt)("inlineCode",{parentName:"em"},"transformationType")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"transformationDescription")," are marked as deprecated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spec: implementing facet registry (following #2161)")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2729"},(0,r.kt)("inlineCode",{parentName:"a"},"#2729"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harels"},"@harels"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Introduces the foundations of the new facet Registry into the repo.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spec: register GCP common job facet")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2740"},(0,r.kt)("inlineCode",{parentName:"a"},"#2740"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ngorchakova"},"@ngorchakova"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Registers the GCP job facet that contains common attributes that will improve the way lineage is parsed and displayed by the GCP platform. Based on the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/pull/2228/files"},"proposal"),", GCP Lineage would like to define facets that are expected from integrations. The list of support facets is not final and will be extended further by next PR."))),(0,r.kt)("h3",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java: remove deprecated ",(0,r.kt)("inlineCode",{parentName:"strong"},"localServerId")," option from Kafka config")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2738"},(0,r.kt)("inlineCode",{parentName:"a"},"#2738"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes ",(0,r.kt)("inlineCode",{parentName:"em"},"localServerId")," from Kafka config, deprecated since 1.13.0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java: remove deprecated ",(0,r.kt)("inlineCode",{parentName:"strong"},"Transport.emit(String)"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2737"},(0,r.kt)("inlineCode",{parentName:"a"},"#2737"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes ",(0,r.kt)("inlineCode",{parentName:"em"},"Transport.emit(String)")," support, deprecated since 1.13.0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: remove ",(0,r.kt)("inlineCode",{parentName:"strong"},"spark-interfaces-scala")," module")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2781"},(0,r.kt)("inlineCode",{parentName:"a"},"#2781")),(0,r.kt)("a",{parentName:"li",href:"https://github.com/ddebowczyk92"},"@ddebowczyk92"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Replaces the existing ",(0,r.kt)("inlineCode",{parentName:"em"},"spark-interfaces-scala")," interfaces with new ones decoupled from the Scala binary version. Allows for improved integration in environments where one cannot guarantee the same version of ",(0,r.kt)("inlineCode",{parentName:"em"},"openlineage-java"),"."))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add log info when emitting lineage from Spark (following #2650)")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2769"},(0,r.kt)("inlineCode",{parentName:"a"},"#2769"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/algorithmy1"},"@algorithmy1"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Enhances logging."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: use ",(0,r.kt)("inlineCode",{parentName:"strong"},"namespace.name")," as Avro complex field type")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2763"},(0,r.kt)("inlineCode",{parentName:"a"},"#2763"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"namespace.name")," is now used as Avro ",(0,r.kt)("inlineCode",{parentName:"em"},'"type"')," of complex fields (record, enum, fixed).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java: repair empty dataset name")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2776"},(0,r.kt)("inlineCode",{parentName:"a"},"#2776"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The dataset name should not be empty.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix events emitted for ",(0,r.kt)("inlineCode",{parentName:"strong"},"drop table")," for Spark 3.4 and above")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2745"},(0,r.kt)("inlineCode",{parentName:"a"},"#2745"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/savannavalgi"},"@savannavalgi"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Includes dataset being dropped within the event, as it used to be prior to Spark 3.4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark, Flink: fix S3 dataset names")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2782"},(0,r.kt)("inlineCode",{parentName:"a"},"#2782"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Drops the leading slash from the object storage dataset name. Converts ",(0,r.kt)("inlineCode",{parentName:"em"},"s3a://")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"s3n://")," schemes to ",(0,r.kt)("inlineCode",{parentName:"em"},"s3://"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix Hive metastore namespace")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2761"},(0,r.kt)("inlineCode",{parentName:"a"},"#2761"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes the dataset namespace for cases when the Hive metastore URL is set using ",(0,r.kt)("inlineCode",{parentName:"em"},"$SPARK_CONF_DIR/hive-site.xml"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix NPE in column-level lineage")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2749"},(0,r.kt)("inlineCode",{parentName:"a"},"#2749"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The Spark agent now checks to determine if ",(0,r.kt)("inlineCode",{parentName:"em"},"cur.getDependencies()")," is not null before adding dependencies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: refactor ",(0,r.kt)("inlineCode",{parentName:"strong"},"OpenLineageRunEventBuilder"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2754"},(0,r.kt)("inlineCode",{parentName:"a"},"#2754"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a separate class containing all the input arguments to call ",(0,r.kt)("inlineCode",{parentName:"em"},"OpenLineageRunEventBuilder::buildRun"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix ",(0,r.kt)("inlineCode",{parentName:"strong"},"historyUrl")," format")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2741"},(0,r.kt)("inlineCode",{parentName:"a"},"#2741"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes the ",(0,r.kt)("inlineCode",{parentName:"em"},"historyUrl")," format in ",(0,r.kt)("inlineCode",{parentName:"em"},"spark_applicationDetails"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL: allow self-recursive aliases")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2753"},(0,r.kt)("inlineCode",{parentName:"a"},"#2753"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Expressions like `select ")," from test_orders as test_orders` are now parsed properly.*")))}d.isMDXComponent=!0}}]);