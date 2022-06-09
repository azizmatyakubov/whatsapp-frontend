import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'



// Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={localStorage.getItem('token') ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
