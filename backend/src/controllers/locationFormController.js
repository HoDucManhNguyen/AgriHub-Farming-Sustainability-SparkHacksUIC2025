import { chatService } from '../services/chatService.js';

// "In Chicago, the key’s name is top_crops, that each crop has 4 keys: first key is “name” has value: “name (scientific name)”, short description, the reason why this crop is suitable for this location (key’s name is reason), and property. Property has 1 key is crop advice. Crop advice has 5 keys: Watering, Fertilizers, Pesticides, Challenges, Estimated Cost. Each keys of crop advice should have short information in 2 sentences. Write the answer only in JSON object (no more extra answer)."

export const formController = {
    async handleFormSubmission(req, res) {
        try {
            const { city, county, state } = req.body;
            console.log(`Received form data: City - ${city}, County - ${county}, State - ${state}`);
            const prompt_user = `In ${city}, ${county}, ${state}, the key’s name\ 
            is top_crops, that each crop has 6 keys, I want a total of THREE crops:\ 
            first key is “name” has value: “{name} ({scientific_name})”,\ 
            short description, the reason why this crop is suitable for\ 
            this location.\ After that, we have farming advice key, in there we will have 5 keys.\
            seasons: what seasons are best for this crop,\
            fertilizer_use: what type of fertilizer is best for this crop,\
            pesticide_use: what type of pesticide is best for this crop,\
            challenges: what are the challenges of growing this crop,\
            estimated_costs: what are the estimated costs of growing this crop,\
            watering: how much watering is needed for this crop.\
            After that, we have startup resources key, in there we will have 4 keys.\
            seeding: which company to buy seeds from (preferrably 1, 2 close to the location),\
            irrigation_systems: which company to buy irrigation systems from (preferrably 1, 2 close to the location),\
            fertilizers_and_pest_controls: which company to buy fertilizers and pest controls from (preferrably 1, 2 close to the location),\
            soil_testing: which company to test soil from (preferrably 1, 2 close to the location).\
            Lastly, we have company key, in there we will have 1 key, the category of what the company will provide,
            seeding: list of companies that provide seeds,\
            irrigation_systems: list of companies that provide irrigation systems,\
            fertilizers_and_pest_controls: list of companies that provide fertilizers and pest controls,\
            soil_testing: list of companies that provide soil testing.\
            we want to get 1, 2 companies that is close to the location for each category.\
            Each keys of crop advice should have short information in 2 sentences.\ 
            Write the answer only in JSON object 
            (no more extra answer, write in raw string, no markdown).`;
            const output_format = {
                "location": "string",
                "top_crops": [
                    {
                        "name": "string",
                        "short_description": "string",
                        "reason": "string",
                        "farming_advice": {
                            "seasons": "string",
                            "fertilizer_use": "string",
                            "pesticide_use": "string",
                            "challenges": "string",
                            "estimated_costs": "string",
                            "watering": "string",
                        },
                        "startup_resources": {
                            "seeding": "string",
                            "irrigation_systems": "string",
                            "fertilizers_and_pest_controls": "string",
                            "soil_testing": "string"
                        },
                        "company": {
                            'seeding': [],
                            'irrigation_systems': [],
                            'fertilizers_and_pest_controls': [],
                            'soil_testing': []
                        }
                    }
                ]
            }
            const prompt_system = `You are an experienced farm specialist with high levels of expertise and authority within the agriculture industry. Your writing style is informative, friendly and engaging while incorporating humor and real-life examples. Provide detailed two crop recommendation in" f"{location}" "the following JSON format.\
            The JSON should include the keys 'location' and 'recommended_crops', where 'recommended_crops' is a list\ 
            of crop objects. Each crop object should have the following structure:\n\n"
            ${JSON.stringify(output_format, null, 2)}\n\n\ \
            Please ensure that your response strictly adheres to this JSON format.`
            
            console.log("stucking here")
            const chatResponse = await chatService.generateResponse(prompt_user, prompt_system);
            console.log(chatResponse);
            const chatResponseJSON = JSON.parse(chatResponse['content']);
            
            res.json({ "response": chatResponseJSON });
            console.log("running finished")
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};