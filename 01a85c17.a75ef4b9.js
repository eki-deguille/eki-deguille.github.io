(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{104:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(112),i=t(108),c=t(109),s=t(70),m=t.n(s);function o(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(c.a)(m.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},n.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var c=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return n.a.createElement("div",{key:t},n.a.createElement("h3",null,t),r.map((function(e){return n.a.createElement(i.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(o,{sidebar:t})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},c)))))}}}]);