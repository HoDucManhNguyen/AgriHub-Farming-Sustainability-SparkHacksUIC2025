import { chatService } from '../services/chatService.js';
import axios from 'axios';

export const formController = {
    async getBusinessReview(req, res) {
        console.log(req.body);
        const { company } = req.body;
        try {
            const prompt_user =  `I want a report for the company" ${company}.
            I want to know if this company is qualified or not based on its reputation,
            does it has a commitment to sustainability (highlight this),
            pricing, and customer service. Finally, Give me a verdict on whether it is a great company or not.`
            const output_format = {
                "Reputation": "string",
                "Sustainability": "string",
                "Pricing": "string",
                "Customer Service": "string",
                "VERDICT": "string"
            }
            // The JSON should include the keys 'Reputation', 'Sustainability', 'Pricing', 'Customer Service', and 'VERDICT'. 
            const prompt_system = `You are an experienced farming consultant with high levels of expertise and authority within 
            the agriculture industry. Your writing style is informative, friendly and engaging while incorporating 
            humor and real-life examples. The answer must follow the format of the output schema. \n\n 
            ${JSON.stringify(output_format, null, 2)} \n\n
            Please ensure that your response strictly adheres to this JSON format.\
            Be strictly concise and no additional text should be included in the response. \n\n`
            
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