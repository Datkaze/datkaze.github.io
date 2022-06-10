import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
     <section className="banner">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
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
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <Link to="/laptop"
            ><img src="https://firebasestorage.googleapis.com/v0/b/datkakaze-190bd.appspot.com/o/banner1.png?alt=media&token=bc6f6326-2d83-47e8-a823-38f07e08f513" className="d-block w-100" alt="ảnh bìa"
          /></Link>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <Link to="/phone"><img src="https://firebasestorage.googleapis.com/v0/b/datkakaze-190bd.appspot.com/o/banner2.png?alt=media&token=715c1d0c-7322-468c-a00c-537cd2ddb35a" className="d-block w-100" alt="ảnh bìa" /></Link>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <Link to="/tivii"> <img src="https://firebasestorage.googleapis.com/v0/b/datkakaze-190bd.appspot.com/o/banner6.png?alt=media&token=d5f278e3-0d2d-46bd-ae79-b4c07f0e7f6c" className="d-block w-100" alt="ảnh bìa" /></Link>
         
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <Link to="/phukien"><img src="https://firebasestorage.googleapis.com/v0/b/datkakaze-190bd.appspot.com/o/banner8.png?alt=media&token=fc320c5e-a400-4421-8d94-7b6c36d12f52" className="d-block w-100" alt="ảnh bìa" /></Link>
          
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</section>

      <section className="banner-sec container">
        <div className="set-banner-tc text-center">
          <img src="./picture-banner/banner3.png" alt="banner" />
        </div>
      </section>

      <section className="section-2 container">
        <div className="row">
          <h2 className="h2 text-center">Sản Phẩm</h2>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card">
              <Link to="/productdetail">
                <div className="card-img">
                  <img src={item29} alt="ảnh sản phẩm"/>
                </div>
              </Link>
              <div className="discount">-23%</div>
              <div className="card-body-set">
                <p className="card-text-set">Oppo A9 8GB/128GB</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img
                    src={item30}
                    alt="ảnh sản phẩm"
                  />
                </div>
              </Link>
              <div className="discount">-21%</div>
              <div className="card-body-set">
                <p className="card-text-set">Xiaomi Mi i11</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img
                    src="./picture-section-1/item40.png"
                    alt="ảnh sản phẩm"
                  />
                </div>
              </Link>
              <div className="discount">-22%</div>
              <div className="card-body-set">
                <p className="card-text-set">Laptop Dell Latitude 3520</p>
                <div className="d-flex justify-content-center mb-2">
                  <p className="para1">19.550.000 ₫</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img
                    src="./picture-section-1/item41.png"
                    alt="ảnh sản phẩm"
                  />
                </div>
              </Link>
              <div className="discount">-16%</div>
              <div className="card-body-set">
                <p className="card-text-set">Laptop Asus VivoBook 15</p>
                <div className="d-flex justify-content-center mb-2">
                  <p className="para1">17.450.000 ₫</p>
                  <p className="para2">20,000,000 ₫</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img src="./picture-section-1/item3.png" alt="ảnh sản phẩm" />
                </div>
              </Link>
              <div className="card-body-set">
                <p className="card-text-set">Laptop HP 340s G7</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img
                    src="./picture-section-1/item33.png"
                    alt="ảnh sản phẩm"
                  />
                </div>
              </Link>
              <div className="discount">-18%</div>
              <div className="card-body-set">
                <p className="card-text-set">Realme GT Neo 2</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img src="./picture-section-1/item5.png" alt="ảnh sản phẩm" />
                </div>
              </Link>
              <div className="card-body-set">
                <p className="card-text-set">Smart Tivi Samsung 4K 65 inch</p>
                <div className="d-flex justify-content-center mb-2">
                  <p className="para1">15.450.000 ₫</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 my-2">
            <div className="card" >
              <Link to="/productdetail">
                <div className="card-img">
                  <img
                    src="./picture-section-1/item11.png"
                    alt="ảnh sản phẩm"
                  />
                </div>
              </Link>
              <div className="discount">-21%</div>
              <div className="card-body-set">
                <p className="card-text-set">Tivi LG Smart 4K 43 inch</p>
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
                <button className="addCart col-6">Thêm vào giỏ</button>
                <Link className="btn2 col-6" to="/productdetail">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/product">
            <button className="btn-xem-them">Xem thêm</button>
          </Link>
        </div>
      </section>

      <section className="banner-sec container">
        <div className="text-center">
          <img src="./picture-banner/banner4.png" alt="banner" />
        </div>
      </section>

      <section className="section-2 container">
    <div className="row">
      <h2 className="h2 text-center">Phụ Kiện</h2>
      <div className="col-lg-3 col-sm-6 my-2">
      <div className="card"  >
        <Link to="/productdetail">
          <div className="card-img">
            <img
            src="./picture-section-1/item47.png"
            alt="ảnh sản phẩm"
          />
          </div>
        </Link>
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
              <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
      </div> 
    </div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item48.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
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
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item49.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
    <div className="card-body-set">
      <p className="card-text-set">
        Tai nghe bluetooth Realme
      </p>
      <div className="d-flex justify-content-center mb-2">
      <p className="para1">1.000.000 ₫</p>
      <p className="para2">1,800,000 ₫</p>
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
      <button className="addCart col-6">Thêm vào giỏ</button>
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item50.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
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
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item51.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
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
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item52.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
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
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item53.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
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
        <i className="far fa-star"></i>
      </div>
      <div className="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div className="d-flex text-center"> 
      <button className="addCart col-6">Thêm vào giỏ</button>
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>
<div className="col-lg-3 col-sm-6 my-2">
  <div className="card"  >
    <Link to="/productdetail">
      <div className="card-img">
        <img
        src="./picture-section-1/item54.png"
        alt="ảnh sản phẩm"
      />
      </div>
    </Link>
    <div className="card-body-set">
      <p className="card-text-set">
        Pin sạc dự phòng BASEUS MINI
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
        <i className="far fa-star"></i>
      </div>
      <div className="danhgiaitem">
        <p>100 đánh giá</p>
      </div>
    </div>
    </div>
    <div className="d-flex text-center"> 
      <div className="buttons d-flex"></div>
      <button className="addCart col-6">Thêm vào giỏ</button>
          <Link className="btn2 col-6" to="/productdetail">Mua Ngay</Link>
  </div> 
