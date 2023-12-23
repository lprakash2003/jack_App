import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

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
  
export  function UserAuth(){

    const[user,setUser]=useState()
    useEffect(()=>{
     let o=onAuthStateChanged(auth,user=>setUser(user))
     return o
    },[])
   return user
}

