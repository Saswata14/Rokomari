import { jobModel } from "../models/jobModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { employerModel } from "../models/userModel.js";

export const createJob = async(req,res)=>{
    try{
        const {title,description,category,jobCost,expireAt} = req.body;
        

        if(!title || !description || !category || !jobCost || !expireAt){
            return res.status(400).json({success:false , message:"All fields needed"});
        }
        const id = Math.floor(1000000 +Math.random()* 9000000);

        const token = req.cookies.token;

        const searchId= jwt.verify(token,process.env.JWT_SECRET);
        console.log(searchId);
        const existingUser = await employerModel.findById(searchId.id)
        
        

        const newJob = new jobModel({
            id,title,description,contactDetails:existingUser,category,jobCost,expireAt
        });
        //newJob.contactDetails=existingUser.name;

        console.log(newJob.contactDetails);
        
        
        await newJob.save();

        return res.status(200).json({success:true, message:"job successfully posted"})
    }
    catch(error){
        return res.status(400).json(error.message);
    }

};

export const updateJob= async(req,res)=>{
    try {
        //delete

        return res.status(200).json({success:true, message:"job successfully deleted"})
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


export const deleteJob= async(req,res)=>{
    try {
        //delete
        

        return res.status(200).json({success:true, message:"job successfully deleted"})
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

export const viewJob= async(req,res)=>{
    try {
        
        

        return res.status(200).json({success:true, message:"job successfully listed"})
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
