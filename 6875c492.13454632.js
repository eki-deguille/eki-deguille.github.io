(window.webpackJsonp=window.webpackJsonp||[]).push([[66,14,17],{135:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(247),c=t(240),i=t(263);a.default=function(e){var a=e.metadata,t=e.items,r=(e.sidebar,a.allTagsPath),s=a.name,o=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--12"},n.a.createElement("h1",null,o," ",function(e,a){return e>1?a+"s":a}(o,"post"),' tagged with "',s,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement("div",{className:"row"},t.map((function(e){var a=e.content;return n.a.createElement("div",{className:"col col--4"},n.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null)))}))))))))}},246:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},248:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(245),c=t.n(l),i=t(242),s=t(21),o=t(244);a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),m=Object(r.useState)(!1),u=m[0],d=m[1],h=Object(i.useHistory)(),g=Object(s.default)(),f=g.siteConfig,p=void 0===f?{}:f,b=g.isClient,E=void 0!==b&&b,v=p.baseUrl,y=Object(o.usePluginData)("docusaurus-lunr-search"),_=function(){a.current||(Promise.all([fetch(""+v+y.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+v+y.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(166),t.e(171)]).then(t.bind(null,249)),t.e(0).then(t.t.bind(null,54,7))]).then((function(e){var a=e[0],t=e[1],r=e[2].default;0!==a.length&&(!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=v+t.url;document.createElement("a").href=r,h.push(r)}})}(a,t,r),d(!0))})),a.current=!0)},N=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return E&&_(),n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:N,onKeyDown:N,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:u?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:_,onMouseOver:_,onFocus:N,onBlur:N,ref:l,disabled:!u}))}},263:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(246),c=t(23),i=t(240),s=t(243),o=t(60),m=t.n(o),u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){e.children;var a=e.frontMatter,t=e.metadata,r=e.truncated,o=e.isBlogPostPage,d=void 0!==o&&o,h=t.date,g=t.permalink,f=t.tags,p=t.readingTime,b=a.author,E=a.title,v=(a.image,a.keywords),y=a.description,_=a.header_image_url;_=Object(s.a)(_);var N,w,k,S,j,x=a.author_url||a.authorURL,O=(a.author_title||a.authorTitle,a.author_image_url||a.authorImageURL),T=Object(s.a)(_,{absolute:!0});return n.a.createElement("div",{className:"card",style:{borderRadius:10}},n.a.createElement("div",{className:"card__image"},n.a.createElement("img",{src:_,alt:"Image alt text",title:"Logo Title Text 1"})),n.a.createElement("div",{className:"card__body"},n.a.createElement(c.a,null,v&&v.length&&n.a.createElement("meta",{name:"keywords",content:v.join(",")}),T&&n.a.createElement("meta",{property:"og:image",content:T}),T&&n.a.createElement("meta",{name:"twitter:image",content:T}),T&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E})),n.a.createElement("article",null,(N=d?"h1":"h2",w=h.substring(0,10).split("-"),k=w[0],S=u[parseInt(w[1],10)-1],j=parseInt(w[2],10),n.a.createElement("header",null,n.a.createElement(N,{style:{fontFamily:"InterCustom",fontSize:16},className:Object(l.a)("margin-bottom--sm",m.a.blogPostTitle)},d?E:n.a.createElement(i.a,{to:g},E)),n.a.createElement("p",{style:{fontFamily:"InterCustom",fontSize:14,lineHeight:1.2}},y),n.a.createElement("div",{className:"avatar margin-vert--md"},O&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:x,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:O,alt:b})),n.a.createElement("div",{className:"avatar__intro"},b&&n.a.createElement(n.a.Fragment,null,n.a.createElement("time",{dateTime:h,className:m.a.blogPostDate},S," ",j,", ",k," ",p&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(p)," min read"))))))),(f.length>0||r)&&n.a.createElement("footer",{className:"row margin-vert--sm"},f.length>0&&n.a.createElement("div",{className:"col"},f.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement("span",{className:"badge badge--primary"},n.a.createElement(i.a,{key:t,to:t},a))})))))))}}}]);