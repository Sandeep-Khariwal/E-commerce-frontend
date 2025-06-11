import React, { useState } from 'react';
import './SignUp.css';


function SignUp(p) {
  const [Form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
  })

  const handelChange = (f, e) => {
    setForm((p) => {

      return {
        ...p,
        [f]: e.target.value
      }
    })

  }

  const submit = (e) => {
    e.preventDefault()
    console.log(Form);
  }

  return (
    <div className="signup">
      <div className="signup-box">
        <h2 className="heading">Sign Up</h2><br />
        <form className="signup-form">

          <p className="css">Name</p>
          <input type="text" id="name" placeholder="Enter your full name" required onChange={(e) => handelChange("Name", e)} />


          <p className="css">Email</p>
          <input type="email" id="email" placeholder="Enter your email" required onChange={(e) => handelChange("Email", e)} />

          <p className="css">Password</p>
          <input id="password" placeholder="Enter your password" required type='text' onChange={(e) => handelChange("Password", e)} />
          <br /><br />
          <br />



          <button className="signup-button" onClick={(e) => submit(e)} >Sign Up</button>
          <br />
          <br />
        </form >

      </div >
    </div >
  );
}

export default SignUp;
// gti -b branch name == create only branch
// git checkout -b branch name == create new branch and shift
// git branch == check all branch
// git check branch-name== shift new branch
// git add filename== for add file in git changes
// git add  . => add all files togehter
// git status ==  konsi stage pe ho app

// git commit -m " sentence likho kya kiya apne (message)"
// git push origin (branchName) == for push code on upstream branch
// add  =>  commit(stagging area)  => (push) main