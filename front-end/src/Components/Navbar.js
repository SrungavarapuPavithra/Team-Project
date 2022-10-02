import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <link rel="stylesheet" href="../assets/style.css" />
      <header>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler" className="fas fa-bars"></label>
        <NavLink to="#" className="logo">
          SOLUTIONS<span>.</span>
        </NavLink>
        <nav className="navbar">
          <NavLink to="/">Home &nbsp;&nbsp;</NavLink>
          <equal spacing />
          <NavLink to="/about">About &nbsp;&nbsp;</NavLink>
          <equal spacing />
          <NavLink to="/teams">Teams &nbsp;&nbsp;</NavLink>
          <NavLink to="/hiring">Hiring &nbsp;&nbsp;</NavLink>
          <NavLink to="/academics">Academics &nbsp;&nbsp;</NavLink>
          <NavLink to="/login">Login &nbsp;&nbsp;</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
