import React from "react";
import './login.css'

function Login (props) {



    return (
        <div className="loginContainer">
        <span className="loginTitle">Login Form</span>
        <form action="">
        <label htmlFor="">Username</label>
        <input type="text" placeholder={props.name}/>
        <label htmlFor="">Password</label>
        <input type="password" />
        <button>Login</button>
        </form>
        </div>
    )
}

export default Login;