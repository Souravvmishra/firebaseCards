import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../config/Firebase";
import { sendEmailVerification } from "firebase/auth";
import LogOut from './LogOut';


const EmailNotVerified = () => {
  const navigate = useNavigate();




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
         navigate('/')
        }
      } else {
        navigate('/login');
      }
    });


    return () => {
      unsubscribe();
    }
  })


  return (
    <div>
      Email Not Verified


      <button onClick={() => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log('Email verification sent')
        })

      }} className='px-4 py-2 border-2 hover:drop-shadow-md mx-4 font-semibold'>
        Verify Email
      </button>


      <LogOut />

    </div>
  )
}

export default EmailNotVerified
