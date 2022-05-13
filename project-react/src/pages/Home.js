import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
        <body>
    
    <section class="banner">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <a href="Laptop.html"
            ><img src="./picture-banner/banner1.png" class="d-block w-100" alt="ảnh bìa"
          /></a>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <a href="dien-thoai.html"><img src="./picture-banner/banner2.png" class="d-block w-100" alt="ảnh bìa" /></a>
          
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <a href="tivi.html"> <img src="./picture-banner/banner6.png" class="d-block w-100" alt="ảnh bìa" /></a>
         
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <a href="phu-kien.html"><img src="./picture-banner/banner8.png" class="d-block w-100" alt="ảnh bìa" /></a>
          
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</section>


<section class="product-intro-tc">
  <div class="container">
  <h2 class="h2 text-center">Sản Phẩm Khuyến Mãi</h2>
  <ul class="nav nav-tabs" style="justify-content: center;" id="myTab" role="tablist">
      <li class="nav-item-ctsp" role="presentation">
        <button class="nav-link-ctsp active show" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Laptop</button>
      </li>
      <li class="nav-item-ctsp" role="presentation">
        <button class="nav-link-ctsp" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Điện Thoại</button>
      </li>
      <li class="nav-item-ctsp" role="presentation">
        <button class="nav-link-ctsp" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Tivi</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      
      <div class="tab-pane fade active show" style="padding-top: 10px;" id="home" role="tabpanel" aria-labelledby="home-tab">
      
        <div class="container">
          <div class="row">
          <div class="item-slider-tc">
            <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style="margin: 0 10px;">
              <a href="chi-tiet-san-pham.html">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item1.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </a>
              <div class="discount">
                -20%
            </div>
              <div class="card-body-set">
                <p class="card-text-set">
                  Macbook Air 13-inch M1
                </p>
                <div class="d-flex justify-content-center mb-2">
                <p class="para1">24,950,000 ₫</p>
                <p class="para2">30,000,000 ₫</p>
              </div>
              <div class="d-flex justify-content-between">
                <div class="star-icon">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="danhgiaitem">
                  <p>100 đánh giá</p>
                </div>
              </div>
              </div>
              <div class="d-flex text-center"> 
                <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                    <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
            </div> 
          </div>
      </div>
      <div class="col-lg-3 col-sm-6 my-2">
        <div class="card" style="margin: 0 10px;">
          <a href="chi-tiet-san-pham.html">
            <div class="card-img">
              <img
              src="./picture-section-1/item2.png"
              alt="ảnh sản phẩm"
            />
            </div>
          </a>
          <div class="discount">
            -20%
        </div>
          <div class="card-body-set">
            <p class="card-text-set">
              Macbook Air 16-inch M1
            </p>
            <div class="d-flex justify-content-center mb-2">
            <p class="para1">65.950.000 ₫</p>
            <p class="para2">70,000,000 ₫</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="star-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="danhgiaitem">
              <p>100 đánh giá</p>
            </div>
          </div>
          </div>
          <div class="d-flex text-center"> 
            <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
        </div> 
      </div>
      </div>
      <div class="col-lg-3 col-sm-6 my-2">
        <div class="card" style="margin: 0 10px;">
          <a href="chi-tiet-san-pham.html">
            <div class="card-img">
              <img
              src="./picture-section-1/item40.png"
              alt="ảnh sản phẩm"
            />
            </div>
          </a>
          <div class="discount">
            -22%
        </div>
          <div class="card-body-set">
            <p class="card-text-set">
              Laptop Dell Latitude 3520
            </p>
            <div class="d-flex justify-content-center mb-2">
            <p class="para1">19.550.000 ₫</p>
            <p class="para2">23,000,000 ₫</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="star-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="danhgiaitem">
              <p>100 đánh giá</p>
            </div>
          </div>
          </div>
          <div class="d-flex text-center"> 
            <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
        </div> 
      </div>
      </div>
      <div class="col-lg-3 col-sm-6 my-2">
        <div class="card" style="margin: 0 10px;">
          <a href="chi-tiet-san-pham.html">
            <div class="card-img">
              <img
              src="./picture-section-1/item41.png"
              alt="ảnh sản phẩm"
            />
            </div>
          </a>
          <div class="discount">
            -16%
        </div>
          <div class="card-body-set">
            <p class="card-text-set">
              Laptop Asus VivoBook 15
            </p>
            <div class="d-flex justify-content-center mb-2">
            <p class="para1">17.450.000 ₫</p>
            <p class="para2">20,000,000 ₫</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="star-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="danhgiaitem">
              <p>100 đánh giá</p>
            </div>
          </div>
          </div>
          <div class="d-flex text-center"> 
            <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
        </div> 
      </div>
      </div>
      <div class="col-lg-3 col-sm-6 my-2">
        <div class="card" style="margin: 0 10px;">
          <a href="chi-tiet-san-pham.html">
            <div class="card-img">
              <img
              src="./picture-section-1/item42.png"
              alt="ảnh sản phẩm"
            />
            </div>
          </a>
          <div class="discount">
            -15%
        </div>
          <div class="card-body-set">
            <p class="card-text-set">
              Laptop Asus Celeron N40
            </p>
            <div class="d-flex justify-content-center mb-2">
            <p class="para1">21,450,000 ₫</p>
            <p class="para2">23,000,000 ₫</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="star-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="danhgiaitem">
              <p>100 đánh giá</p>
            </div>
          </div>
          </div>
          <div class="d-flex text-center"> 
            <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
        </div> 
      </div>
      </div>
      <div class="col-lg-3 col-sm-6 my-2">
        <div class="card" style="margin: 0 10px;">
          <a href="chi-tiet-san-pham.html">
            <div class="card-img">
              <img
              src="./picture-section-1/item43.png"
              alt="ảnh sản phẩm"
            />
            </div>
          </a>
          <div class="discount">
            -20%
        </div>
          <div class="card-body-set">
            <p class="card-text-set">
              Laptop Lenovo Ideapad 5
            </p>
            <div class="d-flex justify-content-center mb-2">
            <p class="para1">17.650.000 ₫</p>
            <p class="para2">20,000,000 ₫</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="star-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="danhgiaitem">
              <p>100 đánh giá</p>
            </div>
          </div>
          </div>
          <div class="d-flex text-center"> 
            <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
        </div> 
      </div>
      </div>
      
          </div>
          </div>
        </div>
        </div>
      <div class="tab-pane fade" style="padding-top: 10px;" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="container">
            <div class="row">
            <div class="item-slider-tc">
              <div class="col-lg-3 col-sm-6 my-2">
              <div class="card" style="margin: 0 10px;">
                <a href="chi-tiet-san-pham.html">
                  <div class="card-img">
                    <img
                    src="./picture-section-1/item27.png"
                    alt="ảnh sản phẩm"
                  />
                  </div>
                </a>
                <div class="discount">
                  -20%
              </div>
                <div class="card-body-set">
                  <p class="card-text-set">
                    iphone 13 Pro Max
                  </p>
                  <div class="d-flex justify-content-center mb-2">
                  <p class="para1">29.950.000 ₫</p>
                  <p class="para2">33,000,000 ₫</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="star-icon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="danhgiaitem">
                    <p>100 đánh giá</p>
                  </div>
                </div>
                </div>
                <div class="d-flex text-center"> 
                  <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                      <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
              </div> 
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item28.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -20%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                iphone 12 128GB
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">18.950.000 ₫</p>
              <p class="para2">22,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item29.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -23%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Oppo A9 8GB/128GB
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">4,950,000 ₫</p>
              <p class="para2">6,800,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item30.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -21%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Xiaomi Mi i11
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">7.950.000 ₫</p>
              <p class="para2">10,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item33.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -18%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Realme GT Neo 2
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">8.550.000 ₫</p>
              <p class="para2">10,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item34.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -18%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Oppo E9 Price
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">6.550.000 ₫</p>
              <p class="para2">8,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        
            </div>
          </div>
            </div>
          </div>
      <div class="tab-pane fade" style="padding-top: 10px;" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div class="container">
            <div class="row">
            <div class="item-slider-tc">
              <div class="col-lg-3 col-sm-6 my-2">
              <div class="card" style="margin: 0 10px;">
                <a href="chi-tiet-san-pham.html">
                  <div class="card-img">
                    <img
                    src="./picture-section-1/item9.png"
                    alt="ảnh sản phẩm"
                  />
                  </div>
                </a>
                <div class="discount">
                  -20%
              </div>
                <div class="card-body-set">
                  <p class="card-text-set">
                    Smart Tivi Samsung 4K 65 inch
                  </p>
                  <div class="d-flex justify-content-center mb-2">
                  <p class="para1">15.350.000 ₫</p>
                  <p class="para2">18,000,000 ₫</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="star-icon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="danhgiaitem">
                    <p>100 đánh giá</p>
                  </div>
                </div>
                </div>
                <div class="d-flex text-center"> 
                  <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                      <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
              </div> 
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item8.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -16%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Android Tivi 4K Toshiba 55 inch
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">13.450.000 ₫</p>
              <p class="para2">15,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item45.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -18%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Tivi Vsmart 4K 55 inch
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">13.650.000 ₫</p>
              <p class="para2">15,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item46.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -22%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Tivi Vsmart 4K 50 inch
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">12,850,000 ₫</p>
              <p class="para2">14,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item11.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -21%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Tivi LG Smart 4K 43 inch
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">6,950,000 ₫</p>
              <p class="para2">9,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        <div class="col-lg-3 col-sm-6 my-2">
          <div class="card" style="margin: 0 10px;">
            <a href="chi-tiet-san-pham.html">
              <div class="card-img">
                <img
                src="./picture-section-1/item7.png"
                alt="ảnh sản phẩm"
              />
              </div>
            </a>
            <div class="discount">
              -18%
          </div>
            <div class="card-body-set">
              <p class="card-text-set">
                Tivi Samsung Smart 4K 50 inch
              </p>
              <div class="d-flex justify-content-center mb-2">
              <p class="para1">12,550,000 ₫</p>
              <p class="para2">14,000,000 ₫</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="star-icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="danhgiaitem">
                <p>100 đánh giá</p>
              </div>
            </div>
            </div>
            <div class="d-flex text-center"> 
              <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
                  <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
          </div> 
        </div>
        </div>
        
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </section>

