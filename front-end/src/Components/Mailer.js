import React, { useRef, useState ,useEffect } from "react";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const [userData,setUserData] = useState({name :"",email:"",message:""})
  const form = useRef();
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
        setUserData({...userData,name:data.name,email:data.email});
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
      setUserData({...userData,[name]:value})
    };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm( "service_9inzcz7", "template_lqhkum5", form.current, "_8hE7B_7PzOSTxPxm" )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent");
          window.alert("Email sent");
          setUserData({...userData, message:" " });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <link rel="stylesheet" href="../assets/Register.css" />
      <div id="register-form-wrap">
        <h2>Send Email</h2><br/>
        <form ref={form} onSubmit={sendEmail} id="register-form">
          <p>
            <input type="text" name="name" placeholder="Name" value= {userData.name} onChange={handleInputs} required  disabled />
          </p>
          <br />
          <p>
            <input type="email" name="email" placeholder="Email" value ={userData.email} onChange={handleInputs} required  disabled />
          </p>
          <br />
          <p>
            <textarea name="message" rows={4} placeholder="Message"  value={userData.message} onChange={handleInputs} required />
          </p>
          <br />
          <p>
            <input type="submit" value="Send" />
          </p>
          <br/>
        </form>
      </div>
    </>
  );
};
export default Mailer;