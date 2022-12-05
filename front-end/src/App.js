import './App.css'
import React, { createContext, useReducer } from 'react';
import { Route,Routes} from 'react-router-dom';
import Home  from './Components/Home';
import About from './Components/About';
import Teams from './Components/Teams';
import Login from './Components/Login';
import Hiring from './Components/Hiring';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Academics from './Components/Academics';
import ErrorPage from './Components/ErrorPage';
import Success from './Components/Success';
import Calender from './Components/Calender';
import Plans from './Components/Plans';
import LeaveApp from './Components/LeaveApp';
import Mailer from './Components/Mailer';
import Logout from './Components/Logout';
import { initialState, reducer } from './reducer/UseReducer';

//context API 
export const UserContext = createContext();

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/leaveapp" element={<LeaveApp />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/mailer" element={<Mailer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
