import asyncHandler from 'express-async-handler';
import Course from '../../models/courseModel.js';

//@desc    Fetch search courses
//@route   GET /api/search
//@access  Public
const searchCourse = asyncHandler(async (req, res) => {
 const keyword = req.query.keyword
  ? {
     name: {
      $regex: req.query.keyword,
      $options: 'i',
     },
    }
  : {};

 const courses = await Course.find({ ...keyword });
 res.json(courses);
});

//@desc    Fetch all courses
//@route   GET /api/courses
//@access  Public
const getCourses = asyncHandler(async (req, res) => {
 const { type } = req.params;

 let courseType = '';

 if (type === 'AllCourses') {
  courseType = 'All Courses';
 } else if (type === 'WebDevelopment') {
  courseType = 'Web Development';
 } else if (type === 'Programming') {
  courseType = 'Programming';
 } else if (type === 'EmbededSystem') {
  courseType = 'Embeded System';
 } else if (type === 'MobileDevelopment') {
  courseType = 'Mobile Development';
 } else if (type === 'MachineLearning') {
  courseType = 'Machine Learning';
 }

 let courses = [];

 if (courseType !== 'All Courses') {
  courses = await Course.find({ courseType: courseType });
  res.json(courses);
 } else {
  courses = await Course.find({});
  res.json(courses);
 }
});

//@desc Fetch course  by id
//@route GET /api/courses/:id
//@access Public
const getCourseById = asyncHandler(async (req, res) => {
 const course = await Course.findById(req.params.id);

 if (course) {
  res.json(course);
 } else {
  res.status(404);
  throw new Error('Cours not found!');
 }
});

//@desc Delete course by id
//@route DELETE /api/courses/:id
//@access Private Admin
const deleteCourseById = asyncHandler(async (req, res) => {
 const course = await Course.findById(req.params.id);

 if (course) {
  await course.remove();
  res.json({ message: `Deleted course by id` });
 } else {
  res.status(404);
  throw new Error('Course not deleted cuz no course found');
 }
});

//@desc Update course by id
//@desc PUT /api/courses/:id
//@access Private Admin
const updateCourseById = asyncHandler(async (req, res) => {
 const { courseType, name, image, description } = req.body;

 const course = await Course.findById(req.params.id);

 if (course) {
  course.courseType = courseType;
  course.name = name;
  course.imgUrl = image;
  course.description = description;

  const updateCourse = await course.save();
  res.json(updateCourse);
 } else {
  res.status(404);
  throw new Error(`Course not found. Can't update`);
 }
});

//@desc Create course
//@route POST /api/courses
//@access Private Admin
const createCourse = asyncHandler(async (req, res) => {
 const { name, courseType, description, image } = req.body;
 const course = new Course({
  user: req.user._id,
  courseType: courseType,
  name: name,
  imgUrl: image,
  description: description,
  objective: [],
  section: [],
 });
 const createCourse = await course.save();
 res.status(201).json(createCourse);
});

//@desc Create Objective
//@route PUT /api/courses/:id/objective
//@access Private Admin
const addObjective = asyncHandler(async (req, res) => {
 const { objective } = req.body;
 const course = await Course.findById(req.params.id);

 if (course) {
  course.objective.push({ name: objective });
  const courseWithObjective = await course.save();
  res.json(courseWithObjective);
 } else {
  res.status(404);
  throw new Error(`Can not add Objective!`);
 }
});

//@desc get Sections
//@route GET /api/courses/:id/section
//@access Public
const getSection = asyncHandler(async (req, res) => {
 const course = await Course.findById(req.params.id);

 if (course) {
  const section = course.section;
  res.json(section);
 } else {
  res.status(404);
  throw new Error(`No course match with this id`);
 }
});

//@desc Create section
//@route PUT /api/courses/:id/section
//@access Private Admin
const addSection = asyncHandler(async (req, res) => {
 const { section } = req.body;
 const course = await Course.findById(req.params.id);

 if (course) {
  course.section.push({ name: section, videos: [] });
  const courseWithSection = await course.save();
  res.json(courseWithSection);
 } else {
  res.status(404);
  throw new Error(`Can not add Section!`);
 }
});

