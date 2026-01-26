const  router=require('express').Router();

const {signupValidation,loginValidation}=require('../Middlewares/AuthValidation');
const {signup}=require('../Controllers/AuthController');


// router.post('/signup',(req,res)=>{
//     res.send('signup success');
//     console.log("A Tanu");
// })
router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation);
module.exports=router;