export const createJob = async(req,res)=>{
    try{
        const {title,description,category,jobCost,expireAt} = req.body;
        const id = Math.floor(1000000 +Math.random()* 9000000);

        if(!title || !description || !category || !jobCost || !expireAt){
            return res.status(400).json({success:false , message:"All fields needed"});
        }

    }
    catch(error){
        return res.status(400).json(error.message);
    }

};