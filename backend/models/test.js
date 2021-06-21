import { text } from 'express';
import mongoose from 'mongoose';

const testSchema = mongoose.Schema({
 text: {
  type: String,
 },
});

const Test = mongoose.model('Test', testSchema);

export default Test;
