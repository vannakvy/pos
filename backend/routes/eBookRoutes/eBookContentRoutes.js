import express from 'express'

const router = express.Router();
import {getContents,
    addContent,
    getContentByLang,
    updateContent,
    deleteContent
} from '../../controllers/eBookControllers/ebookContentControllers.js';
router.route('/').get(getContents).post(addContent);
router.route('/lang/:id').get(getContentByLang)
router.route('/:id').put(updateContent).delete(deleteContent)

 export default router;