const jwt = require('jsonwebtoken');
const express= require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/' ,(req,res)=>{
    res.send(`Hello world from server router.js`);
});

//using Promises

// router.post('/register',(req,res)=>{
//     const {email,password,cpassword} = req.body;
//     if (!email || !password || !cpassword) {
//       return res.status(422).json({ error:"Pleaze fill all the details"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exits"});
//         }
//         const user = new User({email,password,cpassword});
//         user.save().then(()=>{
//             res.status(422).json({message:"User regisstered successfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to register"}));
//     }).catch(err=>{console.log(err);});
// });


//Async-Await

router.post('/register', async (req,res)=>{
    const {email,password,cpassword}= req.body;
    console.log(req.body);
    if (!email || !password || !cpassword) {
      return res.status(422).json({ message:`email:${email},password:${password},cpassword:${cpassword}`,error:"Pleaze fill all the details"});
    }
    try{  
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error : "Email already exists"});
        }
        else if(password!=cpassword){
            return res.status(422).json({error : "Passwords are not matched"});
        }
        else{
            const user = new User({email,password,cpassword});
            // we will hash password and cpassword
            await user.save();
            res.status(201).json({message:'User Registered Successfully'});
        }
    }catch(err){
        console.log(err);
    }
})


//login route 

router.post('/signin', async (req,res)=>{
   try{
        let token;
        const {email,password} = req.body;
        console.log(req.body);
        if(!email || !password){
                return res.status(400).json({error : "Pleaze fill required  data "});
        }
        const userLogin =  await User.findOne({ email : email });
           
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            token  = await userLogin.generateAuthToken();
            // console.log(token);
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000),
                httpOnly : true
            });
            if(!isMatch){
                res.status(400).json({error:" invalid credentials  "});
                console.log("invalid credentials");
            }else{
                res.json({message:"user login successful"});
                console.log("user login successful");
            }
        }else{
            res.status(400).json({error:" invalid credentials"});
            console.log("invalid credentials");
        }    
    }catch(err){
        console.log(err);
    }
});


module.exports=router;