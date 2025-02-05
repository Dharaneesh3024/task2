import { useState } from "react";
function Count(){
    const [num, setnum] = useState(0);

   function numCount(){
    setnum(num+1);
   }
   function Decrease(){
    if (num<=0){
        alert("Number is already at 0");
    }
    else{
        setnum(num-1);

    }
   }
    
    return(
       <>
       <p>Count:{num}</p>
       <button onClick={numCount} >Increase</button>
       <button onClick={Decrease}>Decrease</button>
       </>
        
        
    )
}
export default Count;
