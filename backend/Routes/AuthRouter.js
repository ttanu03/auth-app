const  router=require('express').Router();

const {signupValidation,loginValidation}=require('../Middlewares/AuthValidation');
const {signup,login}=require('../Controllers/AuthController');


// router.post('/signup',(req,res)=>{
//     res.send('signup success');
//     console.log("A Tanu");
// })
router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);

module.exports=router;