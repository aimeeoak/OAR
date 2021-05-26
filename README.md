
## OAR: Open Academic Resource 
Ahoy Matey! Welcome aboard to OAR, the Open Academic Resource. OAR is a web scraping search app built with SerpApi that finds free and open source academic resources. Beyond searching the open seas, OAR saves your treasured articles into project shelves for easy access and organization. 

OAR uses React on the frontend and a Rails API server on the backend. 

OAR has several accessibility features such as zoom mode, to zoom in on individual components, and dark mode. 

OAR was created by Capitan Aimee Garriok ([@aimeeoak](https://github.com/aimeeoak)), First Mate Molly Trepanier ([@mollyet](https://github.com/mollyet/)), and Bosun Sajan Thiara ([@sthaira](https://github.com/SThiara)) as our final project for the [Lighthouse Labs Web Development Bootcamp](https://www.lighthouselabs.ca/). 
## Screenshots

![The Front Page](https://github.com/SThiara/fresh-OAR/blob/8531f6ad78e729fd0086f5022caf6d921b3734aa/docs/oar-front-page.png)
- *The Front Page*

![GIF of dark mode and zoom mode](https://github.com/SThiara/fresh-OAR/blob/8531f6ad78e729fd0086f5022caf6d921b3734aa/docs/oar-search-gif.gif)
 - *GIF of dark mode and zoom mode*

![Example search for "memes"](https://github.com/SThiara/fresh-OAR/blob/8531f6ad78e729fd0086f5022caf6d921b3734aa/docs/oar-meme-search.png)
- *Example search for "memes"*

![GIF of example search for "Christian Nally" and adding it to an existing project.](https://github.com/SThiara/fresh-OAR/blob/8531f6ad78e729fd0086f5022caf6d921b3734aa/docs/oar-search-gif.gif)
- *GIF of example search for "Christian Nally" and adding it to an existing project.*

!["Memeology" Project](https://github.com/SThiara/fresh-OAR/blob/8531f6ad78e729fd0086f5022caf6d921b3734aa/docs/oar-memeology-project.png)
- *"Memeology" Project*


## Setup

- Clone this project into your favourite directory! You will have two directories, `server` and `client`
- Change directory into `server` and run `bundle install` and then `rake db:reset` to set up the Rails API server and load preset project data. 
- While in the server directory, run `rails s` to start the API server. This should run on `localhost:3000`
- Change directories to the `client` directory. 
- Run `npm install` to install all dependencies for the client. 
- To find all the search treasures, get a free trial API key from SerpApi and turn the .env.example into a real .env file. 
- To start the client, run `npm start` and when prompted, allow react to choose its own localhost port to run on. 
- Navigate to the given port, and have fun! 

## Dependencies 
- Client 
  - axios
  - ant design 
  - classnames
  - dotenv
  - http-proxy-middleware
- Server
  - dotenv-rails
  - rails 6.01
  - sqlite3
## Major Bugs
- CORS, which is not a good thing! We ran into this bug later in the game, and opted to work around it to ensure our project was closer to finished rather than spend too much time attempting to fix it. We are currently using a Chrome extension called "Allow CORS" to bypass this. 
- Client server does not boot to preferred port. 
## Stretch Goals
- Fix the CORS error
- Add more searchable APIs such as WorldCat to find real physical books from a library near you, CORE API to cast a wider net for open access resources
- Write a scraper for sci-hub for not-so-open access resources 
