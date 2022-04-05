const App = () =>{
    const [isOn ,setIsOn] = React.useState(false)
    const roomClasses = isOn ? "room light" : "room dark";
    const bulbClasses = isOn ? "far fa-lightbulb" : "fas fa-lightbulb";

    setTimeout (() => {
        setIsOn(!isOn);
    }, 3000);

return(
    <div className={roomClasses}>
            <i className={bulbClasses}></i>
        </div>
    )
};
ReactDOM.render(<App/>, document.getElementById("app"))

