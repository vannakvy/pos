import asyncHandler from 'express-async-handler';
import eBookContent from '../../models/eBookModels/contentModel.js';
import eBookDetail from '../../models/eBookModels/detailModels.js';

//@des get all details
//@route PUT /api/ebook/details
//@access public

const getDetail = asyncHandler(async (req, res) => {
 const details = await eBookDetail.find();
 if (details) {
  res.json(details);
 } else {
  res.status(404);
  throw new Error('Details Not Found');
 }
});

//@des get one Detail
//@route PUT /api/ebook/details/:id
//@access public

const getOneDetail = asyncHandler(async (req, res) => {
 const details = await eBookDetail.findById(req.params.id);

 if (details) {
  res.json(details);
 } else {
  res.status(404);
  throw new Error('Details Not Found');
 }
});

//@des add new Detail
//@route PUT /api/ebook/details
//@access private

const addDetail = asyncHandler(async (req, res) => {
 const { title, contents, id } = req.body;
 const content = await eBookContent.findById(id);
 if (content) {
  const detail = new eBookDetail({
   title: title,
   contents: contents,
  });
  let createdDetail = await detail.save();
  let detailId = createdDetail._id;
  content.details.push(detailId);
  content.save();
  res.json(createdDetail);
 } else {
  res.status(404);
  throw new Error('Details cannot be created');
 }
});

//@des delete detail
//@route DELETE /api/ebook/details/:id
//@access public

const deleteDetail = asyncHandler(async (req, res) => {
 const detail = await eBookDetail.findById(req.params.id);
 if (detail) {
  await detail.remove();
  res.json({
   message: 'Detail deleted',
  });
 } else {
  res.status(404);
  throw new Error('Details Not Found');
 }
});

//@des update Detail
//@route PUT /api/ebook/details/:id
//@access public

const updateDetail = asyncHandler(async (req, res) => {
 const { title, contents } = req.body;

 const detail = await eBookDetail.findById(req.params.id);
 if (detail) {
  detail.title = title;
  detail.contents = contents;

  const updatedDetail = await detail.save();
  res.json(updatedDetail);
 } else {
  res.status(404);
  throw new Error('Details Not Found');
 }
});

const getDetailByContentId = asyncHandler(async (req, res) => {
 const details = await eBookContent.findById(req.params.id).populate('details');
 // const detail = await eBookContent.findOne({_id:req.params.id}).populate('details');

 if (details) {
  res.json(details);
 } else {
  res.status(400);
  throw new Error('Details Not Found');
 }
});

export {
 getDetail,
 addDetail,
 deleteDetail,
 updateDetail,
 getOneDetail,
 getDetailByContentId,
};
