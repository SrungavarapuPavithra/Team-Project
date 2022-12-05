import React ,{ useState ,useEffect }from 'react'

const LeaveApp = () => {
    const [userData, setUserData] = useState({email:"",team:"",from:"",days:""});
    const userContact = async () => {
      try {
        const res = await fetch("/getdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
        setUserData({ ...userData, email: data.email, team: data.team ,from: Date.now});
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      userContact();
    }, []);

    const handleInputs = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUserData({ ...userData, [name]: value });
    }
//send data to backend
  const PostData = async (e) => {
    e.PreventDefault(); 
    const { email,team,from,days } = userData;
    const res = await fetch('/leaveapp', {
      method: "POST",
      headers: {
        "Content-Type ": "application/json"
      },
      body:JSON.stringify({
        email,team,from,days
     })
    });
    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert("Invalid Application");
      console.log("Invalid  Application");
    }else {
      window.alert("Application  Successfull");
      console.log("Application Successfull"); 
      setUserData({...userData,from:Date.now,days:""})
    }
  };
  return (
    <>
    <link rel="stylesheet" href="../assets/Register.css" />
    <div id="register-form-wrap">
        <h2> Apply for leave</h2><br/>
        <form method="POST" id="register-form">
          <p>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleInputs} placeholder="Email " required  disabled />
          </p>
          <br />
          <p>
            <input type="text" id="team" name="team" value={userData.team} onChange={handleInputs} placeholder="Team" required  disabled />
          </p>
          <br />
          <p>
            <input type="date" id="from" name="from" value={userData.from} onChange={handleInputs} placeholder="From Date"  required   />
          </p>
          <br />
          <p>
            <input type="number" id="days" name="days" min="0"  value={userData.days} onChange={handleInputs} placeholder="Days" required />
          </p>
          <br />
          <p>
            <input type="submit" onClick={ PostData } id="apply" name ="apply" value="Apply" />
          </p>
          <br />
        </form>
    </div>
    </>
  );
}

export default LeaveApp;