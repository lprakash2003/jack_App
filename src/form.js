
import Sign from "./sign";
import Login from "./login";
import Logout from "./logout";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function Mind(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Sign/>}/>
                    <Route path="/login"  element={<Login/>} />
                    <Route path="/logout" element={<Logout/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Mind;