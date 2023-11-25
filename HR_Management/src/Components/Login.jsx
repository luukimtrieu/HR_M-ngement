import React, { useState } from "react";
import "./style.css"
import axios from "axios";


const Login = () =>{
    const [values, setValues] = useState({
          email: '',
          password: ''
    })

    const handleLogin = (event) => {
        event.preventDefault
        axios.post('http://localhost:3000/auth/adminlogin')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <h2>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email"><strong>Email: </strong></label>
                        <input type="email" name="email" autoComplete="off" placeholder="Enter Email"
                         onChange={(e) => setValues(...values,email = e.target.value)} className="form-control rounded-0"/> 
                    </div>

                    <div>
                        <label htmlFor="password"><strong>Password: </strong></label>
                        <input type="password" name="password" placeholder="Enter Password"
                         onChange={(e) => setValues(...values,password = e.target.value)} className="form-control rounded-0"/> 
                    </div>
                    <hr/>
                    <button className="btn tbn-success w-10 rounded-0">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login