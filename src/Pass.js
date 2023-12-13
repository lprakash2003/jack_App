

import Child from "./childS"

function App(){

    let name="Prakashraj"
    let age="21"
    let city="Bangalore"

     return(
        <div>
              <h1>The Loin King </h1>
              <p style={{backgroundColor:"blue",width:"500px",height:"300px"}}></p>
              <Child a={name} b={age} c={city}/>
        </div>
    )
}

export default App;

  


