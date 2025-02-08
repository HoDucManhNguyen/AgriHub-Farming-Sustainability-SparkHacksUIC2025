import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in environment variables");
}

export const chatService = {
    async generateResponse(prompt) {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt },
                ],
                store: true,
            });
            return completion.choices[0].message;
        } catch (error) {
            throw new Error(`OpenAI API Error: ${error.message}`);
        }
    }
};