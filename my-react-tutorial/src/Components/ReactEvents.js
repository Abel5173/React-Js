import React from "react";

export default function FootBall(){
    const shoot = (a, b) =>{
        alert(b.type);
    }

    return(
        <button onClick={(event)=>shoot('Goal', event)}>Take the shot!</button>
    );
}