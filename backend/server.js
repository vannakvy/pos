// import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

// import searchRoutes from './routes/eLearningRoute/searchRoutes.js';
// import enrollsRoutes from './routes/eLearningRoute/enrollsRoutes.js';
// import courseRoutes from './routes/eLearningRoute/courseRoutes.js';
// import uploadRoutes from './routes/eLearningRoute/uploadRoutes.js';
// //eBook Routes import
// import eBookCourseRoutes from './routes/eBookRoutes/eBookCourseRoutes.js';
// import eBookContentRoutes from './routes/eBookRoutes/eBookContentRoutes.js';
// import eBookDetailRoutes from './routes/eBookRoutes/eBookDetailRoutes.js';
// import eBookStaticFileRoutes from './routes/eBookRoutes/eBookStaticFileRoutes.js';
// //eshop Routes
// import productRoutes from './routes/eShopRoutes/productRoutes.js';
// import supplierRoutes from './routes/eShopRoutes/supplierRoutes.js';
// import orderRoutes from './routes/eShopRoutes/orderRoutes.js';
// import InventoryRoutes from './routes/eShopRoutes/inventoryRoutes.js';
// import purchaseRoutes from './routes/eShopRoutes/purchaseRoutes.js';
// // import eShopUploadRoutes from './routes/uploadsRoutes/eShopUploadRoutes.js';
// import eShopUploadRoutes from './routes/eShopRoutes/eShopUploadRoutes.js';
// import userRoutes from './routes/userRoute/userRoutes.js';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import textRoutes from './routes/testRoutes.js';
// import notifyRoute from './routes/notifyRoute.js';
// import subscripRoutes from './routes/subscripRoutes.js';
// import quizRoutes from './routes/quizRoutes/quizRoutes.js'

import orderRoutes from './routes/posRoutes/order.js'
import productRoutes from './routes/posRoutes/product.js'
import dashboardRoutes from './routes/posRoutes/dashboard.js'


dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
 app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/order', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/dashboard', dashboardRoutes);








// app.use('/api/notify', notifyRoute);
// app.use('/api/courses', courseRoutes);
// app.use('/api/search', searchRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/eLearning/enrolls', enrollsRoutes);
// app.use('/api/eLearning/uploads', uploadRoutes);
// // subscription
// app.use('/api/subscrip', subscripRoutes);
// // for the quiz 
// app.use('/api/quiz', quizRoutes);

// // for eBook Routes
// app.use('/api/ebook/courses', eBookCourseRoutes);
// app.use('/api/ebook/contents', eBookContentRoutes);
// app.use('/api/ebook/details', eBookDetailRoutes);
// app.use('/api/ebook/uploads', eBookStaticFileRoutes);
// //for eshop routes
// app.use('/api/products', productRoutes);
// // app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes);
// app.use('/api/eshop/upload', eShopUploadRoutes);
// app.use('/api/eshop/products', productRoutes);
// app.use('/api/eshop/suppliers', supplierRoutes);
// app.use('/api/eshop/purchases', purchaseRoutes);
// app.use('/api/eshop/users', userRoutes);
// app.use('/api/eshop/orders', orderRoutes);
// app.use('/api/eshop/orders', orderRoutes);
// app.use('/api/eshop/inventory', InventoryRoutes);
// app.get('/api/eshop/config/paypal', (req, res) =>
//  res.send(process.env.PAYPAL_CLIENT_ID)
// );

// test
// app.use('/api/text', textRoutes);

// app.use('/adminEbook/details', express.static('./routes/eBookRoutes/uploads'))

// const __dirname = path.resolve();

// app.use(
//  '/uploads/eLearningUploads',
//  express.static(path.join(__dirname, '/uploads/eLearningUploads'))
// );

// app.use('/uploads/img', express.static(path.join(__dirname, '/uploads/img')));

// app.use(
//  '/adminEbook/details',
//  express.static(path.join(__dirname, '/uploads/eBookUploads'))
// );
// app.use(
//  '/uploads/eBookUploads',
//  express.static(path.join(__dirname, '/uploads/eBookUploads'))
// );
// app.use(
//  '/ebook',
//  express.static(path.join(__dirname, '/uploads/eBookUploads'))
// );

// app.use(
//  '/uploads/eShopUploads',
//  express.static(path.join(__dirname, '/uploads/eShopUploads'))
// );

// app.use('/img', express.static(path.join(__dirname, '/frontend/src/img')));

// app.use(
//  '/.well-known',
//  express.static(path.join(__dirname, '/frontend/build/.well-known'))
// );

// if (process.env.NODE_ENV === 'production') {
//  app.use(express.static(path.join(__dirname, '/frontend/build')));

//  app.get('*', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//  );
// } else {
//  app.get('/', (req, res) => {
//   res.send('API is running....');
//  });
// }

app.use(notFound);
app.use(errorHandler);

//for ebook uploads

const PORT = process.env.PORT || 2100;

app.listen(
 PORT,
 console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
 )
);
