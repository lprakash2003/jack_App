
import Java from "./java.js"
import "./das.css"

function Pass(){
    const a="Praksh"
    const b=21
    const c="Karnataka"
    const d="Bangaloru"
    const e=9030201040
    return(
        <div id="as"> 
            <h1>Don't Stop Coding</h1>
            <Java o={a} p={b} i={c} u={d} y={e}/>
            <Das/>
        </div>
    )
}
function Das(){
    const a="Antony"
    const b=23
    const c="Karnataka"
    const d="Bangaloru"
    const e=9030201040
    return(
        <div id="bus">
            <h1 >Don't Stop Coding</h1>
            <Java o={a} p={b} i={c} u={d} y={e}/>
        </div>
    )
}

export default Pass;