import express from 'express';
import { chatController } from '../controllers/chatController.js';

const router = express.Router();

router.post('/api/chat', chatController.handleChatRequest);

export default router;