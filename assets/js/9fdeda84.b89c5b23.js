"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[2310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",author:"Alexis Cruveiller",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/supply_warehouse.png",draft:!1,description:"Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Supply Chain","Streamlit","Demand Forecasting","LightGBM","Data Science for business"]},r=void 0,s={permalink:"/blog/2022/02/22/demand_forecasting_supply",source:"@site/blog/2022-02-22-demand_forecasting_supply.md",title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",description:"Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[],readingTime:7.485,hasTruncateMarker:!0,authors:[{name:"Alexis Cruveiller",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",author:"Alexis Cruveiller",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/supply_warehouse.png",draft:!1,description:"Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Supply Chain","Streamlit","Demand Forecasting","LightGBM","Data Science for business"]},prevItem:{title:"Newsletter for February 2022",permalink:"/blog/2022/02/28/newsletter_Feb-2022"},nextItem:{title:"Ekimetrics implements Data Mesh. Here is why, and why you should join us",permalink:"/blog/2022/02/09/ekimetrics_implements_data_mesh"}},l={authorsImageUrls:[void 0]},u=[{value:"An important asset for Supply Chain transformation",id:"an-important-asset-for-supply-chain-transformation",level:2},{value:"How to build Demand Forecasting tool",id:"how-to-build-demand-forecasting-tool",level:2},{value:"What are we trying to solve?",id:"what-are-we-trying-to-solve",level:3},{value:"Build and assess model",id:"build-and-assess-model",level:3},{value:"Modelling target",id:"modelling-target",level:4},{value:"Modelling granularity",id:"modelling-granularity",level:4},{value:"Modelling loss function",id:"modelling-loss-function",level:4},{value:"Evaluate business outcome",id:"evaluate-business-outcome",level:3},{value:"Create a sustainable solution",id:"create-a-sustainable-solution",level:2},{value:"Implement a web app",id:"implement-a-web-app",level:3},{value:"Add a feedback loop",id:"add-a-feedback-loop",level:3},{value:"Concluding and food for thought",id:"concluding-and-food-for-thought",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Demand forecasting has become a trendy topic since the COVID pandemic. It has challenged companies' Supply Chain operations and highlighted that most companies could improve their supply chain management. Therefore, generating demand for enhanced forecasting capabilities."),(0,i.kt)("p",null,"In 2021, we had the opportunity to work with a French pioneer in manufacturing on this topic. We had to industrialize a solution for warehouse demand forecasting for more than 20,000 referenced products to improve overall Supply Chain performance. At the time, the existing solution was deprecated and not handling correctly erratic sales. "),(0,i.kt)("p",null,"Therefore, we had to create a new, more robust algorithm to help Operational Managers better allocate resources. This latter solution enabled a 60% accuracy improvement and was integrated into Operational Managers processes for decision making."),(0,i.kt)("h2",{id:"an-important-asset-for-supply-chain-transformation"},"An important asset for Supply Chain transformation"),(0,i.kt)("p",null,"Demand forecasting has an impact on different levers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Stock Management"),": forecasting can drastically improve Inventory Management. Underproducing means losing revenue opportunities, whilst overproducing means selling your products cheaper or facing additional storage costs. Furthermore, with the return of activity after the first lockdown, suppliers are now bearing the brunt of building sites recovery, causing delays and creating supply instability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Resource allocation"),": defining the best number of weekly working hours is not an easy task for operational managers, and anticipation is key to achieving optimal throughput.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Product strategy"),": demand forecasting also supports better handling of specific trends and product lifecycle. Hence, it helps warehouses anticipate and meet high demands, detect declined products and help marketing teams better understand customers\u2019 needs."))),(0,i.kt)("p",null,"Most importantly, Demand Forecasting has not become a hot topic because of the pandemic. Nevertheless, it brought to light the need of transforming Supply Chains and adapt to unexpected events. Indeed, global warming is increasing the frequency of natural disasters, which will test Supply Chains resilience (",(0,i.kt)("em",{parentName:"p"},"have you heard of our AI4S offer?"),")."),(0,i.kt)("h2",{id:"how-to-build-demand-forecasting-tool"},"How to build Demand Forecasting tool"),(0,i.kt)("h3",{id:"what-are-we-trying-to-solve"},"What are we trying to solve?"),(0,i.kt)("p",null,"Framing the problem is key to ensuring Data Scientists go in the right direction. When discussing with Supply Chain managers, we understood they wanted to reduce their costs. Thus, improving resource allocation was the best lever to achieve their need. Clearly stating the business need allowed us to understand the problem and impacted the solution implementation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Business Problem",src:a(5478).Z,width:"1449",height:"616"})),(0,i.kt)("h3",{id:"build-and-assess-model"},"Build and assess model"),(0,i.kt)("p",null,"Because of the high number of products and their associated nomenclature, we used a decision tree algorithm (LightGBM). The business required a reliable mid-term forecasting tool within a short time lap and with limited team size, justifying the choice of a well-known and high-performance algorithm. Our solution is a 3-week forecasting tool with daily updates for all referenced products."),(0,i.kt)("p",null,"The ML pipeline we have built for this project is similar to many existing ones. Therefore, we will focus on how the business problem framed our solution. Still, this project was an opportunity for us to use ",(0,i.kt)("a",{parentName:"p",href:"https://kedro.readthedocs.io/en/stable/index.html"},"Kedro"),", which enabled Data Science teams to set up their ML data pipelines. Kedro had the advantage of visualizing your pipeline and structuring our code to ensure maintainability and reproducibility."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Kedro Pipeline",src:a(6720).Z,width:"1843",height:"851"})),(0,i.kt)("h4",{id:"modelling-target"},"Modelling target"),(0,i.kt)("p",null,"We want to optimize warehouse working hours to ensure clients satisfaction by delivering stores on time."),(0,i.kt)("p",null,"What requires the most operational effort? Our client uses single order picking methods - meaning that pickers work on one order at a time. Thus, it is more time-consuming for a picker to prepare two orders of the same product rather than picking two times the product for the same order. Consequently, we focused on predicting the number of orders rather than the quantity ordered."),(0,i.kt)("p",null,"NB: depending on how your supply chain operates, the modelling output would differ."),(0,i.kt)("h4",{id:"modelling-granularity"},"Modelling granularity"),(0,i.kt)("p",null,"Our client had a complex product hierarchy, meaning products can be aggregated at different levels. Demand forecasting at a product level gives higher flexibility when used on various business use cases, albeit not being the optimal solution for each one. Therefore, we aggregated ordered products at a higher granularity, to find the best balance between modelling accuracy and business need."),(0,i.kt)("p",null,"Working at a product level when having more than 20,000 products can be painful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"it means working with sparse time series (which isn\u2019t trivial when using decision trees)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"manufacturing companies often deal with products turnover (because products are frequently improved), meaning you may lose the thread of which product is getting improved."))),(0,i.kt)("p",null,"Therefore, to optimize resource allocation, it was relevant to build a forecasting tool at a product category level, to combine similar products and avoid dealing with product\u2019s turnover. Analyzing sparsity at different granularities also helped us define the best modelling level."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Histogram",src:a(5807).Z,width:"985",height:"280"})),(0,i.kt)("div",{align:"center"}," Distribution of products' sparsity (e.g. percentage of zeroes in orders). It is clear that most products have more than 90% of zeroes."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Important learnings here were:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sparse time series are hard to predict"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"It is best to go for a solution where the unit (time x product x localization) of forecasting matches the unit of decision making"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Predictions",src:a(6162).Z,width:"1190",height:"295"})),(0,i.kt)("div",{align:"center"}," We see how the coronavirus outbreak impacted the activity of our client during the first containment. Predicting this period is pretentious, but how can it help us reduce uncertainty in the future?"),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"modelling-loss-function"},"Modelling loss function"),(0,i.kt)("p",null,"Modelling errors assess algorithms performance and help choose the model we will industrialize to better impact operations. However, when deploying a solution, we want to measure an error that reflects the current problem. Demand forecasting is not exclusively about being accurate on future demands but also about improving operations. Therefore, customizing errors metrics is a key part of machine learning development, allowing us to define the right balance between product demand (model accuracy) and product average preparation time. (focus on products with high preparation time)."),(0,i.kt)("p",null,"We implemented the Weighted Root Mean Squared Scaled Error, using product average revenues in the last 6 months and product average preparation time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prep Time",src:a(3899).Z,width:"2759",height:"974"})),(0,i.kt)("div",{align:"center"}," Product B weekly preparation time is 400 min vs 200 min for Product A. Thus, higher accuracy on Product B is needed to reflect the operational needs."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"evaluate-business-outcome"},"Evaluate business outcome"),(0,i.kt)("p",null,"Because predictions are not always (never) linked to business outcomes, it is important to differentiate outputs (what are the predictions?) from outcomes (how will it impact the business?). This part was not implemented during the project, but we will briefly explain the methodology to give you a flavour on how it could be done."),(0,i.kt)("p",null,"Model accuracy is a technical metric, so to quantify our ML model impact on operations we also need to estimate the predicted number of working hours. Comparing the number of predicted working hours with the realized working hours would allow measuring how much the algorithm is reducing costs."),(0,i.kt)("h2",{id:"create-a-sustainable-solution"},"Create a sustainable solution"),(0,i.kt)("h3",{id:"implement-a-web-app"},"Implement a web app"),(0,i.kt)("p",null,"A core part of our solution was to implement an easy-to-use application for operations managers. It helped them access predictions in real-time, assess model past performance and define the optimal working hours needed. We used Streamlit for its ease of use and ability to create fast and intuitive applications whenever we are short on time. Consequently, we created a usable solution by communicating predictions, demand, and past errors at different granularities."),(0,i.kt)("h3",{id:"add-a-feedback-loop"},"Add a feedback loop"),(0,i.kt)("p",null,"Finally, we created a feedback loop to enable the team to maintain, improve and sustain the solution. This concept is well explained in ",(0,i.kt)("em",{parentName:"p"},"Prediction Machines: The Simple Economics of Artificial Intelligence"),", a book about what AI means from an economist perspective. They introduce a great concept they have named the Anatomy of a Task."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Anatomy of a Task",src:a(9341).Z,width:"1175",height:"757"})),(0,i.kt)("p",null,"Predictions mainly impact people\u2019s judgement and decisions taken for action. It implies that algorithms are rather helpful for decision-makers than make the actual choice. In our situation, the predictions enable operational managers to take action on the number of pickers needed in the coming weeks. Improving modelling should help these managers be more accurate in their decision process. Giving Data Science teams feedback on how modelling affected outcomes is the added value."),(0,i.kt)("p",null,"Consequently, we decided to create a clear feedback process with the operational managers. We made sure we could improve our forecasting model in a business manner rather than a statistical one. Our model not being perfect, the operational team\u2019s feedback on how our predictions are impacting their daily work will help us improve our algorithms and create a sustainable solution."),(0,i.kt)("h2",{id:"concluding-and-food-for-thought"},"Concluding and food for thought"),(0,i.kt)("p",null,"New challenges will arise, and data will help supply chains tackle them. Creating a data-driven culture is key to useful and sustainable solutions. Creating state-of-the-art models is great, but a successful data science transformation is about creating impactful projects and delivering value throughout."),(0,i.kt)("p",null,"Thanks to this project, we learnt that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Demand Forecasting is a great entry to improve Supply Chain operations, but the impact will be limited if not embedded in the full Supply Chain environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Demand forecasting is not about predicting the future, but about how data helps improve communication between teams."))))}p.isMDXComponent=!0},5478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img1_v2-fa995a6196770755daac31f688954430.png"},5807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img3-4c20db5d27cd65a1dfd1a1d6e72e841a.png"},6162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img4-e049c7e24e00a60d493aa7890847c7c2.png"},9341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img5_v3-2cba57b6da74cb303124b1246f9d2b62.png"},6720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kedro_2-dd195cb1648e4b21ef03025f838dec25.png"},3899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/table_2_v2-a76fe9d47f686003856484e216f304d2.png"}}]);