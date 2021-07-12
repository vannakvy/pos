import asyncHandler from 'express-async-handler';
import LiveCode from '../../models/eBookModels/codeLive.js';
import eBookContent from '../../models/eBookModels/contentModel.js';
import eBookDetail from '../../models/eBookModels/detailModels.js';

//@des get all details
//@route PUT /api/ebook/details
//@access public

const getDetail = asyncHandler(async (req, res) => {
 const details = await eBookDetail.find({}).populate('details.codeLive');
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
 const { contents, id, codeLive, codeShow, h } = req.body;
 const content = await eBookContent.findById(id);
 if (content) {
  const detail = new eBookDetail();

  detail.contents = contents || '';
  detail.codeShow = codeShow || '';
  detail.h = h || '100px';

  if (codeLive) {
   const liveCode = new LiveCode({
    content: codeLive || '',
   });
   const createLiveCode = await liveCode.save();
   if (createLiveCode) {
    detail.codeLive = createLiveCode._id;
   }
  }

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
  if (detail.codeLive && detail.codeLive !== 'a') {
   const lCode = await LiveCode.findById(detail.codeLive);
   if (lCode) {
    await lCode.remove();
   }
  }
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
 const { codeShow, codeLive, contents, h } = req.body;

 const detail = await eBookDetail.findById(req.params.id);
 if (detail) {
  detail.codeShow = codeShow;
  detail.contents = contents;
  detail.h = h || '100px';

  if (detail.codeLive && detail.codeLive !== 'a') {
   const editCodeLive = await LiveCode.findById(detail.codeLive);
   if (editCodeLive) {
    if (codeLive) {
     editCodeLive.content = codeLive;
     await editCodeLive.save();
    } else {
     detail.codeLive = 'a';
     await editCodeLive.remove();
    }
   }
  } else {
   if (codeLive) {
    const liveCode = new LiveCode({
     content: codeLive || '',
    });
    const createLiveCode = await liveCode.save();
    if (createLiveCode) {
     detail.codeLive = createLiveCode._id;
    }
   } else {
    detail.codeLive = 'a';
   }
  }

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

const getCodeLive = asyncHandler(async (req, res) => {
 const codeLive = await LiveCode.findById(req.params.lid);

 if (codeLive) {
  res.json(codeLive);
 } else {
  res.status(400);
  throw new Error('LiveCode Not Found');
 }
});

export {
 getDetail,
 addDetail,
 deleteDetail,
 updateDetail,
 getOneDetail,
 getDetailByContentId,
 getCodeLive,
};
