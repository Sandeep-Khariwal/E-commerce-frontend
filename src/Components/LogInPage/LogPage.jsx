import React, { useEffect, useState } from "react";
import "../LogInPage/LogPage.css";
import img1 from "../LogInPage/Images-of-Login/Pic-logo.png";

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

  function logvalue(){
    console.log(form);
  }

  return (
    <>
      <div className="main-page">
        <div className="box1">
          <div className="text">
            <div className="text1">Login</div>
            <div className="under-line"></div>
            <div class="input-box">
              <div class="name">
                <div class="tag-1">
                  <input
                    type="text"
                    onChange={(e) => handleChange("email", e)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div class="name">
                <div class="tag-1">
                  <input type="password"
                  onChange={(e) => handleChange("password", e)}
                  placeholder="  Enter your password" />
                </div>
              </div>
              <div className="button">
                <div className="forgot">
                  <a href="#"> forgot your password ?</a>
                </div>
                <button onClick={logvalue}>Sign-Up</button>
              </div>
            </div>
          </div>
          <div className="img">
            <img width={"100%"} height={"100%"} src={img1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Log_in_page;
