import React from 'react'

const Product = () => {
  return (
    <div>
      <section className="banner-sp text-center">
        <div className="div-banner">
            <h1>Sản Phẩm</h1>
            <div className="d-flex" style="justify-content: center;">
                <a className="hov-banner" href="trang-chu.html">Trang Chủ</a>
                <p style="color: red; padding: 0 5px;">/</p>
                <p className="hov-para">Sản phẩm</p>
            </div>
        </div>
    </section>

    <section className="banner-sp-1 container">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="./picture-banner/banner1.png" className="d-block w-100" alt="banner"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./picture-banner/banner2.png" className="d-block w-100" alt="banner"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./picture-banner/banner6.png" className="d-block w-100" alt="banner"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./picture-banner/banner8.png" className="d-block w-100" alt="banner"/>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section-sp container">
      <div className="row">
        <div className="div d-flex" style="justify-content: space-between;">
        <h2 className="set-mb-sp">Laptop</h2>
        <a className="set-mg-sp1" href="Laptop.html">Xem tất cả</a>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item1.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Macbook Air 13-inch M1
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">24,950,000 ₫</p>
              <p className="para2">30,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item2.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Macbook Air 16-inch M1
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">65.950.000 ₫</p>
              <p className="para2">70.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
    
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item3.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop HP 340s G7
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">15.450.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item40.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -22%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop Dell Latitude 3520
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">19.550.000 ₫</p>
              <p className="para2">23.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item41.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -16%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop Asus VivoBook 15
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">17.450.000 ₫</p>
              <p className="para2">20.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item42.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -15%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop Asus Celeron N40
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">21,450,000 ₫</p>
              <p className="para2">23,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item43.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop Lenovo Ideapad 5
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">17.650.000 ₫</p>
              <p className="para2">20.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item44.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Laptop Lenovo Ideapad 3
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">15.650.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
       
        
      </div>
      
    </section>

    <section className="section-sp container">
      <div className="row">
        <div className="div d-flex" style="justify-content: space-between;">
        <h2 className="set-mb-sp">Điện Thoại</h2>
        <a className="set-mg-sp1" href="dien-thoai.html">Xem tất cả</a>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item27.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                iphone 13 Pro Max
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">29.950.000 ₫</p>
              <p className="para2">33.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item28.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                iphone 12 128GB
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">18.950.000 ₫</p>
              <p className="para2">22.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
    
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item29.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -23%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Oppo A9 8GB/128GB
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">4,950,000 ₫</p>
              <p className="para2">6,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item30.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -21%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Xiaomi Mi 11
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">7.950.000 ₫</p>
              <p className="para2">10,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item32.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Realme C3i 2GB/32GB
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">2,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item35.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Samsung Galaxy M12
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">3.450.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item33.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -18%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Realme GT Neo 2
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">8.550.000 ₫</p>
              <p className="para2">10,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item34.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -18%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Oppo E9 Price
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">6.550.000 ₫</p>
              <p className="para2">8,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        
        
      </div>
      
    </section>

    <section className="section-sp container">
      <div className="row">
        <div className="div d-flex" style="justify-content: space-between;">
        <h2 className="set-mb-sp">Tivi</h2>
        <a className="set-mg-sp1" href="tivi.html">Xem tất cả</a>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item9.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -20%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Smart Tivi Samsung 4K 65 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">15.450.000 ₫</p>
              <p className="para2">18.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item7.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -18%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi Samsung Smart 4K 50 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">12,550,000 ₫</p>
              <p className="para2">14,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
    
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item10.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi Sony Smart 4K 49 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">8.450.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item8.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -16%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Android Tivi 4K Toshiba 55 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">13.450.000 ₫</p>
              <p className="para2">15.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item11.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -21%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi LG Smart 4K 43 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">6,950,000 ₫</p>
              <p className="para2">9,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item12.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi LG Smart 4K 49 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">8.450.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item45.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -18%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi Vsmart 4K 55 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">13.650.000 ₫</p>
              <p className="para2">15,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item46.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="discount">
              -22%
          </div>
            <div className="card-body-set">
              <p className="card-text-set">
                Tivi Vsmart 4K 50 inch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">12,850,000 ₫</p>
              <p className="para2">14,000,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
      </div>
      
    </section>

    <section className="section-sp container">
      <div className="row">
        <div className="div d-flex" style="justify-content: space-between;">
        <h2 className="set-mb-sp">Phụ Kiện</h2>
        <a className="set-mg-sp1" href="phu-kien.html">Xem tất cả</a>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item47.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Tai nghe bluetooth AirPods Pro
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">4.650.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item50.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Chuột máy tính OP20 Gaming
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">200,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item53.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Bàn phím cơ Dareu EK87 Switch
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">800,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item55.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Usp PEAK2-LK25GH36 128GB
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">210,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item49.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Tai nghe bluetooth Realme
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">1.000.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item48.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Tai nghe bluetooth AirPods 2
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">3.200.000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item51.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Chuột máy tính DARE-U EM908
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">300,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>

        <div className="col-lg-3 col-sm-6 my-2">
          <div className="card">
            <a href="chi-tiet-san-pham.html">
              <div className="card-img">
                <img
                src="./picture-section-1/item52.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div className="card-body-set">
              <p className="card-text-set">
                Chuột máy tính Fuhlen G90
              </p>
              <div className="d-flex justify-content-center mb-2">
              <p className="para1">350,000 ₫</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="star-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div className="d-flex text-center"> 
              <button className="addCart col-6" >Thêm vào giỏ</button>
                  <a className="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
</div>
      
    </section>
    </div>
  )
}

export default Product