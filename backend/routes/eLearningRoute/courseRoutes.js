import express from 'express';
import {
 addObjective,
 createCourse,
 deleteCourseById,
 getCourseById,
 getCourses,
 updateCourseById,
 addSection,
 addVideo,
 getSection,
 deleteSectionById,
 updateSectionById,
 updateVideoById,
 deleteVidoeoById,
} from '../../controllers/eLearningController/courseControllers.js';
import { getVideoEnroll } from '../../controllers/eLearningController/videoControllers.js';
import { protect, admin } from '../../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(getCourses).post(protect, admin, createCourse);

router.route('/courseType/:type').get(getCourses);

router
 .route('/:id')
 .get(getCourseById)
 .put(protect, admin, updateCourseById)
 .delete(protect, admin, deleteCourseById);

router.route('/:id/objective').put(protect, admin, addObjective);
router.route('/:id/section').get(getSection).put(protect, admin, addSection);
router
 .route('/:id/section/:sid')
 .put(protect, admin, updateSectionById)
 .delete(protect, admin, deleteSectionById);

router.route('/:id/section/:sid/video').put(protect, admin, addVideo);
router
 .route('/:id/section/:sid/video/:vid')
 .put(protect, admin, updateVideoById)
 .delete(protect, admin, deleteVidoeoById);

router.route('/:id/enroll').get(protect, getVideoEnroll);

export default router;
