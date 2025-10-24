import {v2 as cloudinary} from "cloudinary";
import fs from "fs"; //file system module to delete file after upload here
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET

});

const uploadOnCloudinary=async(localfilePath)=>{
    try {
        if(!localfilePath)return null
        //upload file on cloudinary
        const response=await cloudinary.uploader.upload(localfilePath,{
            resourse_type:"auto",//jpeg,png,mp4 etc
        })
        //file uploaded successfully
        console.log("file uploaded on cloudinary successfully",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath);//delete the file from local storage if upload fails
        console.log("error while uploading file on cloudinary",error);
        return null;
    }
}

export {uploadOnCloudinary};