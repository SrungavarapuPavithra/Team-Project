import React from 'react'
import { NavLink } from 'react-router-dom'
//import Navbar from './Navbar';
const ErrorPage = () => {
  return (
    <>
    
        <section className = "home" id = "home">
        <div className = "content">
           <div className='Error'>
              <h2> Page Not Found</h2><br/>
              <p> 
                  The Page your looking  for is missing or it might be  moved to other location 
              </p> <br/>
              <NavLink to ="/"> Back To Home</NavLink>
            </div>
        </div>
      </section>
        
    </>
  )
}

export default ErrorPage