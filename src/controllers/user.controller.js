import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser= asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"snobbar here, user registered successfully"
    })

})
export {registerUser}