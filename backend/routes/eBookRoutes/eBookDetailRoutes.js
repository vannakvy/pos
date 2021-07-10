import express from 'express';

const router = express.Router();
import {
 getDetailByContentId,
 getDetail,
 addDetail,
 updateDetail,
 deleteDetail,
 getOneDetail,
 getCodeLive,
} from '../../controllers/eBookControllers/eBookDetailControllers.js';

router.route('/:lang/:id').get(getDetailByContentId);
router.route('/').get(getDetail).post(addDetail);
router.route('/:id').put(updateDetail).delete(deleteDetail).get(getOneDetail);
router.route('/codeLive/:lid/get').get(getCodeLive);

export default router;
