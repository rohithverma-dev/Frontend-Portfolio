import React, { useEffect, useState } from 'react'
import "./app.css";
import config_env from '../../config';
const HomeProfile = () => {
    // const host = "http://localhost:4000";
    const host = config_env.backend_Url;
    console.log("host", host );
    const [homeProfile, setHomeProfile] = useState({
        job_title: "",
        admin_name: "",
        home_about: "",
        resume: "",
        profile_photo: "",
        portfolio_name :""
    });

    const getHomeProfile_Detais = async () => {
        try {
            const response = await fetch(`${host}/api/v1/basicinfo`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('resume-token'),
                },
            });
            const data = await response.json()
            console.log("getHomeProfile_Detais", data);
            if (data.success === true) {
                const {basicInfo} = data
                const profiledata = basicInfo[0]
                setHomeProfile(prevState => ({
                    ...prevState,
                    job_title: profiledata.job_title ,
                    admin_name: profiledata.admin_name ,
                    home_about: profiledata.home_about ,
                    resume: profiledata.resume ,
                    profile_photo: profiledata.profile_photo ,
                    portfolio_name: profiledata.portfolio_name ,
                }));
            }
            if (data.success === false) {
              console.log("getHomeProfile_detail api fails");
            }
        } catch (err) {
            console.log(err.message);
            console.log("getHomeProfile_detail api fails");
        }
    }

    useEffect(() => {
        getHomeProfile_Detais()
    }, [])

    return (
        <div id='HOME' className="home" >
            <div className="home-content">
                {/* <h3 id="fullstack">Full Stack Developer</h3> */}
                <h3 id="fullstack">{homeProfile.job_title}</h3>
                <h1>{homeProfile.admin_name}</h1>

                <div className="container">
                    <div className="sec-texts">
                        <div>Frontend Developer</div>
                        <div>Backend Developer</div>
                        <div>UI/UX Designer</div>
                    </div>
                </div>

                {/* <p><span>I am a full stack web developer, proficient in both front-end and back-end technologies. Create
                    responsive, user-friendly, and visually appealing websites.</span></p> */}
                <p><span>{homeProfile.home_about}</span></p>
                {/* <a href={`http://localhost:4000/public/${homeProfile.resume}`} target='_blank' className="btn">Download Resume</a> */}
                {/* <a href={`${config_env.backend_Url}/public/${homeProfile.resume}`} target='_blank' className="btn">Download Resume</a> */}
                <a href={`${homeProfile.resume}`} target='blank' className="btn" >Download Resume</a>
                <a href="#CONTACT-PAGE" className="btn2">Hire Me Now</a>
                <div className="social-media">
                    {/* <a href="#" style="--i:7"><i className='bx bxl-'></i></a>
    <a href="#" style="--i:8"><i className='bx bxl-'></i></a>
    <a href="#" style="--i:9"><i className='bx bxl--alt'></i></a>
    <a href="#" style="--i:10"><i className='bx bxl-'></i></a> */}

                    <a href="https://github.com/rohithverma-dev" target='_blank' style={{ '--i': '7' }}><i className='bx bxl-github'></i></a>
                    <a href="https://x.com/verma_rohi1h" target='_blank' style={{ '--i': '8' }}><i className='bx bxl-twitter'></i></a>
                    <a href="https://www.linkedin.com/in/rohit-fullstack-dev/" target='_blank' style={{ '--i': '9' }}><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
            <div className="home-img">
                {/* <img src="/portfolio2.png" alt="" /> */}
                {/* <img src={`http://localhost:4000/public/${homeProfile.profile_photo}`} alt="" /> */}
                <img src={`${homeProfile.profile_photo}`} alt="" />
                <div className="image_shadow"></div>
            </div>
            
        </div>
    )
}

export default HomeProfile
