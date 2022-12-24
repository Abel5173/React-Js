import React, { useState } from "react";
import './App.css'


function App(){
  const [km, setKm] = useState(1)

  function handleInput(e){
    setKm(e.target.value)
  }
  
  function to_miles(){
    return (km/1.609).toFixed(3)
  }
  return(
    <div>
      <input placeholder="1" onChange={handleInput}/>
      <h4>{to_miles(km)} miles</h4>
    </div>
  )
}

export default App