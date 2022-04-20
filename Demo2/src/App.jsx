import {useEffect ,useState } from 'react'
import './App.css'


function App(){
  const data = [
    {
      city: "Hà Nội",
      timezone: "Asia/Ha_Noi"
    },
    {
     city: "Tokyo",
     timezone: "Asia/Tokyo"
    },
    {
      city:"bankok",
      timezone: "Asia/bankok"
    },
    {
      city:"Shanghai",
      timezone: "Asia/Shanghai"
    },
  ]

  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] =useState(Asia/Ha_Noi);

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date());
    }, 1000);
  },[]);

  return (
    <div className='App'>
      <div className='cites'>
      {data.map((city)=>(
        <button
          key={city.timeZone}
          onClick={()=> setTimeZone(city.timeZone)}
        >
          {city.city}
        </button>
      ))}
      </div>
      current time: {time.toLocaleString("vi-VN", {setTimeZone})}
    </div>
  )
   
}


// const App = () =>{
//   const [timer, setTimer] = useState(0);

//   return(
//     <div>
//       <h1>Timezone: {timer} </h1>
//       <button>Việt Nam</button>
//       <button>USE</button>
//       <button>Japan</button>
//       <button>Korea</button>
//     </div>
//   );
// }

export default App
