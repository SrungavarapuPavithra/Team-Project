import React from 'react'
import { NavLink } from 'react-router-dom';

function Academics() {
  return (
    <>
      <section className="home" id="home">
        <div className = "content">
        <span>Calender</span>
        <p>
          Click <NavLink style={{ color: "orange" }} to="/calender"> here </NavLink>to view the calender
        </p>
        <span>Plans </span>
        <p>
          Click <NavLink style={{ color: "orange" }} to="/plans"> here </NavLink>to view the plans
        </p>
        <span> Leave Applications </span>
        <p>
          Click <NavLink style ={{color:"orange"}} to="/leaveapp"> here </NavLink> to apply for a leave
        </p>
        {/* <span> Attendence Report</span>
          <p>
            Click <NavLink to="/attendence"> here </NavLink> to view the attendence report
          </p> */}
          </div>
      </section>
    </>
  );
}

export default Academics