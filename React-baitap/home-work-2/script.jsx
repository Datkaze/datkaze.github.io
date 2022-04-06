// const Time = ({ value }) =>{
//     const minutes = value.getMinute();
//     const seconds = value.getSeconds();
//     const miliseconds = value.getMiliseconds();

//     return(
//         <div className="time">
//             {minutes}:{seconds}.{miliseconds}
//         </div>
//     );
// };

// const App = () => {
//     const [time, setTime] = React.useState({
//         minutes: 0,
//         seconds: 0,
//         miliseconds: 0,
//     });

// const [start, setStart] = React.useState(false);

// const handleClick = () => {
//     setStart(!start);
// };

// setTimeout(() => {
//    if(!start) return;

//    let miliseconds = time.miliseconds + 1;
//    let seconds = time.seconds;
//    let minutes = time.minutes;

//    if (miliseconds >= 100) {
//        miliseconds = 0;
//        seconds +=1;
//    }

//    if (seconds >= 60) {
//        seconds = 0;
//        minutes += 1;
//    }
// }, 10);

// setTime({
//     minutes,
//     seconds,
//     miliseconds,
// });

//     return(
//         <div className="clock">
//              <Time {...Time}/>    

//              {/* <Button isRun={start} onClick={}/> */}
//         </div>
//     );
// };

// ReactDOM.render(<App/>, document.getElementById("app"));


function getClockTimeData() {
    const value = new Date();
    const seconds = value.getSeconds();
    const minutes = value.getMinutes();
    const hours = value.getHours();
  
    return { seconds, minutes, hours };
  }
  
  function getPointersRotateDegree(dateTime) {
    const { seconds, minutes, hours } = dateTime;
  
    const secondDegreeAfterSecond = (+seconds % 60) * 6;
    const minuteDegreeAfterSecond =
      (+minutes % 60) * 6 + secondDegreeAfterSecond / 60;
    const secondRotation = `${secondDegreeAfterSecond}deg`;
    const minuteRotation = `${minuteDegreeAfterSecond}deg`;
    const hourRotation = `${
      (+hours % 12) * 30 + minuteDegreeAfterSecond / 12
    }deg`;
  
    return { secondRotation, minuteRotation, hourRotation };
  }
  
  function Pointer({ variant, rotate }) {
    return (
      <div
        className={"pointer " + variant}
        style={{ transform: `translate(-50%, -100%) rotate(${rotate})` }}
      ></div>
    );
  }
  
  function App() {
    const [dateTime, setDateTime] = React.useState(getClockTimeData());
  
    setTimeout(() => {
      setDateTime(getClockTimeData());
    }, 1000);
  
    const { secondRotation, minuteRotation, hourRotation } =
      getPointersRotateDegree(dateTime);
  
    return (
      <div className="app">
        <div className="clock">
          <img src="./clock.png" alt="Clock" />
  
          <Pointer variant="second" rotate={secondRotation} />
          <Pointer variant="minute" rotate={minuteRotation} />
          <Pointer variant="hour" rotate={hourRotation} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));



