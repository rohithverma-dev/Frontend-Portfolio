import React, { useEffect, useState } from 'react'
import "./myProjects.css"
import config_env from '../../config';
const ProjectsSections = () => {
    // const host = "http://localhost:4000";
    const host = config_env.backend_Url;
    const [projects, setProjects] = useState([])

    const getAllProjects = async () => {
        try {
            // console.log("reading api next");
            const response = await fetch(`${host}/api/v1/project`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('resume-token'),
                },
            });
            const data = await response.json();
            console.log("getProjects", data);
            if (data.success === true) {
                setProjects(data.projects)
            } else {
                // setTimelines([])
                console.log("getprojects api fails");
            }
        } catch (err) {
            console.log(err.message);
            console.log("getprojects api fails");
        }
    }

    useEffect(() => {
        getAllProjects()
    }, [])
    return (
        <div id='PROJECTS-SECTION' className="my_projects projectSection " >
            <h3  >PROJECTS</h3>
            <div id="my_AllTimeProjects">
                {projects && projects.map((project, index) => (
                    <ProjectCart
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
            {/* <div className="project">
                <div className="project-card">
                    <img src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <h4><a href="#">View Demo Video</a></h4>
                </div>
                <div className="project-details">
                    <h3>About Project</h3>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum, quas beatae quasi natus ut itaque odit deleniti quia? Placeat aperiam officia eligendi dolore eos.</p>
                </div>
            </div>
            <div className="project">
                <div className="project-card ">
                    <img src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <h4><a href="#">View Demo Video</a></h4>

                </div>
                <div className="project-details">
                    <h3>About Project</h3>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum, quas beatae quasi natus ut itaque odit deleniti quia? Placeat aperiam officia eligendi dolore eos.</p>
                </div>
            </div>
            <div className="project">
                <div className="project-card">
                    <img src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <h4><a href="#">View Demo Video</a></h4>

                </div>
                <div className="project-details">
                    <h3>About Project</h3>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum, quas beatae quasi natus ut itaque odit deleniti quia? Placeat aperiam officia eligendi dolore eos.</p>
                </div>
            </div>
            <div className="project">
                <div className="project-card">
                    <img src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <h4><a href="#">View Demo Video</a></h4>
                </div>
                <div className="project-details">
                    <h3>About Project</h3>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum, quas beatae quasi natus ut itaque odit deleniti quia? Placeat aperiam officia eligendi dolore eos.</p>
                </div>
            </div> */}
        </div>
    )
}

export default ProjectsSections


const ProjectCart = ({ project, index }) => {

    return (<div className="project">
        <div className="project-card">
            {/* <img src={`http://localhost:4000/public/${project?.project_image}`} alt="" /> */}
            {/* <img src={`${config_env.backend_Url}/public/${project?.project_image}`} alt="" /> */}
            <img src={`${project?.project_image}`} alt="" />
            {/* <h4><a href={project.project_demolink} target='blank' >View Demo Video</a></h4> */}
            <div className="">
                <a href={project?.project_demolink} target="blank" >View Demo Video</a>
                <a href={project?.project_githublink} target="blank" >Git-Hub</a>
            </div>
        </div>
        <div className="project-details">
            <h3>About Project</h3>
            <h2>{project.project_name}</h2>
            <p>{project.project_description}</p>
        </div>
    </div>)
}
