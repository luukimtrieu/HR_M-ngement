import React, { useState } from 'react';
import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login', values)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashboard')
                navigate(0)
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err));
    }
    return(
        <div className='login'>
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required onChange={(e) => setValues({...values, email: e.target.value})}/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required onChange={(e) => setValues({...values, password: e.target.value})}/>
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remeber me</label>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
        
    );
};
export default Login;