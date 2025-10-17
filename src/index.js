//require("dotenv").config(path:'.env');
import dotenv from "dotenv";
//import mongoose from "mongoose";
//import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
//import express from "express"


//const app=express();

//function connectDB(){
//    mongoose.connect(process.env.MONGODB_URL)
//}
//
//connectDB();


/*
((async()=>{
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
        app.on("err",err=>{
            console.log("error while connecting to server",err)
            throw err;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on port ${process.env.PORT}`);
        })

    }
    catch(err){
        console.log("error while connecting to DB",err);
    }
}))()*/


dotenv.config({
    path:'.env'
});
connectDB();
.then(()=>{
    app.listen(process.env.PORT || 8000,())=>{
        console.log(`server is running on port ${process.env.PORT || 8000}`);
    }
})
.catch((err)=>{
    console.log("error while connecting to DB",err);
});