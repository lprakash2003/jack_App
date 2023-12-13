
import { useEffect,useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function Antony(){
 
    const[data,setData]=useState([])
    const [value,setValue]=useState("")
    const navigate=useNavigate()


    useEffect(()=>{
        fetch("http://localhost:3006/posts")
        .then((jos)=>{
           return jos.json()
        })
        .then((das)=>{ 
            setData(das)
        }) 

    },[])

   const process=(id)=>{
    navigate("/edit/"+id)
   }

   const Delete=(id)=>{
    fetch("http://localhost:3006/posts/"+id,{
        method:"DELETE"
    })
    window.location.reload()
   }

    
   const control=()=>{
    
     navigate("/adddata")
   }

   

  const Search =async(event)=>{
    event.preventDefault()
    return await axios.get(`http://localhost:3006/posts?q=${value}`)
       .then((res)=>{
        setData(res.data) 
       })
       .catch((err)=>{
        console.log(err)
       })
  }



   return(
    <div className="container">
        <div className="card">
            <div className="card-title">
                  <h2>The Table System</h2>
            </div>
                <div className="card-body">
             <form onSubmit={Search}>
                <div className="mb-3">
              <label className="form-label">Email </label>
              <input value={value} onChange={e=> setValue(e.target.value)} type="text" className="form-control" id="exampleInputName" required/>
              <button type="submit"  className="btn btn-primary">Search</button>
                </div>
            </form>                 
                              <Link to="/holddas" className="btn btn-success">
                              ADD(+)
                              </Link>


                <table class="table table-bordred">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Age</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                              {data.map((one)=>(
                                <tr>
                                    <td>{one.id}</td>
                                    <td>{one.name}</td>
                                    <td>{one.age}</td>
                                    <td>{one.email}</td>
                                    <td>{one.mobille}</td>
                                    <td>{one.city}</td>
                                    <td>

                            
                                       <a className="btn btn btn-primary" onClick={()=>{process(one.id)}}  style={{margin:"10px"}}>Edit</a>
                                       
                                       <a className="btn btn btn-danger" onClick={()=>{Delete(one.id)}} style={{margin:"10px"}}>Deleted</a>
                                       <a className="btn btn btn-success" onClick={control}>Add Data</a>
                                    </td>
                                </tr>
                              ))}
                        </tbody>
                </table>
                </div>
           
        </div>
    </div>
   )
}

export default Antony;
