import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase"



const LogOut = () => {

    const logOut = () => {
        signOut(auth).then(() => {
            alert("Logged Out");
        })
        .catch((error) => {
        });
    }
    return (
        <div>
            <button onClick={logOut} className='px-4 py-2 border-2 hover:drop-shadow-md mx-4 font-semibold'>
                Log Out
            </button>
        </div>
    )
}

export default LogOut
