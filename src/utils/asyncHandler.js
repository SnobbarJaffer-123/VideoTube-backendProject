//using promises
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{ //next is (a flag )used to pass the error to the error handling middleware
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error) )
    }
}

export {asyncHandler};

//using try catch
//const asyncHandler=(fn)=>async(req,res,next)=>{
//    try {
//        await fn(req,res,next)
//    } catch (error) {
//        res.status(error.code || 500).json({
//            success:false,
//            message:error.message
//        })
//    }
//}