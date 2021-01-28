import express from 'express';
const router = express.Router();
import { protect, admin } from '../../middleware/authMiddleware.js';
import { createEnrollCourses } from '../../controllers/eLearningController/enrollControllers.js';

router.route('/:uid').post(protect, admin, createEnrollCourses);

export default router;
