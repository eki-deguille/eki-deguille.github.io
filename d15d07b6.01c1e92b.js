(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(220)),o=["components"],s={title:"Newsletter for April 2022",author:"Samuel Chaineau",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/couv.jpg",tags:["Machine Learning","Javascript bundler","Data Engineering"],draft:!1,description:"We are now at the start of May and we release our 4th Newsletter! Ranging from podcasts to tutorials, this Newsletter is made for practicioners!",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Engineering","App and Web Development","Data Science for business"]},c={permalink:"/blog/2022/05/02/newsletter_April-2022",source:"@site/blog/2022-05-02-newsletter_April-2022.md",description:"We are now at the start of May and we release our 4th Newsletter! Ranging from podcasts to tutorials, this Newsletter is made for practicioners!",date:"2022-05-02T00:00:00.000Z",tags:[{label:"Machine Learning",permalink:"/blog/tags/machine-learning"},{label:"Javascript bundler",permalink:"/blog/tags/javascript-bundler"},{label:"Data Engineering",permalink:"/blog/tags/data-engineering"}],title:"Newsletter for April 2022",readingTime:3.485,truncated:!0,prevItem:{title:"Bayesian inference for better predictions of magazine sales",permalink:"/blog/2022/06/14/bayesian_inference"},nextItem:{title:"Deploying your Data Science app to the Cloud",permalink:"/blog/2022/04/21/docker"}},l=[{value:"Data Science",id:"data-science",children:[{value:"How is Warner Music using AI to turn sound into strategic assets?",id:"how-is-warner-music-using-ai-to-turn-sound-into-strategic-assets",children:[]}]},{value:"Machine Learning",id:"machine-learning",children:[{value:"Showcasing and sharing your ML model in the easiest way with Gradio",id:"showcasing-and-sharing-your-ml-model-in-the-easiest-way-with-gradio",children:[]},{value:"Learning to prompt for Continual Learning",id:"learning-to-prompt-for-continual-learning",children:[]}]},{value:"Data Engineering &amp; Architecture",id:"data-engineering--architecture",children:[{value:"Putting ElasticSearch into production",id:"putting-elasticsearch-into-production",children:[]}]},{value:"App and Web Development",id:"app-and-web-development",children:[{value:"How to build a JavaScript Bundler from scratch",id:"how-to-build-a-javascript-bundler-from-scratch",children:[]}]},{value:"Special Section: Modeling",id:"special-section-modeling",children:[{value:"Dealing with logs and zeros in regression models",id:"dealing-with-logs-and-zeros-in-regression-models",children:[]}]}],d={toc:l};function u(e){var t=e.components,s=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"data-science"},"Data Science"),Object(i.b)("h3",{id:"how-is-warner-music-using-ai-to-turn-sound-into-strategic-assets"},"How is Warner Music using AI to turn sound into strategic assets?"),Object(i.b)("p",null,Object(i.b)("img",{src:a(396).default})),Object(i.b)("p",null,"Industries relying on creative contents are now moving toward a data centric strategy with dedicated teams and departments. We wanted to share with you the testimony of Kobi Abayomi, vice president of Data Science at Warner Music. The resource is available both as a podcast or as a transcript. The discussion covers broad topics ranging from what\u2019s going on in the industry, what makes a good data science team or what are his views for the future of AI. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://sloanreview.mit.edu/audio/turning-sound-into-information-warner-music-groups-kobi-abayomi/"},"Turning Sound Into Information: Warner Music Group\u2019s Kobi Abayomi (mit.edu)")),Object(i.b)("h2",{id:"machine-learning"},"Machine Learning"),Object(i.b)("h3",{id:"showcasing-and-sharing-your-ml-model-in-the-easiest-way-with-gradio"},"Showcasing and sharing your ML model in the easiest way with Gradio"),Object(i.b)("p",null,Object(i.b)("img",{src:a(397).default})),Object(i.b)("p",null,"Gradio is an open-source framework enabling ML Engineer to quickly share their models via a web interface. The cool feature of Gradio is how simple it is while leaving some rooms for changes and modifications.  Gradio can work with any kind of models and data structures (Images, Text, Tabular\u2026). However, Gradio is made to share pre-trained models meaning that it cannot be used as an Active Learning asset where data would be provided to the model iteratively to its training. When having to share quick demos without the time or the need to have bespoke interface, Gradio is a no brainer. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gradio.app/"},"Gradio")),Object(i.b)("h3",{id:"learning-to-prompt-for-continual-learning"},"Learning to prompt for Continual Learning"),Object(i.b)("p",null,Object(i.b)("img",{src:a(398).default})),Object(i.b)("p",null,"Even though Pathways Language Models (PaLM) is one of the hottest releases of April 2022, our attention has been focused on another Google Research paper discussing the best way to perform Continual Learning. Continual Learning means to train a single model on various type of tasks iteratively. When being trained at step t, the model does not have access to previous data. One of the main challenge posed by such concept is how to maintain knowledge from past data into the model, avoiding catastrophic forgetting. In this paper, researchers propose an approach by leveraging prompt engineering. Using prompt Is very common in NLP as it tends to better fine-tune pretrained algorithms. The main idea of this paper is to tackle continual learning not as a model weights\u2019 shift but rather as a memory space representing the type of task to be trained on. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2112.08654"},"Learning to Prompt for Continual Learning")),Object(i.b)("h2",{id:"data-engineering--architecture"},"Data Engineering & Architecture"),Object(i.b)("h3",{id:"putting-elasticsearch-into-production"},"Putting ElasticSearch into production"),Object(i.b)("p",null,Object(i.b)("img",{src:a(399).default})),Object(i.b)("p",null,"ElasticSearch is a famous distributed search engine build on Apache Lucene. It has now been pretty much the standard for complex use cases where you have to look for data in a large volume and complex database (cf: ",Object(i.b)("a",{parentName:"p",href:"https://netflixtechblog.com/how-netflix-content-engineering-makes-a-federated-graph-searchable-5c0c1c7d7eaf"},"How Netflix Content Engineering makes a federated graph searchable"),"). However, when it comes to put it into production, several challenges and pitfalls can occur. Hence, this blog post is a user sharing story with some best practices to adopt and bad habits to avoid. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://medium.com/@mzhaase/in-depth-guide-to-running-elasticsearch-in-production-b2ea7c8fa082"},"In depth guide to running Elasticsearch in production | by Mattis Haase | Medium")),Object(i.b)("h2",{id:"app-and-web-development"},"App and Web Development"),Object(i.b)("h3",{id:"how-to-build-a-javascript-bundler-from-scratch"},"How to build a JavaScript Bundler from scratch"),Object(i.b)("p",null,Object(i.b)("img",{src:a(400).default})),Object(i.b)("p",null,"A JavaScript Bundler is a tool combining code files in a unique file making it ready to use and deploy. It keeps tracks of every dependency that you might have into your repository. Those are stored into a graph guaranteeing that all your files are updated accordingly. Even if it starts to be common to use a bundler, nothing worth more than building one by ourselves. Following post shows how to build a bundler by yourself while keeping it relatively simple.  "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://cpojer.net/posts/building-a-javascript-bundler"},"Building a JavaScript Bundler | Christoph Nakazawa (cpojer.net)")),Object(i.b)("h2",{id:"special-section-modeling"},"Special Section: Modeling"),Object(i.b)("h3",{id:"dealing-with-logs-and-zeros-in-regression-models"},"Dealing with logs and zeros in regression models"),Object(i.b)("p",null,Object(i.b)("img",{src:a(401).default})),Object(i.b)("p",null,"When having data generated by an exponential process, we tend to use log as a function to better fit liner model. However, problems arise when a portion of your data points are equal to zero. Common fix used is adding a constant (often 1) to your data to remove the problem. In this paper, researchers propose a novel family of estimators called iOLS (iterated Ordinary Least Squares). It presents a computational advantage while performing in the best way your fit."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2203.11820"},"Dealing with Logs and Zeros in Regression Models (arxiv.org)")))}u.isMDXComponent=!0},220:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),g=n,b=u["".concat(o,".").concat(g)]||u[g]||p[g]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Warner-4eb3615c5e8f90d09193c5302ffc5734.jpg"},397:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Gradio-45627b4e4944da21d1c84be082479387.jpg"},398:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Learning-919960e4adde6f8ee62bfa51b51d0d1b.jpg"},399:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ElasticSearch-d3517f406bd4a511dec55cdefffe4f21.jpg"},400:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Dev-8090e61ca2fa6309bd5a32e608cb121a.jpg"},401:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Log-7dacba11f3b324db1b2c70bf9d73a49d.jpg"}}]);