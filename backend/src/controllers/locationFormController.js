import { chatService } from '../services/chatService.js';

// "In Chicago, the key’s name is top_crops, that each crop has 4 keys: first key is “name” has value: “name (scientific name)”, short description, the reason why this crop is suitable for this location (key’s name is reason), and property. Property has 1 key is crop advice. Crop advice has 5 keys: Watering, Fertilizers, Pesticides, Challenges, Estimated Cost. Each keys of crop advice should have short information in 2 sentences. Write the answer only in JSON object (no more extra answer)."

export const formController = {
    async handleFormSubmission(req, res) {
        try {
            const { city, county, state } = req.body;
            console.log(`Received form data: City - ${city}, County - ${county}, State - ${state}`);
            const prompt = `In ${city}, ${county}, ${state}, the key’s name is top_crops, that each crop has 4 keys, I want a total of 3 crops: first key is “name” has value: “{name} ({scientific_name})”, short description, the reason why this crop is suitable for this location (key’s name is reason), and property. Property has 1 key is crop advice. Crop advice has 5 keys: Watering, Fertilizers, Pesticides, Challenges, Estimated Cost. Each keys of crop advice should have short information in 2 sentences. Write the answer only in JSON object (no more extra answer, write in raw string, no markdown).`;
            const chatResponse = await chatService.generateResponse(prompt);
            console.log(chatResponse);
            const chatResponseJSON = JSON.parse(chatResponse['content']);
            
            res.json({ "response": chatResponseJSON });
            console.log("running finished")
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};