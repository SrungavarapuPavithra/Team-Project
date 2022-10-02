import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import axios from "axios";

const initial = {
  email: "",
  password: "",
  cpassword: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initial);

  const handleInputs = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUser({ ...user,[e.target.name]: e.target.value });
    console.log(user);
  }

  const PostData = async (e) => {
    e.PreventDefault();
    const { email, password, cpassword } = user;
     console.log(user);
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type ": "application/json",
      },
      body: JSON.stringify({
       email,
       password,
       cpassword,
      })
    });
    const data = await res.json();
    if (res.status === 422||!data) {
      window.alert("Invalid Registration");
      console.log("invalid  registration");
    } else {
      window.alert("Registration is Successful");
      console.log(" registration successful"); 
      navigate('/login');   
    }
  };

  return (
    <>
      <link rel="stylesheet" href="../assets/Signup.css" />
      <div id="register-form-wrap">
        <h2>Register</h2>
        <form method="POST" id="register-form">
          <br />
          <p>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email Address"
              required
            />
          </p>
          <br />
          <p>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
              required
            />
          </p>
          <br />
          <p>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
              required
            />
          </p>
          <br />
          <p>
            <input
              type="submit"
              onClick={PostData}
              id="register"
              value="Register"
            />
          </p>
          <br />
        </form>
        <div id="login-account-wrap">
          <p>
            Already a member ? <NavLink to="/login"> Login </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;