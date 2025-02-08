import { chatService } from '../services/chatService.js';

export const chatController = {
    async handleChatRequest(req, res) {
        try {
            const { prompt } = req.body;
            const response = await chatService.generateResponse(prompt);
            res.json({ response });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};