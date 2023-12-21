import { con } from "./db.js";
import mongoose from "mongoose";
const { Schema } = mongoose;
const schema = new Schema({
    customerName:String,
    customerId:Number,
    customerAddress:String,
    customerEmail:String
});
const Model = mongoose.model('Test', schema);
const userAdd=async(data)=>{
    try{
        const userIsExist=await Model.find({ customerName: data[0].customerName}).exec();
       if(userIsExist.length>0){
        return 'user already exist'
       }
       else{
      await Model.insertMany(data)
        return 'user added success fully'
       }
    }catch(error){
        return error
    }
}
const customersData=async()=>{
    try{
        const data=await Model.find().exec()

        console.log('data====>',data)
        return data
    }catch(error){
        console.log('erro ===>',error)
        return error
      
    }
   
}

export {userAdd,customersData}