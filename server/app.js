const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path :'./config.env'});

require('./db/conn');
app.use(express.json());

// we link router files to make our route easy
app.use(require('./router/auth'));

//const User = require('./model/userSchema');
const PORT= process.env.PORT;

//Middleware
const middleware=(req,res,next)=>{
    console.log(`Hello  my middleware`);
    next();
};

// app.get('/',(req,res)=>{
//     res.send(`Hello world from server app.js`);
// });

app.get('/about',middleware,(req,res)=>{
    console.log(`Hello  my About `);
    res.send(`Hello About  world from server`);
});

app.get('/signin',(req,res)=>{
    res.send(`Hello  Login world from server`);
});

app.get('/teams',(req,res)=>{
    res.cookie("teamtoken","this is a token for teams");
    res.send(`Hello Teams from server`);
});

app.get('/hiring',(req,res)=>{
    res.send(`Hello  Hiring from server`);
});

app.get('/academics',(req,res)=>{
    res.send(`Hello  Academics  from server`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello register  world from server`);
});

app.listen(PORT,()=>{
    console.log(`now server is running at port ${PORT}`);
});
