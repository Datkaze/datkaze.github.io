import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <React.Fragment>
        <section className="banner text-center">
          <div className="div-banner">
              <h1>Chi Tiết Sản Phẩm</h1>
              <div className="d-flex justify-content-center">
                  <Link className="hov-banner" to="/">Trang Chủ</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <Link className="hov-banner" to="/product">Sản Phẩm</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <p className="hov-para">Chi Tiết Sản Phẩm</p>
              </div>
          </div>
      </section>

      <section class="clearfix">
      <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="list-img" style={{width: "90%"}}>
                    <div class="main">
                      <div class="slider-ctsp slider-for">
                        <div><img src="./picture-section-1/item-bn-sp.png" alt=""/></div>
                        <div><img src="./picture-section-1/item36.png" alt=""/></div>
                        <div><img src="./picture-section-1/item37.png" alt=""/></div>
                        <div><img src="./picture-section-1/item38.png" alt=""/></div>
                        <div><img src="./picture-section-1/item39.png" alt=""/></div>
                      </div>
                      <div class="slider-ctsp-1 slider-nav row">
                        <div class="item-slice-ctsp col-3"><img src="./picture-section-1/item-bn-sp.png" alt=""/></div>
                        <div class="item-slice-ctsp col-3"><img src="./picture-section-1/item36.png"  alt=""/></div>
                        <div class="item-slice-ctsp col-3"><img src="./picture-section-1/item37.png"  alt=""/></div>
                        <div class="item-slice-ctsp col-3"><img src="./picture-section-1/item38.png"  alt=""/></div>
                        <div class="item-slice-ctsp col-3"><img src="./picture-section-1/item39.png"  alt=""/></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
              <div class="product-details ">
                <div class="d-flex flex-column">
                    <h3 class="product-details-heding">Iphone 13 Pro 128GB</h3>
                    <div class="product-reviews">
                        <d class="d-flex flex-row">
                            <div class="product-reviews-star">
                                <div class="star-set d-flex">
                                    <div class="product-reviews-star-number d-flex" style={{marginRight: "5px"}}>
                                        5
                                    </div>
                                    <div class="star-icon">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="product-reviews-number">
                              100 Đánh giá
                          </div>
                          <div class="product-reviews-sold">
                              100 Đã bán
                          </div>
                        </d>
                    </div>
                    <div class="product-details-heding-price mt-3">
                      <div class="d-flex  align-items-center">
                        <h3 class="product-details-special-price">35,950,000₫ </h3>
                        <h5 class="product-details-old-price">39,000,000₫</h5>
                        <span class="product-details-reduce pl-2"> 8% Giảm</span>
                      </div>
                    </div>
                    <div class="product-details-color mt-3">
                      <div class="d-flex  align-items-center">
                        <span class=" col-3 col-sm-2 product-details-color-title ">Màu sắc : </span>
                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked=""/>
                        <label class="btn btn-color  color-1" style={{marginRight: "15px"}} for="btnradio1">Xanh</label>
                      
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                        <label class="btn btn-color  color-2" style={{marginRight: "15px"}} for="btnradio2">Đen</label>
                      </div>
                      </div>
                    </div>
                    <div class="product-details-number mt-3">
                      <div class="d-flex  align-items-center">
                        <span class=" col-3 col-sm-2 product-details-color-title">Số lượng :</span>
                        <div class="product-quantity quantity-md" style={{margin: "unset"}}>
                          <button class="btn-minus is-form">-</button>
                          <input class="inputQuanlity" type="text" value="1"/>
                          <button class="btn-plus is-form">+</button>
                      </div>
                      </div>
                      </div>
                      <div class="product-details-promotion mt-3">
                        <div class="d-flex  flex-column align-items-center">
                          <span class=" col-12 product-details-promotion-title">Khuyến mại đặc biệt</span>
                          <div class=" col-12 product-details-promotion-content mt-2">
                            <div class="d-flex flex-row align-items-center">
                              <i class="fas fa-check-circle"></i>
                              <span class=" product-details-promotion-content-text">Bảo hành 18 tháng 1 đổi 1</span>
                            </div>
                          </div>
                          <div class=" col-12 product-details-promotion-content mt-2">
                            <div class="d-flex flex-row align-items-center">
                              <i class="fas fa-check-circle"></i>
                              <span class=" product-details-promotion-content-text">Giảm 5% tối đa 500k khi thanh toán bằng ngân hàng (áp dụng đơn hàng từ 500k)</span>
                            </div>
                          </div>
                          <div class=" col-12 product-details-promotion-content mt-2">
                            <div class="d-flex flex-row align-items-center">
                              <i class="fas fa-check-circle" style={{marginBottom: "10px"}}></i>
                              <span class=" product-details-promotion-content-text" style={{marginBottom: "10px"}}>Trả góp lãi xuất 0%</span>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div class="product-details-button mt-3">
                          <div class="product-details-button-reponsive d-flex flex-row align-items-center">
                            <button class="addCart"  style={{padding: "5px 20px", borderRadius: "5px"}}>Thêm vào giỏ</button>
                            <Link class="btn2" style={{padding: "5px 30px", borderRadius: "5px", marginLeft: "15px"}} to="/cart">Mua Ngay</Link>              
                          </div>
                          </div>
                    </div>
                </div>
        </div>
        <div class="product-intro">
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item-ctsp" role="presentation">
                  <button class="nav-link-ctsp active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Miêu tả</button>
                </li>
                <li class="nav-item-ctsp" role="presentation">
                  <button class="nav-link-ctsp" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Thông số</button>
                </li>
                <li class="nav-item-ctsp" role="presentation">
                  <button class="nav-link-ctsp" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Đánh giá</button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade active show" style={{paddingTop: "3px"}} id="home" role="tabpanel" aria-labelledby="home-tab"><p>- iPhone 13 Pro và iPhone 13 Pro Max là bộ đôi điện thoại thông minh thuộc dòng iPhone được Apple ra mắt vào ngày 14 tháng 9 năm 2021, cùng với bộ đôi iPhone 13 và iPhone 13 Mini. Bộ đôi này là phiên bản kế nhiệm của bộ đôi iPhone 12 Pro và iPhone 12 Pro Max với một số nâng cấp.<br/>
                - iPhone 13 Pro và 13 Pro Max được đánh giá cao về chất lượng camera, thời lượng pin, nhưng chưa có nhiều cải tiến thực sự đáng chú ý. Xét tổng thể, Tom's Guide chấm 5 sao cho iPhone 13 Pro Max, còn iPhone 13 và iPhone 13 Pro đạt 4,5 sao. The Verge cho điểm 9/10 cả hai mẫu 13 Pro. Tương tự, CNET cho điểm 9,2, trong khi Engadget chấm điểm chung 91/100.</p></div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ul class="list-thongso">
                        <li>Thương hiệu: Apple</li>
                        <li>Xuất xứ thương hiệu: Mỹ</li>
                        <li>Trọng lượng: 164g</li>
                        <li>RAM: 4GB</li>
                        <li>ROM: 128GB</li>
                        <li>Kích thước màn hình: 6,1 inch</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="judge">
                        <div class="danhgia-ctsp">
                            <div class=" d-flex flex-column">
                                <p class="nhanxet">Đánh giá & nhận xét sản phẩm</p>
                                <div class="input-ctsp d-flex flex-column">
                                    <input type="text" class="input-name" placeholder="Họ và Tên" style={{width: "100%"}}/>
                                    <input type="text" class="input-name" placeholder="Số điện thoại"/>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Chia sẻ về sản phẩm"></textarea>
                                </div>
                                
                            </div>
                            <div class="send">
                                <p class="feel">Bạn cảm thấy như thế nào?</p>
                                <div class="stars-judge d-flex justify-content-center">
                                   <div class="star1"><i class="fas fa-star"></i><p>Rất tệ</p></div>
                                   <div class="star1"><i class="fas fa-star"></i><p>Tệ</p></div>
                                   <div class="star1"><i class="fas fa-star"></i><p>Bình thường</p></div>
                                   <div class="star1"><i class="fas fa-star"></i><p>Tốt</p></div>
                                   <div class="star1"><i class="fas fa-star"></i><p>Rất tốt</p></div>
                                </div>
                            </div>
                            <div class="submit text-center">
                                <button class="btn-ctsp">Gửi đánh giá</button>
                            </div>
                            <hr class="hr"/>
                            <div class="comment-ctsp text-start">
                                <div class="d-flex pb-3">
                                    <div class="avartar">
                                        <img src="picture-section-1/item-avatar.jpg" alt="avartar"/>
                                    </div>
                                    <div>
                                        <div class="comment-name">Đoàn Minh Đạt</div>
                                        sản phẩm tốt
                                        <div class="star-icon">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="avartar">
                                        <img src="picture-section-1/item-avatar.jpg" alt="avartar"/>
                                    </div>
                                    <div>
                                        <div class="comment-name">Đoàn Minh Đạt</div>
                                        Sản phẩm chất lượng
                                        <div class="star-icon">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>  
    
    <div class="section-2" style={{marginBottom: "50px"}}>
      <div class="row">
        <h2 class="h2 text-center">Sản phẩm gợi ý</h2>
        <div class="item-slider-tc">
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item28.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
              <div class="card-body-set">
                <p class="card-text-set">
                  iphone 12 128GB
                </p>
                <div class="d-flex justify-content-center mb-2">
                <p class="para1">18.950.000 ₫</p>
                <p class="para2">22.000.000 ₫</p>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
      
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item29.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item30.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
              <div class="card-body-set">
                <p class="card-text-set">
                  Xiaomi Mi 11 Lite
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
  
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item32.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
              <div class="card-body-set">
                <p class="card-text-set">
                  Realme C3i 2GB/32GB
                </p>
                <div class="d-flex justify-content-center mb-2">
                <p class="para1">1,950,000 ₫</p>
                <p class="para2">2,500,000 ₫</p>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item35.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
              <div class="card-body-set">
                <p class="card-text-set">
                  Samsung Galaxy M12
                </p>
                <div class="d-flex justify-content-center mb-2">
                <p class="para1">3.450.000 ₫</p>
                <p class="para2">5,000,000 ₫</p>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item33.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>   
          <div class="col-lg-3 col-sm-6 my-2">
            <div class="card" style={{margin: "0 10px"}}>
              <Link to="/productdetail">
                <div class="card-img">
                  <img
                  src="./picture-section-1/item34.png"
                  alt="ảnh sản phẩm"
                />
                </div>
              </Link>
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
                <button class="addCart col-6" >Thêm vào giỏ</button>
                    <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
            </div> 
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  </section>
    </React.Fragment>
  )
}

export default ProductDetail