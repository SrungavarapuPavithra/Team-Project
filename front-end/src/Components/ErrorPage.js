import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <>
      <section className = "home" id = "home">
        <div className = "content">
           <div className='Error'>
              <h1> Page Not Found</h1><br/>
              <strong>
              <p> 
                The Page your looking  for is missing or it might be  moved to other location 
              </p> <br/>
              <NavLink to ="/"> Back To Home</NavLink>
              </strong>
            </div>
        </div>
      </section>
    </>
  )
}
export default ErrorPage;