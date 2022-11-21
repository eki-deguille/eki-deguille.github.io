(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),i=n(7),r=(n(0),n(220)),o=["components"],s={title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (2/2)",author:"Milan Bhan",author_title:"Senior Data Science Consultant, PhD student",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/interpretability_articles_2.jpg",tags:["NLP","Transformers","BERT","interpretability","explainability","XAI","attention"],draft:!1,description:"Two illustrations of how attention coefficients can be a source of interpretability.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"]},l={permalink:"/blog/2022/10/26/Interpretability_sentiment_analysis_II",source:"@site/blog/2022-10-26-Interpretability_sentiment_analysis_II.md",description:"Two illustrations of how attention coefficients can be a source of interpretability.",date:"2022-10-26T00:00:00.000Z",tags:[{label:"NLP",permalink:"/blog/tags/nlp"},{label:"Transformers",permalink:"/blog/tags/transformers"},{label:"BERT",permalink:"/blog/tags/bert"},{label:"interpretability",permalink:"/blog/tags/interpretability"},{label:"explainability",permalink:"/blog/tags/explainability"},{label:"XAI",permalink:"/blog/tags/xai"},{label:"attention",permalink:"/blog/tags/attention"}],title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (2/2)",readingTime:6.115,truncated:!0,prevItem:{title:"Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models",permalink:"/blog/2022/11/10/creative_execution_and_marketing_effectiveness_part_I"},nextItem:{title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (1/2)",permalink:"/blog/2022/10/18/Interpretability_sentiment_analysis_I"}},c=[{value:"Summary",id:"summary",children:[]},{value:"Work presented in the previous article",id:"work-presented-in-the-previous-article",children:[]},{value:"Interpreting through counterfactual generation",id:"interpreting-through-counterfactual-generation",children:[]},{value:"Next step",id:"next-step",children:[]},{value:"References",id:"references",children:[]}],u={toc:c};function h(e){var t=e.components,s=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("div",{align:"justify"},Object(r.b)("p",null,"We propose to illustrate how far BERT-type models can be considered as interpretable by design. We show that the attention coefficients specific to BERT architecture constitute a particularly rich piece of information that can be used to perform interpretability. There are mainly two ways to do interpretability: attribution and generation of counterfactual examples. In a first article, we showed how attention coefficients could be the basis of an attribution interpretability method. Here we propose to evaluate how they can also be used to set up counterfactuals. ")),Object(r.b)("div",{align:"justify"},Object(r.b)("h2",{id:"work-presented-in-the-previous-article"},"Work presented in the previous article"),Object(r.b)("p",null,"Previously, the BERT ","[1]"," and DistilBERT ","[2]"," models have been mobilized to tackle the well-known problem of sentiment analysis. In particular, we have shown that the BERT and DistilBERT models contain within their architecture attention coefficients that can be at the heart of an attribution interpretability method. Starting from an initial text, a visualization of the weight assignment method was proposed. The more red the color, the higher the associated attention coefficient. "),Object(r.b)("p",null," ",Object(r.b)("img",{alt:"screenshot-app",src:n(345).default})),Object(r.b)("div",{align:"center"}," Figure 1 - Attention-Based token importance"),Object(r.b)("p",null,"\xa0"),Object(r.b)("p",null,' We saw that the word groups "',Object(r.b)("em",{parentName:"p"},"favorite movie"),'", "',Object(r.b)("em",{parentName:"p"},"it just never gets old"),'", "',Object(r.b)("em",{parentName:"p"},"performance brings tears"),'", or "',Object(r.b)("em",{parentName:"p"},"it is believable and startling"),'" stood out. This explained well why the algorithm evaluated the review as positive and what was the semantic field at the root of this prediction. This work was done using the Hugging Face transformers library ',"[3]","."),Object(r.b)("h2",{id:"interpreting-through-counterfactual-generation"},"Interpreting through counterfactual generation"),Object(r.b)("p",null,'Another way to do interpretability is to generate counterfactual examples. According to Judea Pearl, counterfactual "involves answering questions which ask what might have been, had circumstances been different\u201d ',"[4]",". Thus, the idea is to understand a prediction by generating a counterfactual example, resulting in an opposite prediction. In the context of natural language processing, it is therefore a matter of changing the right words in the review. In order to generate a counterfactual example, we propose the following methodology:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Compute the attention coefficients of the tokens in a text corpus on each attention layer (6). The text corpus size must be statistically significant ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Perform token clustering based on their 6-dimensional representation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Detect clusters associated with positively and negatively charged sentiment words")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Replace the tokens with the highest average attention with their "opposite token" in their "opposite cluster"\nThis approach allows us to validate the interpretative strength of the tokens put forward by the attention coefficients, while illustrating what a close review would have been with an opposite sentiment.\nWe apply the methodology on a corpus of 1000 reviews. The clustering method used is the hierarchical ascending classification (HAC) and gives 3 clusters. The obtained clusters and the counterfactual generation procedure can be represented in 2 dimensions as follows:'),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("img",{alt:"screenshot-app",src:n(346).default})),Object(r.b)("div",{align:"center"}," Figure 2 - Token clusters & replacements"))),Object(r.b)("p",null,"We then generate the counterfactual example of the review tested earlier by changing 2 words: "),Object(r.b)("div",{align:"center"},"delight \u27a1 torment",Object(r.b)("p",null,"favorite \u27a1 worst")),Object(r.b)("p",null,"This gives us the following counterfactual example:"),Object(r.b)("p",null,"\u201c",Object(r.b)("em",{parentName:"p"},"Probably my all time worst movie a story of selflessness sacrifice and dedication to a noble cause but its not preachy or boring . it just never gets old despite my having seen it some 15 or more times in the last 25 years . paul lukas performance brings tears to my eyes and bette davis in one of her very few truly sympathetic roles is a torment. the kids are as grandma says more like dressedup midgets than children but that only makes them more fun to watch . and the mothers slow awakening to whats happening in the world and under her own roof is believable and startling . if i had a dozen thumbs they\u2019d all be up for this movie"),'".'),Object(r.b)("p",null,'As the text is quite long, 2 tokens are not enough to change the feeling associated with the review. The probability score nevertheless drops significantly by 0.3pts.\nOne way to assess the quality of the generated counterfactual examples is to evaluate the proportion of reviews in a corpus whose associated sentiment has changed. The result can be represented as a "counterfactual confusion matrix" as follows:'),Object(r.b)("p",null,'One way to assess the quality of the generated counterfactual examples is to evaluate the proportion of reviews in a corpus whose associated sentiment has changed. The result can be represented as a "counterfactual confusion matrix" as follows:'),Object(r.b)("p",null," ",Object(r.b)("img",{alt:"screenshot-app",src:n(347).default})),Object(r.b)("div",{align:"center"}," Table 1 - Counterfactual confusion matrix example"),Object(r.b)("p",null,"Where :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"X",Object(r.b)("sub",null,"11")," represents the share of reviews whose initial associated sentiment and the sentiment of the counterfactual example are positive; sentiment has remained the same "),Object(r.b)("li",{parentName:"ul"},"X",Object(r.b)("sub",null,"12")," represents the share of reviews whose sentiment changed from positive to negative; sentiment did change "),Object(r.b)("li",{parentName:"ul"},"X",Object(r.b)("sub",null,"21")," represents the share of reviews whose sentiment changed from negative to positive; sentiment changed well"),Object(r.b)("li",{parentName:"ul"},"X",Object(r.b)("sub",null,"22")," represents the share of reviews whose initial associated sentiment and the sentiment of the counterfactual example are negative; sentiment has remained the same")),Object(r.b)("p",null,'We compute the "counterfactual confusion matrix" on the same text corpus that enabled us to perform clustering, picking 5 tokens for each review. The result is given below:'),Object(r.b)("p",null," ",Object(r.b)("img",{alt:"screenshot-app",src:n(348).default})),Object(r.b)("div",{align:"center"}," Table 2 - Actual counterfactual confusion matrix"),Object(r.b)("p",null,"\xa0"),"Thus, we see that changing the 5 tokens with the highest average attention produces a change in sentiment perception in 44% of cases. In particular, the rate of sentiment change for reviews initially perceived as positive is 31% while the rate of sentiment change for reviews initially perceived as negative is 53%. The change from negative to positive seems to be better achieved with our method.",Object(r.b)("p",null,'We have shown that attention coefficients can be a source of interpretability. Used in the right way, the attention coefficients allow the detection of tokens with high predictive value. They can also be used to generate counterfactual examples in order to better understand what the sentence should have been in order to be associated with an opposite sentiment. The interest of the attention coefficients is reinforced by the "counterfactual confusion matrix": The high transformation rate of the reviews\' sentiments shows that the tokens selected thanks to the attention are strongly meaningful.'),Object(r.b)("h2",{id:"next-step"},"Next step"),Object(r.b)("p",null,'We plan to test other ways to generate counterfactual examples. One way would be to take advantage of the way DistilBert has been trained: the mask language modeling (MLM). The idea would be to mask the tokens with high average attention, and replace them with the tokens with the highest softmax in the "opposite cluster". This would ensure the grammatical correctness of the generated counterfactual example. Finally, the generation of counterfactual examples can have other applications than interpretability. In particular, it becomes possible to perform data augmentation in order to give more examples to a model. It can mitigate biases by balancing the sentiments of biased discriminated populations. This would improve fairness indicators while not degrading accuracy. '),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("p",null,"[1]"," VASWANI, Ashish, SHAZEER, Noam, PARMAR, Niki, et al. Attention is all you need. Advances in neural information processing systems, 2017, vol. 30."),Object(r.b)("p",null,"[2]"," SANH, Victor, DEBUT, Lysandre, CHAUMOND, Julien, et al. DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter. arXiv preprint arXiv:1910.01108, 2019."),Object(r.b)("p",null,"[3]"," Hugging face library ",Object(r.b)("a",{parentName:"p",href:"https://huggingface.co/"},"https://huggingface.co/")),Object(r.b)("p",null,"[4]"," PEARL, Judea et MACKENZIE, Dana. The book of why: the new science of cause and effect. Basic books, 2018")))}h.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),b=a,f=h["".concat(o,".").concat(b)]||h[b]||p[b]||r;return n?i.a.createElement(f,s(s({ref:t},c),{},{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},345:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_2-fc95973e15821ef99dbc2fd6e4a5b6c8.jpg"},346:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_3-094ab2c3d6b69a58223f9a733aef845b.jpg"},347:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_4-91c11a737d5e41b98a8657cd3bb17de7.jpg"},348:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_5-de802c493bd17b6c40e5c5714774720e.jpg"}}]);