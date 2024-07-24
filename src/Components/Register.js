import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Signup from './Signup.js';
import Login from './Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function Register() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default Register;