# SparkHacks-UIC-2025

In a world where food demand is rapidly increasing, AgriHub was created to bridge the gap between farmers, technology, and agricultural service providers. By 2050, the global population will reach 9.7 billion, requiring a 60% increase in food production. However, many regions still operate below their agricultural potential, and critical resources are being wasted. Our goal was to build a smart, AI-powered platform to help farmers make data-driven decisions and access verified service providers for sustainable farming.

## What AgriHub Does:

- AI-powered crop recommendations based on geospatial data (City, County, State).
- Farming insights: Watering schedules, fertilizers, estimated costs, and sustainability tips.
- Local business verification: Farmers connect with trusted service providers (seed suppliers, equipment rentals, etc.).
- Admin dashboard for verification: Ensures credibility of businesses before recommending them.

##  How We Built It:

We integrated AI, machine learning, and geospatial data to generate recommendations and match farmers with the right service providers. The platform was developed using Node.js, Express.js, Axios, OpenAI APIs, JSON-Server, and HTML, CSS, JavaScript for a seamless web experience.

## Challenges & Achievements:

Despite working under a 24-hour hackathon deadline, our team—mostly freshmen and sophomores—successfully built an AI-driven recommendation system that personalizes crop suggestions and business connections. We overcame API integration issues, team coordination challenges, and the complexity of merging front-end and back-end systems.

## What’s Next?

- Expand beyond the US, using global datasets for more accurate crop matching.
- Improve AI recommendations and interface design for better user experience.
- Strengthen business verification for increased trust and credibility.

## How to use all the features:

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

Link demo Website: [https://hoducmanhnguyen.github.io/SparkHacks-UIC-2025/frontend/index.html](https://hoducmanhnguyen.github.io/AgriHub-Farming-Sustainability-SparkHacksUIC2025/)

Authors: Linh Vu, Manh Nguyen, Han Dang, Minh Nguyen, Vu Nguyen


