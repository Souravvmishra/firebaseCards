import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Logout from "./LogOut";
import { auth } from "../config/Firebase";
import { onAuthStateChanged } from 'firebase/auth';





const Home = () => {
  const[user, setUser] = useState(null);
  // const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        }
    })
  })

  if (!user) {
    return <div>Loading...</div>
    
  }


  return (
    <div>
      Home, {user.email}
      <Logout />
    </div>
  )
}

export default Home