</div>
</div>


    </div>
  </section>

  <section className="section-tt-2">
    <h2 className="h2 text-center">Bảng Tin</h2>
    <div className="container setboxs">
      <div className="row">
        
        <div className="news-tc col-lg-4 col-md-6">
          <Link to="/newsdetail">
              <img src="./picture-section-1/item17.png" alt="anh tin tuc"/>
              <h6>Macbook Pro - Nâng Cấp Để Hoàn Hảo Hơn</h6>
              <div className="time">
                  <i className="far fa-clock"></i>21:00:00 - 25/1/2022
              </div>
            </Link>
      </div>
      <div className="news-tc col-lg-4 col-md-6">
        <Link to="/newsdetail">
        <img src="./picture-section-1/item18.png" alt="anh tin tuc"/>
        <h6>MACBOOK PRO 2022 - Lựa Chọn Thông Minh</h6>
        <div className="time">
            <i className="far fa-clock"></i>21:00:00 - 25/1/2022
        </div>
      </Link>
      </div>
      <div className="news-tc col-lg-4 col-md-6">
        <Link to="/newsdetail">
        <img src="./picture-section-1/item19.png" alt="anh tin tuc"/>
        <h6>Tivi Thông Minh Oled 2022 - Trải Ngiệm Hoàn Hảo</h6>
        <div className="time">
            <i className="far fa-clock"></i>21:00:00 - 25/1/2022
        </div>
      </Link>
      </div>
      </div>
      <div className="text-center">
        <Link to="/news"><button className="btn-xem-them">Xem thêm</button></Link>
      </div>
    </div>
    
  </section>
    </React.Fragment>
  );
};

export default Home;




