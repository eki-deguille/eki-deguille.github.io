"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[4865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"Customer Journey Clustering - How to use sequential modeling techniques to handle customer journey data",author:"Sabri Belli",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/customer_journey.jfif",tags:["Clustering","Autoencoders","Churn","Interpretability"],draft:!1,description:"Enrich your understanding of customer journeys through clustering using  image embedding, autoencoders and unsupervised learning.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Clustering","Machine Learning","Neural Networks","K-means","Autoencoders","Churn","Shapley values","Interpretability","Data Science for business"]},a=void 0,s={permalink:"/blog/2021/12/22/cjc",source:"@site/blog/2021-12-22-cjc.md",title:"Customer Journey Clustering - How to use sequential modeling techniques to handle customer journey data",description:"Enrich your understanding of customer journeys through clustering using  image embedding, autoencoders and unsupervised learning.",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"Clustering",permalink:"/blog/tags/clustering"},{label:"Autoencoders",permalink:"/blog/tags/autoencoders"},{label:"Churn",permalink:"/blog/tags/churn"},{label:"Interpretability",permalink:"/blog/tags/interpretability"}],readingTime:11.6,hasTruncateMarker:!0,authors:[{name:"Sabri Belli",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Customer Journey Clustering - How to use sequential modeling techniques to handle customer journey data",author:"Sabri Belli",author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/customer_journey.jfif",tags:["Clustering","Autoencoders","Churn","Interpretability"],draft:!1,description:"Enrich your understanding of customer journeys through clustering using  image embedding, autoencoders and unsupervised learning.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Clustering","Machine Learning","Neural Networks","K-means","Autoencoders","Churn","Shapley values","Interpretability","Data Science for business"]},prevItem:{title:"Hackathon Stories - Ensuring access to affordable and clean energy",permalink:"/blog/2022/01/06/hackathon"},nextItem:{title:"Introduction to Pyepidemics - epidemiological modeling in Python",permalink:"/blog/introduction-pyepidemics"}},l={authorsImageUrls:[void 0]},u=[{value:"Enriching understanding of customer journeys through clustering",id:"enriching-understanding-of-customer-journeys-through-clustering",level:2},{value:"Advancing methodologies - Creating groups of similar journeys through image embedding, autoencoders and unsupervised learning",id:"advancing-methodologies---creating-groups-of-similar-journeys-through-image-embedding-autoencoders-and-unsupervised-learning",level:2},{value:"Step 1: Reducing the dimensions of our dataset",id:"step-1-reducing-the-dimensions-of-our-dataset",level:3},{value:"Step 2: Encoding and creating images to represent journeys",id:"step-2-encoding-and-creating-images-to-represent-journeys",level:3},{value:"Step 3: Clustering customer journey \u201cimages\u201d to identify standard paths",id:"step-3-clustering-customer-journey-images-to-identify-standard-paths",level:3},{value:"Making the customer journey analysis easier to perform - taking advantage of a reduced number of journeys",id:"making-the-customer-journey-analysis-easier-to-perform---taking-advantage-of-a-reduced-number-of-journeys",level:2},{value:"Leveraging the Customer Journey Clustering - three ways of improving customer-centric strategy",id:"leveraging-the-customer-journey-clustering---three-ways-of-improving-customer-centric-strategy",level:2},{value:"Improving websites",id:"improving-websites",level:3},{value:"Building audiences",id:"building-audiences",level:3},{value:"Improve churn prediction",id:"improve-churn-prediction",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"screenshot-app ",src:n(95883).Z,width:"1121",height:"793"}))),(0,o.kt)("div",{align:"justify"},(0,o.kt)("h2",{id:"enriching-understanding-of-customer-journeys-through-clustering"},"Enriching understanding of customer journeys through clustering"),(0,o.kt)("p",null,"Analyzing customer website behaviour is an essential step towards understanding the ways in which customers perceive and interact with a brand\u2019s products and services. Methods for analyzing these online interactions have improved in sophistication and depth of insight offered in recent years meaning many traditional methods, such as journey mapping now fall short. Exploring Customer Journeys, whilst more complex, offers brands the opportunity to dive deeper and obtain more granular insights that can then be used to optimise and improve the experience of future customers."),(0,o.kt)("p",null,"Employing advanced methodologies is not only beneficial, but it has also become a necessary action for any business that wants to explore the increasingly complex customer journeys possible on modern websites. To provide some context to this challenge - when investigating this possibility for one of our clients, a global leader in the telecom industry, we quickly realized that given the number of possible actions on their website (about 1,760), performing standard analysis would be overwhelming. It would, in fact, raise the number of potential journeys to something of the order of 10",(0,o.kt)("sup",null,"4900"),". To put this number into perspective, the number of atoms in the universe is of the order of 10",(0,o.kt)("sup",null,"100"),". A simple method of analysing customer journeys is mapping. Essentially creating a visual representation of every touchpoint your customers have with you, creating a fluid timeline from how you initially engaged them to their first purchase and tracking the ongoing relationship.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2026 it would raise the number of possible journeys to something of the order of 10",(0,o.kt)("sup",null,"4900"),". To put this number into perspective, the number of atoms in the universe is of the order of 10",(0,o.kt)("sup",null,"100"),".")),(0,o.kt)("h2",{id:"advancing-methodologies---creating-groups-of-similar-journeys-through-image-embedding-autoencoders-and-unsupervised-learning"},"Advancing methodologies - Creating groups of similar journeys through image embedding, autoencoders and unsupervised learning"),(0,o.kt)("p",null,"Many businesses are adapting strategic models to emphasise customer-centricity and build up their online presence. Websites, therefore, become a powerful asset in understanding customer behaviour through the data that they generate. And analyzing this data becomes a potential source of insight to improve future interactions with the customer base, driving loyalty and higher conversion. Journey mapping and other traditional methods can provide fast and high-level customer insight, which can be an important first step in making use of this asset. However, they often fall short as the numbers of potential journeys increase exponentially. "),(0,o.kt)("p",null,"Journey clustering is a more advanced approach that uses algorithms to analyse all journeys by identifying groups of customers who interact with the website in similar ways. In doing so, we identify patterns in customer behaviour and begin to understand the motivations behind their actions.  This type of analysis can be used by businesses to personalise their websites and improve customer experience. Ekimetrics' innovative approach specifically uses advanced encoding and machine learning methods, as well as clustering algorithms to make sense of the complex digital world."),(0,o.kt)("p",null,"To address this challenge our approach requires three key steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reducing the dimensions of our customer journey dataset")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creating image-like representations of customer journeys; one image represents one customer journey")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Applying clustering algorithms on images to create groups of users with similar behaviours. For each cluster, we are then able to define a \u201cstandard journey\u201d."))),(0,o.kt)("h3",{id:"step-1-reducing-the-dimensions-of-our-dataset"},"Step 1: Reducing the dimensions of our dataset"),(0,o.kt)("p",null,"Analyzing customer journeys is a difficult task that can lead to memory allocation errors, primarily due to high data diversity. Even for less sophisticated brands, the number of parameters feeding into a customer journey analysis model can quickly become unmanageable due to the sheer size of data needing to be analysed. "),(0,o.kt)("p",null,"For example, the following features can be tracked: the URL of the pages visited, time spent on one page, overall duration on the website, user clicks, and many more.  The temptation is to add as much detail as possible, but more variables create more noise and lengthening computation time. "),(0,o.kt)("p",null,"A solution to this problem is to identify the most relevant variables - with respect to the business question we want to answer - to take forward through feature selection, these metrics can then be aggregated into a single data structure. This process serves two purposes: firstly reducing the size and complexity of our inputs and ensuring the outputs are directed towards the business objectives and free of unnecessary noise."),(0,o.kt)("h3",{id:"step-2-encoding-and-creating-images-to-represent-journeys"},"Step 2: Encoding and creating images to represent journeys"),(0,o.kt)("p",null,"Customer Journeys are path-dependent processes that describe customers\u2019 interactions with different touchpoints, for example, all actions on a website leading up to purchase. To analyse these relationships we need to manipulate datasets to represent online journeys but also translate them into something that can be easily interpreted and modelled."),(0,o.kt)("p",null,"To do this and ensure no information is lost we create a 3D embedding \u2018image\u2019 that merges all this data into a single structure through the following processes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Touchpoints that a customer has interacted with are represented in columns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The order in which interactions happen is represented in rows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A vector describing the quality of the customer interaction (e.g. time spent/number of clicks\u2026)"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(37398).Z,width:"1177",height:"485"})),(0,o.kt)("div",{align:"center"}," Building our 3D embedding through an iterative process"),(0,o.kt)("br",null),(0,o.kt)("p",null,"The 3 parts for building our 3D embedding highlighted in the figure above are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Given n, the number of possible interactions on the platform, it is possible to build a vector V=(1,n) representing all actions that a customer can perform. At a particular stage t, it is possible to fill V with \u201c0\u201c or \u201c1\u201d depending on the customer\u2019s action: if the i",(0,o.kt)("sup",null,"th")," action has been performed at stage t, set V(1,i)=1 , otherwise V(1,i)=0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is then possible to replicate this process at every stage of the customer\u2019s journey in order to build a matrix M(l,n) where every line l represents the lth action performed by the customer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally, adding an indicator of the journey\u2019s quality consists of replacing the 0 & 1 in the previous matrix, with a vector of values describing the interactions."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98005).Z,width:"921",height:"334"})),(0,o.kt)("div",{align:"center"}," Example of an image decomposition through RGB channels"),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Colourized pictures can be decomposed into Red, Green and Blue monochromatic sub-pictures.\nIn our case, we can draw a parallel between the different indicators describing the interactions and the colourized levels of an image.")),(0,o.kt)("h3",{id:"step-3-clustering-customer-journey-images-to-identify-standard-paths"},"Step 3: Clustering customer journey \u201cimages\u201d to identify standard paths"),(0,o.kt)("p",null,"In order to apply a clustering algorithm first, we had to clean and apply pre-processing to our data. We then had to control the dimensions in order to keep the number of variables below a defined threshold (we chose ~log #observations). To achieve such control we used autoencoder neural networks."),(0,o.kt)("p",null,"The goal of such algorithm is to learn a semantic representation by extracting the relevant signals from a given set of observations. This is a dimension reduction method that enables us to perform non-linear transformations. In other words autoencoders enable us to turn our inputs into meaningful and compressed data by getting rid of the non relevant information."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"PCA is another such dimension reduction method that performs linear transformations.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34739).Z,width:"1615",height:"536"})),(0,o.kt)("div",{align:"center"}," Using a convolutional autoencoder to compress customer journeys "),(0,o.kt)("br",null),(0,o.kt)("p",null," The above figure shows how an autoencoder performs on a dimension reduction problem. First, the input signal is compressed over the blue layers to reach a compressed representation (represented by the Dense layer). The signal is reconstructed using the green layers to then give the output. ",(0,o.kt)("strong",{parentName:"p"},"The goal is to have similar inputs and outputs while controlling the size of the Dense layer.")),(0,o.kt)("p",null,"The above architecture is different from the classic convolutional autoencoders (classic autoencoders involve a succession of convolution and pooling layers for the encoding part, and upsampling layers for the decoding part). The architecture we used relies on convolution layers, and on deconvolution layers rather than upsampling ones. Since deconvolution layers are trainable (meaning that they depend on learnable parameters), and upsampling ones are not, this architecture can learn more complex transformations than a classic convolutional autoencoder of the same depth."),(0,o.kt)("p",null," ",(0,o.kt)("em",{parentName:"p"},"This architecture is inspired from the one described in this ",(0,o.kt)("a",{parentName:"em",href:"https://xifengguo.github.io/papers/ICONIP17-DCEC.pdf"},"article about Deep Clustering")),"."),(0,o.kt)("p",null,"Once we had completed the dimension reduction, we need to apply a clustering solution on the compressed customer journeys. We then assigned each group of similar customer journeys to a representative standard journey."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"A word about clustering")),(0,o.kt)("p",{parentName:"admonition"},"A clustering process consists of building groups of observations (e.g. customer journeys) based on their characteristics. The key components of the clustering process are:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Building groups containing similar observations: we talk about intra-class variance minimization."),(0,o.kt)("li",{parentName:"ul"},"Building groups that are different from each other: we talk about inter-class variance maximization.")),(0,o.kt)("p",{parentName:"admonition"},"Clustering tasks rely on unlabelled data (such learning tasks are known as \u2018unsupervised learning\u2019).")),(0,o.kt)("h2",{id:"making-the-customer-journey-analysis-easier-to-perform---taking-advantage-of-a-reduced-number-of-journeys"},"Making the customer journey analysis easier to perform - taking advantage of a reduced number of journeys"),(0,o.kt)("p",null,"Performing a clustering algorithm on Customer Journeys aims to reduce the complexity of the analysis through the creation of groups with similar journeys. The analysis is easier to perform as it becomes possible to focus only on the representations of each group, instead of analyzing every single path. This method drastically reduces the number of journeys that require our attention. It also becomes possible to highlight complex similarities or patterns when creating these clusters."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Once the clusters are created, each of them is assigned to a standard journey (e.g. when using k-means, these standard journey are called centroids).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96812).Z,width:"1199",height:"446"})),(0,o.kt)("div",{align:"center"}," Example of standard journeys "),(0,o.kt)("br",null),(0,o.kt)("p",null,"The example above shows three of these standard journeys. We can already see some interesting information and differences between the clusters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customers in the Standard journey #1 group complete more actions compared to #2 and #3.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All three standard journeys have different starting and ending pages that correspond to the first and last rows in the pictures). By looking at these standard journeys, at a glance we can already spot some initial differences between the clusters. "))),(0,o.kt)("p",null,"Note that deeper analyses can be performed on these journeys by looking at the non-embedded data."),(0,o.kt)("h2",{id:"leveraging-the-customer-journey-clustering---three-ways-of-improving-customer-centric-strategy"},"Leveraging the Customer Journey Clustering - three ways of improving customer-centric strategy"),(0,o.kt)("p",null,"We believe that this solution has several uses to improving the way businesses operate by better understanding customer behaviour, forming a stronger view of the customer lifetime value, and improving the user experience and conversion rate."),(0,o.kt)("h3",{id:"improving-websites"},"Improving websites"),(0,o.kt)("p",null,"We can use customer journey clustering to build a representative journey (using the centroid of each cluster), establishing the usual actions a user performs between touchpoint A (e.g. website\u2019s homepage) and touchpoint B (e.g. website\u2019s purchasing page). These typical journeys help gain a better understanding of the customers\u2019 experiences, allowing us to identify ways to improve the website. "),(0,o.kt)("p",null,"For example, it will help brands optimise the groups of products shown at the top of a landing page."),(0,o.kt)("h3",{id:"building-audiences"},"Building audiences"),(0,o.kt)("p",null,"By understanding the size and similarities between groups that interact with our website Customer Journey Clustering is also a way to create specific audiences. It then allows brands to tailor their activity to engage with these specific audiences, improving the overall experience. "),(0,o.kt)("p",null,"For example, if clusters 1 and 2 appear similar, but cluster 1 has a higher conversion rate than cluster 2, then analyzing the behaviours from cluster 1 may help us understand how to better retarget cluster 2. "),(0,o.kt)("p",null,"These insights also make it possible to redirect customers through an optimal action that will drive more conversions."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We could go a step further by creating customer conversion scores based on their journey. These scores could then be used to build an optimized communication strategy, leading to the next optimal action (i.e. increase or reduce media spend, depending on the score). ")),(0,o.kt)("h3",{id:"improve-churn-prediction"},"Improve churn prediction"),(0,o.kt)("p",null,"Another use case to Customer Journey clustering is evaluating churn and when customers are likely to shop with a competitor or stop ordering from us. When journeys are associated to a churn score, it becomes possible to create a predictive model that can be used to identify the groups that are more inclined to churn."),(0,o.kt)("p",null,"Following the training of the model, the learnings could be applied to the standard journeys associated with each cluster, outputting a global churn score per cluster. These scores can then be evaluated and compared to other groups to better manage expected orders and improve communications with at-risk customers. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since a churn predictive model such as this is trained on the 3D embedded customer journeys, one can expect it to be capable of spotting complex churn patterns involving huge sequences of actions, or time spent per action.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"At Ekimetrics we believe that customer journey clustering can help enhance the customer experience and increase customer lifetime value. We also know that with customer behaviours changing rapidly, an approach such as this provides a flexible solution that can translate into actionable insights for any business. "),(0,o.kt)("p",null,"However, complexity is not always the answer. A good model should tell a compelling and comprehensive story, but increased complexity must be accompanied by an effort to improve interpretability and should showcase enhanced benefits for business application."),(0,o.kt)("p",null,"The customer journey is still a challenge for every business globally. We do believe that there is no \xab plug and play \xbb answer and each solution needs to be built for the problem at hand. For us, intelligent data science means developing integrated approaches and leveraging different methods to help make brighter business decisions."),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("p",null,"To give you more details, if we take an example where a user can perform up to 10 different actions on a website, the number of possible journeys is 9,864,100."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Given n the number of possible interactions, the number of possible journeys is given by the sum from 1 to n of the number of permutation of n.")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xifeng Guo, Xinwang Liu, En Zhu, and Jianping Yin. ",(0,o.kt)("a",{parentName:"li",href:"https://xifengguo.github.io/papers/ICONIP17-DCEC.pdf"},"Deep Clustering with Convolutional\nAutoencoders")))))}h.isMDXComponent=!0},37398:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Image_1-f51932e54a6f74dbb70d7de7c389ac0f.png"},98005:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Image_2-163fab723ca3e6737cbf9a587ffb2a88.png"},34739:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Image_3-142efcbabc575d028c9301768810ce8f.png"},96812:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Image_4-87162fb7366cd46a150c4d3f96db2334.png"},95883:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/customer_journey-6dafdaf917880f96d89f1e7349911266.jfif"}}]);