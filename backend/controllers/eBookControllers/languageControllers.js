import asyncHandler from 'express-async-handler';
import Language from '../Models/languageModel.js'
import Content from '../Models/contentModel.js';
import Detail from '../Models/detailModels.js';
import e, { json } from 'express';








export {getLanguages,
       getOneLanguage,
       getDetails,
       updateLanguage,
       addLanguage,
       deleteLanguage,
       addContent,
       getContents,
       updateContent,
       deleteContent,
       getDetail,
       getOneDetail,
       addDetail,
       deleteDetail,
       updateDetail,
       getContentByLang,
       getDetailByContentId
    };