import express from 'express'

const router = express.Router();
import {getDetailByContentId,getDetail,addDetail,updateDetail,deleteDetail,getOneDetail} from '../../controllers/eBookControllers/eBookDetailControllers.js';


router.route('/:lang/:id').get(getDetailByContentId);
router.route('/').get(getDetail).post(addDetail);
router.route('/:id').put(updateDetail).delete(deleteDetail).get(getOneDetail)

export default router;