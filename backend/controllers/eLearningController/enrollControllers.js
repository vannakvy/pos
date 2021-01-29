import asyncHandler from 'express-async-handler';
import Enroll from '../../models/eLearningModels/enrollModel.js';
import Course from '../../models/eLearningModels/courseModel.js';

//@desc    Fetch search courses
//@route   GET /api/users/:uid/enroll
//@access  Public
const getUserEnrollCourses = asyncHandler(async (req, res) => {
 const { uid } = req.params;
 const enrollCourses = await Enroll.find({ user: uid }).populate('courseId');
 const courses = await Course.find({});

 if (enrollCourses && courses) {
  const courseEnroll = [];
  enrollCourses.forEach((course) => courseEnroll.push(course.courseId));

  const noEnrollCourses = courses.filter(function (array_el) {
   return (
    courseEnroll.filter(function (anotherOne_el) {
     return anotherOne_el.id === array_el.id;
    }).length == 0
   );
  });

  res.json({ enrollCourses, noEnrollCourses });
 }
});

//@desc    Create enroll courses
//@route   POST /api/eLearning/enrolls/:uid
//@access  Private admin
const createEnrollCourses = asyncHandler(async (req, res) => {
 const { uid } = req.params;
 const { enrolls } = req.body;
 const courses = await Course.find({});
 const coursesEnrollded = [];

 // if (enrolls && enrolls.length !== 0) {
 //  enrolls.forEach((cid) => {
 //   const courses = await Course.findById(cid);
 //   coursesEnrollded.push(courses);
 //  });
 // }

 courses.forEach((course) => {
  enrolls.forEach(async (cid) => {
   if (course._id == cid) {
    const enroll = new Enroll({
     user: uid,
     courseId: course._id,
     section: [],
    });
    const createEnroll = await enroll.save();
    coursesEnrollded.push(createEnroll);
   }
  });
 });
 res.json(coursesEnrollded);
});

export { getUserEnrollCourses, createEnrollCourses };
