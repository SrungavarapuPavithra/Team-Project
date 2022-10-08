import React, { useContext } from "react";
import {  NavLink, useNavigate  } from 'react-router-dom';
import { useState } from "react";
import { UserContext } from "../App";

const Login = () => {
  const {state,dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    const res= await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    
    const data = await res.json();
    if(res.status  === 400 || !data){
      window.alert("Invalid Credentials");
      console.log("invalid credentials");
    }else{
      dispatch({type :"USER",payload:true})
      window.alert("Login Successfull");
      console.log("login successfull");
      navigate("/teams");
    }
  };

  return (
    <>
      <link rel="stylesheet" href="../assets/Login.css" />
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form method="POST" id="login-form">
          <br />
          <p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </p>
          <br />
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </p>
          <br />
          <p>
            <input type="submit" onClick={ loginUser } id="signin"  name= "signin" value="Login" />
          </p>
          <br />
        </form>
        <div id="create-account-wrap">
          <p>
            Not a member? <NavLink to="/register">Create Account</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
