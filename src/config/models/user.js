const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
//you can use underscore but try to follow camel toe noermencature
firstName :{
    type : String
},
lastName :{
    type: String
},
password :{
    type: Number
},
age:{
    type:Number
},
email :{
    type: String
},
gender :{
    type:String
},

});

//note the models name first letter is always in uppercase
const User =mongoose.model("User",userSchema);

module.exports = User;

//or u can direclty write it as 
//module.exports = mongoose.model("User",userSchema);