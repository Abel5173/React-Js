import React, {useState} from "react";
import './style.css'
function UseState(){
    const [state, setState] = useState({count: 0, theme: 'Dark'})
    const count = state.count
    const theme = state.theme

    function decrement(){
        setState(prevState => {
            return{...prevState, count: prevState.count - 1}
        })
    }
    function incerement(){
        setState(prevState => {
            return{...prevState, count: prevState.count - 1}
        })
    }
    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incerement}>+</button>
        </div>
    )
}

export default UseState;