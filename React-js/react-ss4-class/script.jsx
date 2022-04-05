class App extends React.Component {
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
ReactDOM.render(<App/>, document.getElementById("app"));

