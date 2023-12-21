import express from 'express';
import {customersData,userAdd} from './customerData.js';
import dotenv from 'dotenv';
import {connectDB} from './db.js';
const app=express()
app.use(express.json());
dotenv.config()
connectDB()
app.get('/customerData',(req,res)=>{
    console.log('rqq===>',req)
   customersData().then((response)=>{
    res.send(response)
   }).catch((err)=>{
    console.log('err===>',err)
   })
    

})

app.post('/addNewCustomer',async (req,res)=>{
  try{
    const apiRes= await userAdd(req.body)
    console.log('messga===>',apiRes)
 res.json({message:apiRes})
  }catch(error){
    console.log('error==',error)
  }
   

})
app.post('/api/post', (req, res) => {
    // Handle the POST request
    const requestData = req.body;
    console.log('kkk',req)
    res.json({ message: 'POST request received', data: requestData });
  });
 
const port =process.env.PORT ;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});