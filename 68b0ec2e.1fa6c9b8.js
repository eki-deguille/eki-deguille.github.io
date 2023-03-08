(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),s=a(7),i=(a(0),a(238)),o=["components"],r={title:"Building a datalake - Part 2 - Smart storage & computing strategies for better usability and usefulness",author:"Emilien BOUCAUD",author_title:"Data Engineering & Architecture Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/overview_datalake_part_2_v2.png",tags:["Datalake","Data Engineering","Architecture","Data Governance","Data Mesh"],draft:!1,description:"For this second part of datalake building, we\u2019ll go deeper into the journey of data, more specifically expand on storage and compute strategies.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Datalake","Data Engineering","Lakehouse","Data Architecture","Data Governance","Data Validation","Data Mesh","Azure","AWS","GCP"]},l={permalink:"/blog/2023/02/28/building_datalake_part_2",source:"@site/blog/2023-02-28-building_datalake_part_2.md",description:"For this second part of datalake building, we\u2019ll go deeper into the journey of data, more specifically expand on storage and compute strategies.",date:"2023-02-28T00:00:00.000Z",tags:[{label:"Datalake",permalink:"/blog/tags/datalake"},{label:"Data Engineering",permalink:"/blog/tags/data-engineering"},{label:"Architecture",permalink:"/blog/tags/architecture"},{label:"Data Governance",permalink:"/blog/tags/data-governance"},{label:"Data Mesh",permalink:"/blog/tags/data-mesh"}],title:"Building a datalake - Part 2 - Smart storage & computing strategies for better usability and usefulness",readingTime:8.41,truncated:!0,prevItem:{title:"Does your company level with your car in terms of Analytics?",permalink:"/blog/2023/03/07/level_car_analytics"},nextItem:{title:"Exploring the links between creative execution and marketing effectiveness - Part V: Key Paths to Success and Common Pitfalls to Avoid",permalink:"/blog/2023/02/21/creative_execution_and_marketing_effectiveness_part_V"}},c=[{value:"Article Scope",id:"article-scope",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Where designing storage &amp; compute strategies really matters",id:"where-designing-storage--compute-strategies-really-matters",children:[{value:"Going from source to raw: storage strategy",id:"going-from-source-to-raw-storage-strategy",children:[]},{value:"Going from raw input to refined output: computing strategy",id:"going-from-raw-input-to-refined-output-computing-strategy",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:c};function d(e){var t=e.components,r=Object(s.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"article-scope"},"Article Scope"),Object(i.b)("div",{align:"justify"},Object(i.b)("p",null,"In a previous article - ",Object(i.b)("a",{parentName:"p",href:"https://ekimetrics.github.io/blog/2022/02/07/building_datalake_part_1/"},"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps | Eki.Lab")," - we took a look at the foundation architecture used at Ekimetrics when building a datalake. Its focus was to present design elements to ensure your datalake is useful and usable at its core, as well as best practices to avoid falling into the so-called data swamp and empty shell traps."),Object(i.b)("p",null,"For this second part, we\u2019ll go deeper into the journey of data, more specifically expand on storage and compute strategies, and see how the organisation of data and the way it is transformed impact a datalake\u2019s usability & usefuleness.")),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("div",{align:"justify"},Object(i.b)("p",null,"The overview of data\u2019s journey through a datalake or data platform can be broken down into five steps, represented below from left to right."),Object(i.b)("p",null,Object(i.b)("img",{alt:"screenshot-app",src:a(358).default})),Object(i.b)("div",{align:"center"}," Data\u2019s journey, from source to usage"),Object(i.b)("br",null),Object(i.b)("p",null,"A data platform is highly versatile in providing technical options the five steps above. Getting your data from one step to the next means applying a strategy for how the data input is stored, how it is processed and how the output is exposed for the next step."),Object(i.b)("p",null,"These strategies will vary depending on the use case and platform, taking business as well as technical constraints in consideration. Designing your datalake\u2019s strategies to be versatile and homogeneous is essential. It allows your data platform to grow fast, in terms of data content as well as use case possibilities. It also ensures that the datalake is under control with a common way of treating data, where its only varying specifities are the entry point (data sources) and output (serving layer). "),Object(i.b)("p",null,"At Ekimetrics, we\u2019ve developed versatile strategies that are applicable to most common use cases, easily reproducible. These strategies help build new capabilities and provide a better understanding of your data platform.")),Object(i.b)("br",null),Object(i.b)("h2",{id:"where-designing-storage--compute-strategies-really-matters"},"Where designing storage & compute strategies really matters"),Object(i.b)("div",{align:"justify"},Object(i.b)("p",null,"In most datalake architectures, the data journey\u2019s step where the most impactful design decisions can be made is ",Object(i.b)("em",{parentName:"p"},"Data storage and processing"),". The other steps are more straightforward:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data sources are usually out of the architect or data engineer\u2019s control, as they often sit outside of the data platform (e.g. on a third-party server)."),Object(i.b)("li",{parentName:"ul"},"Ingestion is a step for which design questions around data validation & organization processes may be worth considering. We\u2019ve talked about these processes in the first part of our \u201cBuilding a datalake\u201d articles. As for streaming vs batch, it is only dependent on the source: if the source system is streaming data, a resource to ingest that is necessary ; otherwise, recurrent batch ingestion is the go-to."),Object(i.b)("li",{parentName:"ul"},"Serving will depend on the target use case, so even if there are important design decisions to make, they will only be impactful in the scope of their use case, not for the whole datalake."),Object(i.b)("li",{parentName:"ul"},"Usage will most of the time be outside the datalake and depend on the use case. The few design decisions that may be necessary here won\u2019t be as impactful to the datalake\u2019s usability and usefulness either.")),Object(i.b)("p",null,"Of course, this is not to say that designing relevant strategies and architecture for these steps doesn\u2019t matter: they must be tailored to the business case and technical constraints."),Object(i.b)("p",null,"On the flipside, the ",Object(i.b)("em",{parentName:"p"},"Data storage and processing")," step is the central piece in the datalake puzzle. It is where storage and compute strategies will be the most impactful. "),Object(i.b)("p",null,"What could it look like, then ? Inside this central step, data transits through four zones, from its raw form to fully processed for a particular use case, ready to serve to your businesses. These four zones are detailed below, in between ingestion and serving."),Object(i.b)("p",null,Object(i.b)("img",{alt:"screenshot-app",src:a(359).default})),Object(i.b)("div",{align:"center"}," Data storage and processing - storage zones"),Object(i.b)("br",null),Object(i.b)("p",null,"These zones can be found under various names: Landing - Bronze - Silver - Gold, or Temp - Raw - Cleaned - Conformed, etc. The intent is the same, where data becomes more and more usable and business use case oriented with each zone."),Object(i.b)("p",null,"In between each storage zone, organization and transformation processes are applied to organize and extract insights out of data. This is where our storage and computing strategies come in.")),Object(i.b)("h3",{id:"going-from-source-to-raw-storage-strategy"},"Going from source to raw: storage strategy"),Object(i.b)("div",{align:"justify"},Object(i.b)("p",null,"An ingested source will usually be exposed in one of two possible ways: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Incremental changes, where only what is new or updated is exposed."),Object(i.b)("li",{parentName:"ul"},"Full datasets, where all of the up-to-date data (or a new timeframe of data) is exposed.")),Object(i.b)("p",null,"In these two cases, the ingestion strategy we recommend results in the same outcome. Here the strategy is to historize all received data, adding metadata about its reception date (or validity date) through organization in the storage architecture or in the dataset itself. The RAW storage zone becomes a source of historical knowledge about all data points and their changes through time. Doing this, we\u2019re also able to add a \u201cslowly changing dimension\u201d / \u201cchange data capture\u201d aspect to our data, where we can easily find a data point\u2019s values at any moment in time."),Object(i.b)("p",null,Object(i.b)("img",{alt:"screenshot-app",src:a(360).default})),Object(i.b)("div",{align:"center"}," Fig. 1: Computing & storage strategies in between Landing and Raw zones"),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"There are limitations to historizing all received data, notably storage costs: this is where the data\u2019s lifecycle must be discussed. Keeping all older versions of a single dataset may start to become expensive as the data piles up, outweighing the pros if only the latest values are used."),Object(i.b)("p",{parentName:"div"},"In this case, a solution can be to keep only the latest values of the source\u2019s data points, or just one version of the source every N periods on top of the latest ones. We can then archive older and unused versions in cold, less costly storage resources. The archived data enters a different lifecycle, where it could be removed at some point in the future if it doesn\u2019t serve any business purpose."))),Object(i.b)("p",null,"The \u201chistorize everything\u201d strategy ensures RAW storage is the most useful it can be: use case agnostic, your businesses can use and explore the data at its full potential. It also helps unify the way RAW storage is meant to be read by your later processes, improving usability while allowing for costs optimization without sacrificing the underlying principle.")),Object(i.b)("h3",{id:"going-from-raw-input-to-refined-output-computing-strategy"},"Going from raw input to refined output: computing strategy"),Object(i.b)("div",{align:"justify"},Object(i.b)("p",null,"By applying this highly inclusive storage strategy for our RAW storage, we\u2019re then able to fetch the necessary data for our business cases, whether it\u2019s using the full history of a source, its latest version or the latest changes only."),Object(i.b)("p",null,"The most common computing strategy will be to generate an up-to-date view of the data: at the time of computing, what are the insights\u2019 state ? We\u2019re also able to use older data to track changes and generate insights from these."),Object(i.b)("p",null,"Refined data can then be exposed in two ways, acting as the source for another system: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Exposing the full dataset, where all data is up-to-date"),Object(i.b)("li",{parentName:"ul"},"Exposing incremental changes, where only what is new or updated is sent to the serving layer")),Object(i.b)("p",null,Object(i.b)("img",{alt:"screenshot-app",src:a(361).default})),Object(i.b)("div",{align:"center"}," Fig. 2: computing and storage strategies in between Raw, Trusted and Refined zones"),Object(i.b)("br",null),Object(i.b)("p",null,"For some use cases, you can generate \u201cfrozen in time\u201d views of the data, only updating the current timeframe\u2019s view. For instance, we could update the current month\u2019s exposed insights each day, then stop updating it at the end of the month, writing a new one for the next month\u2019s computed insights, and so on."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Historizing our transformations and results is useful for debugging and business exploration, but iterations may start to pile up, so defining a lifecycle for Trusted (TRD) and Refined (RFD) storage is important as well: do our technical processes or business use cases need all the iterations history stored in trusted TRD ? Can our business use cases work with a simplification of RFD storage, similar to the Delta historization for RAW zone in figure 1 ? "))),Object(i.b)("p",null,"You may have noticed, our exposed Refined storage looks strangely similar to what we had in the data source: we\u2019re exposing either the full up-to-date version of our insights, or just updates and new ones, just like our sources. The datalake is now a source for your business\u2019 use cases, so it makes sense that it would be able to expose data in a similar way."),Object(i.b)("p",null,"The \u201cup-to-date view\u201d strategy is highly useful for most use cases, and through smart use of historization, still allows for your businesses to get insights on the data\u2019s evolution through time. It also ensures versatility in making your datalake a usable source for other systems when exposing data."),Object(i.b)("p",null,"From there, the serving layer can leverage this source in a wide range of solutions, be it a database, reporting, CRM, AI models, etc. ")),Object(i.b)("br",null),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("div",{align:"justify"},"In essence, storage & compute strategies can be sumarized in three questions:",Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Why are these strategies necessary: to ensure versatility for businesses and technical processes, all the while improving usability."),Object(i.b)("li",{parentName:"ul"},"How do they do that: by capturing and organizing data\u2019s history efficiently, unifying the way we look at data while allowing for versatility in its usage."),Object(i.b)("li",{parentName:"ul"},"What they mean: a unified, highly useful and usable storage, and computing that help the datalake become the source for a wide range of systems and use cases.")),Object(i.b)("p",null,"As data engineers and architects, we\u2019re always looking for ways to improve our data products. In the context of building a datalake, this means finding ways to make data easy to find, explain and extract insights from. The strategies we\u2019ve talked are key answers to these challenges ; as we use them to grow data platforms and apply them to new use cases, these storage & compute strategies have proved themselves to be highly useful for other data challenges, providing new capabilities and solutions for our clients.")))}d.isMDXComponent=!0},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},g=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),g=n,h=d["".concat(o,".").concat(g)]||d[g]||p[g]||i;return a?s.a.createElement(h,r(r({ref:t},c),{},{components:a})):s.a.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img1_data_journey-b88b0c7ad94bd8652615a4bdb7ae128a.png"},359:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img2_data_storage-905c99d1d5a0c6e5421ba02084e2063e.png"},360:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img3_computing_1-cef3f81042eb0c848b50f0d4c4451404.png"},361:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img4_computing_2-dcc7a76dc859f9bae73bb079498fd3eb.png"}}]);