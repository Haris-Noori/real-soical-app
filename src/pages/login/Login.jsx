import "./login.css";

import React from 'react'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Real Social</h3>
                    <span className="loginDesc">Connect with your loved ones.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Email" type="text" />
                        <input className="loginInput" placeholder="Password" type="text" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
