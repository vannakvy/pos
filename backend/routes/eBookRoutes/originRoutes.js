import express from 'express'

const router = express.Router()
import {getCourses} from './controllers/controllers.js'
import {getLanguages, 
    getOneLanguage,
     getDetails,
      updateLanguage,
      addLanguage, 
      deleteLanguage,
      getContentByLang,
      addContent,
      getContents,
      updateContent,
      deleteContent,
      getDetail,
      getOneDetail,
      addDetail,
      updateDetail,
      deleteDetail,
      getDetailByContentId,
        } from './controllers/languageControllers.js'

 router.route('/contents').get(getContents).post(addContent);
 router.route('/contents/lang/:id').get(getContentByLang)
 router.route('/contents/:id').put(updateContent).delete(deleteContent)

 router.route('detailContent/:id').get(getDetailByContentId);
 router.route('/details').get(getDetail).post(addDetail);
 router.route('/details/:id').put(updateDetail).delete(deleteDetail).get(getOneDetail)

 router.route('/init').get(getCourses);
 router.route('/').get(getLanguages).post(addLanguage);
 router.route('/:id').get(getOneLanguage).put(updateLanguage).delete(deleteLanguage);
 router.route('/:lang/:id').get(getDetails);
 
 export default router;