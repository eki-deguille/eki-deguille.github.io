(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy1-3ff5f56d09525d8a6eaa1a7d28c03d2d.jpg"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy2-27b1b4e8a48326566a151173de137787.jpg"},168:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy3-7baddac8cf539257b25de03c805ac72b.jpg"},169:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy4-9ce5fb1726645caa869d8457f9ac1076.jpg"},170:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy5-39060190e5604d2315b16e3faf461ca5.jpg"},171:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy7-196c9b1582e3de2f3cb9835fd093a566.jpg"},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/deploy6-1866d64b76ae518722783bdb6ae673f5.jpg"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),i=(a(0),a(110)),r=["components"],l={slug:"dash-deployment",title:"Deploying a Python Dash application for beginners",author:"Th\xe9o Alves Da Costa",author_title:null,author_url:"mailto:theo.alvesdacosta@ekimetrics.com",header_image_url:"img/blog/dash-deployment.jpg",tags:["Industrialization"],description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Industrialization","Docker","Heroku","Python","Dash"]},p={permalink:"/blog/dash-deployment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-09-02-dash-deployment.md",source:"@site/blog/2021-09-02-dash-deployment.md",description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",date:"2021-09-02T00:00:00.000Z",tags:[{label:"Industrialization",permalink:"/blog/tags/industrialization"}],title:"Deploying a Python Dash application for beginners",readingTime:4.675,truncated:!0,prevItem:{title:"Solving the Traveling Salesman Problem with Reinforcement Learning",permalink:"/blog/2021/09/15/tsp"},nextItem:{title:"Welcome to the new Ekimetrics Tech website!",permalink:"/blog/welcome"}},s=[{value:"Creating a Dash application",id:"creating-a-dash-application",children:[]},{value:"Deploying your Dash application",id:"deploying-your-dash-application",children:[{value:"Deploying on Heroku from GitHub",id:"deploying-on-heroku-from-github",children:[]},{value:"Deploying with Docker",id:"deploying-with-docker",children:[]}]},{value:"Going further",id:"going-further",children:[{value:"Adding databases",id:"adding-databases",children:[]}]}],c={toc:s};function b(e){var t=e.components,l=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(n.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"creating-a-dash-application"},"Creating a Dash application"),Object(i.b)("p",null,"Before deployment, the first step if of course to create your own application. ",Object(i.b)("br",null),"\nYou can follow the guidelines in Dash official documentation ",Object(i.b)("a",{parentName:"p",href:"https://dash.plotly.com/installation"},"https://dash.plotly.com/installation")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://dash-gallery.plotly.host/Manager/apps_data/dash-oil-and-gas/thumbnail_0a718df0-9ce7-11e9-8982-0242ac11004a.png",alt:null})),Object(i.b)("h2",{id:"deploying-your-dash-application"},"Deploying your Dash application"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://dash.plotly.com/deployment"},"https://dash.plotly.com/deployment"),"\nDash/Plotly offers a paid service to super easily deploy and manager your applications. Yet as most of it is open source, and you may want a simple thing for a prototype, you can simply deploy it in your own server."),Object(i.b)("p",null,"Then you have several options: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Beginners - Deploy it on a simple Heroku server"),Object(i.b)("li",{parentName:"ul"},"Advanced - Deploy it on a cloud server (AWS, GCP, Azure) with docker containers")),Object(i.b)("h3",{id:"deploying-on-heroku-from-github"},"Deploying on Heroku from GitHub"),Object(i.b)("p",null,"Heroku is the most simple server provider. It's even more simpleYou can create and deploy apps for free in just a few minutes. That's what we are going to do here : "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create your dash app, eg ",Object(i.b)("inlineCode",{parentName:"li"},"app.py")," (from Dash tutorial)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\n# Run this app with `python app.py` and\n# visit http://127.0.0.1:8050/ in your web browser.\n\nimport dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport plotly.express as px\nimport pandas as pd\n\nexternal_stylesheets = [\'https://codepen.io/chriddyp/pen/bWLwgP.css\']\n\napp = dash.Dash(__name__, external_stylesheets=external_stylesheets)\nserver = app.server\n\n# assume you have a "long-form" data frame\n# see https://plotly.com/python/px-arguments/ for more options\ndf = pd.DataFrame({\n    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],\n    "Amount": [4, 1, 2, 2, 4, 5],\n    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]\n})\n\nfig = px.bar(df, x="Fruit", y="Amount", color="City", barmode="group")\n\napp.layout = html.Div(children=[\n    html.H1(children=\'Hello Dash\'),\n\n    html.Div(children=\'\'\'\n        Dash: A web application framework for Python.\n    \'\'\'),\n\n    dcc.Graph(\n        id=\'example-graph\',\n        figure=fig\n    )\n])\n\nif __name__ == \'__main__\':\n    app.run_server(debug=True)\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a requirements file, eg ",Object(i.b)("inlineCode",{parentName:"li"},"requirements.txt"),". You can use tools such as ",Object(i.b)("inlineCode",{parentName:"li"},"pipreqs"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pipenv")," or other environment managers to help you create the right file. "),Object(i.b)("li",{parentName:"ul"},"Don't forget to add if not present the requirements to ",Object(i.b)("inlineCode",{parentName:"li"},"gunicorn")," in your requirements file"),Object(i.b)("li",{parentName:"ul"},"Create a Procfile - it's a text file to help Heroku understand what file to be launched on the server. Write in it the following command. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"web: gunicorn app:server\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As of ",Object(i.b)("inlineCode",{parentName:"li"},"2020-12-01"),", Dash documentation is not totally correct when it comes to deployment on Heroku, you should correctly link the server variable in Python and the declaration in the ",Object(i.b)("inlineCode",{parentName:"li"},"Procfile")," :")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"# Add following line in your app.py script\nserver = app.server\n\n# Write the Procfile\n# - app refer to the file name app.py\n# - server refer to the variable name for the Flask Server \nweb: gunicorn app:server\n")),Object(i.b)("p",null,"At the end your repo on Github should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"app.py\nProcfile\nrequirements.txt\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Deploy directly on Heroku from GitHub, you can follow the instructions below"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create a new application\n",Object(i.b)("img",{src:a(166).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the right name and server region\n",Object(i.b)("img",{src:a(167).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Link via github, search for your repo and click on connect\n",Object(i.b)("img",{src:a(168).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Deploy manually by clicking on deploy and choosing the right github branch\n",Object(i.b)("img",{src:a(169).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can even set up a CI/CD process with auto-deploys by playing with the auto-deploy section\n",Object(i.b)("img",{src:a(170).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You are all set ! Your app should be live !\n",Object(i.b)("img",{src:a(171).default}),"\n"))))),Object(i.b)("h4",{id:"problems-you-can-encounter"},"Problems you can encounter"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Having your app not at the root of the repo, you can use subdir buildpack"),Object(i.b)("li",{parentName:"ul"},"Not linking correctly your server in the Procfile"),Object(i.b)("li",{parentName:"ul"},"Having difficulties to link with a database ")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If your app does not work, you can check in the logs why it failed :\n",Object(i.b)("img",{src:a(172).default})))),Object(i.b)("h4",{id:"what-heroku-is-doing-under-the-hood"},"What Heroku is doing under the hood"),Object(i.b)("p",null,"Heroku does a lot for us actually. It detects the technology behind the web server pushed on Heroku (Python, Node, etc...). Looks for a Procfile with instructions on how to launch the server. And knows many things on how to set it up. "),Object(i.b)("p",null,"For example for Python servers, it will look first to find a ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.txt")," file or ",Object(i.b)("inlineCode",{parentName:"p"},"pipenv.lock")," file. For a Node.js server it will look at the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and the lock file as well.  "),Object(i.b)("h3",{id:"deploying-with-docker"},"Deploying with Docker"),Object(i.b)("p",null,"If you want to better master what you are deploying. You may want to use Docker. It's actually universal and you'll be able to deploy it almost anywhere.",Object(i.b)("br",null),'\nI just google searched "Dockerfile Dash" and found a suitable example as a template ',Object(i.b)("a",{parentName:"p",href:"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"},"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"),Object(i.b)("br",null),"\nHow does it work? You will setup a virtually empty server with nothing but python 3.9 and the application, i.e a Container. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-docker"},'FROM python:3.9\n\nENV DASH_DEBUG_MODE True\nCOPY ./app /app\nWORKDIR /app\nRUN set -ex && \\\n    pip install -r requirements.txt\nEXPOSE 8050\nCMD ["python", "app.py"]\n')),Object(i.b)("p",null,"Using this Dockerfile you could be able to deploy anywhere from GCP to Azure or even Heroku. "),Object(i.b)("h2",{id:"going-further"},"Going further"),Object(i.b)("p",null,"To better deploy, it's always interesting to learn more about what you are manipulating. Here, you have to know that Dash is a wrapper for other technologies put together, and in particular:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Flask as backend and server"),Object(i.b)("li",{parentName:"ul"},"React as frontend"),Object(i.b)("li",{parentName:"ul"},"Plotly (the python library) for most graphs")),Object(i.b)("p",null,"If you want to be a Deployment ninja \ud83d\udc31\u200d\ud83d\udc64, you may find useful to learn more about Flask and webservers in general. And eventually learn about React. "),Object(i.b)("h3",{id:"adding-databases"},"Adding databases"),Object(i.b)("p",null,'What is recommended is to avoid storing your database in the same server. You should approach the problem with a "microservice" mindset, meaning that you should put your database on another server. '),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Indeed, it means you have to do another deployment, maybe using Docker again to expose your database correctly"),Object(i.b)("li",{parentName:"ul"},"But, it also decouple your app in production with the database, allowing you for more modularity (requesting the database in other platforms) ")))}b.isMDXComponent=!0}}]);