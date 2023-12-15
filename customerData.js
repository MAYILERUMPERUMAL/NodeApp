import { con } from "./db.js";

const userAdd=(data)=>{
userData.push(data)
}
const customersData=async ()=>{
    // Inside the try block of the connectToMongoDB function

const database = con.db('CustomerDB'); // Replace 'test' with your database name
const collection = database.collection('CustomersPurchase'); // Replace 'mycollection' with your collection name

// Insert a document into the collection
const result = await collection.insertOne({ name: 'John Doe', age: 30 });
console.log(`Inserted document with _id: ${result.insertedId}`);

    let userData=[{id:1,name:'kk'}]
    return userData
}

export {userAdd,customersData}