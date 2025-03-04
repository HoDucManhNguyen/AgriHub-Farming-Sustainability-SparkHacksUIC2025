# SparkHacks-UIC-2025

## AgriHub: Bridging Agriculture and Technology

As global food demand continues to rise, AgriHub was developed to connect farmers, technology, and agricultural service providers. By 2050, the global population is projected to reach 9.7 billion, necessitating a 60% increase in food production. Despite this growing demand, many regions underperform in agricultural productivity, leading to inefficiencies and resource waste. AgriHub aims to address these challenges by leveraging AI-powered solutions to enable data-driven decision-making and facilitate connections with trusted service providers for sustainable farming.

---
## Features

### **AgriHub Provides:**
- **AI-Powered Crop Recommendations**: Utilizes geospatial data (City, County, State) to suggest optimal crops.
- **Farming Insights**: Offers watering schedules, fertilizer recommendations, estimated costs, and sustainability tips.
- **Verified Service Providers**: Connects farmers with trusted suppliers, equipment rentals, and agricultural services.
- **Admin Dashboard for Verification**: Ensures the credibility of businesses before listing them on the platform.

---
## **Technology Stack & Implementation**

### **How We Built AgriHub**
We combined AI, machine learning, and geospatial data analysis to create intelligent crop recommendations and verified business connections. The platform utilizes:
- **Backend**: Node.js, Express.js, Axios, OpenAI APIs, JSON-Server.
- **Frontend**: HTML, CSS, JavaScript.
- **AI Integration**: Custom OpenAI prompts tailored for agricultural insights.

---
## **Challenges & Achievements**

Despite the constraints of a 24-hour hackathon, our team—comprised primarily of freshmen and sophomores—successfully built an AI-driven recommendation system. We overcame:
- **API integration issues** related to OpenAI and geospatial data.
- **Team coordination challenges** within a short development window.
- **Complexities in merging front-end and back-end systems** for seamless user experience.

---
## **Future Enhancements**

- **Global Expansion**: Integrate international datasets for improved crop matching.
- **Enhanced AI Recommendations**: Optimize accuracy and efficiency in suggestions.
- **User Experience Improvements**: Refine interface design for better usability.
- **Stronger Business Verification**: Strengthen credibility assessment of service providers.

---
## **Installation & Usage**

To run AgriHub locally, follow these steps:

### **Backend Setup**
```bash
npm install
npm install axios
npm install nodemon
npm install json-server
npm run start:dev  # Start the server
npm run json-server  # Start the local database
```
> **Note:** You will need to provide an OpenAI API key in the `.env` file for AI-based functionalities.

### **Frontend Setup**
To run `frontend/index.html`, use the Live Server plugin in your code editor.

---
## **Project Structure**

### **Backend:**
- **`.env`**: Contains the OpenAI API key for AI-powered functionalities.
- **`controllers/`**: Manages incoming HTTP requests and processes data.
- **`routes/`**: Defines API endpoints.
- **`services/`**: Contains core business logic and application functions.

### **Frontend:**
- **`index.html`**: Landing page.
- **Usage Instructions:**
  - Click **“Get Started”** to receive AI-powered crop suggestions based on location.
  - Businesses can register for verification under the **Business** section.
  - Administrators can approve or reject listings via the **Admin** section.

---
## **AI Capabilities**
- **Crop Recommendations**: AI suggests the best crops based on geolocation, weather, and soil conditions.
- **Business Reviews & Verification**: AI assists in evaluating service providers before listing them on the platform.
- **AI-Assisted Development**: OpenAI’s API was used to streamline coding processes.

---
## **Live Demo**
[**Access the AgriHub Demo**](https://hoducmanhnguyen.github.io/AgriHub-Farming-Sustainability-SparkHacksUIC2025/)

---
## **Authors**
- **Linh Vu**
- **Manh Nguyen**
- **Han Dang**
- **Minh Nguyen**
- **Vu Nguyen**

