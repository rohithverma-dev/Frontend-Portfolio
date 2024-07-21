import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../Alert'
import config_env from '../../config'

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    // const host = "http://localhost:4000";
    const host = config_env.backend_Url;
    const response = await fetch(`${host}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });

    const token = await response.headers.get('x-Authorization');
    if (token) {
      await localStorage.setItem("resume-token", token);
    }
    const data = await response.json()
    if (data.success === true) {
      setAlertMessage(data?.message);
      setShowAlert(true);
      setTimeout(() => {
        setIsAuthenticated(true)
        setShowAlert(false);
        // navigate("/dashboard");
      }, 3000);
    } else {
      setIsAuthenticated(false)
      setAlertMessage(data?.message);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }

  // useEffect(() => {
  //   console.log(isAuthenticated, "isAuthenticated_user");
  //   if (isAuthenticated && localStorage.getItem('resume-token')) {
  //     navigate("/dashboard")
  //   }
  // }, [isAuthenticated])


  return (
    <>
      {showAlert && <Alert message={alertMessage} />}
      <form className='login_form' onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
