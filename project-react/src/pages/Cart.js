import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <React.Fragment>
        <section className="banner text-center">
        <div className="div-banner">
            <h1>Liên Hệ</h1>
            <div className="d-flex justify-content-center">
                <Link className="hov-banner" to="/">Trang Chủ</Link>
                <p style={{color: "red", padding: "0 5px"}}>/</p>
                <p className="hov-para">Giỏ Hàng</p>
            </div>
        </div>
    </section>

    <section className="container mb-5">
    <div className="row">
  <div className=" col-lg-8 col-md-12">
      <div className="product-list">
          <div className="empty-cart">
              <div className="empty-img"><img src="./picture-banner/cart.jpg" alt=""/></div>
              <p>Giỏ hàng của bạn trống</p>
          </div>
          <div className="card-product-item">
              <a href="chi-tiet-san-pham.html" className="product-img">
                  <img src="./picture-section-1/item1.png" alt=""/>
              </a>
              <div className="cart-product-content">
                  <div className="infor-product-area">
                      <a href="chi-tiet-san-pham.html" className="name-product">Macbook Air 13-inch M1</a>
                      <p>Màu Sắc: Đen</p>

                      <i className="btn-delete btn-delete-md fas fa-trash-alt"></i>
                  </div>
                  <div className="product-price">
                      <span id="price">24.950.000</span>₫
                  </div>
                  <div className="product-quantity quantity-md">
                    <button className="btn-minus">-</button>
                    <input className="inputQuanlity" type="text" value="1"/>
                    <button className="btn-plus">+</button>
                </div>
                  <div className=" btn-delete btn-delete-sm"><i className="btn-delete fas fa-trash-alt"></i></div>
              </div>

          </div>
          <div className="card-product-item">
              <a href="chi-tiet-san-pham.html" className="product-img">
                  <img src="./picture-section-1/item40.png" alt=""/>
              </a>
              <div className="cart-product-content">
                  <div className="infor-product-area">
                      <a href="chi-tiet-san-pham.html" className="name-product">Laptop Dell Latitude 3520</a>
                      <p>Màu Sắc: Đen</p>
                    
                      <i className="btn-delete btn-delete-md fas fa-trash-alt"></i>
                  </div>
                  <div className="product-price">
                      <span id="price">19.550.000</span>₫
                  </div>
                  <div className="product-quantity quantity-md">
                    <button className="btn-minus">-</button>
                    <input className="inputQuanlity" type="text" value="1"/>
                    <button className="btn-plus">+</button>
                </div>
                  <div className="btn-delete btn-delete-sm"><i className="btn-delete fas fa-trash-alt"></i></div>
              </div>

          </div>
          <div className="card-product-item">
              <a href="chi-tiet-san-pham.html" className="product-img">
                  <img src="./picture-section-1/item27.png" alt=""/>
              </a>
              <div className="cart-product-content">
                  <div className="infor-product-area">
                      <a href="chi-tiet-san-pham.html" className="name-product">iphone 13 Pro Max</a>
                      <p>Màu Sắc: Trắng</p>
                      
                      <i className="btn-delete btn-delete-md fas fa-trash-alt"></i>
                  </div>
                  <div className="product-price">
                      <span id="price">29.950.000</span>₫
                  </div>
                  <div className="product-quantity quantity-md">
                    <button className="btn-minus">-</button>
                    <input className="inputQuanlity" type="text" value="1"/>
                    <button className="btn-plus">+</button>
                </div>
                  <div className="btn-delete btn-delete-sm"><i className="btn-delete fas fa-trash-alt"></i></div>
              </div>

          </div>
      </div>
  </div>
  <div className="col-lg-4 col-md-12">
      <div className="card-voucher-area">
          <h4 className="card-title-voucher">Mã Giảm Giá</h4>
          <input type="text" className="form-control" placeholder="Nhập mã giảm giá"/>
          <div className="set-text"><button className="btn-apply-voucher">Áp Dụng</button></div>
      </div>
      <div className="cart-total-price-area">
          <div className="price-item">
              <span className="title-price">Tạm Tính</span>
              <span className="price" id="preTotal" style={{color: "#dc3b3b"}}>0 ₫</span>
          </div>
          <div className="price-item">
              <span className="title-price">Khuyến Mãi</span>
              <span className="price" style={{color: "#dc3b3b"}}>0 ₫</span>
          </div>
          <div className="price-item">
              <span className="title-price">Thành Tiền</span>
              <span className="total-price" id="totalCard">0 ₫</span>
          </div>
      </div>
      <div>
          <Link to="/payment" className="btn-order">Thanh Toán</Link>
      </div>
  </div>
</div>
</section>
    </React.Fragment>
  )
}

export default Cart