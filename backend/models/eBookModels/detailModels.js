import mongoose from 'mongoose';

const detailSchem = mongoose.Schema(
 {
  codeShow: String,
  h: String,
  contents: String,
  codeLive: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'LiveCode',
  },
 },
 {
  timestamps: true,
 }
);

const eBookDetail = mongoose.model('eBookDetail', detailSchem);

export default eBookDetail;
