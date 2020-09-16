import React from "react";
import { useState } from "react";

const App= ()=>{
    let [value, setValue]= useState(0);
    const increment=()=>{
        setValue(++value);
    }
    const decrement=()=>{
        setValue(--value);
    } 
    return(
        <>
         <h1>{value}</h1>
         <br/>
         <button onClick={increment}>Increm</button>
         <button onClick={decrement}>Decrem</button>
        </>
    )
}

export default App;