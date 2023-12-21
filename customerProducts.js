import mongoose from "mongoose";

const {Schema}=mongoose

const customProducts=new Schema({
    productId:Number,
    productName:String,
    productPrice:Number,
    productQnty:Number,
    productQuality:Number,
    productBrand:String,
    productColor:String
})

const Model = mongoose.model('Test', customProducts);
