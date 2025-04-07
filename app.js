const express = require('express');
//import express from "express";
//require("./src/config/databse");
const app = express();
const connectionDB = require('./src/config/databse');
const User = require('./src/config/models/user');




app.post("/signup", async(req,res)=>{const user = new User( {firstName : "ansukha",
    lastName:"dubey",
    emailID:"anu@gmail.com",
    password :"123445575690",}
);await user.save();
res.send("useer added susucessfully")


})

//Creating a new instance of the User model 

  
  
//or u can write it as 
//const user = new User( firstName : "riddhi",
     //   lastName:"tripathi",
      //  emailID:"riddhi001@gmail.com",
      //  password :"123445575690",);

connectionDB().then(()=>
    { console.log("datase conneted");
        app.listen(3000,(req,res)=>
            {
            console.log("hi from server");
        
        });

}).catch((err)=>{
    console.error("database cannot be connected")
});
/*
app.use("/hello",(req,res)=>
{
    res.send("helllo heloooo")
});

app.use("/bye",(req,res)=>
    {
        res.send("bye bye")
    });


    app.use("/hii",(req,res)=>
        {
            res.send("hiiii hiiii")
        });

        app.use("/fuck",(req,res)=>
            {
                res.send("fuckkk fuckk")
            });

            app.use("/ouch",(req,res)=>
                {
                    res.send("ouch ouch")
                });
                    
                
app.get("/users",(req,res)=>
    {
        res.send(  {firstname:"riddhi",lastname:"vinayak"});
    });
    
    
app.post("/users",(req,res)=>
    {
        console.log("save your info in the data base ");
        res.send("posted in the data bse")
    });

    
app.delete("/hello",(req,res)=>
    {
        res.send("deleted data from the data base");
    });
    */

