import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar.jsx";
import Home from './component/Home.jsx';
import Services from './component/Services.jsx';
import Schedule from './component/Schedule.jsx';
import Merch from './component/Merch.jsx';
import About from './component/About.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';



function App() {
  return (
    <>
       <div className="App">
        <Navbar /> 
        < Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/merch" element={<Merch/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
       

        </Routes>
      </div>
      
    </>
  );
}

export default App;
