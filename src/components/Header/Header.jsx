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

    const handleNavClick = (section) => {
        setActiveNav(section);
        if (navRef.current.classList.contains("responsive_nav")) {
            showNavbar();
        }
    };
    
    
    return (
        <div className='header'>
            <Link className="login_btn" to="/dashboard">Login</Link>
            <a href="#HOME" className="logo"> <span>D</span>ynamic <span>P</span>ortfolio.</a>
            <nav ref={navRef} className="navbar">
                <a href="#HOME" onClick={ () => {handleNavClick("#HOME");   } } className={activeNav === "#HOME" ? "active" : ""} style={{ '--i': 1 }} >Home</a>
                <a href="#HOME-SKILLS" onClick={() => {handleNavClick("#HOME-SKILLS");  }} className={activeNav === "#HOME-SKILLS" ? "active" : ""} style={{ '--i': 2 }}>Skills</a>
                <a href="#TIMELINE-SECTION" onClick={()=>{ handleNavClick("#TIMELINE-SECTION");  }} style={{ '--i': 3 }}>Timeline</a>
                <a href="#PROJECTS-SECTION" onClick={() => {handleNavClick("#PROJECTS-SECTION");  }  } className={activeNav === "#PROJECTS-SECTION" ? "active" : ""} style={{ '--i': 4 }}>Projects</a>
                <a href="#CONTACT-PAGE" onClick={() => {handleNavClick("#CONTACT-PAGE");   } } className={activeNav === "#CONTACT-PAGE" ? "active" : ""} style={{ '--i': 5 }}>Contact</a>
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
