import express from 'express';
const router = express.Router();
import { protect, admin } from '../../middleware/authMiddleware.js';
import {
 createEnrollCourses,
 getEnrollSections,
 getEnrollVideos,
 addEnrollVideo,
 deleteEnrollCourses,
 getEnrollDetail,
 requestEnroll,
 getAllreqEnroll,
 deleteReqEnroll,
 getRequestEnrollByUser,
} from '../../controllers/eLearningController/enrollControllers.js';

router.route('/users/:uid').post(protect, admin, createEnrollCourses);
router
 .route('/:eid')
 .get(protect, getEnrollDetail)
 .delete(protect, admin, deleteEnrollCourses);
router.route('/:id/section').get(protect, getEnrollSections);
router.route('/:eid/videos').post(protect, addEnrollVideo);
router.route('/:id/video/:vid').get(protect, getEnrollVideos);

router
 .route('/user/request')
 .get(protect, admin, getAllreqEnroll)
 .post(protect, requestEnroll);

router.route('/user/req/:cid').get(protect, getRequestEnrollByUser);

router.route('/user/request/:qid').delete(protect, deleteReqEnroll);

export default router;
