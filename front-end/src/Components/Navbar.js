import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
  const RenderMenu = () => {
    if(state){
      return(
        <>
          <nav className="navbar">
            <NavLink to="/">Home &nbsp;&nbsp;</NavLink><equal spacing />
            <NavLink to="/about">About &nbsp;&nbsp;</NavLink><equal spacing />
            <NavLink to="/teams">Teams &nbsp;&nbsp;</NavLink>
            <NavLink to="/hiring">Hiring &nbsp;&nbsp;</NavLink>
            <NavLink to="/academics">Academics &nbsp;&nbsp;</NavLink>
            <NavLink to="/logout">Logout &nbsp;&nbsp;</NavLink>
          </nav>
        </>
      )
    }
    else {
      return(
        <>
          <nav className="navbar">
            <NavLink to="/">Home &nbsp;&nbsp;</NavLink><equal spacing />
            <NavLink to="/about">About &nbsp;&nbsp;</NavLink><equal spacing />
            <NavLink to="/teams">Teams &nbsp;&nbsp;</NavLink>
            <NavLink to="/hiring">Hiring &nbsp;&nbsp;</NavLink>
            <NavLink to="/academics">Academics &nbsp;&nbsp;</NavLink>
            <NavLink to="/login">Login &nbsp;&nbsp;</NavLink>
          </nav>
        </>
      )     
    }
  }
    return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
      <link rel="stylesheet" href="../assets/style.css" />
      <header>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler" className="fas fa-bars"></label>
        <NavLink to="#" className="logo">
          SOLUTIONS<span>.</span>
        </NavLink>
        <RenderMenu />
      </header>
    </>
  );
};

export default Navbar;
