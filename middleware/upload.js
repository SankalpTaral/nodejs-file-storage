
import multer from 'multer'


const fileFilter = (req,file,cb)=>{

    const allowedTypes = [  
        'image/jpeg',
        'image/png',
        'image/webp'];


    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only JPEG, PNG and WebP images are allowed'));
    }
}
const storageConfig = multer.diskStorage({
    destination :  function (req,file,cb){
        cb(null,'./uploads');
    },

    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage : storageConfig, 
    fileFilter, // just pass the reference dont call it multer interally calls it
    
        limits: {
        fileSize: 5 * 1024 * 1024 // 5 mb 
    }
 });


export default upload;
