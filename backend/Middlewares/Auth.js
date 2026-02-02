const jwt=require('jsonwebtoken');

const ensureAuthenticated=(req,res,next)=>{// middleware function checking if user logged in then allow access only if token is valid
    const auth=req.headers['authorization'];//reading token from headers
    if(!auth){
        return res.status(401)
        .json({message:"Unauthorized, JWT token is require"});

    }
    try{
        const decoded=jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        return res.status(401)
        .json({message:"Unauthorized, Invalid JWT token"});
}
    }

    module.exports=ensureAuthenticated;