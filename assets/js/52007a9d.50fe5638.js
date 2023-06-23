"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/slovenia_bled_lake.jpg",tags:["Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on an approach based on two famous reinforcement learning algorithms: Q-Learning and Policy Gradient.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"]},o=void 0,l={permalink:"/blog/2022/09/06/deep_rl",source:"@site/blog/2022-09-06-deep_rl.md",title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on an approach based on two famous reinforcement learning algorithms: Q-Learning and Policy Gradient.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"Operational Research",permalink:"/blog/tags/operational-research"},{label:"Optimization",permalink:"/blog/tags/optimization"},{label:"Knapsack problem",permalink:"/blog/tags/knapsack-problem"},{label:"Deep Reinforcement Learning",permalink:"/blog/tags/deep-reinforcement-learning"}],readingTime:13.585,hasTruncateMarker:!0,authors:[{name:"Nathan Rouff",title:"Data Scientist Consultant",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/slovenia_bled_lake.jpg",tags:["Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on an approach based on two famous reinforcement learning algorithms: Q-Learning and Policy Gradient.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"]},prevItem:{title:"Newsletter for September 2022",permalink:"/blog/2022/09/20/newsletter_Sept-2022"},nextItem:{title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",permalink:"/blog/2022/08/27/traditional_or"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0}}]);