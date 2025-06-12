import React, { useEffect, useState } from "react";
import "../LogInPage/LogPage.css";
import {Link } from 'react-router-dom'
import image1 from './Images-of-Login/right-box-pic.png'

const Log_in_page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(field, e) {
    setForm((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  }

  function logvalue() {
    console.log(form);
  }

  return (
    <>
      <div className="main-page">
        <div className="login-box">
          <div className="left-sidebox">
            <div className="aline-all-things">
            <div className="left-side-texts">
              <div className="logo-box">𝔅BeliBeli.com</div>
              <div className="display-text">Welcome-to-login</div>
            </div>
          </div>
          <div className="input-section">
            <div className="input-text">Email</div>
             <div class="tag-1">
                  <input
                    type="text"
                    onChange={(e) => handleChange("email", e)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-text">Password</div>
                  <div class="tag-1">
                  <input type="password"
                  onChange={(e) => handleChange("password", e)}
                  placeholder="  Enter your password" />
                </div>
          </div>
          <div className="button-section">
              <div className="forgot">
               
                <Link to='#' className="forgot-password">forgot your password?</Link>
                 </div>
                <div className="sign-button"> create an account -
                <Link to='#' className="sign-up">Sign-up</Link>
                </div>
                </div>
                <div className="final-button">
                    <button onClick={logvalue}>Log-In</button>
              
                </div>
          </div>


          <div className="right-side-img-box">

          </div>
      
        </div>
      </div>
    </>
  );
};

export default Log_in_page;
