import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in environment variables");
}

export const chatService = {
    async generateResponse(prompt_user, prompt_system) {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const system_prompt_location = ""
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-2024-11-20",
                messages: [
                    { role: "system", content: prompt_system},
                    { role: "user", content: prompt_user},
                ],
                store: true,
            });
            return completion.choices[0].message;
        } catch (error) {
            throw new Error(`OpenAI API Error: ${error.message}`);
        }
    }
};