import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <link rel="stylesheet" href="../assets/About.css" />
      <section className="home" id="home">
        <div className="content">
          <h3> Welcome to Solutions</h3>
          <span>Tech World Welcomes You</span>
          <p>
            Click <NavLink  style={{ color:"orange"}}to ="/success">here</NavLink> to visit success stories 
          </p>
          <br />
          <div className="contents">
            <div className="content-1">
              We leverage our holistic portifolio of capabilities in consulting
              , design,engineering,operations, and emerging technologies to help
              clients realize thier boldest ambitions and build future-ready,
              sustainable businesses.
            </div>
            <div className="content-2">
              A company recognized globally for its comprehensive portifolio of
              services,strong commitment to sustainability and good corporate
              citizenship.
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
