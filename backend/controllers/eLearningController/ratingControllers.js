import asyncHandler from 'express-async-handler';
import Course from '../../models/eLearningModels/courseModel.js';

export const getRating = asyncHandler(async (req, res) => {
 const { id } = req.params;
 const course = await Course.findById(id);

 if (course) {
  let totalRated = 0;
  course.userRated.forEach((r) => {
   totalRated += r.rating;
  });

  let rating = (totalRated / course.userRated.length || 1).toFixed(1);

  const userRated = course.userRated || [];
  res.json({ rating: Number(rating), userRated });
 } else {
  res.status(404);
  throw new Error('Can not find rating');
 }
});

export const addRating = asyncHandler(async (req, res) => {
 const { id } = req.params;
 const course = await Course.findById(id);

 if (course) {
  course.userRated.push({ user: req.user._id, rating: req.body.rating });

  let totalRated = 0;
  course.userRated.forEach((r) => {
   totalRated += r.rating;
  });
  let rating = (totalRated / course.userRated.length || 1).toFixed(1);
  course.rating = rating;
  await course.save();
  res.json({ success: true });
 } else {
  res.status(404);
  throw new Error('Can not add rating');
 }
});
