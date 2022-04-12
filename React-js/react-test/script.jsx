const App = () =>{
    return(
        <main className="container">
            <nav className="header">
                <div className="nav-ct">
                <h1>UseReducer</h1>
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <span className="total-number">
                        4
                    </span>
                </div>
                
                </div>
            </nav>
            <header>
                <h1 className="h1-head">YOUR BAG</h1>
            </header>
            <section className="cart">
            <div className="cart-item">
                <img src="./picture/phone1.png" alt="phone 1" />
                <div>
                    <h4>Samsung Galaxy S8</h4>
                    <p className="price">$399.99</p>
                    <button class="remove-btn">remove</button>
                </div>
                <div className="d-flex">
                    <button className="btn">-</button>
                    <p className="number">1</p>
                    <button className="btn">+</button>
                </div>
            </div>

            <div className="cart-item">
                <img src="./picture/phone2.png" alt="Phone 2" />
                <div>
                    <h4>Google Pixel</h4>
                    <p className="price">$499.99</p>
                    <button class="remove-btn">remove</button>
                </div>
                <div className="d-flex">
                    <button className="btn">-</button>
                    <p className="number">1</p>
                    <button className="btn">+</button>
                </div>
            </div>

            <div className="cart-item">
                <img src="./picture/phone3.png" alt="Phone 3" />
                <div>
                    <h4>Xiaomi Redmi Note 2</h4>
                    <p className="price">$699.99</p>
                    <button class="remove-btn">remove</button>
                </div>
                <div className="d-flex">
                    <button className="btn">-</button>
                    <p className="number">1</p>
                    <button className="btn">+</button>
                </div>
            </div>

            <div className="cart-item">
                <img src="./picture/phone4.png" alt="Phone 4" />
                <div>
                    <h4>Samsung Galaxy S7</h4>
                    <p className="price">$599.99</p>
                    <button class="remove-btn">remove</button>
                </div>
                <div className="d-flex">
                    <button className="btn">-</button>
                    <p className="number">1</p>
                    <button className="btn">+</button>
                </div>
            </div>

            <footer>
                <div class="cart-total">
                    <h4>Total 
                        <span>$2199.96</span>
                    </h4>
                    </div>
                    <button class="clear-btn">clear cart</button>
                    </footer>
            </section>
            
        </main>
        
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));

// const item = {
//     products: [
//       {
//         id: "sp1",
//         name: "Samsung Galaxy S8",
//         price: 399.99,
//         imageSrc: "./picture/phone1.png",
//         quantity: 1,
//       },
//       {
//         id: "sp2",
//         name: "Google Pixel",
//         price: 499.99,
//         imageSrc: "./picture/phone2.png",
//         quantity: 1,
//       },
//       {
//         id: "sp3",
//         name: "Xiaomi Redmi Note 2",
//         price: 699.99,
//         imageSrc: "./picture/phone3.png",
//         quantity: 1,
//       },
//       {
//         id: "sp4",
//         name: "Samsung Galaxy S7",
//         price: 599.99,
//         imageSrc: "./picture/phone4.png",
//         quantity: 1,
//       },
//     ],
//   };



