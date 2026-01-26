const mongoose=require('mongoose');
const mongo_url=process.env.MONGO_CONN;

mongoose.connect(mongo_url) //here it will take mongoose url and return promise
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});