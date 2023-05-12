import React, { useEffect } from 'react'
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";
import EmailNotVerified from '../components/EmailNotVerified';

var actionCodeSettings = {
  url: 'http://localhost:5173',
  handleCodeInApp: true
};


const Protected = ({ Component }) => {
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {

      if (!user) {
        navigate("/login");
      }else if (!auth.currentUser.emailVerified) {
        navigate('/emailnotverified')
        
      } else {
        // console.log(user);
      }


    });
   

    return () => {
      unsubscribe();
    }
  })



  return (

    <Component user = {auth.currentUser
    } />
  )
}

export default Protected
