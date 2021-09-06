import express from 'express';
import { createSubscrip } from '../controllers/subscripController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createSubscrip);

export default router;
