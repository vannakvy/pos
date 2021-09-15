import express from 'express'
const router = express.Router()

import { protect, admin } from '../../middleware/authMiddleware.js'
import {getAllQuizes,AddQuiz,getQuizByCourseId,getQuizById,deleteQuiz,updateQuiz,addQuestion} from '../../controllers/quizControllers/quiz.js';

router.route('/').get(getAllQuizes).post(AddQuiz);
router.route('/:id').put(updateQuiz).delete(deleteQuiz);
    // router.route('/:id').get(protect, getOrderById)
    // router.route('/:id/pay').put(protect, updateOrderToPaid)
    // router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router