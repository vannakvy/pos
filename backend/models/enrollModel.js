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
  videoId: [{ type: String, required: true }],
 },
 {
  timestamps: true,
 }
);

const Enroll = mongoose.model('Enroll', enrollSchema);
export default Enroll;
