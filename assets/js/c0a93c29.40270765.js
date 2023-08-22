"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[6398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Exploring neural ordinary differential equations for time series forecasting applications",author:"Miguel Omenaca Muro",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/neural_ode_cover.png",tags:["Time Series Forecasting","Sales Prediction","Neural Ordinary Differential Equations","Deep Learning","Newspaper Industry"],draft:!1,description:"Enhance your knowledge on Deep Learning techniques by understanding what neural ODEs are and how we could benefit from them.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Time Series Forecasting","Sales Prediction","Neural Ordinary Differential Equations","Deep Learning","Newspaper Industry"]},o=void 0,s={permalink:"/blog/2022/07/11/neural_ode",source:"@site/blog/2022-07-11-neural_ode.md",title:"Exploring neural ordinary differential equations for time series forecasting applications",description:"Enhance your knowledge on Deep Learning techniques by understanding what neural ODEs are and how we could benefit from them.",date:"2022-07-11T00:00:00.000Z",formattedDate:"July 11, 2022",tags:[{label:"Time Series Forecasting",permalink:"/blog/tags/time-series-forecasting"},{label:"Sales Prediction",permalink:"/blog/tags/sales-prediction"},{label:"Neural Ordinary Differential Equations",permalink:"/blog/tags/neural-ordinary-differential-equations"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"},{label:"Newspaper Industry",permalink:"/blog/tags/newspaper-industry"}],readingTime:10.32,hasTruncateMarker:!0,authors:[{name:"Miguel Omenaca Muro",title:"Data Scientist Consultant",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Exploring neural ordinary differential equations for time series forecasting applications",author:"Miguel Omenaca Muro",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/neural_ode_cover.png",tags:["Time Series Forecasting","Sales Prediction","Neural Ordinary Differential Equations","Deep Learning","Newspaper Industry"],draft:!1,description:"Enhance your knowledge on Deep Learning techniques by understanding what neural ODEs are and how we could benefit from them.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Time Series Forecasting","Sales Prediction","Neural Ordinary Differential Equations","Deep Learning","Newspaper Industry"]},prevItem:{title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",permalink:"/blog/2022/08/27/traditional_or"},nextItem:{title:"Newsletter for June 2022",permalink:"/blog/2022/07/05/newsletter_June-2022"}},l={authorsImageUrls:[void 0]},u=[{value:"Selling magazines",id:"selling-magazines",level:2},{value:"Introduction to neural ODEs",id:"introduction-to-neural-odes",level:2},{value:"Applications of neural ODEs",id:"applications-of-neural-odes",level:2},{value:"Results",id:"results",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2},{value:"Additional resources",id:"additional-resources",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"screenshot-app ",src:n(43859).Z,width:"815",height:"543"}))),(0,i.kt)("div",{align:"justify"},(0,i.kt)("p",null,"For decades, time series forecasting has been a popular topic among the scientific community related to data science and artificial intelligence (AI). The reason behind this is that time series, data measured over time, are omnipresent in our day-to-day life and are used in a wide range of industries. For instance, in the retail industry, forecasting is a crucial task to optimize processes and increase efficiency. Many examples can be found in the literature mainly focusing on demand forecasting ","[1]"," and sales forecasting ","[2]","."),(0,i.kt)("p",null,"In the past, retail companies have relied on traditional time series forecasting approaches based on statistics. More recently, companies and researchers have grown interest in machine learning and deep learning techniques and algorithms to predict the demand more accurately among other requirements. To evolve as a leader in data science, at Ekimetrics, we keep an eye on the state-of-the-art of time series forecasting and investigate new techniques to eventually, adopt them and improve our solutions in the long run."),(0,i.kt)("p",null,"This article will focus on our journey with ",(0,i.kt)("strong",{parentName:"p"},"neural ordinary differential equations")," (neural ODEs) applied to time series forecasting and specifically focused on a client\u2019s use case."),(0,i.kt)("h2",{id:"selling-magazines"},"Selling magazines"),(0,i.kt)("p",null,"Before entering into the subject, if you have not read our article on how we use Bayesian inference to increase our predictions of magazines sales have a look at it ",(0,i.kt)("a",{parentName:"p",href:"https://ekimetrics.github.io/blog/2022/06/14/bayesian_inference/"},"here"),". It is an interesting application of a Bayesian framework to enhance sales prediction for a publisher. Our exploration of neural ODEs focuses on the same use case."),(0,i.kt)("p",null,"In the world of newspapers and magazines, it is crucial to be able to estimate the final volume of sales for accounting and management purposes. Indeed, publishers adjust their production and distribution of issues based on these forecasts. Conventionally, the projections rely strongly on the domain expertise of the people in charge. But nowadays, with all recent advances in the field of data science and improvements with regards to data availability, publishers can leverage modern forecasting techniques to enhance their predictions.  "),(0,i.kt)("p",null,"The figure below, Fig. 1, represents the cumulative sales of a magazine composed by a set of 14 different issues. Note that the data have been anonymized for confidentiality purposes. Our task is to use the observed data, including the sales curves of all historical issues and the beginning part of the current issue\u2019s curve, to predict the final sales of the current issue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:n(31838).Z,width:"1498",height:"472"})),(0,i.kt)("div",{align:"center"}," Fig. 1: Example of magazine sales curves"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"introduction-to-neural-odes"},"Introduction to neural ODEs"),(0,i.kt)("p",null,"In this section we provide an overview of what neural ODEs are, and what makes them so special. For the curious readers, complementary resources and blog posts that present this topic in detail, are provided at the end of this article."),(0,i.kt)("p",null,"To understand neural ODEs, we need to introduce some basic concepts on neural networks (NNs). In essence, NNs are a succession of input, hidden and output layers originally inspired by the human brain. The Multilayer Perceptron (MLP) is one the most popular feedforward neural network due to its simplicity. By means of activation functions and linear combinations of the input data, these networks introduce non linearities and become universal approximators ","[3]",". The equation h(t+1) = f(ht, \u03b8t), captures the evolution of the hidden layers of a MLP network with ht referring to the previous layer and \u03b8t to a parameter of the network. Without entering too much into the details, these networks are usually trained by minimizing a loss function and backpropagation, propagating the computed error, and updating the weights accordingly."),(0,i.kt)("p",null,"What we must keep in mind here is that these networks have a limited number of layers and thus, of evaluation points. Could we achieve an infinite number of evaluation points for time continuous applications? The instinctive answer is no since we cannot have an infinite number of layers. However, we are going to review some interesting properties of residual networks (ResNet) that will help us answer this question."),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:n(44718).Z,width:"385",height:"216"})),(0,i.kt)("p",null,"Fig. 2: ResNet schema ","[4]")),(0,i.kt)("br",null),(0,i.kt)("p",null,"A ResNet is a neural network that has an architecture based on the pattern pictured in Fig. 2 which entails that the network follows the equation h",(0,i.kt)("sub",null,"t+1")," = h",(0,i.kt)("sub",null,"t")," + f(h",(0,i.kt)("sub",null,"t"),", \u03b8",(0,i.kt)("sub",null,"t"),"). This equation might be familiar to some readers with a background in mathematics since it resembles Euler\u2019s method. In short, this method is useful to solve initial value problems, a problem modelled by an ordinary differential equation with an initial condition. Interestingly, a residual network adds hidden states between the input and the output and discretizes the continuous relationship between them, which is similar to Euler's method. In ","[5]"," the authors take a different approach by considering the continuous limit of each discrete layer of the network. Thus, instead of having a discrete number of layers, the progression of the hidden states is continuous, obtaining the following equation where h(t) is the value of the hidden state evaluated for some t."),(0,i.kt)("div",{align:"center"}," d\u210e(\ud835\udc61)/\ud835\udc51\ud835\udc61 = \ud835\udc53(\u210e(\ud835\udc61), \ud835\udf03",(0,i.kt)("sub",null,"t"),", \ud835\udc61)"),(0,i.kt)("br",null),(0,i.kt)("p",null,"Then, in a neural ODE the hidden state dynamic can be parametrized by the equation above where \ud835\udc53(\u210e(\ud835\udc61), \ud835\udf03",(0,i.kt)("sub",null,"t"),", \ud835\udc61) is a neural network parametrized by \ud835\udf03",(0,i.kt)("sub",null,"t")," at layer t. Therefore, it is possible to solve this ODE by solving its integral."),(0,i.kt)("div",{align:"center"}," h(t) = \u222b f(h(t), \ud835\udf03",(0,i.kt)("sub",null,"t"),", t)"),(0,i.kt)("br",null),(0,i.kt)("p",null,"By means of a numerical ODE method, it is possible to evaluate the network at any desired depth. And thus, it is possible to approximate functions over these hidden state dynamics by using ODE solvers such as:"),(0,i.kt)("div",{align:"center"}," \u0177 = h(t",(0,i.kt)("sub",null,"1"),") = ODESolve(h(t",(0,i.kt)("sub",null,"0"),"), t",(0,i.kt)("sub",null,"0"),", t",(0,i.kt)("sub",null,"1"),", \ud835\udf03",(0,i.kt)("sub",null,"t"),", f)"),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now, if we go back to our initial question regarding the possibility of having an infinite or quasi-infinite number of evaluation points, we can state that neural ODEs enable us to achieve that Fig. 3 illustrates this idea by comparing the vector field created by a traditional residual network and an ODE network. In essence, an ODE network defines a continuous vector field since this network can be evaluated at any depth. Whereas, on the other hand, the residual network is limited to a discrete number of layers."),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:n(57443).Z,width:"472",height:"333"})),(0,i.kt)("p",null,"Fig. 3: Comparison between a ResNet and an ODE network vector fields transformations ","[5]")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Before moving on to the applications of neural ODEs, it is important to note the endeavor of performing backpropagation. Essentially, the more evaluation points you have in your network, the higher the number of intermediate forward passes to store. To overcome this, the authors of the original paper ","[5]"," which received the 2018 NeurIPS best paper award, introduced a mathematical trick known as the Adjoint method. We will not get into the details here, but you can dig deeper into this concept by checking the resources we have left at the end of this article."),(0,i.kt)("h2",{id:"applications-of-neural-odes"},"Applications of neural ODEs"),(0,i.kt)("p",null,"The main advantage of neural ODEs is the possibility of working with continuous-time series models. In addition, they are generally more memory efficient than other networks such as the MLP and can gain from adaptive computation since modern ODE solvers allow to monitor the level of error and adapt the evaluation strategy. For example, we can reduce accuracy for low power applications."),(0,i.kt)("p",null,"All these benefits make neural ODEs a great tool for applications dealing with continuous time systems, irregularly sampled data, and scalable and invertible normalizing flows. Besides, neural ODEs are very interesting for time series forecasting too. Basically, they can be used to fit time series and then extrapolate them. Since 2018, we have seen an increasing number of scientific papers presenting neural ODEs to deal with forecasting challenges in the energy ","[6]"," and the healthcare ","[7]"," sectors."),(0,i.kt)("p",null,"Coming back to our specific use case, although Fig. 1 introduced at the beginning of this article shows that applying a curve fitting model does not seem like a feasible option, we considered our sales curves as trajectories to employ neural ODE models to fit the curves and forecast the final volumes of sales. We can formulate our problem with the following equation."),(0,i.kt)("div",{align:"center"}," x\u03b8",(0,i.kt)("sub",null,"t+1")," = x\u03b8",(0,i.kt)("sub",null,"0")," + \u222b b(x\u03b8",(0,i.kt)("sub",null,"u"),", u) du"),(0,i.kt)("br",null),(0,i.kt)("p",null,"Where x is an issue belonging to a magazine and b in our case is a neural network, something resembling to b(x\u03b8",(0,i.kt)("sub",null,"u"),", u) = MLP(x\u03b8",(0,i.kt)("sub",null,"u"),"), with its corresponding parameters."),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("p",null,"Initially, we have used a standard neural ODE network to deal with our time series forecasting use case. The figure below, Fig. 4, is an animation representing the fitting of a curve of sales of a specific issue. Bear in mind that the data have been anonymized for privacy purposes."),(0,i.kt)("p",null,"In this figure, we can observe that the model is able to fit the curve successfully after some iterations. The idea then is to fit the sales curves from all historical issues and the beginning part of the current issue\u2019s curve to predict the final sales by extrapolation. Although we have obtained promising results, they are not good enough. The main reason being that neural ODEs are well suited for deterministic systems and in our case, we deal with a non-deterministic one."),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot-app",src:n(82298).Z,width:"864",height:"288"})),(0,i.kt)("p",null,"Fig. 4: Curve fitting of the sales curve of an issue")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Inspired by the ideas presented in ","[8]",", instead of a standard neural ODE network like the one introduced before, we have been recently working with stochastic differential neural networks (SDEs). SDEs are a type of continous neural network enabling to introduce a stochastic component and consequently, work with non-deterministic systems and consider external factors. We have obtained promising preliminary results with this procedure, but they require further analysis."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we have introduced you into the world of neural ordinary differential equations applied to time series forecasting. We have gone through a short theoretical explanation and presented you our exploration with neural ODEs to strengthen predictions for a magazine publisher."),(0,i.kt)("p",null,"At Ekimetrics, we accompany a large portfolio of clients across a wide range of industries to help them steer their data opportunity, build capabilities, and deploy actionable DS solutions to power up a sustainable growth. As a leader in the field of data science, we perform recurring technological watches and stay tuned on the state-of-the-art of the fields of machine learning and deep learning. As stated during this article, we are particularly interested in time series and investigate recent advances on the subject to eventually, embrace them and expand our solutions."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"[1]",' J. Wang, G. Q. Liu, and L. Liu, "A selection of advanced technologies for demand forecasting in the retail industry", ',(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/8713196"},"A Selection of Advanced Technologies for Demand Forecasting in the Retail Industry | IEEE Conference Publication | IEEE Xplore.")),(0,i.kt)("p",null,"[2]",' X. dairu and Z. Shilong, "Machine learning model for sales forecasting by using xgboost", ',(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9342304"},"Machine Learning Model for Sales Forecasting by Using XGBoost | IEEE Conference Publication | IEEE Xplore.")),(0,i.kt)("p",null,"[3]"," K. Hornik, M. Stinchcombe, H. White, \u201cMultilayer feedforward networks are universal approximators\u201d, ",(0,i.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/abs/pii/0893608089900208"},"Multilayer feedforward networks are universal approximators.")),(0,i.kt)("p",null,"[4]",' Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun, "Deep Residual Learning for Image Recognition", ',(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1512.03385"},"Deep Residual Learning for Image Recognition.")),(0,i.kt)("p",null,"[5]",' Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, David Duvenaud, "Neural ordinary differential equations", ',(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1806.07366"},"Neural Ordinary Differential Equations.")),(0,i.kt)("p",null,"[6]",' X. Xie, A. K. Parlikad, and R. Puri, "A neural ordinary differential equations based approach for demand forecasting within power grid digital twins", ',(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/8909789"},"A Neural Ordinary Differential Equations Based Approach for Demand Forecasting within Power Grid Digital Twins | IEEE Conference Publication | IEEE Xplore.")),(0,i.kt)("p",null,"[7]",' Intae Moon, Stefan Groha, Alexander Gusev, "SurvLatent ODE : A Neural ODE based time-to-event model with competing risks for longitudinal data improves cancer-associated Deep Vein Thrombosis (DVT) prediction", ',(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2204.09633.pdf"},"2204.09633.pdf (arxiv.org).")," "),(0,i.kt)("p",null,"[8]",' Xuechen Li, Ting-Kam Leonard Wong, Ricky T. Q. Chen, David Duvenaud, "Scalable Gradients for Stochastic Differential Equations", ',(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2001.01328"},"Scalable Gradients for Stochastic Differential Equations.")),(0,i.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In-depth blog post: ",(0,i.kt)("a",{parentName:"p",href:"https://jontysinai.github.io/jekyll/update/2019/01/18/understanding-neural-odes.html"},"Understanding Neural ODE's - Jonty Sinai"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Presentation on mathematics behind neural ODEs: ",(0,i.kt)("a",{parentName:"p",href:"https://voletiv.github.io/docs/presentations/20200402_Guelph_Neural_ODEs_tutorial.pdf"},"20200402_Guelph_Neural_ODEs_tutorial.pdf (voletiv.github.io)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interesting blog post: ",(0,i.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/neural-odes-breakdown-of-another-deep-learning-breakthrough-3e78c7213795"},"Neural ODEs: breakdown of another deep learning breakthrough | by Alexandr Honchar | Towards Data Science"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Neural ODEs Github repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/msurtsukov/neural-ode"},"GitHub - msurtsukov/neural-ode: Jupyter notebook with Pytorch implementation of Neural Ordinary Differential Equations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SDEs Github repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google-research/torchsde"},"GitHub - google-research/torchsde: Differentiable SDE solvers with GPU support and efficient sensitivity analysis."))))))}h.isMDXComponent=!0},82298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/curve_fitting-caed00a370c6fac7f7475e43da4b16aa.gif"},31838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_1_bis-3e321c685521a1b2a048616b9c8b7bfd.png"},44718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_2-0a89ff1fb52a6ccd12d1667b711b9f23.png"},57443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_3-2d9dce2581ec5d66cb7908b0f4c091bb.png"},43859:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/neural_ode_cover-d93f3ae869aeba9fcfc6c2b522a9665e.png"}}]);