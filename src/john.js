// import { useState } from "react";


// function John({red,gre,on,off}){

//     const[color,setColor]=useState(red)
//     const[data,setData]=useState(on)

//     const Upon=()=>{
//         let a=data==on ? off :on
//         setData(a)
//         let b=color==red ? gre:red
//         setColor(b)
//     }
//     return(
//         <div style={{backgroundColor:color,width:"300px",height:"300px",borderRadius:"50%"}}>
            
//             <button onClick={Upon}>{data}</button>
//         </div>
//     )
// }


// export default John;


// import { useState } from "react";
 
// function John({a,b,c,d}){
//     const[jo,setJo]=useState(a)
//     const[lo,setLo]=useState(c)
//     const Pass=()=>{
//         let x=jo== a ? b:a
//         setJo(x)
//       let y=lo== c ? d:c
//         setLo(y)
//     }

//     return(

//          <div>
//              <p>{jo}</p>
//               <button onClick={Pass}>{lo}</button>
             
//         </div>
//     )
// }

// export default John;



import { useState } from "react";

function John({red,blue,p,emp,on,of}){
    const [color,setColor]=useState(red)
    const [jas,setJas]=useState(p)
    const [word,setWord]=useState(on)
    const[value,setValue]=useState(0)
    const Change=()=>{
        let a=color==red ? blue:red
        setColor(a)
        let b=jas== p ? emp:p
        setJas(b)
        let c=word== on ? of:on
        setWord(c)
    }
    
    const inc=()=>{
        setValue(value+1)
    }
    const dec=()=>{
        setValue(value-1)
    }

    return(
        <div style={{backgroundColor:color,width:"500px",height:"200px",borderRedius:"50%"}}> 
            <p>{jas}</p>
            <button onClick={Change}>{word}</button>
            <br></br>
            <div>
                <h1>Count:{value}</h1>
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>

            </div>
        </div>
    )
}

export default John;