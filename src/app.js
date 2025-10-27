import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,//allowing requests from this origin(frontend)
    
    credentials:true
}));//for configuring middlewares to parse json data

    app.use(express.json({limit:"16kb"}));//for parsing json data from requests
    app.use(express.urlencoded({extended:true}));// for parsing URL-encoded form data
    app.use(express.static("public"));//for serving static files like images ,css ,js from public folder
    app.use(cookieParser());//for reading cookies from requests
//routes
import userRouter from "./routes/user.routes.js"

//routes decliration
app.use("/api/v1/users",userRouter)


//http://localhost:8000/api/v1/users/register


export {app};