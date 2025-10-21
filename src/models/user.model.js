import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true  //for making username searchable in database 
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            

        },
        fullname:{
             type:String,
            required:true,
            trim:true,
            index:true
        },
        avator:{
            type:String,//cloudinary url
            required:true,


        },
        coverImage:{
            type:String,//cloudinary url

        },
        watchhistory:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
    }],
        password:{
            type:String,
            required:[true,"Password is required"],

        },
        refreshToken:{
            type:String,

        }

},{timestamps:true})

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.passwod=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
     return await bcrypt.compare(password,this.password)

}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TIME_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        
    },
    process.env.REFRESh_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TIME_EXPIRY
    }
)
}
export const User=mongoose.model("User",userSchema)