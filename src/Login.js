import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import {auth,provider} from "./fire";
function Login() {
   const  signIn=()=>{
        auth.signInWithPopup(provider)
    }
  return (
    <div className="login-outer">
      <div className="login">
        <h2> Welcome Back!</h2>
        <h3>we are so excited to see you again!</h3>
        <div className="login_logo">
          <img alt="" src="https://devatagame.com/wp-content/uploads/2021/01/1200px-Discord_logo.svg-1.png"></img>
        </div>
        <Button onClick={signIn}>Sign in</Button>
      </div>
    </div>
  );
}

export default Login;
