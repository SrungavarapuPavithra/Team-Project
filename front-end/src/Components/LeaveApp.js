import React from 'react'

const LeaveApp = () => {
  return (
    <>
    <link rel="stylesheet" href="../assets/Signup.css" />
    <div id="register-form-wrap">
        <h2> Apply for leave</h2>
        <form method="POST" id="register-form">
          <br />
          <p>
            <input
              type="email"
              id="email"
              name="email"
            //   value={user.email}
            //   onChange={handleInputs}
              placeholder="Email "
              required
            />
          </p>
          <br />
          <p>
            <input
              type="text"
              id="team"
              name="team"
            //   value={user.password}
            //   onChange={handleInputs}
              placeholder="Team"
              required
            />
          </p>
          <br />
          <p>
            <input
              type="number"
              id="days"
              name="days"
              min="0"
            //   value={user.cpassword}
            //   onChange={handleInputs}
              placeholder="No. of Days"
              required
            />
          </p>
          <br />
          <p>
            <input
              type="submit"
              // onClick={}
              id="Apply"
              value="Apply"
            />
          </p>
          <br />
        </form>
    </div>
    </>
  );
}

export default LeaveApp;