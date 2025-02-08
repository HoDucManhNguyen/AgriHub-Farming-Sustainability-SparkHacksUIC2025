import express from 'express';
import { formController } from '../controllers/locationFormController.js';

const router = express.Router();

router.post('/api/form', formController.handleFormSubmission);

export default router;