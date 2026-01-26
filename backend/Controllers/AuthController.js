// heree in controller we are writing the logic of ssignup
const bcrypt=require('bcrypt');
const  jwt=require('jsonwebtoken');
const UserModel = require("../Models/User");




const signup=async(req,res)=>{
     try{
        const {name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:"User is already exist, you can login",success:false});
        }
        const userModel=new UserModel({name,email,password});
        console.log("user is created in the databases");
        userModel.password=await bcrypt.hash(password,10);
        //  here we are hashing the password bcrypt.hash takes the password 
        await userModel.save();
        res.status(201).json({message:"Signup sucessfully",success:true});
     }
catch(err){ 
    res.status(500)
    .json({
        message:err.message,
        success:false
    })

}}


const login=async(req,res)=>{
     try{
        const {name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        const errorMsg='Auth failed email or password is wrong'
        if(!user){
            return res.status(403)
            .json({message:errorMsg,success:false});
        }
        const isPassEqual=await bcrypt.compare(password,user.password);
     if(!isPassEqual){
           return res.status(403)
        .json({message:errorMsg,success:false});

     }

     const jwtToken=jwt.sign({email:user.email,_id:user.id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
     )
    //     here we are creatind jwt token for authorization
        res.status(201)
        .json({
            message:"Login success",
            success:true,
            jwtToken,
            email,
            name:user.name
        });
     }
catch(err){ 
    res.status(500)
    .json({
        message:err.message,
        success:false
    })

}}
module.exports={signup};