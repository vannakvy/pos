import mongoose from 'mongoose';

const languageSchema = mongoose.Schema(
 {
  title: {
   type: String,
   required: true,
  },
  category: {
   type: String,
  },
  contents: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eBookContent',
   },
  ],
 },
 {
  timestamp: true,
 }
);

const eBookCourse = mongoose.model('eBookCourse', languageSchema);

export default eBookCourse;
