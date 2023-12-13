



// import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {signOut, getAuth} from "firebase/auth"
import {useNavigate } from "react-router-dom";




function Logout() {
   
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

  
  signOut(auth)
    .then(()=>{
        alert("Your account has been successfully created..")
        navigate("/login")
    })
    .catch((err)=>{
        alert("Error",err)
    })
 

}
    
  return (
         
       <div>
        <div  className="john">
          <img src="https://play-lh.googleusercontent.com/w0s3au7cWptVf648ChCUP7sW6uzdwGFTSTenE178Tz87K_w1P1sFwI6h1CLZUlC2Ug" id="jp"/>
          <br/><br/><br/><br/>
           <h1> Google Classroom</h1>
       </div>
           <br/><br/>
           <h6 id="a">Helpig educators and students communication , save time , and stay organized.</h6>
           <br/>
           <form onSubmit={submitOn}>
            <button type="submit" id="b">Get started</button>
           </form>
       </div>
  );
}

export default Logout;