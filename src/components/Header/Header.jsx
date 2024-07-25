import React, { useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    const navRef = useRef();
    const [activeNav, setActiveNav] = useState('#HOME')
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <div className='header'>
            <Link className="login_btn" to="/dashboard">Login</Link>
            <a href="#HOME" className="logo"> <span>D</span>ynamic <span>P</span>ortfolio.</a>
            <nav ref={navRef} className="navbar">
                <a href="#HOME" onClick={ () => {setActiveNav("#HOME"); showNavbar();  } } className={(activeNav === "#HOME") ? "active" : ""} style={{ '--i': 1 }} >Home</a>
                <a href="#HOME-SKILLS" onClick={() => {setActiveNav("#HOME-SKILLS"); showNavbar(); }} className={(activeNav === "#HOME-SKILLS") ? "active" : ""} style={{ '--i': 2 }}>Skills</a>
                <a href="#TIMELINE-SECTION" onClick={()=>{ setActiveNav("#TIMELINE-SECTION"); showNavbar(); }}  className={(activeNav === "#TIMELINE-SECTION") ? "active" : ""}  style={{ '--i': 3 }}>Timeline</a>
                <a href="#PROJECTS-SECTION" onClick={() => {setActiveNav("#PROJECTS-SECTION"); showNavbar() ;  }  } className={(activeNav === "#PROJECTS-SECTION") ? "active" : ""} style={{ '--i': 4 }}>Projects</a>
                <a href="#CONTACT-PAGE" onClick={() => {setActiveNav("#CONTACT-PAGE"); showNavbar();  } } className={(activeNav === "#CONTACT-PAGE") ? "active" : ""} style={{ '--i': 5 }}>Contact</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
}

export default Header
