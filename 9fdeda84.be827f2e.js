(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(179)),o=["components"],s={title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",author:"Alexis Cruveiller",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/supply_warehouse.png",tags:["Demand Forecasting","Supply Chain","LightGBM","Streamlit"],draft:!1,description:"Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Supply Chain","Streamlit","Demand Forecasting","LightGBM","Data Science for business"]},l={permalink:"/blog/2022/02/22/demand_forecasting_supply",editUrl:"https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/blog/2022-02-22-demand_forecasting_supply.md",source:"@site/blog/2022-02-22-demand_forecasting_supply.md",description:"Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products",date:"2022-02-22T00:00:00.000Z",tags:[{label:"Demand Forecasting",permalink:"/blog/tags/demand-forecasting"},{label:"Supply Chain",permalink:"/blog/tags/supply-chain"},{label:"LightGBM",permalink:"/blog/tags/light-gbm"},{label:"Streamlit",permalink:"/blog/tags/streamlit"}],title:"Demand Forecasting - Improving Supply Chain operations in uncertain times",readingTime:7.485,truncated:!0,prevItem:{title:"Newsletter for February 2022",permalink:"/blog/2022/02/28/newsletter_Feb-2022"},nextItem:{title:"Ekimetrics implements Data Mesh. Here is why, and why you should join us",permalink:"/blog/2022/02/09/ekimetrics_implements_data_mesh"}},c=[{value:"An important asset for Supply Chain transformation",id:"an-important-asset-for-supply-chain-transformation",children:[]},{value:"How to build Demand Forecasting tool",id:"how-to-build-demand-forecasting-tool",children:[{value:"What are we trying to solve?",id:"what-are-we-trying-to-solve",children:[]},{value:"Build and assess model",id:"build-and-assess-model",children:[]},{value:"Evaluate business outcome",id:"evaluate-business-outcome",children:[]}]},{value:"Create a sustainable solution",id:"create-a-sustainable-solution",children:[{value:"Implement a web app",id:"implement-a-web-app",children:[]},{value:"Add a feedback loop",id:"add-a-feedback-loop",children:[]}]},{value:"Concluding and food for thought",id:"concluding-and-food-for-thought",children:[]}],u={toc:c};function d(e){var t=e.components,s=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Demand forecasting has become a trendy topic since the COVID pandemic. It has challenged companies' Supply Chain operations and highlighted that most companies could improve their supply chain management. Therefore, generating demand for enhanced forecasting capabilities."),Object(r.b)("p",null,"In 2021, we had the opportunity to work with a French pioneer in manufacturing on this topic. We had to industrialize a solution for warehouse demand forecasting for more than 20,000 referenced products to improve overall Supply Chain performance. At the time, the existing solution was deprecated and not handling correctly erratic sales. "),Object(r.b)("p",null,"Therefore, we had to create a new, more robust algorithm to help Operational Managers better allocate resources. This latter solution enabled a 60% accuracy improvement and was integrated into Operational Managers processes for decision making."),Object(r.b)("h2",{id:"an-important-asset-for-supply-chain-transformation"},"An important asset for Supply Chain transformation"),Object(r.b)("p",null,"Demand forecasting has an impact on different levers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Stock Management"),": forecasting can drastically improve Inventory Management. Underproducing means losing revenue opportunities, whilst overproducing means selling your products cheaper or facing additional storage costs. Furthermore, with the return of activity after the first lockdown, suppliers are now bearing the brunt of building sites recovery, causing delays and creating supply instability.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Resource allocation"),": defining the best number of weekly working hours is not an easy task for operational managers, and anticipation is key to achieving optimal throughput.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Product strategy"),": demand forecasting also supports better handling of specific trends and product lifecycle. Hence, it helps warehouses anticipate and meet high demands, detect declined products and help marketing teams better understand customers\u2019 needs."))),Object(r.b)("p",null,"Most importantly, Demand Forecasting has not become a hot topic because of the pandemic. Nevertheless, it brought to light the need of transforming Supply Chains and adapt to unexpected events. Indeed, global warming is increasing the frequency of natural disasters, which will test Supply Chains resilience (",Object(r.b)("em",{parentName:"p"},"have you heard of our AI4S offer?"),")."),Object(r.b)("h2",{id:"how-to-build-demand-forecasting-tool"},"How to build Demand Forecasting tool"),Object(r.b)("h3",{id:"what-are-we-trying-to-solve"},"What are we trying to solve?"),Object(r.b)("p",null,"Framing the problem is key to ensuring Data Scientists go in the right direction. When discussing with Supply Chain managers, we understood they wanted to reduce their costs. Thus, improving resource allocation was the best lever to achieve their need. Clearly stating the business need allowed us to understand the problem and impacted the solution implementation."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Business Problem",src:a(299).default})),Object(r.b)("h3",{id:"build-and-assess-model"},"Build and assess model"),Object(r.b)("p",null,"Because of the high number of products and their associated nomenclature, we used a decision tree algorithm (LightGBM). The business required a reliable mid-term forecasting tool within a short time lap and with limited team size, justifying the choice of a well-known and high-performance algorithm. Our solution is a 3-week forecasting tool with daily updates for all referenced products."),Object(r.b)("p",null,"The ML pipeline we have built for this project is similar to many existing ones. Therefore, we will focus on how the business problem framed our solution. Still, this project was an opportunity for us to use ",Object(r.b)("a",{parentName:"p",href:"https://kedro.readthedocs.io/en/stable/index.html"},"Kedro"),", which enabled Data Science teams to set up their ML data pipelines. Kedro had the advantage of visualizing your pipeline and structuring our code to ensure maintainability and reproducibility."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Kedro Pipeline",src:a(300).default})),Object(r.b)("h4",{id:"modelling-target"},"Modelling target"),Object(r.b)("p",null,"We want to optimize warehouse working hours to ensure clients satisfaction by delivering stores on time."),Object(r.b)("p",null,"What requires the most operational effort? Our client uses single order picking methods - meaning that pickers work on one order at a time. Thus, it is more time-consuming for a picker to prepare two orders of the same product rather than picking two times the product for the same order. Consequently, we focused on predicting the number of orders rather than the quantity ordered."),Object(r.b)("p",null,"NB: depending on how your supply chain operates, the modelling output would differ."),Object(r.b)("h4",{id:"modelling-granularity"},"Modelling granularity"),Object(r.b)("p",null,"Our client had a complex product hierarchy, meaning products can be aggregated at different levels. Demand forecasting at a product level gives higher flexibility when used on various business use cases, albeit not being the optimal solution for each one. Therefore, we aggregated ordered products at a higher granularity, to find the best balance between modelling accuracy and business need."),Object(r.b)("p",null,"Working at a product level when having more than 20,000 products can be painful:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"it means working with sparse time series (which isn\u2019t trivial when using decision trees)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"manufacturing companies often deal with products turnover (because products are frequently improved), meaning you may lose the thread of which product is getting improved."))),Object(r.b)("p",null,"Therefore, to optimize resource allocation, it was relevant to build a forecasting tool at a product category level, to combine similar products and avoid dealing with product\u2019s turnover. Analyzing sparsity at different granularities also helped us define the best modelling level."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Histogram",src:a(301).default})),Object(r.b)("div",{align:"center"}," Distribution of products' sparsity (e.g. percentage of zeroes in orders). It is clear that most products have more than 90% of zeroes."),Object(r.b)("br",null),Object(r.b)("p",null,"Important learnings here were:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Sparse time series are hard to predict"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"It is best to go for a solution where the unit (time x product x localization) of forecasting matches the unit of decision making"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Predictions",src:a(302).default})),Object(r.b)("div",{align:"center"}," We see how the coronavirus outbreak impacted the activity of our client during the first containment. Predicting this period is pretentious, but how can it help us reduce uncertainty in the future?"),Object(r.b)("br",null),Object(r.b)("h4",{id:"modelling-loss-function"},"Modelling loss function"),Object(r.b)("p",null,"Modelling errors assess algorithms performance and help choose the model we will industrialize to better impact operations. However, when deploying a solution, we want to measure an error that reflects the current problem. Demand forecasting is not exclusively about being accurate on future demands but also about improving operations. Therefore, customizing errors metrics is a key part of machine learning development, allowing us to define the right balance between product demand (model accuracy) and product average preparation time. (focus on products with high preparation time)."),Object(r.b)("p",null,"We implemented the Weighted Root Mean Squared Scaled Error, using product average revenues in the last 6 months and product average preparation time."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Prep Time",src:a(303).default})),Object(r.b)("div",{align:"center"}," Product B weekly preparation time is 400 min vs 200 min for Product A. Thus, higher accuracy on Product B is needed to reflect the operational needs."),Object(r.b)("br",null),Object(r.b)("h3",{id:"evaluate-business-outcome"},"Evaluate business outcome"),Object(r.b)("p",null,"Because predictions are not always (never) linked to business outcomes, it is important to differentiate outputs (what are the predictions?) from outcomes (how will it impact the business?). This part was not implemented during the project, but we will briefly explain the methodology to give you a flavour on how it could be done."),Object(r.b)("p",null,"Model accuracy is a technical metric, so to quantify our ML model impact on operations we also need to estimate the predicted number of working hours. Comparing the number of predicted working hours with the realized working hours would allow measuring how much the algorithm is reducing costs."),Object(r.b)("h2",{id:"create-a-sustainable-solution"},"Create a sustainable solution"),Object(r.b)("h3",{id:"implement-a-web-app"},"Implement a web app"),Object(r.b)("p",null,"A core part of our solution was to implement an easy-to-use application for operations managers. It helped them access predictions in real-time, assess model past performance and define the optimal working hours needed. We used Streamlit for its ease of use and ability to create fast and intuitive applications whenever we are short on time. Consequently, we created a usable solution by communicating predictions, demand, and past errors at different granularities."),Object(r.b)("h3",{id:"add-a-feedback-loop"},"Add a feedback loop"),Object(r.b)("p",null,"Finally, we created a feedback loop to enable the team to maintain, improve and sustain the solution. This concept is well explained in ",Object(r.b)("em",{parentName:"p"},"Prediction Machines: The Simple Economics of Artificial Intelligence"),", a book about what AI means from an economist perspective. They introduce a great concept they have named the Anatomy of a Task."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Anatomy of a Task",src:a(304).default})),Object(r.b)("p",null,"Predictions mainly impact people\u2019s judgement and decisions taken for action. It implies that algorithms are rather helpful for decision-makers than make the actual choice. In our situation, the predictions enable operational managers to take action on the number of pickers needed in the coming weeks. Improving modelling should help these managers be more accurate in their decision process. Giving Data Science teams feedback on how modelling affected outcomes is the added value."),Object(r.b)("p",null,"Consequently, we decided to create a clear feedback process with the operational managers. We made sure we could improve our forecasting model in a business manner rather than a statistical one. Our model not being perfect, the operational team\u2019s feedback on how our predictions are impacting their daily work will help us improve our algorithms and create a sustainable solution."),Object(r.b)("h2",{id:"concluding-and-food-for-thought"},"Concluding and food for thought"),Object(r.b)("p",null,"New challenges will arise, and data will help supply chains tackle them. Creating a data-driven culture is key to useful and sustainable solutions. Creating state-of-the-art models is great, but a successful data science transformation is about creating impactful projects and delivering value throughout."),Object(r.b)("p",null,"Thanks to this project, we learnt that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Demand Forecasting is a great entry to improve Supply Chain operations, but the impact will be limited if not embedded in the full Supply Chain environment.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Demand forecasting is not about predicting the future, but about how data helps improve communication between teams."))))}d.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?i.a.createElement(h,s(s({ref:t},c),{},{components:a})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},299:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img1_v2-fa995a6196770755daac31f688954430.png"},300:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/kedro_2-dd195cb1648e4b21ef03025f838dec25.png"},301:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img3-4c20db5d27cd65a1dfd1a1d6e72e841a.png"},302:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img4-e049c7e24e00a60d493aa7890847c7c2.png"},303:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/table_2_v2-a76fe9d47f686003856484e216f304d2.png"},304:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/img5_v3-2cba57b6da74cb303124b1246f9d2b62.png"}}]);