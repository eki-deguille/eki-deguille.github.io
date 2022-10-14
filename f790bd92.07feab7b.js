(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(214)),o=["components"],l={title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (1/2)",author:"Milan Bhan",author_title:"Senior Data Science Consultant, PhD student",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/couv.jpg",tags:["NLP","Transformers","BERT","interpretability","explainability","XAI","attention"],draft:!1,description:"Two illustrations of how attention coefficients can be a source of interpretability",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"]},c={permalink:"/blog/2022/11/18/Interpretability_sentiment_analysis_part_I",editUrl:"https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/blog/2022-11-18-Interpretability_sentiment_analysis_part_I.md",source:"@site/blog/2022-11-18-Interpretability_sentiment_analysis_part_I.md",description:"Two illustrations of how attention coefficients can be a source of interpretability",date:"2022-11-18T00:00:00.000Z",tags:[{label:"NLP",permalink:"/blog/tags/nlp"},{label:"Transformers",permalink:"/blog/tags/transformers"},{label:"BERT",permalink:"/blog/tags/bert"},{label:"interpretability",permalink:"/blog/tags/interpretability"},{label:"explainability",permalink:"/blog/tags/explainability"},{label:"XAI",permalink:"/blog/tags/xai"},{label:"attention",permalink:"/blog/tags/attention"}],title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (1/2)",readingTime:5.945,truncated:!0,prevItem:{title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (2/2)",permalink:"/blog/2022/11/26/Interpretability_sentiment_analysis_part_II"},nextItem:{title:"Newsletter for September 2022",permalink:"/blog/2022/09/20/newsletter_Sept-2022"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);