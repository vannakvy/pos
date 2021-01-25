import asyncHandler from 'express-async-handler';
import Enroll from '../../models/eLearningModels/enrollModel.js';

//@desc    Fetch search courses
//@route   GET /api/users/:uid/enroll
//@access  Public
const getUserEnrollCourses = asyncHandler(async (req, res) => {
 const { uid } = req.params;
 const enrollCourses = await Enroll.find({ user: uid }).populate('courseId');
 if (enrollCourses) {
  res.json(enrollCourses);
 } else {
  res.status(404);
  throw new Error('Can not get Enroll courses!');
 }
});

export { getUserEnrollCourses };
