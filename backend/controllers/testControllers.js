import asyncHandler from 'express-async-handler';
import Test from '../models/test.js';

export const getText = asyncHandler(async (req, res) => {
 const text = await Test.find({});
 if (text) {
  res.json(text);
 }
});

export const getTextById = asyncHandler(async (req, res) => {
 const text = await Test.findById(req.params.id);
 if (text) {
  res.json(text);
 }
});

export const createText = asyncHandler(async (req, res) => {
 const { text } = req.body;
 const tex = await Test.create({ text: text });
 if (tex) {
  res.json(tex);
 }
});

export const updateTextById = asyncHandler(async (req, res) => {
 const text = await Test.findById(req.params.id);
 if (text) {
  text.text = req.body.text;
  const uText = await text.save();
  res.json(uText);
 }
});
