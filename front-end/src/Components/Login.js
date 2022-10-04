import React from "react";
import {  NavLink, useNavigate  } from 'react-router-dom';
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
    console.log(email,password);
    const res = fetch('/signin',{
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
      window.alert("Login Successful");
      console.log("login successful");
      navigate("/company");
    }


  }

  return (
    <>
      <title>HTML5 Login Form with validation Example</title>
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
            <input type="submit" onClick={loginUser} id="signin"  name= "signin" value="Login" />
          </p>
          <br />
        </form>
        <div id="create-account-wrap">
          <p>
            Not a member? <NavLink to="/signup">Create Account</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
