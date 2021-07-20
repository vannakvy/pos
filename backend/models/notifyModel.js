import mongoose from 'mongoose';

const notifyContentSchema = mongoose.Schema(
 {
  name: String,
  descrip: String,
  img: String,
  url: String,
 },
 {
  timestamps: true,
 }
);

const notifySchema = mongoose.Schema(
 {
  user: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: 'User',
  },
  notify: [notifyContentSchema],
 },
 {
  timestamps: true,
 }
);

const Notify = mongoose.model('Notify', notifySchema);

export default Notify;
