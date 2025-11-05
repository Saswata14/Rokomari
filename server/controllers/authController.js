import { employeeModel, employerModel } from "../models/userModel.js"

export const employeeRegister = async(req,res)=>{
    try {
        const {name,email,password,phone,gender,id} = req.body;

        if(!email || !name || !password || !gender || !phone || !id){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employeeModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message:"user already exists"});
        }

        const newUser = new employeeModel({
            name,email,password,phone,gender,id
        });

        await newUser.save();
        return res.status(200).json({success:true, message:"user created successfully"});
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const employerRegister = async(req,res)=>{
    try {
        const {name,email,password,phone,gender,id} = req.body;

        if(!email || !name || !password || !gender || !phone || !id){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employerModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message:"user already exists"});
        }

        const newUser = new employerModel({
            name,email,password,phone,gender,id
        });

        await newUser.save();
        return res.status(200).json({success:true, message:"user created successfully"});
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
};


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        if(!email){
            return res.status(400).json({success:false, message:"The email does not exists"})
        }

        /*const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success:true, message:"Logged in successfully"});
        }*/
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
};
