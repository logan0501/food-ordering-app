const express =require('express')
const mongoose = require('mongoose')

const app= express();
require('dotenv').config()
require('./models/user')
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL


mongoose.connect(MONGO_URL,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log("connected to database");
    app.use(require('./routes/home'));});
mongoose.connection.on('error',(err)=>console.log("error"+err));

app.use(express.json())
app.use(require('./routes/auth'))


app.listen(PORT,()=>{console.log(`server started at ${PORT}`);});