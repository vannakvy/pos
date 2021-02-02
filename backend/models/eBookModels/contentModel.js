import mongoose from 'mongoose';

const contentSchema = mongoose.Schema(
 {
  title: {
   type: String,
   required: true,
  },
  section: {
   type: String,
  },
  details: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eBookDetail',
   },
  ],
 },
 {
  timestamps: true,
 }
);

const eBookContent = mongoose.model('eBookContent', contentSchema);

export default eBookContent;
