import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

const Display = ({ count }) => {
  return <p>Cusrren</p>
};



const Controller = 

function App() {
  const [count, setCount] = useState(0)

  const data = useMemo(()=>{
    return new Array(1000)
  .fill(null)
  .map(()=>Math.floor(Math.random() * 1000))
  .sort((a,b) => a - b)
  .reverse()
  .reduce((total, number) => (total += number),0)
  }, [recalculate]);
  
  const handleClick = useCallback(()=>{
    setCount((count)=>count + 1);
  }, []);

  const handleRecalculate = useCallback(()=>{
    setRecalculate((pre)=>!pre);
  },[]);

  useEffect(()=>{
    const timer = setInterval(()=>setCount((prev)=>prev + 1),2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return(
    <div className='App'>
      
    </div>
  );

}

