"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),b=o,d=f["".concat(i,".").concat(b)]||f[b]||u[b]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},c="SQL Job Facet",s={unversionedId:"spec/facets/job-facets/sql",id:"spec/facets/job-facets/sql",title:"SQL Job Facet",description:"The SQL Job Facet contains a SQL query that was used in a particular job.",source:"@site/docs/spec/facets/job-facets/sql.md",sourceDirName:"spec/facets/job-facets",slug:"/spec/facets/job-facets/sql",permalink:"/docs/spec/facets/job-facets/sql",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/job-facets/sql.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Source Code Location Facet",permalink:"/docs/spec/facets/job-facets/source-code-location"},next:{title:"Job type Job Facet",permalink:"/docs/spec/facets/job-facets/job-type"}},i={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-job-facet"},"SQL Job Facet"),(0,o.kt)("p",null,"The SQL Job Facet contains a SQL query that was used in a particular job.  "),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "job": {\n        "facets": {\n            "sql": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/SQLJobFacet.json",\n                "query": "select id, name from schema.table where id = 1"\n            }\n        }\n    }\n    ...\n}\n')),(0,o.kt)("p",null,"The facet specification can be found ",(0,o.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/SQLJobFacet.json"},"here")))}u.isMDXComponent=!0}}]);