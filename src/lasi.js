
// import React from "react";

function App(){
    let x="I Like for you"
    let y="Every Name"

    return(
        <div>
            <h1>Rocky Bhai</h1>
            <p>Don't Stop Coding Wait for Page Loading {x}</p>
            <Pass as={x} x={y}/>
        </div>
        
    )
}

function Pass(props){
    const {as,x}=props
    return(
        <div>
            <h1>Johnny {as} {x}</h1>
        <Main x={as} y={x}/>
        </div>
    )
}

function Main(props){
    const{x,y}=props
    return(
        <div>
            <h1>Holder Das {x} and{y}</h1>
            <Jack x={x} y={y}/>
        </div>
    )
}

function Jack(props){
    const {x,y}=props
    return(
        <div>
            <h1>Jacky {x} {y}</h1>
            <King a={x} b={y}/>

        </div>
    )
}

function King(props){
    const {x,y}=props
    return(
        <div>
            <h1>Dilli vs Rolex</h1>
            <Done a={x} b={y}/>
        </div>
    )
}

function Done(){
    return(
        <div>
            <h1>Antony Das</h1>
        </div>
    )
}

export default App;