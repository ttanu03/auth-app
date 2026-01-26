//ek user.js create krege aur uske andar mongoose k help se schema banege
//1.require mongosse
// 2.define schema 
// connect model to schmea i mean collection to thia schema 

const mongoose=require('mongoose');
const Schema=mongoose.Schema;// here we define schema using Schema
  console.log("making a schema");
const UserSchema=new Schema({ 
  
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
     password:{
        type: String,
        required:true,
    },
});
  console.log("created a schema");

const UserModel=mongoose.model('users', UserSchema);
console.log("B");

module.exports=UserModel;