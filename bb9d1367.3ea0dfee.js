(window.webpackJsonp=window.webpackJsonp||[]).push([[96,12,15],{165:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=(t(216),t(213)),i=(t(207),t(21)),s=(t(210),t(62),t(224));a.default=function(){return Object(i.default)().siteConfig,r.a.createElement(c.a,{title:"Hackathons & challenges by Ekimetrics",description:"Browse our hackathons & challenges to test your Data Science skills",keywords:["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence","Hackathon"]},r.a.createElement("div",{class:"container margin-vert--lg"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col col--12"},r.a.createElement("h1",null,"Hackathons & Data Science Challenges"),r.a.createElement("p",null,"We have been actively creating various ",r.a.createElement("span",{className:"gold"},"hackathons and collaborative sessions")," to improve our Data Science skills and better work as multi-disciplinary teams.",r.a.createElement("br",null),"Browse our exclusive challenges below, send us an ",r.a.createElement("a",{href:"mailto:inno@ekimetrics.com"},"email")," to gain access (if it's not open sourced) or if you wish to request the creation of an exclusive hackathon."))),r.a.createElement("section",null,r.a.createElement(s.a,{category:"Case study",date:"2021-10",title:"Reducing the environmental impact of road transport",description:"You advise the subsidiary of a logistics company whose purpose is to decarbonize international road transport. The subsidiary was launched 6 months ago, but beyond the promises nothing has been implemented. Your goal is to accelerate this vision and review this ambitious reduction strategy in light of the ever-increasing growth of e-commerce.",href:"",src:"img/hacks/Truck_2.png"}),r.a.createElement(s.a,{category:"Hackathon",date:"2021-06",title:"Ensuring access to affordable and clean energy in Africa",description:"Predict the next six months of payments for different customers for the PAYGo solar technology to help the technology distributors provide these important devices affordably and efficiently to the benefit of people all over Africa",href:"",src:"img/hacks/Solar_4.jpg"}),r.a.createElement(s.a,{category:"Data Science Escape Game",date:"2020-12",title:"Crisis in Korea",description:"A bomb has been planted and risk to explode in the next 3 hours. Use your Data Science skills to track down and defuse the bomb!",href:"",src:"img/hacks/cekia.png"}),r.a.createElement(s.a,{category:"Case study",date:"2020-10",title:"The future of French wine in the face of Climate Change",description:"French wine is endangered by the effect of climate change. Browse and cross a dozen of datasets to understand the effects of climate change and imagine actions to sustain the sector in the next 50 years",href:"",src:"img/hacks/photo-1560493676-04071c5f467b.jpg"}),r.a.createElement(s.a,{category:"Hackathon",date:"2019-12",title:"Logistics for Christmas",description:"Help Santa Claus plan his delivery tours for Christmas by forecasting demand worlwide and optimizing routing while minimizing carbon footprint",href:"",src:"img/hacks/christmas.png"}))))}},214:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(212),i=t.n(c),s=t(209),o=t(21),l=t(211);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),d=Object(n.useState)(!1),h=d[0],u=d[1],f=Object(s.useHistory)(),m=Object(o.default)(),g=m.siteConfig,p=void 0===g?{}:g,b=m.isClient,y=void 0!==b&&b,E=p.baseUrl,v=Object(l.usePluginData)("docusaurus-lunr-search"),k=function(){a.current||(Promise.all([fetch(""+E+v.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+E+v.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(133),t.e(138)]).then(t.bind(null,215)),t.e(0).then(t.t.bind(null,54,7))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&(!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=E+t.url;document.createElement("a").href=n,f.push(n)}})}(a,t,n),u(!0))})),a.current=!0)},w=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return y&&k(),r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:w,onKeyDown:w,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:h?"Search":"Loading...","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:k,onMouseOver:k,onFocus:w,onBlur:w,ref:c,disabled:!h}))}},216:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},224:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(207),i=t(210);a.a=function(e){var a=e.title,t=e.src,n=e.description,s=e.href,o=e.category,l=e.date;return r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col col--12 longcard"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col col--4 longcard-image"},r.a.createElement("img",{src:Object(i.a)(t)})),r.a.createElement("div",{class:"col col--8 longcard-body"},r.a.createElement("p",{class:"longcard-description",style:{fontSize:14}},r.a.createElement("span",{className:"gold"},o),l&&" - "+l),r.a.createElement("p",{class:"longcard-title"},r.a.createElement(c.a,{to:s},a)),r.a.createElement("p",{class:"longcard-description"},n)))))}}}]);