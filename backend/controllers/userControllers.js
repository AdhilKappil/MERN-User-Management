import asyncHandler from 'express-async-handler'

const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Auth user'})
})



const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Register user'})
})



const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'logout user'})
})


const getUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'user profile'})
})


const updateUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'update user'})
})



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}