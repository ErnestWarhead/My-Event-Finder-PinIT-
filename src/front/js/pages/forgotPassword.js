import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PinITLogo from "../../img/PinIT-logo low-res.png";
import "../../styles/forgotPassword.css";

const ForgotPassword = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
		e.preventDefault();
		actions.login(email, password);
	};

    
    return (
        <div>
            <header>
            <Link to="/login">
            <img src={PinITLogo} alt="Logo" />
                </Link>
            </header>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Forgot password?</h2>
                    <h3>Enter your email and we will send you a link to get back into your account.</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <span className="icon"><i className="bi bi-envelope"></i></span>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
                            <label>Email</label>
                        </div>
                        <button type="submit" className="btn">Send email</button>
                        <div className="login-register">
                            <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;