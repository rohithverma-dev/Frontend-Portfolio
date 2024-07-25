import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Alert from '../../../Alert';
import config_env from '../../../config';

const HomeProfileForm = ({ isAuthenticated}) => {
  // const host = "http://localhost:4000";
  const host = config_env.backend_Url;
  
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const [loading, setLoading] = useState(true)
  const [modified, setModified] = useState(false)

  const [id, setid] = useState()
  const [jobTitle, setJobTitle] = useState('');
  const [AdminName, setAdminName] = useState('');
  const [homeAbout, setHomeAbout] = useState('');
  const [resume, setResume] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const getBasicInfo = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/v1/basicinfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('resume-token'),
        },
      });
      const data = await response.json();
      // console.log("getTimeLines for dashboard", data);
      if (data.success === true) {
        setLoading(false)
        setid(data?.basicInfo[0]?._id)
        setJobTitle(data?.basicInfo[0]?.job_title)
        setAdminName(data?.basicInfo[0]?.admin_name)
        setHomeAbout(data?.basicInfo[0]?.home_about)
      } else {

        setLoading(false)
        // setLoading(true)
        console.log("getBasicInfo api fails");
      }
    } catch (err) {
      console.log("getBasicInfo api fails");
      console.log(err.message);
    }
  }




  const UpdateBasicInfo = async (e) => {
    e.preventDefault()
    setLoading(true)
      const formData = new FormData();
      formData.append("files", resume);
      formData.append("files", profilePhoto);
      formData.append("job_title", jobTitle);
      formData.append("home_about", homeAbout);
      formData.append("admin_name", AdminName);
      formData.append("basicInfo_id", id);
      try {
        const { data } = await axios.put(`${host}/api/v1/basicinfo`, formData,
          {
            headers: {
              'Content-type': 'multipart/form-data',
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
          setLoading(false)
          setModified(true)
        } else {
          setAlertMessage(data?.message);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
            
          setModified(false)
          setLoading(false)
          // setLoading(true)
          console.log("UpdateBasicInfo api fails", data);
        }
      } catch (err) {
        console.log( "UpdateBasicInfo APi fails : try-catch-error" ,  err.message);
        setAlertMessage(err?.message);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
        setLoading(false)
      }
  }


  useEffect(() => {
    getBasicInfo()
    setModified(false)
  }, [modified])

  return (
    <>
      {showAlert && <Alert message={alertMessage} />}
      <form onSubmit={(e) => UpdateBasicInfo(e)} className="basicInfo_form">
        <h1>Basic Info Form</h1>
        <div>
          <label htmlFor="resume">Resume </label>
          <input disabled={!isAuthenticated} id='resume' onChange={(e) => setResume(e.target.files[0])} type="file" name='resume' />
        </div>
        <div>
          <label htmlFor="profile_photo">Profile Photo </label>
          <input disabled={!isAuthenticated} id='profile_photo' onChange={(e) => setProfilePhoto(e.target.files[0])} type="file" name='profile_photo' />
        </div>
        <div>
          <label htmlFor="admin_name">Name</label>
          <input disabled={!isAuthenticated} id='admin_name' value={AdminName} onChange={(e) => setAdminName(e.target.value)} name='admin_name' type="text" placeholder='Enter Job Title' />
        </div>
        <div>
          <label htmlFor="job_title">Job Title</label>
          <input disabled={!isAuthenticated} id='job_title' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} name='job_title' type="text" placeholder='Enter Job Title' />
        </div>
        <div>
          <label htmlFor="home_about">Home Section About </label>
          <textarea disabled={!isAuthenticated} id='home_about' value={homeAbout} rows="5" onChange={(e) => setHomeAbout(e.target.value)} name='home_about' placeholder="Write About YourSelf" ></textarea>
        </div>

        <button disabled={!isAuthenticated} type='submit' >Update Basic Info</button>
      </form>
    </>
  )
}

export default HomeProfileForm
