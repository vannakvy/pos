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

 courses.forEach((course) => {
  enrolls.forEach(async (cid) => {
   if (course._id == cid) {
    const enroll = new Enroll({
     user: uid,
     courseId: course._id,
     section: course.section,
    });
    const createEnroll = await enroll.save();
    coursesEnrollded.push(createEnroll);
   }
  });
 });
 res.json(coursesEnrollded);
});

//@desc    Fatch enroll Section
//@route   GET /api/eLearning/enrolls/:id/section
//@access  Public
const getEnrollSections = asyncHandler(async (req, res) => {
 const { id } = req.params;
 const enrollCourses = await Enroll.find({ user: req.user.id }).populate(
  'courseId'
 );

 if (enrollCourses) {
  const enroll = enrollCourses.find((enroll) => {
   return enroll.courseId.id === id;
  });
  res.json(enroll.section);
 } else {
  res.status(404);
  throw new Error('No Course Enroll');
 }
});

//@desc    Fatch enroll video
//@route   GET /api/eLearning/enrolls/:id/video/:vid
//@access  Public
const getEnrollVideos = asyncHandler(async (req, res) => {
 const { id, vid } = req.params;
 const enrollCourses = await Enroll.find({ user: req.user.id }).populate(
  'courseId'
 );

 const videosee = [];

 if (enrollCourses) {
  const enroll = enrollCourses.find((enroll) => {
   return enroll.courseId.id === id;
  });

  if (enroll) {
   enroll.section.forEach((section) => {
    section.videos.forEach((video) => {
     videosee.push(video);
    });
   });

   let videoNotWatch = videosee.find((v) => {
    return v.watched === false;
   });

   if (videoNotWatch === undefined) {
    videoNotWatch = videosee[0];
   }

   if (vid == 1) {
    res.json({ video: {}, nextVideo: {}, videoNotWatch });
   } else {
    const video = videosee.find((v) => {
     return v._id == vid;
    });

    const i = videosee.indexOf(video);
    let nextVideo = videosee[i + 1];

    if (nextVideo === undefined) {
     nextVideo = video;
    }

    res.json({ video, nextVideo, videoNotWatch });
   }
  } else {
   res.status(404);
   throw new Error('No Video match with id');
  }
 } else {
  res.status(404);
  throw new Error('No Course Enroll');
 }
});

export {
 getUserEnrollCourses,
 createEnrollCourses,
 getEnrollSections,
 getEnrollVideos,
};
