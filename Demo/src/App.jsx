import React, { useEffect, useState } from 'react'
import './App.css'

const App = () =>{
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("after render");
    document.title ="Count is:" + count;
  })

  return(
    <div>
      <h1>Count is: {count} </h1>
      <button onClick={()=>setCount(count - 1)}>-</button>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  );
}

// class component extends React.component{

// }

export default App;