(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(238)),o=["components"],s={title:"Newsletter for June 2022",author:"Samuel Chaineau",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/beach_2.jpg",tags:["Distributed Computing","NLP","Liquid Neural Network","Data Engineering"],draft:!1,description:"We are now at the start of July and we release our 5th Newsletter! Ranging from podcasts to tutorials, this Newsletter is made for practicioners!",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Engineering","App and Web Development","Data Science for business"]},c={permalink:"/blog/2022/07/05/newsletter_June-2022",source:"@site/blog/2022-07-05-newsletter_June-2022.md",description:"We are now at the start of July and we release our 5th Newsletter! Ranging from podcasts to tutorials, this Newsletter is made for practicioners!",date:"2022-07-05T00:00:00.000Z",tags:[{label:"Distributed Computing",permalink:"/blog/tags/distributed-computing"},{label:"NLP",permalink:"/blog/tags/nlp"},{label:"Liquid Neural Network",permalink:"/blog/tags/liquid-neural-network"},{label:"Data Engineering",permalink:"/blog/tags/data-engineering"}],title:"Newsletter for June 2022",readingTime:5.4,truncated:!0,prevItem:{title:"Exploring neural ordinary differential equations for time series forecasting applications",permalink:"/blog/2022/07/11/neural_ode"},nextItem:{title:"Bayesian inference for better predictions of magazine sales",permalink:"/blog/2022/06/14/bayesian_inference"}},l=[{value:"Data Science",id:"data-science",children:[{value:"Distributed computing: how to leverage Fugue to scale your code?",id:"distributed-computing-how-to-leverage-fugue-to-scale-your-code",children:[]}]},{value:"Machine Learning",id:"machine-learning",children:[{value:"In-hand NLP search tool backed by Transformers and Q&amp;A: Haystack",id:"in-hand-nlp-search-tool-backed-by-transformers-and-qa-haystack",children:[]},{value:"Liquid Neural Network: Next generation model for sequential data",id:"liquid-neural-network-next-generation-model-for-sequential-data",children:[]}]},{value:"Data Engineering &amp; Architecture",id:"data-engineering--architecture",children:[{value:"MongoDB vs ElasticSearch vs Redshift",id:"mongodb-vs-elasticsearch-vs-redshift",children:[]}]},{value:"App and Web Development",id:"app-and-web-development",children:[{value:"Using properly Map in Javascript",id:"using-properly-map-in-javascript",children:[]}]},{value:"Special Section: Yolo\u2019s creator history",id:"special-section-yolos-creator-history",children:[{value:"Jon Redmon, the poney lovers and Computer Vision boss !",id:"jon-redmon-the-poney-lovers-and-computer-vision-boss-",children:[]}]},{value:"Credits",id:"credits",children:[]}],u={toc:l};function d(e){var t=e.components,s=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"data-science"},"Data Science"),Object(i.b)("h3",{id:"distributed-computing-how-to-leverage-fugue-to-scale-your-code"},"Distributed computing: how to leverage Fugue to scale your code?"),Object(i.b)("p",null,Object(i.b)("img",{src:a(451).default})),Object(i.b)("p",null,"As python users and data lovers, we are using pandas in our daily life. However, pandas has inner limitations when working with large datasets. Alternatives for distributed computing exist but each of them requires us to skill up. The main barrier is the syntax required by the language which is often complex. Different packages tried to simplify the process (koalas for instance) but we want to focus ourselves on Fugue. Fugue is described as a \u201cunified interface for distributed computing that lets users execute Python, pandas, and SQL code on Spark and Dask without rewrites\u201d. Fugue does not require a lot of time to get used to it and is a good common tool for SQL users and python ones. We invite you to watch the video here under which contextualizes Fugue and provides some useful background. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://towardsdatascience.com/why-pandas-like-interfaces-are-sub-optimal-for-distributed-computing-322dacbce43"},"Why Pandas-like Interfaces are Sub-optimal for Distributed Computing | by Kevin Kho | Jun, 2022 | Towards Data Science")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=b3ae0m_XTys"},"Talk - Kevin Kho/Han Wang: Comparing the Different Ways to Scale Python and Pandas Code - YouTube")),Object(i.b)("h2",{id:"machine-learning"},"Machine Learning"),Object(i.b)("h3",{id:"in-hand-nlp-search-tool-backed-by-transformers-and-qa-haystack"},"In-hand NLP search tool backed by Transformers and Q&A: Haystack"),Object(i.b)("p",null,Object(i.b)("img",{src:a(452).default})),Object(i.b)("p",null,"Deepset, a German NLP start-up, released a bit more than a year ago a powerful and simple tool: Haystack. Haystack is a comprehensive framework enabling its users to use state-of-the-art Question Answering model to browse large textual datasets. Haystack is a local and little search engine. It is meant to be used by a broad range of users (from beginners to expert). You can tailor some part of the interface and even modify back-end specificities such as the backbone model used (Bert, Roberta, Luke\u2026). "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/deepset-ai/haystack"},"GitHub - deepset-ai/haystack")),Object(i.b)("h3",{id:"liquid-neural-network-next-generation-model-for-sequential-data"},"Liquid Neural Network: Next generation model for sequential data"),Object(i.b)("p",null,Object(i.b)("img",{src:a(453).default})),Object(i.b)("p",null,"Recurrent Neural Network (RNN) demonstrated a strong performance when used for sequential data. RNN are made of complex recurrent units enabling the network to keep track of past information while new inputs are fed in. In 2018, Neural Ordinary Differential Equations appeared and were seen as a major change in how we are modelling data. Instead of modeling the true generative function of Y, we are looking to model its derivative. This article was seen as a major change in how we can shift from a discrete model state to a continuous one.\nLiquid Time Constant Networks (LTC) were introduced in 2020 with a strong emphasis on the concept of hidden state in the model. In previous models, hidden state at time t is optimized according to the output at time t (maximizing the accuracy). In LTCs, hidden state is used both to predict the output, but also the next hidden state t+1. It means that at each time-step, you update your memory, according to what you saw, see and expect to see in the future. This application is particularly powerful when you need to generate data at a given horizon. If you want a quick deep dive in LTC you can follow the first link. The second one is the original paper that might be hard to read the in first instance."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://towardsdatascience.com/liquid-neural-networks-in-computer-vision-4a0f718b464e"},"Liquid Neural Networks in Computer Vision | by Jacob Solawetz | Towards Data Science")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/2006.04439.pdf"},"Article - Liquid Time-constant Networks")),Object(i.b)("h2",{id:"data-engineering--architecture"},"Data Engineering & Architecture"),Object(i.b)("h3",{id:"mongodb-vs-elasticsearch-vs-redshift"},"MongoDB vs ElasticSearch vs Redshift"),Object(i.b)("p",null,Object(i.b)("img",{src:a(454).default})),Object(i.b)("p",null,"Different tools exist when required to structure and organize a data architecture. This blog post presents three contenders to be THE tool to use. The author compares three technologies widely used: MongoDB, ElasticSearch and Amazon Redshift. This comparison will look at how they index, shard and aggregate data. While MongoDB has the biggest popularity and ElasticSearch gains some hype, Amazon Redshift is a tool to be considered."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.toptal.com/data-science/data-engineering-guide-to-storages"},"Storage for Data Engineering: Which is the Best? | Toptal")),Object(i.b)("h2",{id:"app-and-web-development"},"App and Web Development"),Object(i.b)("h3",{id:"using-properly-map-in-javascript"},"Using properly Map in Javascript"),Object(i.b)("p",null,Object(i.b)("img",{src:a(455).default})),Object(i.b)("p",null,"A \u201cmap\u201d object is a new addition coming into Javascript since ES6. While the \u201cobject\u201d is widely used for recording values, they should be avoided when you have a variable number entries (that can evolve along time). In this case, using a \u201cmap\u201d object is appropriate and results in a significant memory saving and computational performance improvement. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.zhenghao.io/posts/object-vs-map"},"When You Should Prefer Map Over Object In JavaScript (zhenghao.io)")),Object(i.b)("h2",{id:"special-section-yolos-creator-history"},"Special Section: Yolo\u2019s creator history"),Object(i.b)("h3",{id:"jon-redmon-the-poney-lovers-and-computer-vision-boss-"},"Jon Redmon, the poney lovers and Computer Vision boss !"),Object(i.b)("p",null,Object(i.b)("img",{src:a(456).default})),Object(i.b)("p",null,"For anyone who worked on Computer Vision during studies or even in professional environments, Object Detection always raises as a major challenge. The task consists in detecting in a picture multiple instances and drawing a bounding box around it. Back in 2015, the state-of-the-art architecture is a Region-based Convolutional Neural Network or RCNN (followed by different improvement called Fast-RCNN, Faster-RCNN\u2026). To make it brief and simple, RCNN takes Regions Of Interest (ROIs), which are little rectangle cropped from the image, fed to a Neural Network. Eventually ROIs are pooled together to produce the true bounding boxes we want. The biggest limit of R-CNN is the ROIs generation part which can take a lot of time before getting a prediction (therefore improvements of R-CNN always have a speed related word)."),Object(i.b)("p",null,"Jon Redmon, who at the time was in the early years of his PhD, proposed a new architecture called YOLO (You Only Look Once). The framework approaches the task of object detection as a regression problem rather than a classification one (R-CNN uses a classifier to predict bounding boxes). He also modifies the framework to get a single network that can be trained and optimized. This change of loss enables the network to be fully trainable on the whole image. The model shows exceptional performance both for real-time detection, but also in terms of accuracy. "),Object(i.b)("p",null,"Following this breakthrough, Jon Redmon worked on several new versions of YOLO, all becoming state-of-the-art in the field. However, in early 2020, he decided to stop his research in the field of Computer Vision as he saw a rise of ethical concerns around his work (especially in the military field). "),Object(i.b)("p",null,"I strongly invite you to read (at least) his resume which is by far the best one in the AI field! Check out his website to deepen your knowledge about his research. If you want, you can also check his first Yolo paper which is amazing!"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pjreddie.com/static/Redmon%20Resume.pdf"},"Redmon Resume (pjreddie.com)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pjreddie.com/"},"Survival Strategies for the Robot Rebellion (pjreddie.com)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/1506.02640.pdf"},"You Only Look Once: Unified, Real-Time Object Detection")),Object(i.b)("h2",{id:"credits"},"Credits"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cover Photo by ",Object(i.b)("a",{href:"https://unsplash.com/@cristofer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Cristofer Maximilian")," on ",Object(i.b)("a",{href:"https://unsplash.com/@cristofer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))))}d.isMDXComponent=!0},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},451:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_1-0806ff5e392a0687b932701ff2f722b3.png"},452:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_2-8104a827965e0342baa852f41da7e42d.png"},453:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_3-36bf56e604a667be299e3f565ef6b799.png"},454:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_4-86397f57fd69a12855f43f28289caf3e.png"},455:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_5-822038c31378010232f72d6fef479b00.png"},456:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Image_6-e013cab3ba5cfc7322fa550f7ebeb8d1.png"}}]);