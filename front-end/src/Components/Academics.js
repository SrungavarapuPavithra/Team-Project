import React,{ useEffect } from 'react'
import { NavLink , useNavigate} from 'react-router-dom';

function Academics() {
  const navigate = useNavigate();
  const callAcademicsPage = async () =>{
    try{
      const res= await fetch('/teams',{
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      console.log(data);
      if(res.status!==200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      navigate('/signin');
    }
  }

  useEffect(()=>{
    callAcademicsPage()
  },[]);
  return (
    <>
      <section className="home" id="home">
        <form method = "GET" >
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
        </form>
      </section>
    </>
  );
}

export default Academics