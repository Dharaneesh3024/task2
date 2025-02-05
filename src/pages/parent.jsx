import React from "react";
import Child from "./child";
function Print(){
    const name="Mohith";
    const age=10;
    return(
        <Child name={name} age={age}/>
    )
}
export default Print