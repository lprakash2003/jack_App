import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";




function Editdata(){

    const [id,setId]=useState("")
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMoblie]=useState("")
    const[city,setCity]=useState("")

    const {empid}=useParams()
 
    useEffect(()=>{
      fetch("http://localhost:3006/posts/"+empid)
      .then((jos)=>{
         return jos.json()
      })
      .then((das)=>{
          setId(das.id)
          setName(das.name)
          setAge(das.age)
          setEmail(das.email)
          setMoblie(das.mobile)
          setCity(das.city)
      }) 

  },[])
 

    const submitOn=((e)=>{
        e.preventDefault()
        let john={id,name,age,email,mobile,city}
        fetch("http://localhost:3006/posts/"+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(john)
        })
        .then(()=>{
          alert("Sumbit Succesfully....")
        })
        .catch(()=>{
          alert("Error")
        })
    })


    return(
        <div className="container" style={{width:"400px"}}>
            <div className="crad">
                <div className="card-title">
                    <h2>Add new Table</h2>
                </div>
                 <div className="card-body">
                 <form onSubmit={submitOn} >
            <div class="mb-3" >
              <label class="form-label">Id </label>
              <input value={id}  onChange={e=> setId(e.target.value)} type="number" class="form-control" id="exampleInputName" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Name</label>
              <input value={name} onChange={e=> setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Age</label>
              <input value={age} onChange={e=> setAge(e.target.value)} type="number" class="form-control" id="exampleInputEmail2" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Email </label>
              <input value={email} onChange={e=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail3" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Mobile</label>
              <input value={mobile} onChange={e=> setMoblie(e.target.value)} type="number" class="form-control" id="exampleInputEmail3" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">City</label>
              <input value={city} onChange={e=> setCity(e.target.value)} type="text" class="form-control" id="exampleInputEmail3" required/>
            </div>

            <button type="submit" className="btn btn-primary" style={{margin:"10px"}}> Submit</button>



            <Link to="/" className="btn btn-danger">
          Back
            </Link>
          </form>  
                 
                 </div>
            </div>
        </div>
    )
}

export default Editdata;