(window.webpackJsonp=window.webpackJsonp||[]).push([[63,10,12],{166:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t(177),i=t(193),s=t(171);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=(e.sidebar,Object(l.default)().siteConfig.title),s=a.blogDescription,m=a.blogTitle,u="/"===a.permalink?n:m;return r.a.createElement(c.a,{title:u,description:s,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--12"},r.a.createElement("div",{className:"row"},t.map((function(e){var a=e.content;return r.a.createElement("div",{className:"col col--4 row-preview"},r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null)))}))),r.a.createElement(o,{metadata:a})))))}},178:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(176),c=t.n(l),i=t(173),s=t(21),o=t(175);a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(n.useState)(!1),u=m[0],d=m[1],g=Object(i.useHistory)(),h=Object(s.default)(),p=h.siteConfig,v=void 0===p?{}:p,f=h.isClient,b=void 0!==f&&f,E=v.baseUrl,_=Object(o.usePluginData)("docusaurus-lunr-search"),N=function(){a.current||(Promise.all([fetch(""+E+_.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+E+_.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(97),t.e(102)]).then(t.bind(null,179)),t.e(0).then(t.t.bind(null,54,7))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&(!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=E+t.url;document.createElement("a").href=n,g.push(n)}})}(a,t,n),d(!0))})),a.current=!0)},y=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return b&&N(),r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:y,onKeyDown:y,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:u?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:N,onMouseOver:N,onFocus:y,onBlur:y,ref:l,disabled:!u}))}},180:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(180),c=t(23),i=t(171),s=t(174),o=t(61),m=t.n(o),u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){e.children;var a=e.frontMatter,t=e.metadata,n=e.truncated,o=e.isBlogPostPage,d=void 0!==o&&o,g=t.date,h=t.permalink,p=t.tags,v=t.readingTime,f=a.author,b=a.title,E=a.image,_=a.keywords,N=a.description,y=a.header_image_url;y=Object(s.a)(y);var w,k,j,x,S,O=a.author_url||a.authorURL,B=(a.author_title||a.authorTitle,a.author_image_url||a.authorImageURL),I=Object(s.a)(E,{absolute:!0});return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:y,alt:"Image alt text",title:"Logo Title Text 1"})),r.a.createElement("div",{className:"card__body"},r.a.createElement(c.a,null,_&&_.length&&r.a.createElement("meta",{name:"keywords",content:_.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:I}),E&&r.a.createElement("meta",{name:"twitter:image",content:I}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b})),r.a.createElement("article",null,(w=d?"h1":"h2",k=g.substring(0,10).split("-"),j=k[0],x=u[parseInt(k[1],10)-1],S=parseInt(k[2],10),r.a.createElement("header",null,r.a.createElement(w,{style:{fontFamily:"InterCustom",fontSize:16},className:Object(l.a)("margin-bottom--sm",m.a.blogPostTitle)},d?b:r.a.createElement(i.a,{to:h},b)),r.a.createElement("p",{style:{fontFamily:"InterCustom",fontSize:14,lineHeight:1.2}},N),r.a.createElement("div",{className:"avatar margin-vert--md"},B&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:B,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("time",{dateTime:g,className:m.a.blogPostDate},x," ",S,", ",j," ",v&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))))))),(p.length>0||n)&&r.a.createElement("footer",{className:"row margin-vert--sm"},p.length>0&&r.a.createElement("div",{className:"col"},p.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement("span",{className:"badge badge--primary"},r.a.createElement(i.a,{key:t,to:t},a))})))))))}}}]);