import React from "react";
import { signInWithGoogle } from "../firebase/config";
import logo from "../img/Netflix_logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContent">
        <img src={logo} alt="logo" />
        <div className="loginBox">
          <p className="loginTop">Welcome back!</p>
          <h2 className="loginTitle">Unlimited movies, TV shows, and more.</h2>
          <p className="loginBottom">Watch anywhere. Cancel anytime.</p>
          <button className="loginBtn" onClick={signInWithGoogle}>
            <span>Finish Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
