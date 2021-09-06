import asyncHandler from 'express-async-handler';
import Subscrip from '../models/subscripModal.js';

export const createSubscrip = asyncHandler(async (req, res) => {
 const { email } = req.body;

 const emailExist = await Subscrip.findOne({ email });

 if (emailExist) {
  res.status(500);
  throw new Error('អ៊ីម៉ែលនេះបាន Subscript ម្ដងហើយ!');
 } else {
  const subscrip = new Subscrip({
   email: email,
  });

  const createSub = await subscrip.save();
  if (createSub) {
   res.status(201).json(createSub);
  } else {
   res.status(500);
   throw new Error('Can not create subscription!');
  }
 }
});
