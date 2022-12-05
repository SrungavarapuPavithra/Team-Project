import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",team:"",password:"",cpassword:""
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
    console.log(user);
  }

  const PostData = async (e) => {
    e.PreventDefault(); 
    const { name, email, team, password, cpassword } = user;
    console.log(user);
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type ": "application/json"
      },
      body:JSON.stringify({
        name, email, team, password, cpassword
     })
    });
    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid  Registration");
    }else {
      window.alert("Registration  Successfull");
      console.log("Registration Successfull"); 
      navigate("/teams");
    }
  };

  return (
    <>
      <link rel="stylesheet" href="../assets/Register.css" />
      <div id="register-form-wrap">
        <h3>Register</h3><br/>
        <form method="POST" id="register-form">
          <p>
            <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} placeholder="Enter Your Name" required />
          </p>
          <br />
          <p>
            <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="Email Address" required />
          </p>
          <br />
          <p>
            <input type="text" id="team" name="team" value={user.team} onChange={handleInputs} placeholder="Enter Your Team" required />
          </p>
          <br/>
          <p>
            <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" required />
          </p>
          <br />
          <p>
            <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" required />
          </p>
          <br />
          <p>
            <input type="submit" onClick={ PostData } id="register" name="register" value="Register" />
          </p>
        </form>
        <div id="login-account-wrap">
          <p>
            Already an employee ? <NavLink to="/login"> Login </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;