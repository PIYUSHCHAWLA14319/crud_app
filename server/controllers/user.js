import userModel from "../models/user.js";
class userController {
    static getAllUsers = async(req,res)=>{
    //    res.send("All users");
    try {
       const allUsers = await userModel.find({})
       if (allUsers) {
        return res.status(200).json(allUsers)
       } 
    } catch (error) {
      return res.status(400).json(error);  
    }
    }

    static createUsers = async(req,res)=>{
        const {name,email,age,mobile}= req.body;
        try {
            if (name && email && age && mobile) {
             const newUser =userModel({
                name,
                email,
                age,
                mobile,
             }) 
             const saved_user = await newUser.save();
             if (saved_user) {
                return res.status(201).json(saved_user);
             }
             else{
            return res.status(400).json({"message":"Something wrong"});  
             }  
            }
            else{
            return res.status(400).json({"message":"All fieled are required"});  

            }

            
        } catch (error) {
            return res.status(400).json(error);  
        }
    }

    static singleUsers= async(req,res)=>{
        const {id} =req.params;
        try {
            if (id) {
                const getsingleData = await userModel.findById(id);
                return res.status(200).json(getsingleData)
            }
            else{
                return res.status(400).json({"message":"id not found"});    

            }
            
        } catch (error) {
            return res.status(400).json(error);     
        }
    }

    static updateuser= async(req,res)=>{
        const {id} =req.params;
        try {
            if (id) {
                const getUpdateData = await userModel.findByIdAndUpdate(id,req.body);
                return res.status(200).json(getUpdateData)
            }
            else{
                return res.status(400).json({"message":"id not found"});    

            }
            
        } catch (error) {
            return res.status(400).json(error);     
        }   
    }
    static deleteuser = async(req,res)=>{
        const {id}=req.params;
        try {
            if (id) {
                const getDeleteData = await userModel.findByIdAndDelete(id);
                return res.status(200).json(getDeleteData)
            }
            else{
                return res.status(400).json({"message":"id not found"});    

            }
            
        } catch (error) {
            return res.status(400).json(error);     
        }   

    }
}

export default userController;