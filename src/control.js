import { initializeApp } from "firebase/app";
import { signOut, getAuth } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";

import {useEffect,useState } from "react";
import "./das.css";
import axios from "axios";
import {UserAuth} from "./user";
import Page from "./pagemove";


function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const[count,setCount]=useState(0)
  const navigate =useNavigate()

  let currentUser=UserAuth()
  useEffect(() => {
    fetch("https://ecommerce-app-api-39o5.onrender.com/learn")
      .then((jos) => {
        return jos.json();
      })
      .then((das) => {
        setData(das);
      });
  }, []);

  const Search = async (event) => {
    event.preventDefault();
    return await axios.get(`https://ecommerce-app-api-39o5.onrender.com/learn?q=${value}`)
      .then((res) => {
        setData(res.data);
        setValue("")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firebaseConfig = {
    apiKey: "AIzaSyC7MwQj8ZGicF-U1aM3I_1nfhHuA_Q5HCw",
    authDomain: "john-e2518.firebaseapp.com",
    projectId: "john-e2518",
    storageBucket: "john-e2518.appspot.com",
    messagingSenderId: "1078894862798",
    appId: "1:1078894862798:web:29e5244dbedd43b5a34b9f",
    measurementId: "G-BGRPBEH5BY",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  
const submitOn = (event) => {
  event.preventDefault()

  
  signOut(auth)
   navigate("/login.pro")
 

}

  const [sort,setSort]=useState("")
  const sorting= async(e)=>{
    e.preventDefault()
     let value=e.target.value
     setSort(value)
     return await axios.get(`https://ecommerce-app-api-39o5.onrender.com/learn?_sort=${value}&_order=asc`)
     .then((res) => {
         setData(res.data)
     })
     .catch((err) => {
         console.log(err)
     })
  }
  
  const addData = (id) => {
    fetch("https://ecommerce-app-api-39o5.onrender.com/learn/" + id)
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            fetch("https://ecommerce-app-api-39o5.onrender.com/brand", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(resp)
            })
                .then(() => {
                    alert("Cart Addede")
                })
        }).catch((err)=>{
            console.log(err)
        })
}
  

useEffect(() => {
  fetch("https://ecommerce-app-api-39o5.onrender.com/brand")
      .then((res) => {
          return res.json()
      })
      .then((resp) => {
          setCount(resp)

        
        })
      }, [])
      

    

const[page,setPage]=useState(1)
const[record,setRecord]=useState(4)


let live=page * record 
let five=live - record


let myData=data.slice(five,live)

const UpdatePage=(n)=>{
  setPage(n)
}
const next=()=>{
  if(value=>1){
    return true
  }
  setPage(page+1)
}

const prev=()=>{
  if(value<=1){
    return false
  }
  setPage(page-1)
}




  return (
   
    
    <div>
      
        <div className="two">
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  >
  <div className="container-fluid" id="sa">
    <a  className="navbar-brand">
    <img  src="https://1000logos.net/wp-content/uploads/2017/05/Color-Rolex-Logo.jpg" style={{ width: "100px", height: "80px" }}/>
    </a>
    
    <form className="d-flex" role="search"  onSubmit={Search}>
      <input className="form-control me-2" type="search"   placeholder="Search for Product" aria-label="Search" style={{borderRadius:"30px",height:"40px",marginLeft:"70px",marginTop:"20px",width:"300px"}} value={value}  onChange={(e) => setValue(e.target.value)} />
    </form>

    
      <a className="navbar-brand">
        <Link to="/addcart">
        <a className="nav-link" href="#"  style={{  marginLeft: "150px",marginTop: "15px",textAlign:"center"}}>
        <i className="fa-solid fa-bell" style={{fontSize:"40px"}}></i><span className="val" style={{position:"absolute",right:"630px",top:"24px",borderRadius:"60px"}} class="badge text-bg-danger">{count.length}</span>
        </a>
        </Link>
      </a>

        <h2 style={{marginLeft:"130px", marginTop: "20px",border:"1px dashed black",borderRadius:"20px",width:"200px",textAlign:"center"}} className="navbar-brand">
        <i class="fa-solid fa-user"   ></i>   {currentUser?.email}
         </h2>
    

        <a className="navbar-brand">
        <Link to="/login.pro" >  
            <a className="btn btn-danger" style={{ marginLeft: "180px", marginTop: "20px" }} onClick={submitOn}> Logout</a>
         </Link>    
        </a>

  </div>
</nav>
</div>

          <div className="container" style={{display:"flex"}}>
            
              <div id="so">
                <form style={{marginTop:"50px"}} >
                <div className="mb-3" style={{ width: "200px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled watch</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "200px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled watch</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "200px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled watch</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "200px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled watch</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "200px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled watch</option>
                            </select>
                        </div>
                </form>
                <form style={{marginTop:"30px",width:"200px",height:"60px",padding:"15px",boxShadow:"2px 3px 3px 2px rgb(157, 145, 145)",borderRadius:"10px"}}>
                    <div  className="mb-3" sty le={{ width: "300px"}}>
                      <select value={sort} onChange={sorting} id="disabledSelect"  class="form-select">
                        <option>___Sort___</option>
                        <option>brand</option>
                        <option>model</option>
                        <option>year</option>
                        <option>price</option>
                      </select>
                    </div>
                  </form>

              </div>

            <div className="one" id="do">
            {myData.map((one) => (
                <ul style={{ listStyle: "none" }}>
                  <div id="b">
                    <img src={one.img}style={{width: "200px", height: "200px", marginLeft: "8px" }} ></img>
                    <li><span style={{ fontSize: "18px", marginLeft: "35px" }}>  ID : </span>{one.id}</li>
                    <li> <span style={{ fontSize: "18px", marginLeft: "35px" }}>  Brand : </span> {one.brand} </li>
                    <li> <span style={{ fontSize: "18px", marginLeft: "35px" }}> Model : </span> {one.model} </li>
                    <li> <span style={{ fontSize: "18px", marginLeft: "35px" }}> Year : </span>{one.year}</li>
                    <li> <span style={{ fontSize: "18px", marginLeft: "35px" }}> Price :</span>{one.price}<a style={{ color: "blue", fontSize: "20px" }}>$</a></li>
                    <button id="a" className="btn btn-success" onClick={() => { addData(one.id) }} >  Add Cart </button> 
                   
                  </div>
                </ul>
              ))}
              </div>
          </div>
<br/><br/>
               
                 <Page total={data.length} record={record} update={UpdatePage} next={next} prev={prev} />
                
<br/><br/><br/><br/>     
          <div className="card-group" id="das">
           
               <div className="card" style={{backgroundColor:"aliceblue"}}>
                    <div className="card-body">
                    <h2 className="card-title">Logo</h2>
                        <p className="card-text"> Sub line</p>
                    </div>
               </div>
                <div className="card" style={{backgroundColor:"aliceblue"}}>

                    <div className="card-body">
                        <h2 className="card-title">Pages</h2>
                        <p className="card-text"> About us</p>
                        <p className="card-text"> Our experince</p>
                        <p className="card-text"> Testimonnials</p>
                        <p className="card-text"> Skiin & hair</p>
                        <p className="card-text"> Shop</p>
                    </div>
                </div>
                <div  className="card" style={{backgroundColor:"aliceblue"}}>

                    <div className="card-body">
                        <h2 className="card-title">Legal and help</h2>
                        <p className="card-text">FAQs</p>
                        <p className="card-text">Terms of use</p>
                        <p className="card-text">Privacy policy</p>
                    </div>
                </div>
                <div  className="card" style={{backgroundColor:"aliceblue"}}>

                    <div className="card-body">
                        <h2 className="card-title">Contact us</h2>
                        <p className="card-text"><i class="fa-solid fa-location-dot  fa-lg" style={{color: "#1f5125"}}></i>  Address</p>
                        <p className="card-text"><i class="fa-solid fa-phone  fa-lg" style={{color: "#25511f"}}></i> Phone numbers</p>
                        <p className="card-text"><i class="fa-solid fa-envelope  fa-lg" style={{color: "#20511f"}}></i>  Mail id</p>
                    </div>
                </div>

                <div  className="card" style={{backgroundColor:"aliceblue"}}>

                    <div className="card-body">
                        <h2 className="card-title">Social links</h2>
                        <br/>
                        <div style={{display:"flex",gap:"20px"}}>
                        <i class="fa-brands fa-facebook  fa-lg fa-xl" style={{color: "#51461f"}}></i>
                        <i class="fa-brands fa-twitter  fa-lg fa-xl" style={{color:" #46511f"}}></i>
                        <i class="fa-brands fa-linkedin  fa-lg fa-xl" style={{color: "#46511f"}}></i>
                        <i class="fa-brands fa-youtube  fa-lg fa-xl" style={{color: "#46511f"}}></i>
                        </div>
                        
                    </div>
                </div>
                </div>
               
          </div>
           
  )
}

export default App;
