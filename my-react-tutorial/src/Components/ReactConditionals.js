import React from "react";

function MissedGoal(){
    return <h1>MISSED</h1>
}

function MadeGoal(){
    return <h1>GOAL!</h1>
}

export default function ReactConditional(props){
    const isGoal = props.isGoal
    if (isGoal){
        return <MadeGoal />
    }
    return <MissedGoal />
}