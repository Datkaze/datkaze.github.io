import React from 'react'
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <React.Fragment>
        <section className="banner text-center">
          <div className="div-banner">
              <h1>Điện Thoại</h1>
              <div className="d-flex justify-content-center">
                  <Link className="hov-banner" to="/">Trang Chủ</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <Link className="hov-banner" to="/product">Sản Phẩm</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <p className="hov-para">Điện Thoại</p>
              </div>
          </div>
      </section>

      <section className="section-backsp container">
        <div className="row">
          <div className="col-md-3">
              <div className="filter mb-5">
                <h3 className="filter-heading mb-3" style={{fontSize: "18px"}}>Thương Hiệu</h3>
                <div className="d-flex flex-wrap align-self-center">
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-all" type="checkbox" value="Tất cả" id="trademark-1" category="trademark" checked=""/>
                            <label className="form-check-label" for="trademark-1">
                              Tất cả
                            </label>
                          </div>
                    </div>
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-item " type="checkbox" value="Oppo" category="trademark" id="trademark-2"/>
                            <label className="form-check-label" for="trademark-2">
                                Oppo
                            </label>
                          </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-self-center">
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-item" type="checkbox" value="Iphone" category="trademark" id="trademark-3"/>
                            <label className="form-check-label" for="trademark-3">
                                Iphone
                            </label>
                          </div>
                    </div>
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-item" type="checkbox" value="Xiaomi" category="trademark" id="trademark-4"/>
                            <label className="form-check-label" for="trademark-4">
                                Xiaomi
                            </label>
                          </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-self-center">
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-item" type="checkbox" value="Samsung" category="trademark" id="trademark-5"/>
                            <label className="form-check-label" for="trademark-5">
                                Samsung
                            </label>
                          </div>
                    </div>
                    <div className="rp-1 col-6 pt-0">
                        <div className="form-check" style={{fontSize: "14px"}}>
                            <input className="form-check-input input-item" type="checkbox" value="Realme" category="trademark" id="trademark-6"/>
                            <label className="form-check-label" for="trademark-6">
                                Realme
                            </label>
                          </div>
                    </div>
                </div>
                <div className="filter  mb-5">
                  <h3 className="filter-heading mb-3" style={{fontSize: "18px"}}>Mức giá</h3>
                  <div className="flex">
                      <div className="reponsive-i col-12 pb-2">
                          <div className="form-check" style={{fontSize: "14px"}}>
                              <input className="form-check-input input-all" type="checkbox" value="Tất cả" id="price-1" checked=""/>
                              <label className="form-check-label" for="price-1">
                                Tất cả
                              </label>
                            </div>    
                  </div>
    
                      <div className="reponsive-i col-12 pb-2">
                          <div className="form-check" style={{fontSize: "14px"}}>
                              <input className="form-check-input" type="checkbox" value="" id="price-2"/>
                              <label className="form-check-label" for="price-2">
                                  Dưới 2 triệu
                              </label>
                            </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="reponsive-i col-12 pb-2">
                    <div className="form-check" style={{fontSize: "14px"}}>
                        <input className="form-check-input" type="checkbox" value="" id="price-3"/>
                        <label className="form-check-label" for="price-3">
                            Từ 2  - 5 triệu
                        </label>
                      </div>
                </div>
                
                <div className="reponsive-i col-12 pb-2">
                    <div className="form-check" style={{fontSize: "14px"}}>
                        <input className="form-check-input" type="checkbox" value="" id="price-4"/>
                        <label className="form-check-label" for="price-4">
                            Từ 5  - 10 triệu
                        </label>
                      </div>
                </div>
                </div>
                  
                      
                      
                  <div className="flex">
                    <div className="reponsive-i col-12 pb-2">
                      <div className="form-check" style={{fontSize: "14px"}}>
                          <input className="form-check-input" type="checkbox" value="" id="price-5"/>
                          <label className="form-check-label" for="price-5">
                              Từ 10  - 20 triệu
                          </label>
                        </div>
                  </div>
                  
                  <div className="reponsive-i col-12 pb-2">
                      <div className="form-check" style={{fontSize: "14px"}}>
                          <input className="form-check-input" type="checkbox" value="" id="price-6"/>
                          <label className="form-check-label" for="price-6">
                              Trên 20 triệu
                          </label>
                        </div>
                  </div>
                  </div>
                   
              </div>
            </div>
            </div>
          <div className="col-md-9">
            <div className="row">
              <div className="d-flex justify-content-between">
                <div className="d-flex text-center">
                  <h3 className="rep-font">Điện Thoại</h3>
                  <span className="span-sp">(30 sản phẩm)</span>
                </div>
                <select id="my-select" className="custom-select">
                  <option>Mặc định</option>
                  <option>Từ giá thấp đến cao</option>
                  <option>Từ giá cao đến thấp</option>
                  <option>Từ A tới Z</option>
                  <option>Từ Z tới A</option>
              </select>
              </div>
            <section className="section-sp-rp">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item27.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
                    <div className="discount">
                      -20%
                  </div>
                    <div className="card-body-set">
                      <p className="card-text-set">
                        iphone 13 Pro Max
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                      <p className="para1">29.950.000 ₫</p>
                      <p className="para2">33,000,000 ₫</p>
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
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item28.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
                    <div className="discount">
                      -20%
                  </div>
                    <div className="card-body-set">
                      <p className="card-text-set">
                        iphone 12 128GB
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                      <p className="para1">18.950.000 ₫</p>
                      <p className="para2">22,000,000 ₫</p>
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
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item29.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item30.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
                    <div className="discount">
                      -21%
                  </div>
                    <div className="card-body-set">
                      <p className="card-text-set">
                        Xiaomi Mi i11
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item31.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
                    <div className="card-body-set">
                      <p className="card-text-set">
                        Samsung Galaxy A51
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                      <p className="para1">5.450.000 ₫</p>
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
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item32.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item33.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item34.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                    <Link to="/productdetail">
                      <div className="card-img">
                        <img
                        src="./picture-section-1/item35.png"
                        alt="ảnh sản phẩm"
                      />
                      </div>
                    </Link>
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
                      <button className="addCart col-6">Thêm vào giỏ</button>
                          <Link class="btn2 col-6" to="/productdetail">Mua Ngay</Link>
                  </div> 
                </div>
                </div>
              </div>
              <nav aria-label="..." className="d-flex justify-content-center text-center mt-4">
                <ul className="pagination pagination-lg">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
        </div>
      </section>
    
    </React.Fragment>
  )
}

export default Phone