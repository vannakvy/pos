import asyncHandler from 'express-async-handler';
import Enroll from '../../models/eLearningModels/enrollModel.js';

// @desc GET VideoEnroll
// @route GET /api/courses/:id/videos/:vid
// @access Public
const getVideoEnroll = asyncHandler(async (req, res) => {
 const { id } = req.params;
 const enroll = await Enroll.find({ user: req.user.id });

 if (enroll) {
  const courseEnroll = enroll.find((obj) => {
   return obj.courseId == id;
  });
  if (courseEnroll) {
   res.json(courseEnroll);
  } else {
   res.json(null);
  }
 } else {
  res.json(null);
 }
});

export { getVideoEnroll };
