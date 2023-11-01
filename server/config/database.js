import mongoose from "mongoose";



// Mongodb to connection
const connectToMongo = async()=>{

    try {
    const res=  await mongoose.connect("mongodb://127.0.0.1:27017/crudMrne");
    if (res) {
       console.log("connect the  Successfully")  
    }
    } catch (error) {
      console.log(error)  
    }
};
export default connectToMongo;