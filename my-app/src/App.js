import React, {useState} from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You cicked {count} times.</p>
      <button onClick={()=>setCount(count + 1)}></button>
    </div>
  );
}

export default App;
