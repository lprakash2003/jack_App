
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Service from "./service";

// import{BrowerRouter as Router,Routes,Route,Link} from "react-router-dom";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


function Jack(){
    return(
        <div>
         <Router>
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-around",backgroundColor:"aqua",padding:"15px"}}>
                <li>
                   <Link to="/"> 
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                    About
                    </Link>
                </li>
                <li>
                   <Link to="/service" >
                    Service
                    </Link>
                </li>
                <li>
                <Link to="/contact" >
                    Contact
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/contact" element={<Contact/>} />
                
            </Routes>
        </Router>
        </div>
    )
}

export default Jack;