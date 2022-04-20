import './App.css'
import  "../images/phone1.png";
import  "../images/phone2.png";
import  "../images/phone3.png";
import  "../images/phone4.png";

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
              <img src="./images/phone1.png" alt="phone 1" />
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
              <img src="./images/phone2.png" alt="Phone 2" />
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
              <img src="./images/phone3.png" alt="Phone 3" />
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
              <img src="./images/phone4.png" alt="Phone 4" />
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


export default App
