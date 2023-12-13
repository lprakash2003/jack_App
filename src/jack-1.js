

import React, {useContext, useEffect,useState} from "react";
let a=React.createContext()


function App(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const [repd,setRepd]=useState("")
    const [data,setData]=useState(0  )

    const onclick1=(j)=>{
       setName(j.target.value)
    }
     const onclick2=(j)=>{
       setEmail(j.target.value)
    }
     const onclick3=(j)=>{
       setPswd(j.target.value)
    }
     const onclick4=(j)=>{
       setRepd(j.target.value)
    } 

    const onclicksubmit=()=>{
        if(name.length<=5){
            alert("must be enter < 6 charaters..!")
        }
        else if(pswd!=repd){
            alert("password dose not match")
        }
        else{
            alert("succesful")
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            setData(data+1)
        });
    })
    return(
        <div>
            <form onSubmit={onclicksubmit}>
                
                <label>Name:</label><input type="text"   required onChange={onclick1}/><br/><br/>
                <label>Email:</label><input type="email"  required onChange={onclick2}/><br/><br/>
                <label>Password:</label><input type="password"  required onChange={onclick3}/><br/><br/>
                <label>Re-Password:</label><input type="password"  required onChange={onclick4}/><br/><br/>
                <input type="submit"/>
            </form>
            <a.Provider value={data}>
            <h2>Count:{data}</h2>
            <Sara/>
            </a.Provider>
        </div>
    )
}

function Sara(){
    return(
        <div>
            <h1>Darling</h1>
            <Sanju/>
        </div>
    )
}

function Sanju(){
    let c=useContext(a)
    return(
        <div>
            <h1>Sanju </h1>
            <p>{c}</p>
            <Shalu/>
        </div>
    )
}

function Shalu(){
    let b=useContext(a)
    return(
        <div>
            <h1>Shalu </h1>
            <p>{b}</p>
        </div>
    )
}



export default App;