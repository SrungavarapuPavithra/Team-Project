import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // const [cpassword,setCpassword] = useState('');
  const [user,setUser] = useState({
    email:"",password:"",cpassword:""
  });

  let name,value;
  const handleInputs = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
    console.log(user);
  }

  const PostData = async (e) => {
    e.PreventDefault(); 
    const {email,password,cpassword}=user;
    console.log(email, password, cpassword);
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type ": "application/json"
      },
      body:JSON.stringify({
        email,
        password,
        cpassword
     })
    });
    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid  Registration");
    }else {
      window.alert("Registration  Successfull");
      console.log("Registration Successfull"); 
      navigate("/signin");   
    }
  };

  return (
    <>
      <link rel="stylesheet" href="../assets/Signup.css" />
      <div id="register-form-wrap">
        <h2>Register</h2>
        <form method="POST" id="register-form">
          <br/>
          <p>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              // onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </p>
          <br/>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              // onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </p>
          <br/>
          <p>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              // onChange={(e)=>setCpassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </p>
          <br/>
          <p>
            <input type="submit" onClick={ PostData } id="register" name="register" value="Register"/>
          </p>
          <br/>
        </form>
        <div id="login-account-wrap">
          <p>
            Already a member ? <NavLink to="/signin"> Login </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;