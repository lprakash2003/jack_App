

import {useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";



function Details(){

  const[data,setData]=useState([])
  const {onid}=useParams()
  
  useEffect(()=>{
          fetch("https://ecommerce-app-api-39o5.onrender.com/details/"+onid)
    .then((res) => {
      return res.json()
    })
    .then((resp) => {
      setData(resp)
      console.log(resp)
    })
  },[])

 
    

    return(
        <div>
          <div style={{fontSize:"30px",marginTop:"30px",marginLeft:"50px",color:"red"}}>
            <Link to="/control">
              <a><i class="fa-solid fa-house"></i></a>
              </Link>
              {/* <h1>jokers</h1> */}
          </div>
            {/* <div className="five">
          
             {data.map((one)=> (
               <div id="b">
                <ul style={{ listStyle: "none" }}>
                  <li style={{ marginLeft: "35px" }}>{one.id}</li>
                    <li> <span style={{ marginLeft: "35px" }}> </span> {one.brand} </li>
                    <li> <span style={{ marginLeft: "35px" }}> </span> {one.model} </li>
                    <li style={{ marginLeft: "35px" }}>{one.year}</li>
                    <li style={{ marginLeft: "35px" }}>{one.reference}</li>
                    <li style={{ marginLeft: "35px" }}>{one.complement}</li>
                    <li style={{ marginLeft: "35px" }}>{one.price}</li>
                    <Link to="/control">
                    <button id="a" className="btn btn-success" >Back</button>
                    </Link>
                </ul>
                </div>
              ))}

          </div>  */}

       

          {data &&
           <div>
       {data.id} {data.brand} {data.model} {data.year} {data.reference} {data.complement} {data.price}
       <Link to="/control">
                    <button id="a" className="btn btn-success" >Back</button>
                    </Link>
          </div>
          }
        </div>
    )
}

export default Details;