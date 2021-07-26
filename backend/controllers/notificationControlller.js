import asyncHandler from 'express-async-handler';
import Notify from '../models/notifyModel.js';

//@desc   Create notify
//@route  POST /api/notify
//@access  Public
export const createNotify = asyncHandler(async (req, res) => {
 const { uid, name, descrip, img, url } = req.body;
 const notify = new Notify({
  user: uid,
  name: name,
  descrip: descrip,
  img: img,
  url: url,
 });

 const createNotify = await notify.save();
 if (createNotify) {
  res.status(201).json(createNotify);
 } else {
  res.status(500);
  throw new Error('Can not create notification!');
 }
});

//@desc   GET notify
//@route  GET /api/notify
//@access  Public User
export const getNotifyByUser = asyncHandler(async (req, res) => {
 const notify = await Notify.find({ user: req.user._id });
 if (notify) {
  res.status(201).json(notify);
 } else {
  res.status(500);
  throw new Error('Can not get notification!');
 }
});
