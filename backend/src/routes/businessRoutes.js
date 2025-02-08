import express from 'express';
import { businessController } from '../controllers/businessController.js';

const router = express.Router();

router.get('/api/businesses', businessController.getAllBusinesses);
router.get('/api/businesses/:id', businessController.getBusinessById);
router.post('/api/businesses', businessController.createBusiness);
router.put('/api/businesses/:id', businessController.updateBusiness);
router.delete('/api/businesses/:id', businessController.deleteBusiness);

export default router;