<section class="banner-sec container">
<div class="set-banner-tc text-center">
<img src="./picture-banner/banner3.png" alt="banner"/>
</div>
</section>

<section class="section-2 container">
  <div class="row">
    <h2 class="h2 text-center">Sản Phẩm</h2>
    <div class="col-lg-3 col-sm-6 my-2">
      <div class="card">
        <a href="chi-tiet-san-pham.html">
          <div class="card-img">
            <img
            src="./picture-section-1/item29.png"
            alt="ảnh sản phẩm"
          />
          </div>
        </a>
        <div class="discount">
          -23%
      </div>
        <div class="card-body-set">
          <p class="card-text-set">
            Oppo A9 8GB/128GB
          </p>
          <div class="d-flex justify-content-center mb-2">
          <p class="para1">4,950,000 ₫</p>
          <p class="para2">6,000,000 ₫</p>
        </div>
        <div class="d-flex justify-content-between">
          <div class="star-icon">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="danhgiaitem">
            <p>100 đánh giá</p>
          </div>
        </div>
        </div>
        <div class="d-flex text-center"> 
          <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
              <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
      </div> 
    </div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item30.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="discount">
      -21%
  </div>
    <div class="card-body-set">
      <p class="card-text-set">
        Xiaomi Mi i11
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">7.950.000 ₫</p>
      <p class="para2">10,000,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item40.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="discount">
      -22%
  </div>
    <div class="card-body-set">
      <p class="card-text-set">
        Laptop Dell Latitude 3520
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">19.550.000 ₫</p>
      <p class="para2">23,000,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item41.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="discount">
      -16%
  </div>
    <div class="card-body-set">
      <p class="card-text-set">
        Laptop Asus VivoBook 15
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">17.450.000 ₫</p>
      <p class="para2">20,000,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item3.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Laptop HP 340s G7
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">15.450.000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item33.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="discount">
      -18%
  </div>
    <div class="card-body-set">
      <p class="card-text-set">
        Realme GT Neo 2
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">8.550.000 ₫</p>
      <p class="para2">10,000,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item5.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Smart Tivi Samsung 4K 65 inch
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">15.450.000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item11.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="discount">
      -21%
  </div>
    <div class="card-body-set">
      <p class="card-text-set">
        Tivi LG Smart 4K 43 inch
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">6,950,000 ₫</p>
      <p class="para2">9,000,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
  </div>
  <div class="text-center">
    <a href="san-pham.html"><button class="btn-xem-them">Xem thêm</button></a>
  </div>
