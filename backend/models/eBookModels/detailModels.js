import mongoose from 'mongoose';

const detailSchem = mongoose.Schema(
 {
  title: String,
  contents: String,
 },
 {
  timestamps: true,
 }
);

const eBookDetail = mongoose.model('eBookDetail', detailSchem);

export default eBookDetail;
