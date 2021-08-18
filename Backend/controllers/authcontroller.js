
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')

const signup = (req,res)=>{
    const {name,email,password,pic} = req.body 
    if(!email || !password || !name){
       return res.status(422).json({error:"Add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"User already exists"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new User({
                  email,
                  password:hashedpassword,
                  name,
                  pic
              })
      
              user.save()
              .then(user=>{
                  // transporter.sendMail({
                  //     to:user.email,
                  //     from:"no-reply@insta.com",
                  //     subject:"signup success",
                  //     html:"<h1>welcome to instagram</h1>"
                  // })
                  res.json({message:"Data saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
  };

const signin = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"successfully signed in"})
            //    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            //    const {_id,name,email,followers,following,pic} = savedUser
            //    res.json({token,user:{_id,name,email,followers,following,pic}})
             }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
};

module.exports = {signup,signin}