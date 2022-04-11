const Time = ({ value }) => {
    const { minutes, seconds, milliseconds } = value;
    return (
      <div>
        {String(minutes).padStart(2, "0")} - {String(seconds).padStart(2, "0")} -{" "}
        {String(milliseconds).padStart(2, "0")}
      </div>
    );
  };
  
  const Button = ({ isPlaying, onClick }) => {
    const label = isPlaying ? "Pause" : "Play";
  
    return <button onClick={onClick}>{label}</button>;
  };
  
  const App = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [time, setTime] = React.useState({
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  
    setTimeout(() => {
      if (!isPlaying) return;
  
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
  
    function handleClickButton() {
      setIsPlaying(!isPlaying);
    }
  
    return (
      <div className="clock">
        <Time value={time} />
  
        <Button isPlaying={isPlaying} onClick={handleClickButton} />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));