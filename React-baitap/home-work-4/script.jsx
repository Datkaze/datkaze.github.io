const { useState } = React;

// class component on/off sau 3s
class Apps1 extends React.Component {
    state = {
        isOn: false,
    };

 constructor() {
    super();

    setInterval(()=>{
        this.setState({
            isOn: !this.state.isOn,
        });
    }, 3000);
}

 render(){
    const isOn = this.state.isOn;

    const roomClasses = isOn ? "room light" : "room dark";

    const bulbClasses = isOn ? "far fa-lightbulb" : "fas fa-lightbulb";

    return(
        <div className={roomClasses}>
            <i className={bulbClasses}></i>
        </div>
        );
    }
}


// function component on/off
function Bulb({ isOn }) {
  return isOn ? (
    <i className="fas fa-lightbulb"></i>
  ) : (
    <i className="far fa-lightbulb"></i>
  );
}

function Button({ isOn, onClick }) {
  const turnn = isOn ? "Turn off" : "Turn on";

  return <button onClick={onClick}>{turnn}</button>;
}

function App1() {
  const [isOn, setIsOn] = React.useState(false);
  const roomClasses = isOn ? "room light" : "room dark";

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="app">
      <div className={roomClasses}>
        <Bulb isOn={isOn} />

        <Button isOn={isOn} onClick={handleClick} />
      </div>
    </div>
  );
}

// Bài 2: tăng giảm
function Controllers({ onReset, onIncrease, onDecrease }) {
    return (
      <div className="controllers-group">
        <button className="giam" onClick={onDecrease}>-</button>
        <button className="reset" onClick={onReset}>Reset</button>
        <button className="tang" onClick={onIncrease}>+</button>
      </div>
    );
  }
  function App2() {
    const [counter, setCounter] = React.useState(0);
  
    function resetCounter() {
      setCounter(0);
    }
  
    function increaseCounter() {
      setCounter(counter + 1);
    }
  
    function decreaseCounter() {
      setCounter(counter - 1);
    }
  
    return (
      <div className="controllers-m">
        <div className="font">{counter}</div>
  
        <Controllers
          onDecrease={decreaseCounter}
          onIncrease={increaseCounter}
          onReset={resetCounter}
        />
      </div>
    );
  }


  // Bài 3: Đồng hồ bấm giờ

const Time = ({ value }) => {
  const { minutes, seconds, milliseconds } = value;
  return (
    <div>
      {String(minutes).padStart(2, "0")} - {String(seconds).padStart(2, "0")} -{" "}
      {String(milliseconds).padStart(2, "0")}
    </div>
  );
};

const Buttons = ({ isRun, onClicks }) => {
  const label = isRun ? "Pause" : "Play";

  return <button onClick={onClicks}>{label}</button>;
};

const App3 = () => {
  const [isRun, setIsRun] = React.useState(false);
  const [time, setTime] = React.useState({
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  setTimeout(() => {
    if (!isRun) return;

    let milliseconds = time.milliseconds + 1;
    let seconds = time.seconds;
    let minutes = time.minutes;

    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }

    setTime({ minutes, seconds, milliseconds });
  }, 10);

  function handleClickButtons() {
    setIsRun(!isRun);
  }

  return (
    <div className="clock-bg">
      <Time value={time} />

      <Button isRun={isRun} onClick={handleClickButtons} />
    </div>
  );
};

// Bài 4: Đồng hồ

function getClockTimeData() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

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

function App4() {
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

function App(){
  return(
    <div className="container">   
      <div>

        <h1>
          Bài 1: Bóng đèn
        </h1>

      <div className="flex">
        
        <div className="class"> 
           <p>
             Viết bằng class on/off sau 3s
           </p>
        <Apps1/>
      </div>
      
      <div className="function">
        <p>
          Viết bằng function on/off có công tắc
        </p>
        <App1/>
      </div>
  
        </div>
      <div className="bai-2">
      <h1>Bài 2: Tăng giảm số lượng</h1>
        
        <App2/>
      </div>
      
      <div className="bai-3">
        <h1>Bài 3: Đồng hồ bấm giờ</h1>

        <App3/>
      </div>

      <div className="bai-4">
        <h1>Bài 4: Đồng hồ</h1>

         <App4/> 
      </div>

      </div> 
    </div>
  );
}


  
  ReactDOM.render(<App />, document.getElementById("app"));