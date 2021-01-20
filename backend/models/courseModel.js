import mongoose from 'mongoose';

const videoSchema = mongoose.Schema(
 {
  name: { type: String, required: true },
  url: { type: String, required: true },
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
 },
 {
  timestamps: true,
 }
);

const sectionSchema = mongoose.Schema(
 {
  name: { type: String, required: true },
  videos: [videoSchema],
 },
 {
  timestamps: true,
 }
);

const objectiveSchema = mongoose.Schema(
 {
  name: { type: String, required: true },
 },
 {
  timestamps: true,
 }
);

const courseSchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  courseType: { type: String, required: true },
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  objective: [objectiveSchema],
  section: [sectionSchema],
 },
 {
  timestamps: true,
 }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
