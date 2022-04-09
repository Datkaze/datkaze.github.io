
class Product extends React.Component {
    render() {
        return(
            <div className="Product-item">
                <div className="item-head">
                    <h1 className="name-app">Tip Calculator</h1>
                </div>
                <div className="item-body">
                <p className="para">Bill amount</p>
                    <label className="label" htmlFor="input">
                        <i class="icon far fa-money-bill"></i>
                            <input className="input" type="text" />
                    </label>
                

                <p className="para">Number of guests</p>
                <label className="label" htmlFor="input">
                        <i class="icon fas fa-user-friends"></i>
                            <input className="input" type="text" />
                    </label>

                <p className="para">Service Quanlity</p>
                <select className="custom-select">
                  <option>Choose...</option>
                  <option>30% - Outstanding</option>
                  <option>20% Good</option>
                  <option>15% It's OK</option>
                  <option>10% Bad</option>
                  <option>5% Terrible</option>
                  
              </select>
                <div className="item-footer">
                    <p style={{padding: "0 3px"}}>Tip</p> <p className="para">$12.34</p> <p style={{padding: "0 3px"}}>each person</p>
                </div>
                <button className="button">Calculate</button>
            
                </div>
            </div>
        );
    }
}

function App(){
    return (
        <div className="Product-item">
            <Product/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));

