const jwt = require('jsonwebtoken');
const express= require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn');
const User = require('../model/userSchema');

router.get('/' ,(req,res)=>{
    res.send(`Hello world from server router.js`);
});

//Async-Await
router.post('/register', async (req,res)=>{
    const {name,email,team,password,cpassword} = req.body;
    console.log(req.body);
    if (!name || !email || !password || !cpassword || !team) {
      return res.status(422).json({error:"Pleaze fill all the details"});
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
            const user = new User({name,email,team,password,cpassword});
            // we will hash password and cpassword
            await user.save();
            res.status(201).json({message:'User Registered Successfully'});
        }
    }catch(err){
        console.log(err);
    }
});

//login route 
router.post('/login', async (req,res)=>{
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
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000),
                httpOnly : true,
            });
            if(!isMatch){
                res.status(400).json({error:" invalid credentials"});
                console.log("invalid credentials");
            }else{
                res.json({message:"user login successfull"});
                console.log("user login successfull");
            }
        }else{
            res.status(400).json({error:"invalid credentials"});
            console.log("invalid credentials");
        }    
    }catch(err){
        console.log(err);
    }
});

// Leave Application
router.post('/leaveapp',authenticate,async (req,res)=>{
    try{  
        const { email, team, from, days } = req.body;
        if(!email || !team || !from || !days) {
          return res.status(422).json({ error: "Pleaze fill all the details" });
        }
        const userContact = await User.findOne({ _id: req.userID });     
        if(userContact){
            const userLeave = await userContact.addLeave(email,team,from,days);
            await userContact.save();
            return res.status(201).json({ message: "Leave Applied Successfully" });           
        }
    }catch(err){
        console.log(err);
    }
});

router.get('/teams',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.get('/hiring',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.get('/academics',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

//get User data for required pages
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// Logout 
router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{ path :'/'});
    res.status(200).send(`hello ur about to logout`);
});

module.exports=router;
