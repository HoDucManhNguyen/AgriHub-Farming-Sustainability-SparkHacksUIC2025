import express from 'express';
import { formController } from '../controllers/businessReviewController.js';

const router = express.Router();

router.post('/api/review', formController.getBusinessReview);

export default router;