import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../../Loader';
import Alert from '../../../Alert';
import config_env from '../../../config';


const TimeLineForms = ({ isAuthenticated}) => {
  // const host = "http://localhost:4000";
  const host = config_env.backend_Url;
  
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(true)

  const [timelines, setTimelines] = useState([]);
  const [modified, setModified] = useState(false)

  const getAllTimeLines = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/v1/timeline`, {
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
        setTimelines(data.timelines)
      } else {
        setLoading(false)
        // setLoading(true)
        console.log("getAllTimeLines api fails");
        setTimelines([])
      }
    } catch (err) {
      console.log("getTimesLines api fails");
      console.log(err.message);
    }
  }

  const UpdateTimeLine = async (id, file, timelineHeading, timelineDuration, timelineDescription) => {
    setLoading(true)

      const formData = new FormData();
      formData.append("file", file);
      formData.append("timeline_duration", timelineDuration);
      formData.append("timeline_heading", timelineHeading);
      formData.append("timeline_description", timelineDescription);
      try {
        const { data } = await axios.put(`${host}/api/v1/timeline/${id}`, formData, {
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
          console.log(data);
          console.log("UpdateTimeline api fails");
        }
      } catch (err) {
        console.log( "UpdateTimeline APi fails : try-catch-error" ,  err.message);
        setAlertMessage(err.message);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
        setLoading(false)
      }
  }


  useEffect(() => {
    getAllTimeLines()
    setModified(false)
  }, [modified])

  return (
    <>
      {showAlert && <Alert message={alertMessage} />}
      <div className='timeline_all_forms' >
        {timelines && timelines.map((item, index) => {
          // console.log("index" , index , "heading" , item.timeline_heading );
          return loading ? (<Loader />) : (<SingleTimeLineForm  isAuthenticated={isAuthenticated} key={index} item={item} index={index} UpdateTimeLine={UpdateTimeLine} />)
        })}
      </div>
    </>
  )
}

export default TimeLineForms


const SingleTimeLineForm = ({ isAuthenticated , index, UpdateTimeLine, item }) => {

  const [file, setFile] = useState()
  const [timelineDuration, setTimelineDuration] = useState(item?.timeline_duration)
  const [timelineDescription, setTimelineDescription] = useState(item?.timeline_description)
  const [timelineHeading, setTimelineHeading] = useState(item?.timeline_heading)

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateTimeLine(item._id, file, timelineHeading, timelineDuration, timelineDescription);
  }

  return <form onSubmit={handleSubmit} className="timeline_form">
    <h1>TIME-LINE FORM {index + 1}</h1>
    <input disabled={!isAuthenticated}  required type="file" onChange={(e) => setFile(e.target.files[0])} />
    <input disabled={!isAuthenticated}  required type="text" placeholder='Heading' value={timelineHeading} onChange={(e) => setTimelineHeading(e.target.value)} />
    <input disabled={!isAuthenticated}  required type="text" placeholder='Duration' value={timelineDuration} onChange={(e) => setTimelineDuration(e.target.value)} />
    <textarea disabled={!isAuthenticated}  rows="7" required type="text" placeholder='Description' value={timelineDescription} onChange={(e) => setTimelineDescription(e.target.value)} />
    <button disabled={!isAuthenticated}  type='submit' >Update TimeLine</button>
  </form>
}

