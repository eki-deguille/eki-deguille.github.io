(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(220)),i=["components"],l={slug:"dash-deployment",title:"Deploying a Python Dash application for beginners",author:"Th\xe9o Alves Da Costa",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/dash-deployment.jpg",tags:["Industrialization"],description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Industrialization","Docker","Heroku","Python","Dash"]},p={permalink:"/blog/dash-deployment",source:"@site/blog/2021-10-16-dash-deployment.md",description:"Learn the basics of application deployment from simple examples on Heroku to creating Docker containers",date:"2021-10-16T00:00:00.000Z",tags:[{label:"Industrialization",permalink:"/blog/tags/industrialization"}],title:"Deploying a Python Dash application for beginners",readingTime:4.675,truncated:!0,prevItem:{title:"Solving the Traveling Salesman Problem with Reinforcement Learning",permalink:"/blog/2021/11/03/tsp"},nextItem:{title:"Welcome to the new Ekimetrics Tech website!",permalink:"/blog/welcome"}},c=[{value:"Creating a Dash application",id:"creating-a-dash-application",children:[]},{value:"Deploying your Dash application",id:"deploying-your-dash-application",children:[{value:"Deploying on Heroku from GitHub",id:"deploying-on-heroku-from-github",children:[]},{value:"Deploying with Docker",id:"deploying-with-docker",children:[]}]},{value:"Going further",id:"going-further",children:[{value:"Adding databases",id:"adding-databases",children:[]}]}],s={toc:c};function u(e){var t=e.components,l=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"creating-a-dash-application"},"Creating a Dash application"),Object(o.b)("p",null,"Before deployment, the first step if of course to create your own application. ",Object(o.b)("br",null),"\nYou can follow the guidelines in Dash official documentation ",Object(o.b)("a",{parentName:"p",href:"https://dash.plotly.com/installation"},"https://dash.plotly.com/installation")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://dash-gallery.plotly.host/Manager/apps_data/dash-oil-and-gas/thumbnail_0a718df0-9ce7-11e9-8982-0242ac11004a.png",alt:null})),Object(o.b)("h2",{id:"deploying-your-dash-application"},"Deploying your Dash application"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://dash.plotly.com/deployment"},"https://dash.plotly.com/deployment"),"\nDash/Plotly offers a paid service to super easily deploy and manager your applications. Yet as most of it is open source, and you may want a simple thing for a prototype, you can simply deploy it in your own server."),Object(o.b)("p",null,"Then you have several options: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Beginners - Deploy it on a simple Heroku server"),Object(o.b)("li",{parentName:"ul"},"Advanced - Deploy it on a cloud server (AWS, GCP, Azure) with docker containers")),Object(o.b)("h3",{id:"deploying-on-heroku-from-github"},"Deploying on Heroku from GitHub"),Object(o.b)("p",null,"Heroku is the most simple server provider. It's even more simpleYou can create and deploy apps for free in just a few minutes. That's what we are going to do here : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create your dash app, eg ",Object(o.b)("inlineCode",{parentName:"li"},"app.py")," (from Dash tutorial)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n\n# Run this app with `python app.py` and\n# visit http://127.0.0.1:8050/ in your web browser.\n\nimport dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport plotly.express as px\nimport pandas as pd\n\nexternal_stylesheets = [\'https://codepen.io/chriddyp/pen/bWLwgP.css\']\n\napp = dash.Dash(__name__, external_stylesheets=external_stylesheets)\nserver = app.server\n\n# assume you have a "long-form" data frame\n# see https://plotly.com/python/px-arguments/ for more options\ndf = pd.DataFrame({\n    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],\n    "Amount": [4, 1, 2, 2, 4, 5],\n    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]\n})\n\nfig = px.bar(df, x="Fruit", y="Amount", color="City", barmode="group")\n\napp.layout = html.Div(children=[\n    html.H1(children=\'Hello Dash\'),\n\n    html.Div(children=\'\'\'\n        Dash: A web application framework for Python.\n    \'\'\'),\n\n    dcc.Graph(\n        id=\'example-graph\',\n        figure=fig\n    )\n])\n\nif __name__ == \'__main__\':\n    app.run_server(debug=True)\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a requirements file, eg ",Object(o.b)("inlineCode",{parentName:"li"},"requirements.txt"),". You can use tools such as ",Object(o.b)("inlineCode",{parentName:"li"},"pipreqs"),", ",Object(o.b)("inlineCode",{parentName:"li"},"pipenv")," or other environment managers to help you create the right file. "),Object(o.b)("li",{parentName:"ul"},"Don't forget to add if not present the requirements to ",Object(o.b)("inlineCode",{parentName:"li"},"gunicorn")," in your requirements file"),Object(o.b)("li",{parentName:"ul"},"Create a Procfile - it's a text file to help Heroku understand what file to be launched on the server. Write in it the following command. ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"web: gunicorn app:server\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As of ",Object(o.b)("inlineCode",{parentName:"li"},"2020-12-01"),", Dash documentation is not totally correct when it comes to deployment on Heroku, you should correctly link the server variable in Python and the declaration in the ",Object(o.b)("inlineCode",{parentName:"li"},"Procfile")," :")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# Add following line in your app.py script\nserver = app.server\n\n# Write the Procfile\n# - app refer to the file name app.py\n# - server refer to the variable name for the Flask Server \nweb: gunicorn app:server\n")),Object(o.b)("p",null,"At the end your repo on Github should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"app.py\nProcfile\nrequirements.txt\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Deploy directly on Heroku from GitHub, you can follow the instructions below"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a new application\n",Object(o.b)("img",{src:n(363).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Find the right name and server region\n",Object(o.b)("img",{src:n(364).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Link via github, search for your repo and click on connect\n",Object(o.b)("img",{src:n(365).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Deploy manually by clicking on deploy and choosing the right github branch\n",Object(o.b)("img",{src:n(366).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can even set up a CI/CD process with auto-deploys by playing with the auto-deploy section\n",Object(o.b)("img",{src:n(367).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You are all set ! Your app should be live !\n",Object(o.b)("img",{src:n(368).default}),"\n"))))),Object(o.b)("h4",{id:"problems-you-can-encounter"},"Problems you can encounter"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Having your app not at the root of the repo, you can use subdir buildpack"),Object(o.b)("li",{parentName:"ul"},"Not linking correctly your server in the Procfile"),Object(o.b)("li",{parentName:"ul"},"Having difficulties to link with a database ")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If your app does not work, you can check in the logs why it failed :\n",Object(o.b)("img",{src:n(369).default})))),Object(o.b)("h4",{id:"what-heroku-is-doing-under-the-hood"},"What Heroku is doing under the hood"),Object(o.b)("p",null,"Heroku does a lot for us actually. It detects the technology behind the web server pushed on Heroku (Python, Node, etc...). Looks for a Procfile with instructions on how to launch the server. And knows many things on how to set it up. "),Object(o.b)("p",null,"For example for Python servers, it will look first to find a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file or ",Object(o.b)("inlineCode",{parentName:"p"},"pipenv.lock")," file. For a Node.js server it will look at the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and the lock file as well.  "),Object(o.b)("h3",{id:"deploying-with-docker"},"Deploying with Docker"),Object(o.b)("p",null,"If you want to better master what you are deploying. You may want to use Docker. It's actually universal and you'll be able to deploy it almost anywhere.",Object(o.b)("br",null),'\nI just google searched "Dockerfile Dash" and found a suitable example as a template ',Object(o.b)("a",{parentName:"p",href:"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"},"https://github.com/jucyai/docker-dash/blob/master/Dockerfile"),Object(o.b)("br",null),"\nHow does it work? You will setup a virtually empty server with nothing but python 3.9 and the application, i.e a Container. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-docker"},'FROM python:3.9\n\nENV DASH_DEBUG_MODE True\nCOPY ./app /app\nWORKDIR /app\nRUN set -ex && \\\n    pip install -r requirements.txt\nEXPOSE 8050\nCMD ["python", "app.py"]\n')),Object(o.b)("p",null,"Using this Dockerfile you could be able to deploy anywhere from GCP to Azure or even Heroku. "),Object(o.b)("h2",{id:"going-further"},"Going further"),Object(o.b)("p",null,"To better deploy, it's always interesting to learn more about what you are manipulating. Here, you have to know that Dash is a wrapper for other technologies put together, and in particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Flask as backend and server"),Object(o.b)("li",{parentName:"ul"},"React as frontend"),Object(o.b)("li",{parentName:"ul"},"Plotly (the python library) for most graphs")),Object(o.b)("p",null,"If you want to be a Deployment ninja \ud83d\udc31\u200d\ud83d\udc64, you may find useful to learn more about Flask and webservers in general. And eventually learn about React. "),Object(o.b)("h3",{id:"adding-databases"},"Adding databases"),Object(o.b)("p",null,'What is recommended is to avoid storing your database in the same server. You should approach the problem with a "microservice" mindset, meaning that you should put your database on another server. '),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Indeed, it means you have to do another deployment, maybe using Docker again to expose your database correctly"),Object(o.b)("li",{parentName:"ul"},"But, it also decouple your app in production with the database, allowing you for more modularity (requesting the database in other platforms) ")))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy1-3ff5f56d09525d8a6eaa1a7d28c03d2d.jpg"},364:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy2-27b1b4e8a48326566a151173de137787.jpg"},365:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy3-7baddac8cf539257b25de03c805ac72b.jpg"},366:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy4-9ce5fb1726645caa869d8457f9ac1076.jpg"},367:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy5-39060190e5604d2315b16e3faf461ca5.jpg"},368:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy7-196c9b1582e3de2f3cb9835fd093a566.jpg"},369:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy6-1866d64b76ae518722783bdb6ae673f5.jpg"}}]);