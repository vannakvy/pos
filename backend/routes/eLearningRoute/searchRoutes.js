import express from 'express';
import { searchCourse } from '../../controllers/eLearningController/courseControllers.js';
const router = express.Router();

router.route('/').get(searchCourse);

export default router;
