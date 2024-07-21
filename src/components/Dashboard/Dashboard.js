import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./Dashboard.css"
import HomeProfileForm from './form-components/HomeProfileForm';
import TimeLineForms from './form-components/TimeLineForms.js';
import LogOutMe from './form-components/Logoutme.js';
import ProjectForms from './form-components/ProjectForms.js';
import Login from '../Login/Login.js';

const Dashboard = ({ isAuthenticated , setIsAuthenticated }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/")
  //   }
  // }, [])

  return (
    <div  className='Dashboard' >
      {!isAuthenticated && <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
      
      <hr />

      <h1>Dashboard</h1>

      <HomeProfileForm isAuthenticated={isAuthenticated} />


      <TimeLineForms isAuthenticated={isAuthenticated} />


      <ProjectForms isAuthenticated={isAuthenticated} />


      <LogOutMe isAuthenticated={isAuthenticated} />



    </div>
  )
}

export default Dashboard
