import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Teams() {
  const navigate = useNavigate();
  const callTeamsPage = async () =>{
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
    callTeamsPage()
  },[]);
  return (
    <>
      <section className="home" id="home">
        <form method = "GET">
          <div className="content">
            <h3>Company </h3>
            <span>Non Company</span>
          </div>
        </form>
      </section>
    </>
  );
}

export default Teams;