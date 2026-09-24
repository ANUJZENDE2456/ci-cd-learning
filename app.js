const express =require('express');

const app=express();



app.get("/health",(req,res)=>{
    res.json({status:"OK"});
});

app.get("/hello",(req,res)=>{
    res.json({message:"Hello World!"});

});

module.exports=app;