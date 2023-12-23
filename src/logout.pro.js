import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sign from "./signin";
import Login from "./login.pro";
import App from "./control";
import Cart from "./addcart";
import Details from "./detalis";

function Mind(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Sign/>}/>
                    <Route path="/login.pro"  element={<Login/>} />
                    <Route path="/control" element={<App/>} />
                    <Route  path="/addcart" element={<Cart/>} />
                    <Route  path="/details/:onid" element={<Details/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Mind;