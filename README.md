# EkiLab Website

The Eki.Lab is our Research & Innovation pole at Ekimetrics. Learn more about our research topics and priorities.<br/>
Feel free to send us an [email](mailto:inno@ekimetrics.com) if you have a question!

![](https://ekimetrics.com/wp-content/uploads/2020/06/header-culture-knowledge-min.jpg)

## The Lab

Our innovation lab is the first step in our R&D process.
- <span className="gold">State-of-the-art AI for business</span> - We study the state-of-the-art AI research straight from AI labs (Graph Neural Networks, Bayesian Neural Networks, Reinforcement Learning, Structural Time Series modeling, Causality) to find ways to apply those techniques on unsolved business problems.  
- <span className="gold">AI For Good</span> - We challenge ourselves to always ensure a responsible use of Data and using our AI algorithms ethically. We research new ways of studying bias, enforcing algorithm transparency or maintaining Data privacy. We also do pro-bono research from climate change to epidemiological modeling. 
- <span className="gold">Data capabilities</span> - in an everchanging field, we need to stay up-to-date with the latest technologies to industrialize, scale, and operate our Data Science solutions. We research and implement connectors to deploy APIs in 5 mins, configure infrastructure-as-code, or facilitate the Data Science workflows with pre-industrialized templates 


## About Ekimetrics

Ekimetrics is the first pure player in Data Science in Europe. We operate from Paris, London, New York and Dubai with 250+ Data Scientists, Data Engineers, Full Stack Developers, strategy consultants and UX designers. 

We help companies steer their data opportunity, build data capabilities, and deploy actionable solutions, to power up marketing and operational performance, as well as (re)energizing business models. Our primary focus is to deliver immediate business gains, while guaranteeing sustainable data capital for our clients.

You can learn more in our [official website](https://ekimetrics.com)

![Tangram](https://ekimetrics.com/wp-content/uploads/2020/06/Header-about-us-min.jpg)
*The Tangram room in our Paris office*


## Contributors
You are more than welcome to open up a pull request to make your own changes and addition to this website. <br>
The website is built using Docusaurus 2 (with a React.js backbone)

## Content
- Blog
- Trainings
- Hackathons
- Best practices & convictions
- Open source contributions

## How to Contribute

Either clone or fork the repository.

### With Docker
Start by building and running the container with the command :

``` bash
docker compose up --build -d
```
After a couple minutes, your container should be up and running and you can access the preview of your article locally at [https://localhost:8080](https://localhost:8080).
Hot reloading is enabled so you can see your updates without having to rebuild the container.


### Without Docker
If you don't have docker installed, you can still get a preview locally by running 

``` bash
npm install

npm start
```

This command starts a local development server and open up a browser window at [https://localhost:8080](https://localhost:8080). As with docker compose, most changes are reflected live without having to restart the server.

Once you are happy with your changes you can :
``` bash
git add <path_to_update_file>
git commit -m "Description of your changes"
```
commit, push and create a [Pull Request](https://github.com/ekimetrics/ekimetrics.github.io/compare) to submit them.