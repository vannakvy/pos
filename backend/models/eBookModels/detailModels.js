import mongoose from 'mongoose';

const detailSchem = mongoose.Schema(
 {
  codeShow: String,
  h: String,
  contents: String,
  codeLive: String,
 },
 {
  timestamps: true,
 }
);

const eBookDetail = mongoose.model('eBookDetail', detailSchem);

export default eBookDetail;
