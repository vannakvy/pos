import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import multiparty from 'connect-multiparty';
import path from 'path';
import * as fs from 'fs';
import { CLIENT_RENEG_LIMIT } from 'tls';
const dirname = path.dirname(new URL(import.meta.url).pathname);
<<<<<<< HEAD
=======
const __dirname= dirname.substring(0,dirname.length-27);
// console.log(a)
// const __dirname =dirname.substring(0,7)
console.log(__dirname)

const MultiPartyMiddleware = multiparty({uploadDir:'/images'});
>>>>>>> c03703cf4f8113a1731cb1c513d23c65ee6fd46e

const __dirname = dirname.substring(1, dirname.length - 18);
console.log(__dirname);
const MultiPartyMiddleware = multiparty({ uploadDir: '/images' });
const router = express.Router();
router.use(bodyparser.json());
router.use(express.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.post('/', MultiPartyMiddleware, (req, res) => {
 var Tempfile = req.files.upload;
 var TempPathFile = Tempfile.path;
 const taretPathUrl = path.join(
  __dirname,
  './uploads/eBookUploads/' + Tempfile.name
 );
 if (
  path.extname(Tempfile.originalFilename).toLowerCase() === '.png' ||
  'jpg'
 ) {
  fs.rename(TempPathFile, taretPathUrl, (err) => {
   res.status(200).json({
    uploaded: true,
    url: `${Tempfile.originalFilename}`,
   });
   if (err) return console.log(err);
  });
 }
});

export default router;
