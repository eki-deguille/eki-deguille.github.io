(window.webpackJsonp=window.webpackJsonp||[]).push([[94,10,12],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(187),o=a(21),s=(a(198),a(181)),c=(a(184),function(e){var t=e.title,a=e.description,n=e.href,r=e.category,o=e.date,c=e.tags;return i.a.createElement("div",{class:"col col-md-12 col--6 shortcard-container"},i.a.createElement("div",{class:"col col--12 shortcard"},i.a.createElement("div",{class:"longcard-body"},i.a.createElement("p",{class:"longcard-description",style:{fontSize:14}},i.a.createElement("span",{className:"gold"},r),o&&" - "+o," ",c&&c.map((function(e){return i.a.createElement("span",{className:"badge badge--primary"},e)}))),i.a.createElement("p",{class:"shortcard-title"},i.a.createElement(s.a,{to:n},t)),i.a.createElement("p",{class:"longcard-description"},a))))}),l=[{date:"2022-03",category:"Coding session",title:"How to scrap the world",tags:["Scraping","BeautifulSoup","Selenium"],description:"Scraping is the fact of extracting information from a website, through a web crawler, for analysis or reuse. Learn in this coding session how to scrap vast amounts of various data using dedicated open-source tools!"},{date:"2022-01",category:"Presentation",title:"Explainable AI (XAI)",tags:["Explainability","Interpretability","Ethical AI"],description:"Discover the critical field of interpretability for Machine Learning and how we work on state-of-the-art approaches to allow interpretability of models at Ekimetrics"},{date:"2021-11",category:"Presentation",title:"Detecting unknown time series events - A maritime traffic surveillance case-study",tags:["Time Series","Maritime Traffic Surveillance","Generative Models"],description:"Discover an approach based on generative models for unknown event detection in time series, applied to maritime traffic surveillance using Automatic Identification System data"},{date:"2021-09",category:"Presentation",title:"Foundation models & Prompt Engineering",tags:["AI Research","NLP"],description:"GPT-3, CLIP, Codex, BERT - Foundation models are becoming the norm in many applications, from NLP to Computer Vision. What are the risks and opportunities of those models? Is it really the future of AI. Discover it yourself with your own Turing Test."},{date:"2021-09",category:"Coding session",title:"Practical introduction to mathematical optimization ",tags:["Operational Research","Optimization"],description:"Turn business problems into conceptual mathematical models, find out optimal decisions using state-of-the-art solvers and apply these skills on real-world optimization problems."},{date:"2021-09",category:"Presentation",title:"MLOps: Machine Learning in production",tags:["Industrialization","MLOps"],description:"Machine Learning in production is a really complex discipline. Learn about the best practices and technology requirements to avoid failing in prod (input data drift, model registry, gouvernance, DevOps for ML, etc...)"},{date:"2021-06",category:"Presentation",title:"UX design guidelines for AI products",tags:["UX Design"],description:"When developing products with predictive AI features, there are specific UX/UI guidelines to ensure user trust, robustness and a valuable feedback loop."},{date:"2021-04",category:"Presentation",title:"How to create a chess AI",tags:["Game AI","Reinforcement Learning"],description:"Chess has historically been one of the most important games in the development of Artificial Intelligence. Learn how to create your own chess AI using tree search algorithms, heuristics and Machine Learning."},{date:"2021-01",category:"Presentation",title:"Cellular Automata & Artificial Life",tags:["AI Research"],description:"Cellular Automata are a programming discrete model popularized by Conway and Wolfram. Discover how it can be used to model the development of Life and what concrete applications we could expect from such technology."},{date:"2020-08",category:"Coding session",title:"Object Oriented Programming for Data Scientists",tags:["Python"],description:"Learn how Oriented Object Programming (classes) can be used in Python to accelerate your development process when you are a Data Scientist."},{date:"2019-05",category:"Presentation",title:"Machine Learning at Netflix",tags:["AI Research"],description:"Decrypt and demystify how Netflix is using Machine Learning to power every bit of the platform, improving user experience and building a competitive advantage in the market."}];t.default=function(){return Object(o.default)().siteConfig,i.a.createElement(r.a,{title:"Trainings",description:"Find out about our trainings in open-access on various issues",keywords:["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence","Open Source","Trainings","Tutorials"]},i.a.createElement("div",{class:"container margin-vert--lg"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col--12"},i.a.createElement("h1",null,"Trainings"),i.a.createElement("p",null,"We offer trainings internally for Eki.DataPeople on various issues. Find out in this page about the ",i.a.createElement("span",{className:"gold"},"trainings and tutorials we could provide access"),".",i.a.createElement("br",null),"Our trainings can be ",i.a.createElement("span",{className:"gold"},"presentations")," or ",i.a.createElement("span",{className:"gold"},"interactive coding sessions"),i.a.createElement("br",null),"\ud83d\udce2 If there is no direct link yet, please send us an ",i.a.createElement("a",{href:"mailto:inno@ekimetrics.com"},"email")," to request access"))),i.a.createElement("section",null,i.a.createElement("div",{class:"row"},l.map((function(e){return i.a.createElement(c,{category:e.category,date:e.date,title:e.title,tags:e.tags,description:e.description,href:e.href})}))))))}},188:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(186),o=a.n(r),s=a(183),c=a(21),l=a(185);t.a=function(e){var t=Object(n.useRef)(!1),r=Object(n.useRef)(null),d=Object(n.useState)(!1),u=d[0],m=d[1],p=Object(s.useHistory)(),g=Object(c.default)(),h=g.siteConfig,f=void 0===h?{}:h,b=g.isClient,v=void 0!==b&&b,y=f.baseUrl,E=Object(l.usePluginData)("docusaurus-lunr-search"),w=function(){t.current||(Promise.all([fetch(""+y+E.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+y+E.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(107),a.e(112)]).then(a.bind(null,189)),a.e(0).then(a.t.bind(null,54,7))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&(!function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=y+a.url;document.createElement("a").href=n,p.push(n)}})}(t,a,n),m(!0))})),t.current=!0)},S=Object(n.useCallback)((function(t){r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return v&&w(),i.a.createElement("div",{className:"navbar__search",key:"search-box"},i.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:S,onKeyDown:S,tabIndex:0}),i.a.createElement("input",{id:"search_input_react",type:"search",placeholder:u?"Search":"Loading...","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:w,onMouseOver:w,onFocus:S,onBlur:S,ref:r,disabled:!u}))}},198:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(181),o=a(184);t.a=function(e){var t=e.title,a=e.src,n=e.description,s=e.href,c=e.category,l=e.date;return i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col--12 longcard"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col col--4 longcard-image"},i.a.createElement("img",{src:Object(o.a)(a)})),i.a.createElement("div",{class:"col col--8 longcard-body"},i.a.createElement("p",{class:"longcard-description",style:{fontSize:14}},i.a.createElement("span",{className:"gold"},c),l&&" - "+l),i.a.createElement("p",{class:"longcard-title"},i.a.createElement(r.a,{to:s},t)),i.a.createElement("p",{class:"longcard-description"},n)))))}}}]);