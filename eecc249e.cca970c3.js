(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),r=(a(0),a(179)),o=["components"],s={title:"Ekimetrics implements Data Mesh. Here is why, and why you should join us",author:"Arnaud Lievin",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/mesh_building_kennedy.jpg",tags:["Data Mesh","Architecture"],draft:!1,description:"This article describes one of the inspirational patterns that drive our projects\u2019 data architectures, the Data Mesh.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Data Mesh","GCP","Synapse","Databricks","Architecture"]},c={permalink:"/blog/2022/02/09/ekimetrics_implements_data_mesh",editUrl:"https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/blog/2022-02-09-ekimetrics_implements_data_mesh.md",source:"@site/blog/2022-02-09-ekimetrics_implements_data_mesh.md",description:"This article describes one of the inspirational patterns that drive our projects\u2019 data architectures, the Data Mesh.",date:"2022-02-09T00:00:00.000Z",tags:[{label:"Data Mesh",permalink:"/blog/tags/data-mesh"},{label:"Architecture",permalink:"/blog/tags/architecture"}],title:"Ekimetrics implements Data Mesh. Here is why, and why you should join us",readingTime:3.82,truncated:!0,prevItem:{title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",permalink:"/blog/2022/02/22/demand_forecasting_supply"},nextItem:{title:"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps",permalink:"/blog/2022/02/07/building_datalake_part_1"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"What is data mesh?",id:"what-is-data-mesh",children:[]},{value:"Who is data mesh for?",id:"who-is-data-mesh-for",children:[]},{value:"What is the relationship with GCP, Synapse or Databricks?",id:"what-is-the-relationship-with-gcp-synapse-or-databricks",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Ekimetrics\u2019 approach to data management starts from prioritized data use-cases, vision for architecture and vision for organization. Although the vision for architecture is tailored to the culture of every customer, it is inspired by the practices we see as inspiring. This article describes one of these inspirational patterns that drive our projects\u2019 data architectures, the Data Mesh."),Object(r.b)("p",null,"I must introduce Ekimetrics first, we are 320 data scientists, with people and projects in Europe, in the US and in Asia. The goal of Ekimetrics is to become the most trusted partner in data science for business. Every consultant has their preferred topics: Vertical business expertise is the most represented, which is nice because that\u2019s where we derive use-cases from, then statistics / ml / advanced algorithms, then, equally represented, product development and data architecture and engineering. With a couple of colleagues, I lead that data architecture and engineering practice."),Object(r.b)("p",null,"Data Mesh is a new framework that emerged recently, it is so deep and wide that we believe that it has the potential to influence data management for a whole decade."),Object(r.b)("p",null,"The foundational papers, by Zhamak Dehghani (",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/zhamakd"},"zhamakd"),") in 2019 are nothing short of fantastic (see articles ",Object(r.b)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh"),"  and ",Object(r.b)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-mesh-principles.html"},"Data Mesh Principles and Logical Architecture"),"). They address real-life challenges, they indicate how architectural and organizational aspects can be worked together and they really bring a new energy in data management. So, while I will cherry-pick some of the data mesh ideas that we are implementing today, I strongly encourage you to read both articles thoroughly. Said differently, what I describe below is only what is closest to our mindset and to our maturity on the projects, but there are many more insights in the original papers."),Object(r.b)("h2",{id:"what-is-data-mesh"},"What is data mesh?"),Object(r.b)("p",null,"Data Mesh is a nice way to organize and grow data assets that serve business purposes. Data Mesh takes a limited number of simple ideas for data management, and all the terms used below are described in detail in the two foundational articles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ownership of data should be within the hands of the business teams,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Data boundaries should be created along business boundaries for data security, data sharing, cost management, etc., these are called Data Domains,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sharing datasets inside and possibly outside the company should be simple,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Focusing on data products is a good approach to create value from data,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Federated governance is an approach that will scale where other cannot,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There is a harmonious way for IT, Data and Business teams to collaborate around data,"))),Object(r.b)("p",null,"We see Data Mesh as a holistic way to organize data management. And since some cloud vendors have managed services that can help organize data like that, we have been working in that direction successfully with many organizations."),Object(r.b)("h2",{id:"who-is-data-mesh-for"},"Who is data mesh for?"),Object(r.b)("p",null,"We did not identify customer profiles where data mesh would not apply, so we believe it is ubiquitous. Medium and large organizations in financial services, retail, utilities, luxury, etc., both the references we have and the references we learn about prove it applies to all kind of companies."),Object(r.b)("p",null,"Limits are on the capability to challenge existing data assets and existing data culture, and it is not always the right moment to change these. That said, it should be possible to gradually transition from a monolithic data lake to a data mesh, by slowly introducing data domains."),Object(r.b)("p",null,"And a consultancy firm like Ekimetrics is the right place to be to participate in these changes !"),Object(r.b)("h2",{id:"what-is-the-relationship-with-gcp-synapse-or-databricks"},"What is the relationship with GCP, Synapse or Databricks?"),Object(r.b)("p",null,"We see the latest generation of platforms is indeed very aligned with what data mesh requires, and GCP BigQuery, Azure Synapse and Databricks are good candidates for Data Mesh deployments."),Object(r.b)("p",null,"With GCP as an example, it is easy to separate the cost of the storage in one project and the cost of the processing in another project and it\u2019s easy to leverage the data that one part of the company has prepared into a data product that is owned by another part of the company, without copying data, which is a data mesh idea. While this has been in BigQuery for a decade now, the framework now has a name!"),Object(r.b)("p",null,"Such solutions can now be built with GCP, Synapse and Databricks."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"If you are interested in building Data Mesh with us, please visit our ",Object(r.b)("a",{parentName:"p",href:"https://ekimetrics.com/careers/"},"website (careers page)")," or our ",Object(r.b)("a",{parentName:"p",href:"https://www.welcometothejungle.com/fr/companies/ekimetrics"},"page on Welcome to the Jungle"),"."))}d.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),h=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=h(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(a),u=i,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);