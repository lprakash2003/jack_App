// const obj={
//     background_Color:"red",
//     width:"500px",
//     height:"300px"
// }

// import App from "./Pass";

function Child(Props){
    return(
        <div >
            <h4>Waiting the Pages loading.....</h4>
        <p style={{backgroundColor:"red",width:"500px",height:"300px"}}></p>
        <h2>{Props.a}</h2>
        <h2>{Props.b}</h2>
        <h2>{Props.c}</h2>
        </div>
    )
}

export default Child;