</section>

<section class="banner-sec container">
  <div class="text-center">
  <img src="./picture-banner/banner4.png" alt="banner"/>
  </div>
  </section>

  <section class="section-2 container">
    <div class="row">
      <h2 class="h2 text-center">Phụ Kiện</h2>
    <div class="item-slider-tc">
      <div class="col-lg-3 col-sm-6 my-2">
      <div class="card" style="margin: 0 10px;">
        <a href="chi-tiet-san-pham.html">
          <div class="card-img">
            <img
            src="./picture-section-1/item47.png"
            alt="ảnh sản phẩm"
          />
          </div>
        </a>
        <div class="card-body-set">
          <p class="card-text-set">
            Tai nghe bluetooth AirPods Pro
          </p>
          <div class="d-flex justify-content-center mb-2">
          <p class="para1">4.650.000 ₫</p>
        </div>
        <div class="d-flex justify-content-between">
          <div class="star-icon">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="danhgiaitem">
            <p>100 đánh giá</p>
          </div>
        </div>
        </div>
        <div class="d-flex text-center"> 
          <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
              <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
      </div> 
    </div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item48.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Tai nghe bluetooth AirPods 2
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">3.200.000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item49.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Tai nghe bluetooth Realme
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">1.000.000 ₫</p>
      <p class="para2">1,800,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item50.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Chuột máy tính OP20 Gaming
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">200,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item51.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Chuột máy tính DARE-U EM908
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">300,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item52.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Chuột máy tính Fuhlen G90
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">350,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item53.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Bàn phím cơ Dareu EK87 Switch
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">800,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>
<div class="col-lg-3 col-sm-6 my-2">
  <div class="card" style="margin: 0 10px;">
    <a href="chi-tiet-san-pham.html">
      <div class="card-img">
        <img
        src="./picture-section-1/item54.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </a>
    <div class="card-body-set">
      <p class="card-text-set">
        Pin sạc dự phòng BASEUS MINI
      </p>
      <div class="d-flex justify-content-center mb-2">
      <p class="para1">350,000 ₫</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="star-icon">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div class="d-flex text-center"> 
      <div class="buttons d-flex"></div>
      <button class="addCart col-6" onclick="addToCart()" tabindex="0">Thêm vào giỏ</button>
          <a class="btn2 col-6" href="chi-tiet-san-pham.html">Mua Ngay</a>
  </div> 
