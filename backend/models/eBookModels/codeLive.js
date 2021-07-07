import mongoose from 'mongoose';

const liveCodeSchema = mongoose.Schema(
 {
  content: String,
 },
 {
  timestamps: true,
 }
);

const LiveCode = mongoose.model('LiveCode', liveCodeSchema);
export default LiveCode;
