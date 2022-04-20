(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(168)),o=["components"],l={title:"Deploying your Data Science app to the Cloud",author:"Axel Richier",author_title:"Tech Lead Data Engineering & Architecture",author_url:"mailto:axel.richier@ekimetrics.com",header_image_url:"./img/blog/annie-spratt-unsplash.jpg",tags:["DevOps","DataOps","Containers","CI/CD","Azure","Docker"],draft:!1,description:"Let's explore how we, at Ekimetrics, automate the deployment of our data apps on the cloud. This article will gather elements from our internal & external workshops presented at Datacraft and also the video presenting some docker best practices for industrialization. ",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Engineering","App and Web Development","Data Science for business"]},c={permalink:"/blog/2022/04/21/docker",editUrl:"https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/blog/2022-04-21-docker.md",source:"@site/blog/2022-04-21-docker.md",description:"Let's explore how we, at Ekimetrics, automate the deployment of our data apps on the cloud. This article will gather elements from our internal & external workshops presented at Datacraft and also the video presenting some docker best practices for industrialization. ",date:"2022-04-21T00:00:00.000Z",tags:[{label:"DevOps",permalink:"/blog/tags/dev-ops"},{label:"DataOps",permalink:"/blog/tags/data-ops"},{label:"Containers",permalink:"/blog/tags/containers"},{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"Azure",permalink:"/blog/tags/azure"},{label:"Docker",permalink:"/blog/tags/docker"}],title:"Deploying your Data Science app to the Cloud",readingTime:10.79,truncated:!0,nextItem:{title:"Newsletter for March 2022",permalink:"/blog/2022/03/30/newsletter_March-2022"}},s=[{value:"Data Science storytelling with Streamlit",id:"data-science-storytelling-with-streamlit",children:[{value:"Running the app",id:"running-the-app",children:[]}]},{value:"Docker, the cloudy whale",id:"docker-the-cloudy-whale",children:[{value:"Creating your container",id:"creating-your-container",children:[]},{value:"Efficient Build Instructions",id:"efficient-build-instructions",children:[]}]},{value:"Ship it to the Cloud !",id:"ship-it-to-the-cloud-",children:[{value:"Log into Azure",id:"log-into-azure",children:[]},{value:"Container registry",id:"container-registry",children:[]},{value:"Linux App Service Plan",id:"linux-app-service-plan",children:[]},{value:"The Web App",id:"the-web-app",children:[]}]},{value:"Let&#39;s Automate!",id:"lets-automate",children:[{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]}]},{value:"What&#39;s next ?",id:"whats-next-",children:[{value:"Alternatives",id:"alternatives",children:[]}]},{value:"Credits",id:"credits",children:[]}],p={toc:s};function b(e){var t=e.components,l=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"tldr"},"TL;DR"),Object(i.b)("p",null,"Using optimized containers images in your favourite CI/CD pipeline will help you deploy your Data Science app quickly & easily. Check out the replay of our ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=C7v5lY2G4Os"},"workshop")," at Datacraft and our Mastercraft video about",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lkL3Ve7sDfc&t=97s&ab_channel=datacraft"}," container best practices"),".  "),Object(i.b)("h2",{id:"data-science-storytelling-with-streamlit"},"Data Science storytelling with Streamlit"),Object(i.b)("p",null,"Over the past year, ",Object(i.b)("a",{parentName:"p",href:"https://streamlit.io/"},"Streamlit")," has become one of our favourite tools to share data insights through a web app. It's a low-code, data science oriented Python framework that makes your scripts shine in a web app. You can use it to quickly build beautiful visualizations but as data is even better when shared, we would like to help you make it easily accessible to your teammates and colleagues. We will deploy one of the apps in the Streamlit Gallery : ",Object(i.b)("a",{parentName:"p",href:"https://github.com/streamlit/demo-uber-nyc-pickups/"},"NYC Uber Ridesharing Data"),"."),Object(i.b)("h3",{id:"running-the-app"},"Running the app"),Object(i.b)("p",null,"Let's keep it simple and follow these steps to get the code and use venv to create a virtual environment with the following steps:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-zsh"},"> git clone git@github.com:streamlit/demo-uber-nyc-pickups.git\n> cd demo-uber-nyc-pickups\n> py -3.8 -m venv .venv\n> .venv/scripts/activate\n> pip install -r requirements.txt\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We are showcasing ",Object(i.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"venv")," here as it is included in Python itself. We invite you to explore other tools such as ",Object(i.b)("a",{parentName:"p",href:"https://python-poetry.org/"},"Poetry"),", ",Object(i.b)("a",{parentName:"p",href:"https://pipenv.pypa.io/en/latest/"},"pipenv")," or ",Object(i.b)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," depending on your needs and preferences and to always make use of them, especially when collaborating on multiple projects as it will save you from conflicts in your installations."))),Object(i.b)("p",null,"Now, you should be able to run it locally:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"streamlit run index.py \n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"screenshot-app",src:a(288).default})),Object(i.b)("h2",{id:"docker-the-cloudy-whale"},"Docker, the cloudy whale"),Object(i.b)("p",null,"Docker is one of the most popular containerization tools and is widely used in the context of cloud-based solutions. In this article, we will review how to set up your environment so that you can leverage this tool and level up your development workflow! "),Object(i.b)("p",null,"The advantage we will explore in this article is the ability to package your environment with all its dependencies and be 99.99% sure that it will be able to run on your target environment. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"If it runs on Docker, it will run everywhere." - one hopeful DataOps')),Object(i.b)("p",null,"You can safely share your app and be sure that it will run in the same conditions as you worked on and ensure reproducibility of your results. "),Object(i.b)("h3",{id:"creating-your-container"},"Creating your container"),Object(i.b)("h4",{id:"write-dockerfile"},"Write Dockerfile"),Object(i.b)("p",null,"The Dockerfile is the recipe of your container. It contains all the instructions to produce & reproduce it identically everywhere it will be run: on another laptop, maybe with a different OS, in the cloud."),Object(i.b)("p",null,"Some quick definitions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Docker image is the result of the build of the Dockerfile."),Object(i.b)("li",{parentName:"ul"},"The Docker container is the result of running the image."),Object(i.b)("li",{parentName:"ul"},"You can pull and push images to a container registry.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Docker definitions schema",src:a(289).default})),Object(i.b)("h4",{id:"choosing-the-base-image"},"Choosing the base image"),Object(i.b)("p",null,"It always starts with a ",Object(i.b)("strong",{parentName:"p"},"FROM")," instruction that defines what is the base image which can be either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a linux-based OS: ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/ubuntu/library/ubuntu/latest/images/sha256-31cd7bbfd36421dfd338bceb36d803b3663c1bfa87dfe6af7ba764b5bf34de05?context=explore"},"ubuntu"),", ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/debian/library/debian/stable/images/sha256-7ec7bef742f919f7cc88f41b598ceeb6b74bcb446e9ce1d2d7c31eb26ccba624?context=explore"},"debian"),", ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/centos/library/centos/latest/images/sha256-a1801b843b1bfaf77c501e7a6d3f709401a1e0c83863037fa3aab063a7fdb9dc?context=explore"},"centos"),"..."),Object(i.b)("li",{parentName:"ul"},"an OS with preinstalled tools: ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/python/library/python/3.8/images/sha256-71d10e809efb1733e2743fb7be3417db18070e10a2276e727216f245f7418592?context=explore"},"python-3.8"),", ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/mongo/library/mongo/5.0.7/images/sha256-5b5263a7d25d06d5149904eaaacdb359edcd4f26a3d971265f85362dd2406655?context=explore"},"mongo-5.0.7"),", ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/layers/node/library/node/17.9.0/images/sha256-c1336669570df673e44d5a2152eb4eff99f4c23bb3d19361c69f861b1bd5ffd3?context=explore"},"node-17.9.0")),Object(i.b)("li",{parentName:"ul"},"a ready-to-use image of a project like the ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/r/docker/getting-started"},"Docker Tutorial"),".")),Object(i.b)("p",null,"Choosing your base image is important as it can help you reduce the amount of steps to get ready. If you chose Ubuntu as your base image for a Python project, you will need to write the instructions to install the Python version you want to install and your image will also come with many other packages that are preinstalled in the OS that you may not need for your projet. This is why Python images are available. It comes with Python already installed and some images (like slim images) also remove packages that aren't necessary for Python development. This strongly impacts the size of your image as shown here:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Python Docker images size comparison",src:a(290).default}),"\nThese are official Docker images and depending on which version you pull, you can see the size difference is quite noticeable."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"python\xa03.8 is almost 1GB."),Object(i.b)("li",{parentName:"ul"},"python 3.8-slim reduces it by 86%."),Object(i.b)("li",{parentName:"ul"},"python 3.8-alpine even goes down to <50MB.")),Object(i.b)("p",null,"Alpine is not recommended for Python development as standard PyPi wheels don't work on Alpine and you have to compile them for every package, which can lead to additional research to properly achieve it. In some instances, compiling can also be very lengthy, like matplotlib that takes more than 25min to build:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"matplotlib-build-alpine",src:a(291).default})),Object(i.b)("p",null,"Nobody ain't got time for that. "),Object(i.b)("h3",{id:"efficient-build-instructions"},"Efficient Build Instructions"),Object(i.b)("p",null,"So let's build our image using a small, ready-to-python image like ",Object(i.b)("inlineCode",{parentName:"p"},"python:3.8-slim"),". We first need to install all our app requirements. So we add our ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.txt")," file and install just like we would do locally :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3.8-slim\n\n# We place ourself in a dedicated folder\nWORKDIR /app\n# Installing requirements\nADD ./requirements.txt /app/requirements.txt\nRUN pip3 install -r requirements.txt --no-cache-dir\n")),Object(i.b)("p",null,"Adding the file alone and installing the requirements right after allows you to create a layer that will be cached and you will not have to reuse this step in a future build. It is generally a good practice to use the cache when in development mode as you don't want to spend 10 minutes at every build of your requirements (you know it can take a while). The way Docker cache works is that by default it will reuse the highest unmodified layers."),Object(i.b)("p",null,Object(i.b)("img",{alt:"docker-cache-example",src:a(292).default})),Object(i.b)("p",null,"Here are the commands that generate a layer and which you want to be able to cache and/or gather in a single instruction."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"FROM")," creates a layer from the base image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"COPY")," adds files from your Docker client\u2019s current directory."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RUN")," builds your application with make."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CMD")," specifies what command to run within the container.")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},"Source")),Object(i.b)("p",null,"Then, we add the different required files with the ",Object(i.b)("em",{parentName:"p"},"ADD")," or ",Object(i.b)("em",{parentName:"p"},"COPY")," instructions. In our example, we need the python main code, the data and one image."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Dockerfile"},"ADD streamlit_app.py  uber-raw-data-sep14.csv.gz  uber_demo.png /app/\n")),Object(i.b)("p",null,"To access the app, we need to open port 8051 on the container. Otherwise, even if the app is running, it will not be accessible from outside the container by a browser. Instruction is :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Dockerfile"},"EXPOSE 8051\n")),Object(i.b)("p",null,"The last instruction is the ",Object(i.b)("em",{parentName:"p"},"RUN"),", which tells Docker which command needs to be run at the start of the container. For us, it means starting the Streamlit app with the command ",Object(i.b)("inlineCode",{parentName:"p"},"streamlit run /index.py"),", which in Docker syntax is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Dockerfile"},'CMD ["streamlit", "run" ,"/index.py"]\n')),Object(i.b)("p",null,"The final Dockerfile should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM python:3.8-slim\n\nWORKDIR /app\n\nEXPOSE 8501\n\nADD requirements.txt /app/requirements.txt\nRUN pip install -r requirements.txt\n\nADD streamlit_app.py  uber-raw-data-sep14.csv.gz  uber_demo.png /app/\n\nCMD ["streamlit","run","streamlit_app.py"]\n')),Object(i.b)("h4",{id:"run-your-streamlit-container"},"Run your Streamlit container"),Object(i.b)("p",null,"To build your image, just run the command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker build --tag ekilab-demo-container .\n")),Object(i.b)("p",null,"Once built, you can run the container with the command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker run -dp 8501:8501 ekilab-demo-container\n")),Object(i.b)("p",null,"Your app should now be running and available at ",Object(i.b)("a",{parentName:"p",href:"http://localhost:8501"},"http://localhost:8501"),"."),Object(i.b)("h4",{id:"live-reload"},"Live Reload"),Object(i.b)("p",null,"The issue with the current setup is that if you make a change to your app, you will need to rebuild and re-run the container to see the changes in your browser. We don't want to rebuild the whole environment, and to do that we will use the ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume")," feature of Docker, and make it easy with ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),".\nDocker-compose is a powerful tool to orchestrate multiple containers. But in our case, we will only use it to make our life easier. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.9"\nservices:\n  ekilab-demo-container: \n    build: .\n    ports:\n      - "8501:8501"\n    volumes:\n      - ./:/app \n')),Object(i.b)("p",null,"Now, you only need to remember one single command: ",Object(i.b)("inlineCode",{parentName:"p"},"docker compose up"),". It will build your image, run it with the correct parameters and link it to the correct volume."),Object(i.b)("h2",{id:"ship-it-to-the-cloud-"},"Ship it to the Cloud !"),Object(i.b)("p",null,"If you don't have an Azure account, you can create one for ",Object(i.b)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/free/"},"free")," and get 200$ of credits for trying out the platform. "),Object(i.b)("h3",{id:"log-into-azure"},"Log into Azure"),Object(i.b)("p",null,"Log into your account using the Azure CLI with the ",Object(i.b)("inlineCode",{parentName:"p"},"az login")," command.\nThen, we will need a container registry. At Ekimetrics, we usually build our infrastructure using an Infrastructure-As-Code tool such as ",Object(i.b)("a",{parentName:"p",href:"https://terraform.io"},"Terraform"),". But for the sake of simplicity, let's use simple CLI\xa0commands to create our resources."),Object(i.b)("h3",{id:"container-registry"},"Container registry"),Object(i.b)("p",null,"The container registry will store the different versions of our container. It can also be used to store other images. You can consider it as your private DockerHub."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az acr create --name ekilabhub --resource-group ekimetrics-demo --sku basic --admin-enabled true\n")),Object(i.b)("h3",{id:"linux-app-service-plan"},"Linux App Service Plan"),Object(i.b)("p",null,"To run our app, we need a Linux-based resource. This is what the App Service Plan offers.\nB1 is a free instance that you can use for your small apps and Proof Of Concept."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az appservice plan create --resource-group ekimetrics-demo -n ekimetrics-lasp -l westeurope --is-linux --sku B1\n")),Object(i.b)("p",null,"Now, we have several options :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Option 1 - build the image locally and push it to the container registry"),Object(i.b)("li",{parentName:"ul"},"Option 2 - build the image directly from the registry"),Object(i.b)("li",{parentName:"ul"},"Option 3 - build and push the image from a CI/CD pipeline")),Object(i.b)("p",null,"Let's try :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# log into the container registry\ndocker login ekilabhub.azurecr.io --username ekilabhub --password its4secr\u20act!\n\n# Option 1 - push the new Docker image to the registry\ndocker push ekilabhub.azurecr.io/ekilab/ekilab-demo-container:latest\n\n# Option 2 - directly build on Azure Container Registry\naz acr build --registry ekilabhub --resource-group ekimetrics-demo-rg --image ekilab-demo-container .\n")),Object(i.b)("h3",{id:"the-web-app"},"The Web App"),Object(i.b)("p",null,"Finally we can create the web app, based on our previously created App Service Plan, and by retrieving the image from the Container Registry."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az webapp create --resource-group ekimetrics-demo-rg -p ekimetrics-lasp -n ekilab-demo-app -i ekilabhub.azurecr.io/ekilab/ekilab-demo-container:latest\n")),Object(i.b)("h2",{id:"lets-automate"},"Let's Automate!"),Object(i.b)("p",null,"It's all been fun but we don't want to do this every time we update the code. It would be easy to make a mistake and you may want to collaborate with other Data Scientists on your team and have their updates deployed without your help!"),Object(i.b)("p",null,Object(i.b)("img",{alt:"automate-all-the-things",src:a(293).default})),Object(i.b)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),Object(i.b)("p",null,"In this example we are using ",Object(i.b)("a",{parentName:"p",href:"https://bitbucket.org/product/fr/features/pipelines"},"Bitbucket Pipelines")," to automate these deployment steps but the logic is very similar in other tools such as ",Object(i.b)("a",{parentName:"p",href:"https://dev.azure.com/"},"Azure DevOps"),", ",Object(i.b)("a",{parentName:"p",href:"https://cloud.google.com/build"},"Cloud Build"),", ",Object(i.b)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/introduction/"},"Gitlab CI/CD"),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.jenkins.io/"},"Jenkins"),"..."),Object(i.b)("p",null,"The common concept behind these tools is to store all the instructions in a YAML file and execute them at every commit to a given branch. In our example, the master branch gathers the code that will be delivered to production."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml",metastring:'title="bitbucket-pipelines.yml"',title:'"bitbucket-pipelines.yml"'},"image: python:3.8\n\npipelines:\n  branches:\n    master:\n\n      - step:\n          name: Build and Push the image         \n          services:\n          - docker\n          script: \n          # build the image\n          - docker build -t ekilabhub.azurecr.io/ekilab/ekilab-demo-container:$BITBUCKET_BUILD_NUMBER .\n\n          # authenticate with the Azure Container Registry \n          - docker login ekilabhub.azurecr.io --username ekilabhub --password  $AZURE_CONTAINER_REGISTRY_PASSWORD\n\n          # push the new Docker image to the registry\n          - docker push ekilabhub.azurecr.io/ekilab/ekilab-demo-container:$BITBUCKET_BUILD_NUMBER\n      \n\n      - step:\n          name: Deploying App to Azure\n          script:\n          # Install the Azure CLI\n          - curl -sL https://aka.ms/InstallAzureCLIDeb | bash \n          \n          # login with a Service Principal / store the credentials in a secured area\n          - az login --service-principal --username $AZURE_APP_ID --password $AZURE_PASSWORD --tenant $AZURE_TENANT_ID \n\n          # Set the correct image version to the web app \n          - az webapp config container set  --resource-group $AZURE_RESOURCE_GROUP  --name ekilab-demo-app  --docker-custom-image-name ekilab-demo-container:$BITBUCKET_BUILD_NUMBER  --docker-registry-server-url ekilabhub.azurecr.io --docker-registry-server-user ekilabhub --docker-registry-server-password $AZURE_CONTAINER_REGISTRY_PASSWORD\n\n")),Object(i.b)("h2",{id:"whats-next-"},"What's next ?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Congratulations !")," You should now be able to automate the deployment of your app to the cloud and focus only on updating its content without worrying about how to publish your updates. Now, you might need to have a scalable app to ensure it can handle high loads of visits. You could require tools like ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes"),", ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/swarm/"},"Docker Swarm"),"."),Object(i.b)("h3",{id:"alternatives"},"Alternatives"),Object(i.b)("p",null,"We presented one of the workflow we are using at Ekimetrics, but it's not the only one ! We also work with GCP, AWS, Alibaba, sometimes on-premise infrastructure that will prevent us from using Docker or Azure for example."),Object(i.b)("h5",{id:"web-app-framework"},"Web App framework"),Object(i.b)("p",null,"Soe alternavites to streamlit that are also offering low-code, minimalist, ",Object(i.b)("em",{parentName:"p"},"straight-to-the-data")," python framework that you can package in a container."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://plotly.com/dash/"},"Dash Plotly")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gradio.app/"},"Gradio.app"))),Object(i.b)("h5",{id:"containers"},"Containers"),Object(i.b)("p",null,"Docker is not the only containerization tool. Here are some alternatives we invite you to check out if Docker doesn't suit you."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://podman.io/"},"podman")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://containerd.io/"},"containerd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://coreos.com/rkt/docs/latest/"},"CoreOS rkt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://mesos.apache.org/documentation/latest/mesos-containerizer/"},"Mesos Containerizer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://linuxcontainers.org/"},"LXC Linux Containers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://openvz.org/"},"OpenVZ"))),Object(i.b)("h4",{id:"web-app-hosting"},"Web App Hosting"),Object(i.b)("p",null,"There are many others ways to deploy your apps, even free tiers on some providers that can help you get your hands-on with smaller, non-sensitive apps."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://streamlit.io/cloud"},"Streamlit Cloud")," offers a free tier to host one private app and ",Object(i.b)("strong",{parentName:"li"},"unlimited")," public apps! Deployment is ",Object(i.b)("a",{parentName:"li",href:"https://s3-us-west-2.amazonaws.com/assets.streamlit.io/videos/streamlit_sharing_silent.mp4"},"very simple with GitHub")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/container-apps/"},"Azure Container App")," a new offer from Microsoft that helps you simply deploy scalable apps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.google.com/run"},"GCP Cloud Run"),", similar to Azure Apps, is a serverless service that helps easily deploy pre-built containerized apps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.heroku.com/"},"Heroku")," offers a free tier to deploy small apps, Proof Of Concept and also a very simple deployment process.")),Object(i.b)("h2",{id:"credits"},"Credits"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cover Photo by ",Object(i.b)("a",{href:"https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Annie Spratt")," on ",Object(i.b)("a",{href:"https://unsplash.com/s/photos/rainbow-cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.google.com/architecture/best-practices-for-building-containers#package_a_single_application_per_container"},"Google's Best Practices for building Containers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pythonspeed.com/articles/base-image-python-docker-images/"},"The best Docker base image for your Python application (August 2021)"))))}b.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},288:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-app-144427ee5ac05be241dfd0d8c9140c69.png"},289:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docker-definitions-schema-742ad3f8ebb9c6e95b4f6b99bcc6601c.gif"},290:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/python-docker-images-size-comparison-8648b2ea9f9ef5fbaace2501f6fee442.png"},291:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/python-matplotlib-79daf5b8811d2475b4ebc732d659ec16.png"},292:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docker-cache-example-18ec05ab2a069080c94be26d3cb1aab1.gif"},293:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/automate-b4b2aaa382f4c26530ad030ace0cfb08.png"}}]);