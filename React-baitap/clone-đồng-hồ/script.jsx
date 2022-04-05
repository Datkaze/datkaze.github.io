const Time = ({ value }) =>{
    const minutes = value.getMinute();
    const seconds = value.getSeconds();
    const miliseconds = value.getMiliseconds();

    return(
        <div className="time">
            {minutes}:{seconds}.{miliseconds}
        </div>
    );
};

const App = () => {
    const [time, setTime] = React.useState({
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
    });

const [start, setStart] = React.useState(false);

const handleClick = () => {
    setStart(!start);
};

setTimeout(() => {
   if(!start) return;

   let miliseconds = time.miliseconds + 1;
   let seconds = time.seconds;
   let minutes = time.minutes;

   if (miliseconds >= 100) {
       miliseconds = 0;
       seconds +=1;
   }

   if (seconds >= 60) {
       seconds = 0;
       minutes += 1;
   }
}, 10);

setTime({
    minutes,
    seconds,
    miliseconds,
});

    return(
        <div className="clock">
             <Time {...Time}/>    

             {/* <Button isRun={start} onClick={}/> */}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("app"));



