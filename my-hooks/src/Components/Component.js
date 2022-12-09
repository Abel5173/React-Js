import React, {useState, useEffect} from "react";

export default function Component(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times.`;
    })

    return(
        <div>
            <h1>Hello, World!</h1>
            <p>You clicked {count} times.</p>
            <button onClick={()=> setCount(count + 1)}>Click Here!</button>
        </div>
    )
}