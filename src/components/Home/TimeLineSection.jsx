import React, { useEffect, useState } from 'react';
import "./timeLineContainerStyle.css";
import config_env from '../../config';
const TimeLineSection = () => {

    // const host = "http://localhost:4000";
    const host = config_env.backend_Url;
    const [timelines, setTimelines] = useState([])

    const getTimeLines = async () => {
        try {
            const response = await fetch(`${host}/api/v1/timeline`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('resume-token'),
                },
            });
            const data = await response.json()
            console.log("getTimeLines", data);
            if (data.success === true) {
                setTimelines(data.timelines)
            }
            if (data.success === false) {
                console.log("getTimesLines api fails");
            }
        } catch (err) {
            console.log(err.message);
            console.log("getTimesLines api fails");
        }
    }

    useEffect(() => {
        getTimeLines()
    }, [])


    return (
        <div id='TIMELINE-SECTION' className="timeLineSection">
            <h3>TIME-LINE</h3>

            <div id='my_timelines' className="timeline">
                { timelines && timelines.map((timeline, index) => (
                    <TimeLinecart
                        key={index} 
                        timeline={timeline} 
                        index = {index}
                    />
                ))}
            </div>
        </div>
    )
}

export default TimeLineSection




const TimeLinecart = ({ timeline , index }) => {

    return( <div className={`timeline_container ${index%2 ? "right-container" : "left-container"   }`} >
        <img src={`${config_env.backend_Url}/public/${timeline.timeline_image}`} alt={index} />
        <div className="timeline_text-box">
            <h2>{timeline.timeline_heading}</h2>
            <small>{timeline.timeline_duration}</small>
            <p> {timeline.timeline_description} </p>
        </div>
    </div>)
}

