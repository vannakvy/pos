import asyncHandler from 'express-async-handler';
import eBookCourse from '../../models/eBookModels/languageModel.js';
import eBookContent from '../../models/eBookModels/contentModel.js';

// @des get Content
// route Get api/ebook/contents
// access private

const getContents = asyncHandler(async (req, res) => {
 const contents = await eBookContent.find({});

 if (contents) {
  res.json(contents);
 } else {
  res.status(401);
  throw new Error('Content is not Found');
 }
});

// @des get Content by Language
// route Get api/ebook/contents
// access private

const getContentByLang = asyncHandler(async (req, res) => {
 if (req.params.id === 'languages') {
  const contents = await eBookContent.find();

  if (contents) {
   res.json(contents);
  } else {
   res.json({
    message: 'Page Errror',
   });
  }
 } else {
  // const {contents}= await Language.findById(req.params.id).populate('contents');
  const { contents } = await eBookCourse
   .findOne({ title: req.params.id })
   .populate('contents');

  if (contents) {
   res.json(contents);
  } else {
   res.json({
    message: 'Page Errror',
   });
  }
 }
});

// @des add Content
// route Get api/ebook/contents
// access private

const addContent = asyncHandler(async (req, res) => {
 const { title, section, lang } = req.body;
 let language = await eBookCourse.findOne({ title: lang });
 if (language) {
  const content = await new eBookContent({
   title: title,
   section: section,
  });

  let createdContent = await content.save();
  let contentId = createdContent._id;
  language.contents.push(contentId);
  language.save();
  res.json(createdContent);
 }
});

//@des update content by Id
//@route PUT /api/ebook/contents/:id
//@access private

const updateContent = asyncHandler(async (req, res) => {
 const { title, section } = req.body;
 const content = await eBookContent.findById(req.params.id);

 if (content) {
  content.title = title;
  content.section = section;
  const updatedContent = await content.save();
  res.json(updatedContent);
 } else {
  res.status(404);
  throw new Error('Content is Not Found');
 }
});

//@des delete content by Id
//@route DELETE /api/ebook/contents/:id
//@access private
const deleteContent = asyncHandler(async (req, res) => {
 const content = await eBookContent.findById(req.params.id);
 if (content) {
  content.remove();
  res.json({
   message: 'Content Removed',
  });
 } else {
  res.status(404);
  throw new Error('Content Not Found');
 }
});

export {
 getContentByLang,
 getContents,
 updateContent,
 deleteContent,
 addContent,
};
