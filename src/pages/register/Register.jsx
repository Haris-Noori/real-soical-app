import "./register.css";

import React from 'react'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Real Social</h3>
                    <span className="loginDesc">Connect with your loved ones.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username" type="text" />
                        <input className="loginInput" placeholder="Email" type="text" />
                        <input className="loginInput" placeholder="Password" type="text" />
                        <input className="loginInput" placeholder="Password Again" type="text" />
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
