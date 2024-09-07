require('dotenv').config();
const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("Hello I am at root");
});
app.get("/login",(req,res)=>{
    res.send("<h1>Hello Login to enter at main page</h1>");
});

app.listen(process.env.PORT,()=>{
    console.log("Server Established");
});

