const express = require('express');
const products = require('./db/products')

// creating a server

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from express App!!!');
})

app.get("/api/products",(req,res)=>{
    res.status(200).json(products);
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})