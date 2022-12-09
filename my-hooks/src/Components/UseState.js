import React, {useState} from "react";
import './style.css'
function UseState(){
    const [count, setCount] = useState(1)

    // function decrement(){
    //     setCount(count - 1)
    // }
    // function incerement(){
    //     setCount(count + 1)
    // }
    return(
        <div>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    )
}

export default UseState;