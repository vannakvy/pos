import express from 'express';
import {
 createText,
 getText,
 getTextById,
 updateTextById,
} from '../controllers/testControllers.js';
const router = express.Router();

router.route('/').get(getText).post(createText);
router.route('/id').put(updateTextById).get(getTextById);

export default router;
