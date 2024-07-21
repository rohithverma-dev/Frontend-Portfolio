import React, { useState } from 'react'
import "./app.css"
import "./home.css"
import "./skillsContainerStyle.css"
import "./myProjects.css"
import "./timeLineContainerStyle.css"
import "./contactPageSection.css"
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import * as emailjs from 'emailjs-com'
import HomeProfile from './HomeProfile'
import HomeSkills from './HomeSkills'
import TimeLineSection from './TimeLineSection'
import ProjectsSections from './ProjectsSections'
import ContactPage from './ContactPage'
// import {portfolio2}  from "./portfolio2";


const Home = () => {
  
    

    return (
        <>
           <HomeProfile/>




           <HomeSkills/>




           <TimeLineSection/>




           <ProjectsSections/>




           <ContactPage/>



        </>
    )
}

export default Home
