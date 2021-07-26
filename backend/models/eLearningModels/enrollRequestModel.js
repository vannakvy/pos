import mongoose from 'mongoose';

const requestEnrollSchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  cid: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'Course',
  },
  descrip: String,
 },
 {
  timestamps: true,
 }
);

const RequestEnroll = mongoose.model('RequestEnroll', requestEnrollSchema);

export default RequestEnroll;