// @desc Delete section by id
// @route DELETE /api/courses/:id/section/:sid
// @access Private Admin
const deleteSectionById = asyncHandler(async (req, res) => {
 const sid = req.params.sid;
 const course = await Course.findById(req.params.id);
 if (course) {
  const section = course.section.filter((obj) => {
   return obj.id !== sid;
  });

  if (section) {
   course.section = section;
   await course.save();
   res.json(course.section);
  }
 } else {
  res.status(404);
  throw new Error('Section not deleted cuz no course found');
 }
});

// @desc Update Section
// @route PUT /api/course/:id/section/:sid
// @access Private Admin
const updateSectionById = asyncHandler(async (req, res) => {
 const { name } = req.body;
 const user = req.user._id;
 const course = await Course.findById(req.params.id);
 const sid = req.params.sid;

 if (course) {
  const section = course.section.find((obj) => {
   return obj.id === sid;
  });

  if (section) {
   section.name = name;
   const sectionEdit = await course.save();
   res.json(sectionEdit);
  } else {
   res.status(404);
   throw new Error(`No section for edit!`);
  }
 } else {
  res.status(404);
  throw new Error(`No Course match with this id!`);
 }
});

// @desc Create videos
// @route PUT /api/course/:id/section/:sid/video
// @access Private Admin
const addVideo = asyncHandler(async (req, res) => {
 const { name, url } = req.body;
 const user = req.user._id;
 const course = await Course.findById(req.params.id);
 const sid = req.params.sid;

 if (course) {
  const section = course.section.find((obj) => {
   return obj.id === sid;
  });

  if (section) {
   section.videos.push({ name: name, url: url, user: user });
   const courseWithVideo = await course.save();
   res.json(courseWithVideo);
  } else {
   res.status(404);
   throw new Error('No section no add video!');
  }
 } else {
  res.status(404);
  throw new Error('No Course match with this id!');
 }
});

// @desc Update videos
// @route PUT /api/course/:id/section/:sid/video/:vid
// @access Private Admin
const updateVideoById = asyncHandler(async (req, res) => {
 const sid = req.params.sid;
 const vid = req.params.vid;
 const { name, url } = req.body;
 const course = await Course.findById(req.params.id);

 if (course) {
  const section = course.section.find((obj) => {
   return obj.id === sid;
  });

  if (section) {
   const video = section.videos.find((obj) => {
    return obj.id === vid;
   });

   if (video) {
    video.name = name;
    video.url = url;
    const editVideo = await course.save();
    res.json(editVideo);
   } else {
    res.status(404);
    throw new Error(`No Video match with this id!`);
   }
  } else {
   res.status(404);
   throw new Error(`No Section match with this id!`);
  }
 } else {
  res.status(404);
  throw new Error(`No Course match with this id!`);
 }
});

// @desc Delete videos
// @route PUT /api/courses/:id/section/:sid/video/:vid
// @access Private Admin
const deleteVidoeoById = asyncHandler(async (req, res) => {
 const sid = req.params.sid;
 const vid = req.params.vid;
 const course = await Course.findById(req.params.id);
 if (course) {
  const section = course.section.find((obj) => {
   return obj.id === sid;
  });

  if (section) {
   const videos = section.videos.filter((obj) => {
    return obj.id !== vid;
   });

   if (videos) {
    section.videos = videos;
    await course.save();
    res.json(section.videos);
   } else {
    res.status(404);
    throw new Error(`Can not delete video!`);
   }
  }
 } else {
  res.status(404);
  throw new Error('No Section founded!');
 }
});

export {
 getCourses,
 getCourseById,
 deleteCourseById,
 updateCourseById,
 createCourse,
 addObjective,
 getSection,
 addSection,
 deleteSectionById,
 updateSectionById,
 addVideo,
 updateVideoById,
 deleteVidoeoById,
 searchCourse,
};
