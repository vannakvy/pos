import asyncHandler from 'express-async-handler';
import Enroll from '../../models/eLearningModels/enrollModel.js';
import Course from '../../models/eLearningModels/courseModel.js';

//@desc    Fetch Enroll Details
//@route   GET /api/elearning/enroll/:eid
//@access  Public
const getEnrollDetail = asyncHandler(async (req, res) => {
 const enroll = await Enroll.findById(req.params.eid).populate('courseId');

 if (enroll) {
  enroll.courseId.section.forEach((sec) => {
   sec.videos.forEach((video) => {
    enroll.videosWatched.forEach((v) => {
     if (video._id == v) {
      video.watched = true;
     }
    });
   });
  });
  res.json(enroll);
 } else {
  res.status(404);
  throw new Error(`Enroll Not Found`);
 }
});

//@desc    Fetch search courses
//@route   GET /api/users/:uid/enroll
//@access  Public
const getUserEnrollCourses = asyncHandler(async (req, res) => {
 const { uid } = req.params;
 const enrollCourses = await Enroll.find({ user: uid }).populate('courseId');
 const courses = await Course.find({});

 if (enrollCourses && courses) {
  const courseEnroll = [];
  enrollCourses.forEach((enroll) => {
   courseEnroll.push(enroll.courseId);
   const videoSize = [];
   const vWatched = [];
   enroll.courseId.section.forEach((sec) => {
    sec.videos.forEach((video) => {
     videoSize.push(video);
     enroll.videosWatched.forEach((v) => {
      if (v == video._id) {
       vWatched.push(v);
      }
     });
    });
   });

   //  console.log(videoSize);

   let progress = 0;

   if (vWatched.length === 0) {
    progress = 0;
   } else {
    progress = Math.floor((vWatched.length / videoSize.length) * 100);
   }

   enroll.progressBar = progress;
   enroll.save();
  });

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
//@route   POST /api/eLearning/enrolls/users/:uid
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
     progressBar: 0,
     courseId: course._id,
     videosWatched: [],
    });
    const createEnroll = await enroll.save();
    coursesEnrollded.push(createEnroll);
   }
  });
 });

 res.json(coursesEnrollded);
});

//@desc    Delete enroll courses
//@route   DELETE /api/eLearning/enrolls/:eid
//@access  Private admin
const deleteEnrollCourses = asyncHandler(async (req, res) => {
 const enroll = await Enroll.findById(req.params.eid);

 if (enroll) {
  await enroll.remove();
  res.json({ message: 'deleted enroll match with this eid' });
 } else {
  res.status(404);
  throw new Error('No enroll course match with this eid');
 }
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
   let progress = 0;
   const videoSize = [];
   enroll.courseId.section.forEach((sec) => {
    sec.videos.forEach((video) => {
     enroll.videosWatched.forEach((v) => {
      if (video._id == v) {
       video.watched = true;
      }
     });
     videoSize.push(video);
    });
   });

   //  console.log(videoSize);

   if (enroll.videosWatched.length === 0) {
    progress = 0;
   } else {
    progress = Math.floor(
     (enroll.videosWatched.length / videoSize.length) * 100
    );
   }

   enroll.progressBar = progress;
   enroll.save();

   return enroll.courseId.id === id;
  });

  res.json(enroll.courseId.section);
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
   enroll.courseId.section.forEach((sec) => {
    sec.videos.forEach((video) => {
     enroll.videosWatched.forEach((v) => {
      if (video._id == v) {
       video.watched = true;
      }
     });
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

//@desc    Fatch enroll video
//@route   POST /api/eLearning/enrolls/:eid/video
//@access  Private USER ADMIN
const addEnrollVideo = asyncHandler(async (req, res) => {
 const { vid } = req.body;
 const enroll = await Enroll.findById(req.params.eid);
 if (enroll) {
  let have = false;
  enroll.videosWatched.forEach((video) => {
   if (video == vid) {
    have = true;
   }
  });
  if (have === false) {
   enroll.videosWatched.push(vid);
   enroll.save();
  }

  res.json(enroll);
 } else {
  res.status(404);
  throw new Error('No enroll match with eid');
 }
});

export {
 getEnrollDetail,
 getUserEnrollCourses,
 createEnrollCourses,
 getEnrollSections,
 getEnrollVideos,
 addEnrollVideo,
 deleteEnrollCourses,
};
