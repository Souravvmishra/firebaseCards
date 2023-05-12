import React from 'react'
import { Routes, Route } from "react-router-dom";
import Protected from "./hoc/Protected";


import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import Home from './components/Home.jsx';
import EmailNotVerified from './components/EmailNotVerified';


const App = () => {
  return (
    <div>


      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<Protected Component={Home} />} />
        <Route path='/emailnotverified' element={<  EmailNotVerified />} />
      </Routes>

    </div>

  )
}

export default App
