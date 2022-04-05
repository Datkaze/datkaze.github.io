const Button = ({ onClick, isOn }) =>{

}

const App = () =>{
    const [isOn ,setIsOn] = React.useState(false)
    const roomClasses = isOn ? "room light" : "room dark";
    const bulbClasses = isOn ? "far fa-lightbulb" : "fas fa-lightbulb";

    setTimeout (() => {
        setIsOn(!isOn);
    }, 3000);

    const handleClick = () => {
        setIsOn(!isOn);
    };

return(
    <div className={roomClasses}>
           <Bulb isOn={isOn}/>
           
        </div>
    )
};
ReactDOM.render(<App/>, document.getElementById("app"));