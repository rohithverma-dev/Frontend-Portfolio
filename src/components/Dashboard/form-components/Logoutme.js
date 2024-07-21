import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Logoutme = ({ isAuthenticated}) => {

    const navigate = useNavigate()
    const Logout =()=>{
        localStorage.removeItem("resume-token");
        navigate("/")
    }
    
  return (
    <div className='logout' >
      <button disabled={!isAuthenticated} onClick={Logout} >LogOut</button>
    </div>
  )
}

export default Logoutme
