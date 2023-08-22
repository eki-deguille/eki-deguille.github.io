"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[4058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"Does your company level with your car in terms of Analytics?",author:"Arnaud LIEVIN",author_title:"Data Engineering & Architecture Practice Leader",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/level_car_analytics.jpg",tags:["Thought Leadership","Data Processing","Real-Time","Analytics"],draft:!1,description:"See what ABS and ESP do in a car and what it corresponds to in a company. This article advocates real-time analytics for ML insights.\xa0",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Datalake","Data Engineering","Lakehouse","Data Architecture","Data Governance","Data Validation","Data Mesh","Azure","AWS","GCP"]},o=void 0,s={permalink:"/blog/2023/03/07/level_car_analytics",source:"@site/blog/2023-03-07-level_car_analytics.md",title:"Does your company level with your car in terms of Analytics?",description:"See what ABS and ESP do in a car and what it corresponds to in a company. This article advocates real-time analytics for ML insights.\xa0",date:"2023-03-07T00:00:00.000Z",formattedDate:"March 7, 2023",tags:[{label:"Thought Leadership",permalink:"/blog/tags/thought-leadership"},{label:"Data Processing",permalink:"/blog/tags/data-processing"},{label:"Real-Time",permalink:"/blog/tags/real-time"},{label:"Analytics",permalink:"/blog/tags/analytics"}],readingTime:9.675,hasTruncateMarker:!0,authors:[{name:"Arnaud LIEVIN",title:"Data Engineering & Architecture Practice Leader",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Does your company level with your car in terms of Analytics?",author:"Arnaud LIEVIN",author_title:"Data Engineering & Architecture Practice Leader",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/level_car_analytics.jpg",tags:["Thought Leadership","Data Processing","Real-Time","Analytics"],draft:!1,description:"See what ABS and ESP do in a car and what it corresponds to in a company. This article advocates real-time analytics for ML insights.\xa0",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Datalake","Data Engineering","Lakehouse","Data Architecture","Data Governance","Data Validation","Data Mesh","Azure","AWS","GCP"]},prevItem:{title:"ClimateQ&A",permalink:"/blog/ClimateQ&A"},nextItem:{title:"Building a datalake - Part 2 - Smart storage & computing strategies for better usability and usefulness",permalink:"/blog/2023/02/28/building_datalake_part_2"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Car-wise, let\u2019s start in the 1950s",id:"car-wise-lets-start-in-the-1950s",level:2},{value:"How does driving a 2CV transpose to driving a company?",id:"how-does-driving-a-2cv-transpose-to-driving-a-company",level:3},{value:"Born in the 80s and mandatory in EU in 2003, the ABS",id:"born-in-the-80s-and-mandatory-in-eu-in-2003-the-abs",level:2},{value:"What is real-time analytical processing of operational data in a business?",id:"what-is-real-time-analytical-processing-of-operational-data-in-a-business",level:3},{value:"In 2014, the ESP becomes mandatory in all European cars",id:"in-2014-the-esp-becomes-mandatory-in-all-european-cars",level:2},{value:"What does an ESP looks like in a company?",id:"what-does-an-esp-looks-like-in-a-company",level:3},{value:"Mandatory in 2022, AEB is the current state-of-the-art",id:"mandatory-in-2022-aeb-is-the-current-state-of-the-art",level:2},{value:"Do you have AEB-like system in your company?",id:"do-you-have-aeb-like-system-in-your-company",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"screenshot-app ",src:a(37790).Z,width:"2992",height:"2000"}))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"Data Engineers at Ekimetrics use Spark to execute data ingestion and data preparation tasks, and Spark can process incoming data in batches as well as data in real-time streams. We also work on GCP and Cloud Dataflow, where Apache Beam provides the same flexibility to process streams as well as batches."),(0,i.kt)("p",null,"But IT teams ans Business teams are so used to batch analytics that it is hard to convey the value of real-time or up-to-date analytics, even though we now have platforms to handle the sources that can stream data. And with the emergence of micro-services, we also have more and more of these sources."),(0,i.kt)("p",null,"Based on current market evolutions and on our previsions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Companies should create real-time views")," of customers, products, suppliers and production plans on an easy-to-grow platform with the adequate governance,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Companies should assemble a real-time analytical view of their whole business")," to be able to steer it appropriately,")),(0,i.kt)("p",null,"Because this article is about real-time analytics, it starts with the definition of these terms. We use the example of driving a car as parallel for running a company. We all drive cars, we all see cars change, for example from \u201cmanual gearbox\u201d to \u201cautomatic gearbox\u201d to \u201cno more gearbox\u201d, and we all have a lot of knowledge about cars. Car technology will be used in this article to illustrate the following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the minimal data available to drive a car and what is the benefit of additional data ?"),(0,i.kt)("li",{parentName:"ul"},"How to transpose for example the ABS of a car into a platform to help drive a company ?")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Below are the steps in this article, as they will be presented and explained: "),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"screenshot-app ",src:a(70621).Z,width:"605",height:"725"}))),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"Let\u2019s first introduce definitions of the two topics of this article (independent of the car illustration):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Analytics"),", as separated from ",(0,i.kt)("strong",{parentName:"p"},"Operational"),", is related to ",(0,i.kt)("strong",{parentName:"p"},"data"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Operational data")," is internal data from the business operations,")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Analytical data")," is operational data that is aligned, consolidated, reprocessed and possibly augmented with external data."),(0,i.kt)("br",null))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Real-time"),", as separated from ",(0,i.kt)("strong",{parentName:"p"},"Batch"),", is related to ",(0,i.kt)("strong",{parentName:"p"},"processing"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Batch processing")," is about processing data on a schedule, between every few hours and every month. Users gets an image that is always a bit old, but for many businesses and operations this is seen as acceptable,")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Real-time processing")," is about reflecting the current status of the operations. The latency depends of the source rather than the processing, it is between a few seconds and a few hours depending on the capability of the source system."))),(0,i.kt)("p",null,"When analyzing a business process, it is always a very interesting exercise to diagnose if a certain metric is operational or analytic. And if the data is analytic, the next question is to wonder if the business could benefit from having that metric in real-time.")),(0,i.kt)("h2",{id:"car-wise-lets-start-in-the-1950s"},"Car-wise, let\u2019s start in the 1950s"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"I work in Paris, and tourists love to tour the city in Citro\xebn 2CV, a French car that was produced between the 50s and the 80s, like the picture below from one of the numerous companies renting these cars."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(89527).Z,width:"2492",height:"649"})),(0,i.kt)("p",null,"No electronics in there, this is pure mechanics and a few electrical wires, an ideal starting point for our journey !"),(0,i.kt)("p",null,"What data do you have to drive a Citro\xebn 2CV? Speed, battery level, gas levels, total mileage, that\u2019s it.\nAnd the engine is so noisy that there is no need for an engine RPM meter !"),(0,i.kt)("p",null,"According to the definitions above, the data is the direct readings of the mechanical operations of the car, for example from the speed of the wheels, so this is operational data."),(0,i.kt)("p",null,"No further processing here, so no analytical data at all."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Finally, let\u2019s introduce this diagram of the car with no Analytics at all:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(55584).Z,width:"945",height:"158"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"how-does-driving-a-2cv-transpose-to-driving-a-company"},"How does driving a 2CV transpose to driving a company?"),(0,i.kt)("p",null,"When we transpose to driving a company, operational data is the data that resides in the operational systems, such a CRMs and ERPs. It contains all the referential and transactional information necessary to run the company, from HR to Sales to Finance. All reports and dashboards that are directly embedded in these applications or close to them are also considered operational data."),(0,i.kt)("p",null,"Since there is enough information to run the business, we can jump to our first conclusion:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(51604).Z,width:"1322",height:"223"})),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"born-in-the-80s-and-mandatory-in-eu-in-2003-the-abs"},"Born in the 80s and mandatory in EU in 2003, the ABS"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"The ABS, or Anti-lock Braking System, measures the speed of each wheel and reduces the pressure on the brakes to avoid the wheel locking up when losing grip."),(0,i.kt)("p",null,"To brake efficiently, it applies \u201cthreshold braking\u201d and \u201ccadence braking\u201d that are techniques of the most skillful drivers, taken here at a much faster rate than what these drivers can perform."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(27026).Z,width:"1323",height:"266"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"what-is-real-time-analytical-processing-of-operational-data-in-a-business"},"What is real-time analytical processing of operational data in a business?"),(0,i.kt)("p",null,"If we change the wheels of the cars by the BUs of a company, we get to a functional diagrams like the one below, where each BU includes efficient controls applied in real-time on the data from the operations:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(54926).Z,width:"1323",height:"238"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Data Science is applied locally on the operational data, for purposes like segmentation, scoring, pricing and other applications of Machine Learning. The purpose here is to get value from investments in each BU, ",(0,i.kt)("strong",{parentName:"p"},"but there are no insights to make the whole bigger than the sum of its parts.")," It is like in the example of the ABS, we want to replicate the techniques of the best players, locally in each domain."),(0,i.kt)("p",null,"It is important to note that local AI initiatives do not require a dedicated platform for analytical data and that improving the operations locally can be achieved in the operational applications. For example, SAP and Salesforce include more and more predictive features. And since these platform work on up-to-date information, ",(0,i.kt)("strong",{parentName:"p"},"embedding Machine Learning in operational systems is the closest to what ABS is in a car."))),(0,i.kt)("h2",{id:"in-2014-the-esp-becomes-mandatory-in-all-european-cars"},"In 2014, the ESP becomes mandatory in all European cars"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"The ESP (Electronic Stability Program) is an anti-skid system. It leverages four wheel-speed sensors, the steering angle sensor and an inertial measurement unit to act on the break pressure of each wheel and engine acceleration command. Depending on the situation, it can reduce the speed of the engine and brake all wheels or activate the brake on only one wheel only to alter the heading of the car."),(0,i.kt)("p",null,"The diagram changes, since all insights are now consolidated before they are processed:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(44740).Z,width:"1323",height:"278"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"what-does-an-esp-looks-like-in-a-company"},"What does an ESP looks like in a company?"),(0,i.kt)("p",null,"In your company, we are leaving the territory of ERPs, because even SAP does not cover all aspects that must be monitored and given sense together.",(0,i.kt)("br",{parentName:"p"}),"\n","In addition, ERPs have many limitations regarding Advanced Analytics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ERPs are complex to query and it may impact production,"),(0,i.kt)("li",{parentName:"ul"},"ERPs don\u2019t need and don\u2019t keep history,"),(0,i.kt)("li",{parentName:"ul"},"ERPs don\u2019t care about weak signals and don\u2019t make sense of unstructured data,"),(0,i.kt)("li",{parentName:"ul"},"ERPs are not designed to consolidate data with other ERPs or other operational platforms,"),(0,i.kt)("li",{parentName:"ul"},"And lastly, when a change is interesting, it takes ages to impact ERPs.")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Because consolidation cannot occur in the operational systems, ",(0,i.kt)("strong",{parentName:"p"},"we introduce an additional data storage and processing layer called the analytical data plane")," . We assemble data platforms that can host data assets of different Business Units, with some local autonomy and some global governance, so insights can be derived from many elements. This is where the Lakehouse and the Federated Governance patterns apply. "),(0,i.kt)("p",null,"This is also where we believe we must now work in real-time, like in the ESP in the car analogy. The driving force is that ",(0,i.kt)("strong",{parentName:"p"},"the analytical plane should be up-to-date with the data that is shared from the operational systems"),", it should not add an hourly or a daily delay between the times it processes data."),(0,i.kt)("p",null,"Most use-cases that we currently in batch will benefit from being executed with up-to-date data from the operations. Let\u2019s take a two examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The purpose of a Customer 360\xb0 use-case is to consolidate Transaction history, Social media presence, Customer support interactions, Segmentation history, Sensitivity to the promotions and prices, etc. into a single view of the customers. "),(0,i.kt)("p",{parentName:"li"},"Having that information always up-to-date could let you, for example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Target, or restrain from targeting, in certain situations,"),(0,i.kt)("li",{parentName:"ul"},"Send messages at the right moment,"),(0,i.kt)("li",{parentName:"ul"},"Propose Next Best Action when the customer calls,"),(0,i.kt)("li",{parentName:"ul"},"etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expanding on that up-to-date Customer 360 and adding up-to-date supply-chain information and up-to-date suppliers information will enable new use-cases to better serve the customers needs."))),(0,i.kt)("p",null,"In addition to use cases, and if we consider a company as a complex system, ",(0,i.kt)("strong",{parentName:"p"},"it is important to monitor all its moving parts together to better understand its reactions.")," And when there are days or weeks between an action and the monitoring of its effect, it is more difficult to steer."),(0,i.kt)("p",null,"For these reasons, we want to propose real-time as the new standard, today: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(48033).Z,width:"1324",height:"237"})),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"mandatory-in-2022-aeb-is-the-current-state-of-the-art"},"Mandatory in 2022, AEB is the current state-of-the-art"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"In addition to sensors that focus on the inside of the car, AEB (Automatic Emergency Braking) uses sensors that look outside of the car, like Front radar sensor, multi-purpose dashboard camera(s) and corner radar sensors. All these components embark object detection and tracking with deep neural networks and share their insights to a central unit that can act on the car brakes. "),(0,i.kt)("p",null,"This is the most complex system that we study here and we can anticipate that the next step will be cars exchanging information together about conditions of the road. In the projects we currently participate in on connected cars, no data is currently shared between cars."),(0,i.kt)("p",null,"So our last diagram is the most complete:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(46373).Z,width:"1325",height:"321"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"do-you-have-aeb-like-system-in-your-company"},"Do you have AEB-like system in your company?"),(0,i.kt)("p",null,"AEB is about adding data sources to better anticipate market conditions, to better understand your customers, to better interact with your suppliers and your distributors, to gather data about your competitors, etc."),(0,i.kt)("p",null,"And by now you have understood that in the context of the AEB, the purpose is to consolidate these insights in real-time and leverage these to take the best decisions."),(0,i.kt)("p",null,"While buying or trading data is good, sharing data on platforms like Snowflake, BigQuery or Databricks Delta Sharing is better, because it is maintained in real-time by the other parties and you don\u2019t have to replicate it in batches."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(69153).Z,width:"1324",height:"280"})),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"While the focus of this article has been on the value of up-to-date analytics, we\u2019ll close this article with a preview of a next topic : the costs of the streaming datasets compared to traditional batch approaches."),(0,i.kt)("p",null,"Ekimetrics is investing a lot in making sure we manage the environmental aspects of the solutions we build, so this last point is critical! We currently work with Spark streams that have the .trigger(availableNow=True) option so they only process the newly arrived rows when the pipelines are executed every hour for example.",(0,i.kt)("br",{parentName:"p"}),"\n","So that it remains cost- and emission- efficient."),(0,i.kt)("p",null,"And as a closing remark, as I was looking for the dashboards of the Renault 4L, Peugeot 205 and other 2CV, I found that in the latest small car from Citro\xebn, called the AMI, it is nearly as frugal as its predecessors ! "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:a(86419).Z,width:"2451",height:"650"})),(0,i.kt)("p",null,"And it weighs only 500kg, which is frugal too.")))}p.isMDXComponent=!0},89527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Block_figures_1-b6db335c04027e9ef0a8beb8703d3b46.png"},86419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Block_figures_2-36f628f6186899118cc13dfe1dd18e5b.png"},55584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_1-60f3d7b918b8194ac8b89e4cc869f4d0.png"},51604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_2-2b6413adb9435c83218636d55314faac.png"},27026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_3-540eed6d65cce9d3f553a6ea992c35b7.png"},54926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_4-1fbf05bf4351f9e1586c4c3fb5f7f47a.png"},44740:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_5-c8a535f563ec37ed3f13c1fff4522610.png"},48033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_6-211461493b954a49a017803de5ebd7e2.png"},46373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_7-75a42aaebbe8167b49183711dd738429.png"},69153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagram_8-4c937e00cd3427775844bd983709534d.png"},70621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Global_Table_1-9067e1c766fae75a98d1cc3069117889.png"},37790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/level_car_analytics-6c2b9d1a859a0af66c1a2fe9d626982a.jpg"}}]);