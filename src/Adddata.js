import { useNavigate, useParams } from "react-router-dom"


function Add(){

    const navigate=useNavigate()
   

    const control=()=>{
    
        navigate("/")
      }
   
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                     <h2 >Welcome to google classroom</h2>
                     <div>
                        
                        <button className="btn btn-danger" onClick={control}>
                            Back
                        </button>
                     </div>
                </div>
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}

export default Add;