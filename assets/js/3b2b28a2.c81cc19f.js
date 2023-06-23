"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[4187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(a),d=n,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?o.createElement(p,r(r({ref:t},c),{},{components:a})):o.createElement(p,r({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=a(87462),n=(a(67294),a(3905));const i={title:"Which AutoML platform to choose to start your Data Science project?",author:"Quentin Tremouille",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/Nyhavn_2.jpg",tags:["AutoML","Benchmark","Automatic Machine Learning"],draft:!1,description:"How do Automatic Machine Learning solutions work? What are the most popular AutoML solutions out there, and what do you need to know about them to make the right choice for your use case? Find answers to these questions and many others in this article.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","AutoML","Automatic Machine Learning","Cloud","Titanic","House Prices","Data Science for business"]},r=void 0,s={permalink:"/blog/2022/01/27/automl_benchmark",source:"@site/blog/2022-01-27-automl_benchmark.md",title:"Which AutoML platform to choose to start your Data Science project?",description:"How do Automatic Machine Learning solutions work? What are the most popular AutoML solutions out there, and what do you need to know about them to make the right choice for your use case? Find answers to these questions and many others in this article.",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"AutoML",permalink:"/blog/tags/auto-ml"},{label:"Benchmark",permalink:"/blog/tags/benchmark"},{label:"Automatic Machine Learning",permalink:"/blog/tags/automatic-machine-learning"}],readingTime:7.995,hasTruncateMarker:!0,authors:[{name:"Quentin Tremouille",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Which AutoML platform to choose to start your Data Science project?",author:"Quentin Tremouille",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/Nyhavn_2.jpg",tags:["AutoML","Benchmark","Automatic Machine Learning"],draft:!1,description:"How do Automatic Machine Learning solutions work? What are the most popular AutoML solutions out there, and what do you need to know about them to make the right choice for your use case? Find answers to these questions and many others in this article.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","AutoML","Automatic Machine Learning","Cloud","Titanic","House Prices","Data Science for business"]},prevItem:{title:"Building a datalake - Part 1 - Usable, Useful, Used, or how to avoid dataswamp and empty shell traps",permalink:"/blog/2022/02/07/building_datalake_part_1"},nextItem:{title:"Hackathon Stories - Ensuring access to affordable and clean energy",permalink:"/blog/2022/01/06/hackathon"}},l={authorsImageUrls:[void 0]},h=[{value:"What is AutoML and why it is interesting?",id:"what-is-automl-and-why-it-is-interesting",level:2},{value:"Definition",id:"definition",level:3},{value:"How AutoML can help us?",id:"how-automl-can-help-us",level:3},{value:"Overview of the main AutoML frameworks in the market",id:"overview-of-the-main-automl-frameworks-in-the-market",level:3},{value:"Exploring the capabilities of several AutoML solutions",id:"exploring-the-capabilities-of-several-automl-solutions",level:2},{value:"Our methodology (Classification/Regression, datasets Kaggle)",id:"our-methodology-classificationregression-datasets-kaggle",level:3},{value:"Our results",id:"our-results",level:3},{value:"Classification Problem - Titanic Challenge",id:"classification-problem---titanic-challenge",level:4},{value:"Regression Problem - House Prices Challenge",id:"regression-problem---house-prices-challenge",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Which AutoML solutions to choose?",id:"which-automl-solutions-to-choose",level:3},{value:"Final thoughts, our key takeaways",id:"final-thoughts-our-key-takeaways",level:3},{value:"References",id:"references",level:2}],c={toc:h},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"screenshot-app ",src:a(33850).Z,width:"1470",height:"980"}))),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"Applying traditional Machine Learning methods to real-word business problems can be time-consuming, resource-intensive and expensive. With Automated Machine Learning (Auto ML) however, it can take days at most for business professionals & Data Scientists alike to develop and compare dozens of models, find insights and solve business problems quickly. But what is AutoML, how does it work and what are the most popular AutoML solutions out there? In this article, we will introduce the field of Automated Machine Learning by exploring some popular AutoML frameworks and trying to answer those questions around how to make the right choice for your use case."),(0,n.kt)("h2",{id:"what-is-automl-and-why-it-is-interesting"},"What is AutoML and why it is interesting?"),(0,n.kt)("h3",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Sebastian Raschka, a well regarded American statistics professor, states: \u2018\u2019Computer programming is about automation, and Machine Learning is all about automating automation\u2019\u2019. If that\u2019s true then we can say that Automated Machine Learning is the automation of automating automation..! AutoML is a new optimization technique which aims at automating some of the core - but highly iterative - parts of the traditional modelling process in ML, in particular feature selection and model selection (including hyperparameter tuning and stacking). Let\u2019s take the example of a Decision Tree Algorithm. This algorithm has many hyperparameters (leaf, depth, split etc.) and browsing through all those hyperparameters can take days. An AutoML algorithm can intelligently explore all the possible parameters in order to find the best possible ML algorithm solving a given task. Some advanced AutoML algorithms can even choose between different features, create new ones and try different data cleansing scenarios!"),(0,n.kt)("h3",{id:"how-automl-can-help-us"},"How AutoML can help us?"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10724).Z,width:"1977",height:"510"})),(0,n.kt)("p",null,"There are many steps in a Machine Learning project, with Model Training typically being one of the most time consuming. A standard project will focus on a Business Problem and will pass through Data Collection, Cleaning and Processing before the training phase. Model Training can then be cumbersome as we have to select an appropriate model family and to fine tune many times differents hyperparameters before building the analysis and deploying the model. This process can take weeks or months, but it seems that several steps can be automated using optimization algorithms and that is the goal of auto ML."),(0,n.kt)("p",null,"In a sense, AutoML is seen as a way to increase productivity, to allow the Data Scientist to focus more on defining the problem and the analyses rather than the models finetuning, to help avoiding errors, and on top of that, to democratize Machine Learning so that everyone can leverage its power. Its integration within ML Engineering environment allows to streamline pipeline and integrate specific training jobs, that allows to parametrize a model search completely from a simple configuration file."),(0,n.kt)("h3",{id:"overview-of-the-main-automl-frameworks-in-the-market"},"Overview of the main AutoML frameworks in the market"),(0,n.kt)("p",null,"For this article, we have selected 7 well known AutoML frameworks, but many more exist in the market. Below is an overview of some of the types of Data Science problems these AutoML solutions can address. Among them two are open source: AutoKeras & H2o and the others are not: with DataRobot, Dataiku, Azure, GCP, and AWS SageMaker. (2 other open-source solutions AutoKeras and AutoGluon were studied, but these frameworks are not available on Windows.)"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(32339).Z,width:"1236",height:"539"})),(0,n.kt)("p",null,"Many of the AutoML solutions address different types of Data Science problems such as Sentiment Analysis or Computer Vision, however what is going to interest us for the rest of is article are the Classification and Regression ML problems."),(0,n.kt)("h2",{id:"exploring-the-capabilities-of-several-automl-solutions"},"Exploring the capabilities of several AutoML solutions"),(0,n.kt)("h3",{id:"our-methodology-classificationregression-datasets-kaggle"},"Our methodology (Classification/Regression, datasets Kaggle)"),(0,n.kt)("p",null,"The purpose here is to bring some knowledge in the field of ",(0,n.kt)("strong",{parentName:"p"},"Automated Machine Learning")," by ",(0,n.kt)("strong",{parentName:"p"},"exploring some popular AutoML frameworks"),". In order to establish a performance benchmark, we decided to test those frameworks on ",(0,n.kt)("strong",{parentName:"p"},"common ML topics")," like ",(0,n.kt)("strong",{parentName:"p"},"Regression")," and ",(0,n.kt)("strong",{parentName:"p"},"Classification"),". The idea is also to share our personal experience (and difficulties encountered) with those tools so that everyone can have an overview of each one these AutoML solutions."),(0,n.kt)("p",null,"These packages were benchmarked on two classical datasets available on Kaggle. We chose the ",(0,n.kt)("strong",{parentName:"p"},"Titanic Challenge")," (",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/c/titanic/overview"},"Titanic - Machine Learning from Disaster | Kaggle"),") for the Classification problem and the ",(0,n.kt)("strong",{parentName:"p"},"House Prices Challenge")," (",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/c/house-prices-advanced-regression-techniques/rules"},"House Prices - Advanced Regression Techniques | Kaggle"),") for the Regression problem. For each framework, we submitted predictions on the test set on Kaggle so that we can compare the results to the general leaderboard. What is interesting with this approach is that we were able to compare performance not only between each AutoML solution but also with individual performance."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(45991).Z,width:"1463",height:"556"})),(0,n.kt)("h3",{id:"our-results"},"Our results"),(0,n.kt)("h4",{id:"classification-problem---titanic-challenge"},"Classification Problem - Titanic Challenge"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(65951).Z,width:"1416",height:"606"})),(0,n.kt)("p",null,"The Titanic Challenge is one of the most famous on Kaggle with more than 30,000 challengers. The objective is to have a model which will predict if a Titanic passenger survives or not on a small data set with 9 features and around 900 rows in the training set. The metric used for this challenge is the accuracy and the leaderboard we have downloaded from Kaggle is provided below."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29118).Z,width:"1273",height:"745"})),(0,n.kt)("p",null,"Each point represents a challenger with the performance of all tested frameworks noted, with ranking & accuracy plotted on the x and y axis. We found that Azure has the best accuracy followed by H2O and that the accuracy for all frameworks ranges within 73% - 80%."),(0,n.kt)("h4",{id:"regression-problem---house-prices-challenge"},"Regression Problem - House Prices Challenge"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(64465).Z,width:"1575",height:"566"})),(0,n.kt)("p",null,"For the House Prices Challenge, the goal is to predict the final price of residential homes in the United States. This time the metric is the root mean squared error, which is a metric that tells us the average distance between the predicted values from the model and the actual values in the dataset. We have around 8000 challengers (less challengers than the Titanic Challenge) and the dataset here is bigger with more than 250 features and around 1400 rows in the training set."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(21010).Z,width:"1249",height:"739"})),(0,n.kt)("p",null,"We can see that all frameworks did better than the baseline RMSE. Each of the tested models fall between 0.24 - 0.12 in terms of the RSME and H2O again performs the best among other tested frameworks."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("h3",{id:"which-automl-solutions-to-choose"},"Which AutoML solutions to choose?"),(0,n.kt)("p",null,"In conclusion, which AutoML to choose? When making our decision, the framework performance is important, but not all frameworks were in fact easy to use. Conversely, we spent a lot of time on some frameworks, because some of them were not as intuitive as expected."),(0,n.kt)("p",null,"User friendliness must also therefore be a major criterion to consider when you are wondering which AutoML to use. That\u2019s why, in order to consider the frameworks performance on both the Kaggle challenge but also the user friendliness of each solution (if it is easy to install it, to get familiar with the tool, to set up the experiment without errors), we built two further metrics to evaluate each AutoML framework and to compare them."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the x-axis: we give the ease of use for each AutoML framework from 1 to 10 (10 being the best)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the y-axis: we took the average ranking on the both Kaggle challenge (the closer to 0, the better)"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(49337).Z,width:"1276",height:"743"})),(0,n.kt)("p",null,"The metric 'ease of use' is somewhat subjective as it refers to our own personal experience. However, we would add that one of the goals of AutoML is to make Machine Learning accessible to everyone, so for someone with very little knowledge, it is interesting to see how accessible the differents tools are."),(0,n.kt)("p",null,"We found that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The cloud solutions are more difficult to master especially if you\u2019ve never used cloud computing before. In fact, some time is needed to get familiar with all the different functionalities of cloud solutions like Azure, AWS or GCP as there are powerful and comprehensive tools.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dataiku and DataRobot are very easy to use and very visual, with many icons. These interfaces are very clear and simple.  If you want to use an extremely easy-to-use AutoML tool, which can perform automated machine learning very quickly, DataRobot and Dataiku seem to be good solutions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"H2O works as a notebook so if you are familiar working on a Jupyter notebook for example, it can definitely be a good option and not too painful to use. H2O seems to be a very good choice in terms of performance and ease of use. Moreover, this framework has the advantage of being completely open source."))),(0,n.kt)("h3",{id:"final-thoughts-our-key-takeaways"},"Final thoughts, our key takeaways"),(0,n.kt)("p",null,"This article tries to compare 7 majors AutoML frameworks. To do so, we introduced a methodology that considers the performance of each solution, but also their ease of use. What appears clearl is that AutoML can definitely be a good starting point to an ML project. In fact, for both the Classification and Regression problem, all the frameworks performed almost as well, even better sometimes than the baseline, just by using the AutoML functionality."),(0,n.kt)("p",null,"However, it is important to remember that automatically generated pipelines are still very basic and are not able to beat human experts yet. As we could see on the different benchmarks from Kaggle, Data Scientists still perform better. A Data Scientist analyzes the hidden information inside data, extracts useful correlations, gives useful insights about the business that has created data itself and all these tasks cannot be fully automated."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,"To read more about AutoML:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1908.00709.pdf"},"2019 | AutoML: A Survey of the State-of-the-Art | Xin He, et al.")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1904.12054.pdf"},"2019 | Survey on Automated Machine Learning | Marc Zoeller, Marco F. Huber")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2008.08516.pdf"},"2020 | Automated Machine Learning--a brief review at the end of the early years | Escalante, H. J. 2008.08516.pdf"))))}m.isMDXComponent=!0},33850:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Nyhavn_3-ca6dc7204dc3f387c23b5dc549a6f9fb.jpg"},10724:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Steps_DS_automl_3-88f832e3508f3fd93be110edc0c4cf6e.png"},32339:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/automl_platforms_3-ab585502e47d2a9e8e976a028edeb3dc.png"},21010:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/benchmark_houseprice_challenge_3-f91493ad4f705725bc41e4d4d46685a7.png"},29118:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/benchmark_titanic_challenge_3-bbe560d7ac7ae1ff3223505f40746f63.png"},49337:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/final_benchmark_3-adf3db6d8095c9e8d6559367855e55e2.png"},64465:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/house_price_challenge_details_3-31c76b327cffe802e74a7ba81fdc17df.png"},45991:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/methodology_automl_3-cd9ec5d23c010842c461dbb9b35ef5df.png"},65951:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titanic_challenge_details_3-61787d540f40955c9486851fb33d4f0d.png"}}]);