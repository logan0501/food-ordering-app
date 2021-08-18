const mongoose = require('mongoose')
var list=[];
const getdata = async (req,res)=>{
   await mongoose.connection.collection('fooditems').find().forEach(e=>{
      list.push(e);
   });
   return res.json({"data":list});
   
}

module.exports = {getdata}