</div>
</div>

    </div>
    </div>
  </section>

  <section class="section-tt-2">
    <h2 class="h2 text-center">Bảng Tin</h2>
    <div class="container">
      <div class="row">
        <div class="news-tc col-lg-4 col-md-6">
          <a href="chi-tiet-tin-tuc.html">
              <img src="./picture-section-1/item17.png" alt="anh tin tuc"/>
              <h6>Macbook Pro - Nâng Cấp Để Hoàn Hảo Hơn</h6>
              <div class="time">
                  <i class="far fa-clock"></i>21:00:00 - 25/1/2022
              </div>
            </a>
      </div>
      <div class="news-tc col-lg-4 col-md-6">
        <a href="chi-tiet-tin-tuc.html">
        <img src="./picture-section-1/item18.png" alt="anh tin tuc"/>
        <h6>MACBOOK PRO 2022 - Lựa Chọn Thông Minh</h6>
        <div class="time">
            <i class="far fa-clock"></i>21:00:00 - 25/1/2022
        </div>
      </a>
      </div>
      <div class="news-tc col-lg-4 col-md-6">
        <a href="chi-tiet-tin-tuc.html">
        <img src="./picture-section-1/item19.png" alt="anh tin tuc"/>
        <h6>Tivi Thông Minh Oled 2022 - Trải Ngiệm Hoàn Hảo</h6>
        <div class="time">
            <i class="far fa-clock"></i>21:00:00 - 25/1/2022
        </div>
      </a>
      </div>
      </div>
    </div>
    <div class="text-center">
      <a href="tin-tuc.html"><button class="btn-xem-them">Xem thêm</button></a>
    </div>
  </section>

  </body>
    </React.Fragment>
  )
}

export default Home