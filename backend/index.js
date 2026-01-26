const express= require('express');
const app= express();
const bodyParser=require('body-parser');

const cors= require('cors');
const  AuthRouter= require('./Routes/AuthRouter');
require('dotenv').config();
require('./Models/db');//importing database from models database  wow thi is so cool we have write ths line and my database connacted
const PORT= process.env.PORT || 8080;




// get  ussed to retrieve data from server
// post used to send data to server used to create new dataon the server
// put used to update data on server
// delete used to delete data from server
app.get('/ping',(req,res)=>{
  res.send('pong');
});

app.use(express.json());              // parses JSON
app.use(express.urlencoded({ extended: true })); 
// app.use(bodyParser.json());
app.use(cors());


app.use('/auth',AuthRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});