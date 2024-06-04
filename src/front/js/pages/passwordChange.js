import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PinITLogo from "../../img/PinIT-logo low-res.png";
import "../../styles/passwordChange.css";

export const PasswordChange = () => {
	const { store, actions } = useContext(Context);
	const [newpassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");


	const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      actions.changePassword(newPassword);
    } else {
      alert("Passwords do not match");
    }
  };


	return (
		<body> className="text-center mt-5"
			<h1>Hello PinIT!!</h1>
		  <Link to="/login">
          <img src={PinITLogo} alt="Logo" />
        </Link>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
			  <form onSubmit={handleSubmit}>omes with lots of documentation:{" "}
				 <div className="input-box">
              <span className="icon"><i className="bi bi-lock"></i></span>
              <input type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <label>New Password</label>
            </div>	<	div className="input-box">
              <span className="icon"><i className="bi bi-lock-fill"></i></span>
              <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label>Confirm New Password</label>
            </div>
            <button type="submit" className="btn">Change Password</button>
          </form>	</body>