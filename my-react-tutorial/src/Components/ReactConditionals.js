import React from "react";

// function MissedGoal(){
//     return <h1>MISSED</h1>
// }

// function MadeGoal(){
//     return <h1>GOAL!</h1>
// }

export default function ReactConditional(props){
    // const isGoal = props.isGoal
    // if (isGoal){
    //     return <MadeGoal />
    // }
    // return <MissedGoal />

    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 && 
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    )
}