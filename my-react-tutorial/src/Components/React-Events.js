import React from "react";

export default function FootBall(){
    const shoot = () => {
        alert('Great shot!')
    }

    return(
        <button onClick={shoot}>Take the shot!</button>
    )
}