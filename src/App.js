// import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  // Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';


import { useEffect, useState } from "react";
import Alert from "./Alert.js";
import config_env from "./config.js";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const myLocation = useLocation()
  // console.log(myLocation);
  const Token_User = async () => {
    try {
      // const host = "http://localhost:4000";
      const host = config_env.backend_Url;
      const response = await fetch(`${host}/api/v1/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('resume-token'),
        },
      });
      const data = await response.json()
      console.log(data, "Token_User");
      if (data.success === true) {
        setIsAuthenticated(true);
      }
      if (data.success === false) {
        localStorage.removeItem("resume-token");
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    Token_User()
   
    // Function to handle scroll events
    const handleScroll = (e) => {
      const scrollPosition = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      // Calculate scroll position as percentage
      // const skillsContainer_experience__frontend = document.getElementById('skillsContainer_experience__frontend');
      const animate_frontend_skills = document.getElementById('animate_frontend_skills');
      const animate_backend_skills = document.getElementById('animate_backend_skills');

      const my_timelines = document.getElementById('my_timelines');

      const my_AllTimeProjects = document.getElementById('my_AllTimeProjects');

      // console.log(my_timelines.childNodes);



      if (scrollPosition > 12.63) {
        animate_frontend_skills?.classList.add("animate_experience__frontend");
        animate_backend_skills?.classList.add('animate_experience__backend');
      } else {
        animate_frontend_skills?.classList.remove('animate_experience__frontend');
        animate_backend_skills?.classList.remove('animate_experience__backend');
      }

      if (scrollPosition > 31.66) {
        my_timelines?.childNodes.forEach((element, index, arr) => {
          element.classList.add("animate_timeline_container")
        })
      } else {
        my_timelines?.childNodes.forEach((element, index, arr) => {
          element.classList.remove("animate_timeline_container")
        })
      }

      if (scrollPosition > 59.00) {
        my_AllTimeProjects?.childNodes.forEach((element, index, arr) => {
            element.classList.add("animate_project")
        })
      } else {
        my_AllTimeProjects?.childNodes.forEach((element, index, arr) => {
          element.classList.remove("animate_project")
        })
      }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        {/* <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> */}
        <Route exact path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}  />} ></Route>
        <Route path="*" element={<><h1 style={{ "color": "black" }} >NOT FOUND PAGE</h1><h1 style={{ "color": "black" }} >NOT FOUND PAGE</h1><h1 style={{ "color": "black" }} >NOT FOUND PAGE</h1></>} ></Route>
      </Routes>
    </Router>
  );
}



export default App;



