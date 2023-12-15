import mongoose from "mongoose";
let con
const connectDB = async() => {
    console.log(process.env.MONGO_URI,'process.env.MONGO_URI')
    con = await mongoose.connect(process.env.MONGO_URI);
    if(con.connect){
        console.log('connected successfully',con)
    }
}


export  {connectDB,con};