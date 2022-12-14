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

app.get('/about',(req,res)=>{
    console.log(`Hello  my About `);
    res.send(`Hello About  world from server`);
});

app.get('/login',(req,res)=>{
    res.send(`Hello  Login world from server`);
});

app.get('/register', (req, res) => {
  res.send(`Hello register  world from server`);
});

app.listen(PORT,()=>{
    console.log(`now server is running at port ${PORT}`);
});
