# SparkHacks-UIC-2025

```bash
npm install
npm install axios
npm install nodemon
npm install json-server
npm run start:dev # to start server
npm run json-server # to start database hosting locally
```

You will need live server plugin to run frontend/index.html. (install live server plugin in extension)
frontent wrote in  html, css, javascript.
backend wrote in nodejs, express, axios.

Backend tructure:
You will need to provide openapi key, in .env
It will use openAPI to call AI chats. We created custom prompts for farming purposes.

Controllers folder: handle incoming HTTP requests, process, and return them back, middle man between routes and the services
Routes folder: defines api endpoints
Services folder: contain the logic of the application.

Frontend: index.html is the front page
to use the suggestion on what crop to to use for a particular location. clicking on getting started
for Business want to get in the database and be verified, use Business option
for admin, use admin to approve or deny

AI usages: 
- suggest user on what crop to use, based on location, weather, soil
- get review of companies and get the verdict.

AI assistance for coding is used in the project.

Link demo Website: https://hoducmanhnguyen.github.io/SparkHacks-UIC-2025/frontend/index.html

Authors: Linh Vu, Manh Nguyen, Han Dang, Minh Nguyen, Vu Nguyen


