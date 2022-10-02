import './App.css'
//import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Home  from './Components/Home';
import About from './Components/About';
import Teams from './Components/Teams';
import Login from './Components/Login';
import Hiring from './Components/Hiring';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Academics from './Components/Academics';
import ErrorPage from './Components/ErrorPage';
import Success from './Components/Success';
import Calender from './Components/Calender';
import Plans from './Components/Plans';
import LeaveApp from './Components/LeaveApp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/leaveapp" element={<LeaveApp />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
