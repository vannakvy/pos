import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import multiparty from 'connect-multiparty';
import path from 'path';
import * as fs from 'fs';
const dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(dirname);
const __dirname = dirname.substring(0, dirname.length - 27);
// console.log(a)
// const __dirname =dirname.substring(0,7)
console.log(__dirname);

const MultiPartyMiddleware = multiparty();
const router = express.Router();
router.use(bodyparser.json());
router.use(express.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.post('/',MultiPartyMiddleware,(req,res)=>{
    var Tempfile = req.files.upload;
    var TempPathFile = Tempfile.path;
    const taretPathUrl = path.join(__dirname,"/uploads/eBookUploads/"+Tempfile.name);
    console.log(taretPathUrl);
    if(path.extname(Tempfile.originalFilename).toLowerCase() ===".png"||"jpg"){
        let newPath = taretPathUrl.substring(1);
        fs.rename(TempPathFile,newPath,err=>{
            res.status(200).json({
                uploaded:true,
                url:`${Tempfile.originalFilename}`
            })
            if(err) return console.log(err);
        })
    }
})

export default router;
