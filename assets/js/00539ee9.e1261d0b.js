"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[3959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),m=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return a?i.createElement(d,r(r({ref:t},p),{},{components:a})):i.createElement(d,r({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var m=2;m<o;m++)r[m]=a[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=a(87462),n=(a(67294),a(3905));const o={title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},r=void 0,s={permalink:"/blog/2022/08/27/traditional_or",source:"@site/blog/2022-08-27-traditional_or.md",title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",date:"2022-08-27T00:00:00.000Z",formattedDate:"August 27, 2022",tags:[{label:"Operational Research",permalink:"/blog/tags/operational-research"},{label:"Optimization",permalink:"/blog/tags/optimization"},{label:"Knapsack problem",permalink:"/blog/tags/knapsack-problem"},{label:"Solvers",permalink:"/blog/tags/solvers"}],readingTime:5.915,hasTruncateMarker:!0,authors:[{name:"Nathan Rouff",title:"Data Scientist Consultant",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},prevItem:{title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",permalink:"/blog/2022/09/06/deep_rl"},nextItem:{title:"Exploring neural ordinary differential equations for time series forecasting applications",permalink:"/blog/2022/07/11/neural_ode"}},l={authorsImageUrls:[void 0]},m=[{value:"Main steps while creating an optimization model to solve a business problem",id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem",level:2},{value:"The multi-knapsack problem",id:"the-multi-knapsack-problem",level:2},{value:"Creating the conceptual mathematical model",id:"creating-the-conceptual-mathematical-model",level:3},{value:"Translating the mathematical model into a computer program with Python-MIP",id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip",level:3},{value:"Solving the mathematical model with Python-MIP",id:"solving-the-mathematical-model-with-python-mip",level:3},{value:"Some Mathematical Optimization packages",id:"some-mathematical-optimization-packages",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:m},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"screenshot-app ",src:a(97896).Z,width:"5000",height:"3654"}))),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"In this first article is introduced a systematic way to approach and solve optimization problems. Then, the multi-knapsack problem itself is introduced. Then we apply the rules defined before on how to solve optimization problems and obtain the optimal solution to the multi-knapsack problem, formulated as a Mixed Integer problem and using Python-MIP package. Let's now introduce simple steps one can follow to approach optimization problems with optimization solvers."),(0,n.kt)("h2",{id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem"},"Main steps while creating an optimization model to solve a business problem"),(0,n.kt)("p",null,"Once a business problem that could benefit from optimization has been identified, we can define a systematic approach based on 3 steps for solving all kind of optimization problems with optimization solvers. These 3 steps are highlighted in the figure below."),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"screenshot-app",src:a(15219).Z,width:"2670",height:"567"})),(0,n.kt)("p",null,"Figure 1 : The 3 main steps for solving a business problem through optimization")),(0,n.kt)("br",null),(0,n.kt)("p",null,"In more details, these 3 steps are: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create the conceptual mathematical model")," that defines the different variables, constraints, etc. in the business problem. This step consists in writing down on paper the equations that define our problem. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Translate the conceptual mathematical model into a computer program"),". For most programming languages used for optimization, the computer program will largely resembles the mathematical equations one would write on paper.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Solve the mathematical model using a math programming solver"),". The solver available for Mathematical Programming (solvers such as GLPK, Gurobi, CPLEX...) relies on very sophisticated algorithms. Important algorithms and ideas used in these solvers are, among many others: simplex method, branch & bound, use of heuristics..."))),(0,n.kt)("p",null,"Let's see those 3 steps for the case of the multi-knapsack problem."),(0,n.kt)("h2",{id:"the-multi-knapsack-problem"},"The multi-knapsack problem"),(0,n.kt)("p",null,"The objective here is, given a set of ",(0,n.kt)("em",{parentName:"p"},"n")," items and a set of ",(0,n.kt)("em",{parentName:"p"},"m")," knapsacks, to ",(0,n.kt)("strong",{parentName:"p"},"maximize")," the total value of the items put in the knapsacks without exceeding their capacity."),(0,n.kt)("p",null,"Below,  w",(0,n.kt)("sub",null,"i")," represents the weight of item i,  p",(0,n.kt)("sub",null,"i")," the value of item i while  c",(0,n.kt)("sub",null,"j")," represents the capacity of knapsack j."),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"screenshot-app",src:a(16175).Z,width:"1306",height:"1033"})),(0,n.kt)("p",null,"Figure 2: Description of the multi-knapsack problem")),(0,n.kt)("br",null),(0,n.kt)("p",null,"The multi-knapsack is an extension of the classical knapsack problem where instead of considering only one knapsack, we consider as many as we want. This allows to easily extend the complexity of this problem."),(0,n.kt)("p",null,"While the problem is relatively easy to define mathematically, it belongs to the class of NP-hard problems. Without going into the details of what defines NP-hard problems, we can easily see that the complexity of the knapsack problems explodes when the number of knapsacks and items increases. Indeed, we have m",(0,n.kt)("sup",null,"n")," available combinations we would need to test should we want to apply a brute-force approach for solving this problem. Just with 10 knapsacks and 80 items, there are 10",(0,n.kt)("sup",null,"80")," combinations, which is the estimation of the number of atoms in the universe! And 10 knapsacks and 80 items is still quite limited... Let's now try to create the conceptual mathematical model by defining the problem with equations."),(0,n.kt)("h3",{id:"creating-the-conceptual-mathematical-model"},"Creating the conceptual mathematical model"),(0,n.kt)("p",null,"A quick translation of the multi-knapsack problem with equation can be written as the following: "),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"screenshot-app",src:a(22998).Z,width:"262",height:"161"}),"\n",(0,n.kt)("img",{alt:"screenshot-app",src:a(18005).Z,width:"201",height:"19"}))),(0,n.kt)("p",null,"Now that we managed to translate the problem into a set of equations, let's translate this mathematical model so that it is understood by a computer program. Below, we will make use of the Python package ",(0,n.kt)("a",{parentName:"p",href:"https://www.python-mip.com/"},"Python-MIP")," which is open-source and provides tools for modeling and solving Mixed-Integer Linear Programming Problems (MIP), relying on fast open source solvers."),(0,n.kt)("h3",{id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip"},"Translating the mathematical model into a computer program with Python-MIP"),(0,n.kt)("p",null,"Before solving the problem, we have to generate an instance for it (have data defining the problem). To do so, you can use the following code that will generate an instance of this problem with 40 items to store in 5 bags."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import pandas as pd\nimport numpy as np\nimport pickle\n\ndef data_generator_knapsack(number_bags, number_items, minimum_weight_item, maximum_weight_item, minimum_value_item, maximum_value_item, max_weight_bag):\n    data = {}\n    weights = np.random.randint(minimum_weight_item, maximum_weight_item, size = number_items)\n    values = np.random.randint(minimum_value_item, maximum_value_item, size = number_items)\n    data['weights'] = weights\n    data['values'] = values\n    data['items'] = list(range(len(weights)))\n    data['num_items'] = len(weights)\n    data['bins'] = list(range(number_bags))\n    data['bin_capacities'] = np.random.randint(0, max_weight_bag, size = number_bags) + np.int(np.mean(data['weights']))\n    return(data)\n\nnumber_bags = 5\nnumber_items = 40\nminimum_weight_item = 0\nmaximum_weight_item = 75\nminimum_value_item = 0\nmaximum_value_item = 75\nmax_weight_bag = 150\n\ndata = data_generator_knapsack(number_bags, number_items, minimum_weight_item, maximum_weight_item, minimum_value_item, maximum_value_item, max_weight_bag)\n")),(0,n.kt)("p",null,"Let's now import the package used to have access to the MIP solver, here using the python package Python-MIP:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"from mip import Model, xsum, maximize, BINARY\n")),(0,n.kt)("p",null,"Now, we can translate the mathematical model so that it is understood by Python-MIP. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"def mip_solve_knapsack(data):\n\n  model = Model(\"knapsack\")\n\n  x = [[model.add_var(var_type=BINARY) for i in data['items']] for j in data['bins']]\n\n  model.objective = maximize(xsum((xsum(data['values'][i] * x[j][i] for i in data['items']) for j in data['bins'])))\n\n  for j in data['bins']:\n      model += xsum(data['weights'][i] * x[j][i] for i in data['items']) <= data['bin_capacities'][j]\n\n  # Each item can be in at most one bin\n  for i in data['items']:\n      model += xsum(x[j][i] for j in data['bins']) <= 1\n\n  model.optimize()\n  \n  return(model)\n")),(0,n.kt)("p",null,"Remark how close it is from the original equations! These solvers are very powerful and yet easy to use directly in Python. The code is indeed very close to the original equations. "),(0,n.kt)("h3",{id:"solving-the-mathematical-model-with-python-mip"},"Solving the mathematical model with Python-MIP"),(0,n.kt)("p",null,"Using the ",(0,n.kt)("strong",{parentName:"p"},"mip_solve_knapsack")," function defined in the previous section, we can access to important information regarding the problem, such as the final objective value and the values of x",(0,n.kt)("sub",null,"ij")," telling us what were the best combinations of items inside knapsacks."),(0,n.kt)("h3",{id:"some-mathematical-optimization-packages"},"Some Mathematical Optimization packages"),(0,n.kt)("p",null,"In the notebook associated to this article, the package Python-MIP was used. ",(0,n.kt)("strong",{parentName:"p"},"Python-MIP")," is free, but many other packages exist for solving optimization problems on Python (and other languages of course like Julia). For instance ",(0,n.kt)("strong",{parentName:"p"},"OR-Tools")," from Google is a well-recognized free solver, with ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/optimization/introduction/overview"},"detailed documentation"),". "),(0,n.kt)("p",null,"On the other side, ",(0,n.kt)("strong",{parentName:"p"},"Gurobi")," is a very popular commercial solution for mathematical optimization and its documentation is extremely rich, with quick introductions about ",(0,n.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-basics/"},"Mathematical Programming"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Linear Programming")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Mixed-Integer Programming"),". Importantly, it has a ",(0,n.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-examples-using-the-gurobi-python-api-in-jupyter-notebook/"},"large number of modeling examples from all industry fields")," directly available on Google Colab allowing to better grasp notions of Mathematical Modelling and to improve modeling skills to tackle all kind of optimization problems with Python. This resource can be of use even if one doesn't plan to use this commercial software but rather a free package such as OR-Tools."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this article was introduced the multi-knapsack problem, an NP-complete problem, very difficult to solve when taking many items and bags. "),(0,n.kt)("p",null,"The approach to solve the multi-knapsack problem relied on Python-MIP, a free optimization package using powerful MILP solvers to solve very efficiently all kinds of optimization problems."),(0,n.kt)("p",null,"In the next part of this series on the multi-knapsack problem, well studied in the field of Operations Research and at the heart of many real optimization problems, we'll highlight how Deep Reinforcement Learning can be used in order to solve combinatorial optimization problems such as this one. Stay tuned!")))}h.isMDXComponent=!0},15219:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/3_steps_math_modelling_4-679cfdabcdf2ab022e54b439d00a8992.png"},16175:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Knapsack_problem_5-31f9629281a4c78ff57ea1b68c6f753e.png"},22998:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/equations_1-2820b99a846626f6fcc64d2dceada7cb.svg"},18005:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/equations_3-1bdaad7b88386e3cf9e22918cfb14960.svg"},97896:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/plitvice_lakes-42deebd7f534beb1bbb32a4b95939b6c.jpg"}}]);