import mongoose from 'mongoose';

const enrollSchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  courseId: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'Course',
  },
  progressBar: { type: Number, required: true, default: 0 },
  videosWatched: [{ type: String, required: true, unique: true }],
 },
 {
  timestamps: true,
 }
);

const Enroll = mongoose.model('Enroll', enrollSchema);
export default Enroll;
