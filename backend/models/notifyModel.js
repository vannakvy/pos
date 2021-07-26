import mongoose from 'mongoose';

const notifySchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  name: String,
  descrip: String,
  img: String,
  url: String,
 },
 {
  timestamps: true,
 }
);

const Notify = mongoose.model('Notify', notifySchema);

export default Notify;
