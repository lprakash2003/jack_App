


import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import   {useState } from "react";
import { useNavigate } from "react-router-dom";

import "./das.css"

function Sign() {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pswd,setPswd]=useState("")
    const[cpwd,setCpwd]=useState("")

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

  if(name.length<=5){
    alert("Minimum < 6 charachter manadatoery....!")
  }
    if(pswd != cpwd){
    alert("Password dose not match..!")
  }

  let obj={
    email:email,
    password:pswd
  }
  createUserWithEmailAndPassword(auth,obj.email,obj.password)
   
  .then(()=>{
    alert("Registered Successfully")
    navigate("/login")
})

  .catch((err)=>{
    alert("Error",err)
})


}
    
  return (
    <div className="container" style={{width:"400px"}} >
      <div className="card my-5 p-4" id="one" style={{border:"2px solid black"}}>
        <div className="card-title">
          <h2 style={{color:"red"}}>SignUp Your Account</h2>
        </div>
        <div className="card-body" >
          <form onSubmit={submitOn}  >
            <div class="mb-3" >
              <label class="form-label">Name </label>
              <input value={name} onChange={e=> setName(e.target.value)} type="text" class="form-control" id="exampleInputName" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email </label>
              <input value={email} onChange={e=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Password </label>
              <input value={pswd} onChange={e=> setPswd(e.target.value)} type="password" class="form-control" id="exampleInputEmail2" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Confirm Password </label>
              <input value={cpwd} onChange={e=> setCpwd(e.target.value)} type="password" class="form-control" id="exampleInputEmail3" required/>
            </div>

            <button type="submit" class="btn btn-primary" > Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
