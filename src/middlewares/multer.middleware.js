import multer from 'multer'; //importing multer for handling file uploads

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/temp'); //folder where files will be stored temporarily before uploading to cloudinary
    },
    filename:function(req,file,cb){
        cb(null,file.originalname); //unique filename to avoid overwriting
    }
})

 export const upload=multer({storage:storage});