import React from 'react'
import "./app.css"

const Alert = ({message}) => {
    return (
        <div className='alert_div' >
            <div className="message">{message}</div>
            <div className="bar"></div>
        </div>
    )
}

export default Alert
