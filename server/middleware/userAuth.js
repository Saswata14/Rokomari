import jwt from "jsonwebtoken";

export const userAuth =async (req,res)=>{
    try {
        const token=req.cookies.token
        const decodedToken =jwt.verify(token,process.env.JWT_SECRET);

        if(decodedToken.id){
            req.body.id=decodedToken.id;
            return res.status(200).json({success:true, message:"Authorised"}); 
        }
        return res.status(400).json({success:false, message:"Unauthorised"});
        //calling controller
        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}