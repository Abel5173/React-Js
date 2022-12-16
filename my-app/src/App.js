import React, { useState } from "react";
import './App.css'


function App(){
  const [km, setKm] = useState(1);
  function handleChange(e){
    setKm(e.target.value);
  }
  function Convert(){
    return (km/1.609).toFixed(2)
  }

  return(
    <>
      <input onChange={handleChange} placeholder='Enter km'></input>
      <p>{km} km is {Convert(km)}miles</p>
    </>
  )
}

export default App