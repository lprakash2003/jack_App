import { useState } from "react"


function Ops(){

  
  const [value,setValue]=useState(0)

  const increment=()=>{
      setValue(value+1)
  }

  const decrement=()=>{
      setValue(value-1)
  }
    return(
       
            <div>
                {/* <h1>Functional Components</h1> */}
                
                <button onClick={decrement}>-</button><button>{value}</button><button onClick={increment}>+</button>
                
              
            </div>
  
    )
}

export default Ops;