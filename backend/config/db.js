import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
 try {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
 } catch (error) {
  console.error(`Error: ${error.message}`.red.underline.blod);
 }
};

export default connectDB;
