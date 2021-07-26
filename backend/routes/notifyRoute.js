import express from 'express';
import {
 createNotify,
 getNotifyByUser,
} from '../controllers/notificationControlller.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
 .route('/')
 .get(protect, getNotifyByUser)
 .post(protect, admin, createNotify);

export default router;
