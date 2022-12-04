import React ,{ useEffect }from 'react'
import { useNavigate } from 'react-router-dom'

const Hiring = () => {
  const navigate = useNavigate();
  const callHiringPage = async () =>{
    try{
      const res= await fetch('/hiring',{
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
      navigate('/login');
    }
  }

  useEffect(()=>{
    callHiringPage()
  },[]);
  return (
    <>
      <section className = "home" id = "home">
        <form method="GET">
          <div className = "content">
            <h3> New Jobs! </h3>
            <span>Let's go Invent Tomorrow</span>
          </div>
        </form>
      </section>
    </>
  )
}

export default Hiring;