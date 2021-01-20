import express from 'express'
const router = express.Router();

import {
    getLanguages,
    getOneLanguage,
    addLanguage,deleteLanguage,
    updateLanguage,
    getDetails} from '../../controllers/eBookControllers/ebookCourseControllers.js'



router.route('/').get(getLanguages).post(addLanguage);
router.route('/:id').get(getOneLanguage).put(updateLanguage).delete(deleteLanguage);
router.route('/:lang/:id').get(getDetails);


export default router;