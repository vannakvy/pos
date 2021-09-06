import mongoose from 'mongoose';

const subscripSchema = mongoose.Schema(
 {
  email: String,
 },
 {
  timestamps: true,
 }
);

const Subscrip = mongoose.model('Subscrip', subscripSchema);

export default Subscrip;
