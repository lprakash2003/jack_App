

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth"
import {Link, useNavigate } from "react-router-dom";




function Login() {
   
    const[email,setEmail]=useState("")
    const[pswd,setPswd]=useState("")
   
   const navigate=useNavigate()

const firebaseConfig = {
  apiKey: "AIzaSyC7MwQj8ZGicF-U1aM3I_1nfhHuA_Q5HCw",
  authDomain: "john-e2518.firebaseapp.com",
  projectId: "john-e2518",
  storageBucket: "john-e2518.appspot.com",
  messagingSenderId: "1078894862798",
  appId: "1:1078894862798:web:29e5244dbedd43b5a34b9f",
  measurementId: "G-BGRPBEH5BY"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()

const submitOn = (event) => {
  event.preventDefault()

  let obj={
    email:email,
    password:pswd
  }
  signInWithEmailAndPassword(auth,obj.email,obj.password)

    .then(()=>{
        alert("Your Login page successfully created..")
        navigate("/control")
    })
    .catch((err)=>{
        alert("Error",err)
    })
 

}
    
  return (
    <div className="container" style={{width:"400px"}}>
      <div className="card my-5 p-4" id="two" style={{border:"2px solid black"}}>
        <div className="card-title">
          <h2 style={{color:"blue",textAlign:"center"}}>Login Your Account</h2>
        </div>
        <div className="card-body">
          <form onSubmit={submitOn}>

            <div class="mb-3">
              <label class="form-label">Email </label>
              <input value={email} onChange={e=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Password </label>
              <input value={pswd} onChange={e=> setPswd(e.target.value)} type="password" class="form-control" id="exampleInputEmail1" required/>
            </div>

           
           
            <button type="submit" class="btn btn-primary"style={{width:"300px"}} >Login</button>
           
          </form>
          <div>
            <a>If you don't have account a account
              <Link to="/" >Register</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;