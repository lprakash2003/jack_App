import { click } from "@testing-library/user-event/dist/click"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Antony from "./antony";
import Hold from "./holddas";
import Editdata from "./editdata";
import Add from "./Adddata";

function Click(){
    return(
        <div>
             <Router>
                <Routes>
                    <Route path="/" element={<Antony/>} />
                    <Route path="/holddas" element={<Hold/>} />
                    <Route path="/edit/:empid" element={<Editdata/>} />  
                    <Route path="/adddatas" element={<Add/>} />          
                    </Routes>
             </Router>
        </div>
    )
}

export default Click;