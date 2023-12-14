import express from 'express';
import customersData from './customerData.js';
const app=express()
app.use(express.json());
app.get('/customerData',(req,res)=>{
    console.log('rqq===>',req)
    res.send(customersData())

})

app.post('/addNewCustomer',(req,res)=>{
    const requestData = req.body;
   customersData(req.body)
res.json({message:'user successfully added'})

})
app.post('/api/post', (req, res) => {
    // Handle the POST request
    const requestData = req.body;
    console.log('kkk',req)
    res.json({ message: 'POST request received', data: requestData });
  });
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});