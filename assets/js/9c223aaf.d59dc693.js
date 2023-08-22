"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[7513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},39842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={slug:"dash-deployment",title:"Deploying a Python Dash application for beginners",authors:["theo.alves"],header_image_url:"img/blog/dash-deployment.jpg",tags:["Industrialization"],description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Industrialization","Docker","Heroku","Python","Dash"]},i=void 0,l={permalink:"/blog/dash-deployment",source:"@site/blog/2021-10-16-dash-deployment.md",title:"Deploying a Python Dash application for beginners",description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",date:"2021-10-16T00:00:00.000Z",formattedDate:"October 16, 2021",tags:[{label:"Industrialization",permalink:"/blog/tags/industrialization"}],readingTime:4.7,hasTruncateMarker:!0,authors:[{name:"Th\xe9o Alves Da Costa",title:"Head of AI For Sustainability",url:"mailto:inno@ekimetrics.com",key:"theo.alves"}],frontMatter:{slug:"dash-deployment",title:"Deploying a Python Dash application for beginners",authors:["theo.alves"],header_image_url:"img/blog/dash-deployment.jpg",tags:["Industrialization"],description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Industrialization","Docker","Heroku","Python","Dash"]},prevItem:{title:"Solving the Traveling Salesman Problem with Reinforcement Learning",permalink:"/blog/2021/11/03/tsp"},nextItem:{title:"Welcome to the new Ekimetrics Tech website!",permalink:"/blog/welcome"}},p={authorsImageUrls:[void 0]},s=[{value:"Creating a Dash application",id:"creating-a-dash-application",level:2},{value:"Deploying your Dash application",id:"deploying-your-dash-application",level:2},{value:"Deploying on Heroku from GitHub",id:"deploying-on-heroku-from-github",level:3},{value:"Problems you can encounter",id:"problems-you-can-encounter",level:4},{value:"What Heroku is doing under the hood",id:"what-heroku-is-doing-under-the-hood",level:4},{value:"Deploying with Docker",id:"deploying-with-docker",level:3},{value:"Going further",id:"going-further",level:2},{value:"Adding databases",id:"adding-databases",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"screenshot-app ",src:a(48362).Z,width:"1050",height:"700"}))),(0,o.kt)("h2",{id:"creating-a-dash-application"},"Creating a Dash application"),(0,o.kt)("p",null,"Before deployment, the first step if of course to create your own application. ",(0,o.kt)("br",null),"\nYou can follow the guidelines in Dash official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://dash.plotly.com/installation"},"https://dash.plotly.com/installation")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dash-gallery.plotly.host/Manager/apps_data/dash-oil-and-gas/thumbnail_0a718df0-9ce7-11e9-8982-0242ac11004a.png",alt:null})),(0,o.kt)("h2",{id:"deploying-your-dash-application"},"Deploying your Dash application"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dash.plotly.com/deployment"},"https://dash.plotly.com/deployment"),"\nDash/Plotly offers a paid service to super easily deploy and manager your applications. Yet as most of it is open source, and you may want a simple thing for a prototype, you can simply deploy it in your own server."),(0,o.kt)("p",null,"Then you have several options: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Beginners - Deploy it on a simple Heroku server"),(0,o.kt)("li",{parentName:"ul"},"Advanced - Deploy it on a cloud server (AWS, GCP, Azure) with docker containers")),(0,o.kt)("h3",{id:"deploying-on-heroku-from-github"},"Deploying on Heroku from GitHub"),(0,o.kt)("p",null,"Heroku is the most simple server provider. It's even more simpleYou can create and deploy apps for free in just a few minutes. That's what we are going to do here : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create your dash app, eg ",(0,o.kt)("inlineCode",{parentName:"li"},"app.py")," (from Dash tutorial)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\n# Run this app with `python app.py` and\n# visit http://127.0.0.1:8050/ in your web browser.\n\nimport dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport plotly.express as px\nimport pandas as pd\n\nexternal_stylesheets = [\'https://codepen.io/chriddyp/pen/bWLwgP.css\']\n\napp = dash.Dash(__name__, external_stylesheets=external_stylesheets)\nserver = app.server\n\n# assume you have a "long-form" data frame\n# see https://plotly.com/python/px-arguments/ for more options\ndf = pd.DataFrame({\n    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],\n    "Amount": [4, 1, 2, 2, 4, 5],\n    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]\n})\n\nfig = px.bar(df, x="Fruit", y="Amount", color="City", barmode="group")\n\napp.layout = html.Div(children=[\n    html.H1(children=\'Hello Dash\'),\n\n    html.Div(children=\'\'\'\n        Dash: A web application framework for Python.\n    \'\'\'),\n\n    dcc.Graph(\n        id=\'example-graph\',\n        figure=fig\n    )\n])\n\nif __name__ == \'__main__\':\n    app.run_server(debug=True)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a requirements file, eg ",(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt"),". You can use tools such as ",(0,o.kt)("inlineCode",{parentName:"li"},"pipreqs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pipenv")," or other environment managers to help you create the right file. "),(0,o.kt)("li",{parentName:"ul"},"Don't forget to add if not present the requirements to ",(0,o.kt)("inlineCode",{parentName:"li"},"gunicorn")," in your requirements file"),(0,o.kt)("li",{parentName:"ul"},"Create a Procfile - it's a text file to help Heroku understand what file to be launched on the server. Write in it the following command. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"web: gunicorn app:server\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As of ",(0,o.kt)("inlineCode",{parentName:"li"},"2020-12-01"),", Dash documentation is not totally correct when it comes to deployment on Heroku, you should correctly link the server variable in Python and the declaration in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Procfile")," :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Add following line in your app.py script\nserver = app.server\n\n# Write the Procfile\n# - app refer to the file name app.py\n# - server refer to the variable name for the Flask Server \nweb: gunicorn app:server\n")),(0,o.kt)("p",null,"At the end your repo on Github should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"app.py\nProcfile\nrequirements.txt\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deploy directly on Heroku from GitHub, you can follow the instructions below"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new application\n",(0,o.kt)("img",{src:a(45032).Z,width:"1739",height:"160"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Find the right name and server region\n",(0,o.kt)("img",{src:a(57505).Z,width:"969",height:"588"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Link via github, search for your repo and click on connect\n",(0,o.kt)("img",{src:a(8396).Z,width:"1574",height:"801"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deploy manually by clicking on deploy and choosing the right github branch\n",(0,o.kt)("img",{src:a(87876).Z,width:"1353",height:"222"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can even set up a CI/CD process with auto-deploys by playing with the auto-deploy section\n",(0,o.kt)("img",{src:a(42267).Z,width:"904",height:"356"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You are all set ! Your app should be live !\n",(0,o.kt)("img",{src:a(3385).Z,width:"1148",height:"515"}),"\n"))))),(0,o.kt)("h4",{id:"problems-you-can-encounter"},"Problems you can encounter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Having your app not at the root of the repo, you can use subdir buildpack"),(0,o.kt)("li",{parentName:"ul"},"Not linking correctly your server in the Procfile"),(0,o.kt)("li",{parentName:"ul"},"Having difficulties to link with a database ")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your app does not work, you can check in the logs why it failed :\n",(0,o.kt)("img",{src:a(74209).Z,width:"1574",height:"590"}))),(0,o.kt)("h4",{id:"what-heroku-is-doing-under-the-hood"},"What Heroku is doing under the hood"),(0,o.kt)("p",null,"Heroku does a lot for us actually. It detects the technology behind the web server pushed on Heroku (Python, Node, etc...). Looks for a Procfile with instructions on how to launch the server. And knows many things on how to set it up. "),(0,o.kt)("p",null,"For example for Python servers, it will look first to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file or ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv.lock")," file. For a Node.js server it will look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and the lock file as well.  "),(0,o.kt)("h3",{id:"deploying-with-docker"},"Deploying with Docker"),(0,o.kt)("p",null,"If you want to better master what you are deploying. You may want to use Docker. It's actually universal and you'll be able to deploy it almost anywhere.",(0,o.kt)("br",null),'\nI just google searched "Dockerfile Dash" and found a suitable example as a template ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"},"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"),(0,o.kt)("br",null),"\nHow does it work? You will setup a virtually empty server with nothing but python 3.9 and the application, i.e a Container. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'FROM python:3.9\n\nENV DASH_DEBUG_MODE True\nCOPY ./app /app\nWORKDIR /app\nRUN set -ex && \\\n    pip install -r requirements.txt\nEXPOSE 8050\nCMD ["python", "app.py"]\n')),(0,o.kt)("p",null,"Using this Dockerfile you could be able to deploy anywhere from GCP to Azure or even Heroku. "),(0,o.kt)("h2",{id:"going-further"},"Going further"),(0,o.kt)("p",null,"To better deploy, it's always interesting to learn more about what you are manipulating. Here, you have to know that Dash is a wrapper for other technologies put together, and in particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flask as backend and server"),(0,o.kt)("li",{parentName:"ul"},"React as frontend"),(0,o.kt)("li",{parentName:"ul"},"Plotly (the python library) for most graphs")),(0,o.kt)("p",null,"If you want to be a Deployment ninja \ud83d\udc31\u200d\ud83d\udc64, you may find useful to learn more about Flask and webservers in general. And eventually learn about React. "),(0,o.kt)("h3",{id:"adding-databases"},"Adding databases"),(0,o.kt)("p",null,'What is recommended is to avoid storing your database in the same server. You should approach the problem with a "microservice" mindset, meaning that you should put your database on another server. '),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Indeed, it means you have to do another deployment, maybe using Docker again to expose your database correctly"),(0,o.kt)("li",{parentName:"ul"},"But, it also decouple your app in production with the database, allowing you for more modularity (requesting the database in other platforms)")))}d.isMDXComponent=!0},48362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dash-deployment-9915c614706ee5305450f6d12f8bce23.jpg"},45032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy1-3ff5f56d09525d8a6eaa1a7d28c03d2d.jpg"},57505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy2-27b1b4e8a48326566a151173de137787.jpg"},8396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy3-7baddac8cf539257b25de03c805ac72b.jpg"},87876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy4-9ce5fb1726645caa869d8457f9ac1076.jpg"},42267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy5-39060190e5604d2315b16e3faf461ca5.jpg"},74209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy6-1866d64b76ae518722783bdb6ae673f5.jpg"},3385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploy7-196c9b1582e3de2f3cb9835fd093a566.jpg"}}]);