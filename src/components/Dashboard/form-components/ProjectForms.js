import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../../Loader';
import Alert from '../../../Alert';
import config_env from '../../../config';


const ProjectForms = ({ isAuthenticated}) => {
  // const host = "http://localhost:4000";
  const host = config_env.backend_Url;

  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const [loading, setLoading] = useState(true)

  const [projects, setProjects] = useState([])
  const [modified, setModified] = useState(false)

  const getAllProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/v1/project`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('resume-token'),
        },
      });
      const data = await response.json();
      if (data.success === true) {
        setLoading(false)
        setProjects(data.projects)
      } else {
        setLoading(false)
        // setLoading(true)
        console.log("getAllProjects api fails");
        setProjects([])
      }
    } catch (err) {
      console.log("getAllprojects api fails");
      console.log(err.message);
    }
  }

  const UpdateProject = async (id , file , projectName  , projectDemolink , projectGithublink , projectDescription ) => {
    
      setLoading(true)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("project_name", projectName);
      formData.append("project_description", projectDescription);
      formData.append("project_demolink", projectDemolink);
      formData.append("project_githublink", projectGithublink);
      try {
        const { data } = await axios.put(`${host}/api/v1/project/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            'auth-token': localStorage.getItem('resume-token'),
          },
        }
        );
        if (data.success === true) {
          setAlertMessage(data?.message);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
          setModified(true)
          setLoading(false)
        } else {
          setAlertMessage(data?.message);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
          setModified(false)
          setLoading(false)
          // setLoading(true)
          console.log(data);
          console.log("UpdateProject api fails");
        }
      } catch (err) {
        console.log( "UpdateProject APi fails : try-catch-error" ,  err.message);
        setAlertMessage(err.message);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
        setLoading(false)
        console.log(err.message);
      }
  }


  useEffect(() => {
    getAllProjects()
    setModified(false)
  }, [modified])

  return (
    <>
    {showAlert && <Alert message={alertMessage} />}
    <div className='project_all_forms' >
      {projects && projects.map((item, index) => {
        return loading ? ( <Loader/> ) : (<SingleProjectForm isAuthenticated={isAuthenticated} item={item} key={index} index={index}  UpdateProject={UpdateProject} />)
      })}
    </div>
    </>
  )
}

export default ProjectForms



const SingleProjectForm = ({isAuthenticated ,  index, UpdateProject , item }) => {
  const [file, setFile] = useState()
  const [projectName, setProjectName] = useState(item?.project_name)
  const [projectDemolink, setProjectDemolink] = useState(item?.project_demolink)
  const [projectGithublink, setProjectGithublink] = useState(item?.project_githublink)
  const [projectDescription, setProjectDescription] = useState(item?.project_description)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateProject(item._id, file, projectName, projectDemolink, projectGithublink , projectDescription );
  }
  
  return <form onSubmit={handleSubmit} className="project_form">
    <h1>PROJECT FORM {index + 1}</h1>
    <input disabled={!isAuthenticated}   required type="file" onChange={(e) => setFile(e.target.files[0])} />
    <input disabled={!isAuthenticated}   required type="text" placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
    <input disabled={!isAuthenticated}   required type="text" placeholder='Project Demolink' value={projectDemolink} onChange={(e) => setProjectDemolink(e.target.value)} />
    <input disabled={!isAuthenticated}   required type="text" placeholder='Project Githublink' value={projectGithublink} onChange={(e) => setProjectGithublink(e.target.value)} />
    <textarea disabled={!isAuthenticated}   rows="10" required type="text" placeholder='Project Description' value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
    <button disabled={!isAuthenticated}   type='submit' >Update Project</button>
  </form>
}

