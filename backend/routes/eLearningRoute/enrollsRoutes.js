import express from 'express';
const router = express.Router();
import { protect, admin } from '../../middleware/authMiddleware.js';
import {
 createEnrollCourses,
 getEnrollSections,
 getEnrollVideos,
} from '../../controllers/eLearningController/enrollControllers.js';

router.route('/:uid').post(protect, admin, createEnrollCourses);
router.route('/:id/section').get(protect, getEnrollSections);
router.route('/:id/video/:vid').get(protect, getEnrollVideos);
export default router;
