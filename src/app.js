import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,//allowing requests from this origin(frontend)
    credentials:true
}));//for configuring middlewares to parse json data

    app.use(express.json({limit:"16kb"}));//for parsing cookies from requests
    app.use(express.urlencoded({extended:true}));//for parsing urlencoded data from requests
    app.use(express.static("public"));//for serving static files from public directory
    app.use(cookieParser());//for accessing cookies from requests

export {app};