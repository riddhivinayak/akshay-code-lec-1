const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://riddhivinayak001:EhL4EYHzOdxUDP4s@mastetest1.lgurj.mongodb.net/")

// A BETTER WAY TO CONNECT TO THE CLUSTER IS TO 
//WRAP UP THIS IN A ASYNC FUNCTION

const connectionDB =async () =>{
    await mongoose.connect("mongodb+srv://riddhivinayak001:EhL4EYHzOdxUDP4s@mastetest1.lgurj.mongodb.net/devTinder");
};


module.exports=connectionDB;

