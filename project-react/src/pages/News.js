import React from "react";
import { Link } from 'react-router-dom'

const News = () => {
  return (
    
      <React.Fragment>
        <section className="banner text-center">
          <div className="div-banner">
            <h1>Tin Tức</h1>
            <div className="d-flex justify-content-center">
              <Link className="hov-banner" to="/">
                Trang Chủ
              </Link>
              <p style={{color: "red", padding: "0 5px"}}>/</p>
              <p className="hov-para">Tin Tức</p>
            </div>
          </div>
        </section>

        <section className="section-tt-1">
          <h2 className="h2 text-center">Tin Tức Nổi Bật</h2>
          <div className="container">
            <div className="row">
              <div className="news mt-2 mb-5">
                <Link to="/newsdetail">
                  <div className="news1 row">
                    <div className="col-lg-6">
                      <img
                        src="./picture-section-1/item17.png"
                        alt="anh tin tuc"
                      />
                    </div>
                    <div className="col-lg-6">
                      <h3 className="text-center">Macbook Pro</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem quae minima illo delectus eos consequatur
                        nostrum eum asperiores dolorum soluta? Sequi aspernatur
                        consectetur modi velit quae dignissimos repudiandae
                        debitis voluptates!
                      </p>
                      <div className="para-tt row">
                        <div className="col-lg-6 order-2 d-flex">
                          <p>Tác giả:</p>
                          <p style={{fontWeight: "500"}}>Đoàn Minh Đạt</p>
                        </div>
                        <div className="time col-lg-6 order-1">
                          <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="news mt-2 mb-5">
                <Link to="/newsdetail">
                  <div className="news1 row">
                    <div className="col-lg-6">
                      <img
                        src="./picture-section-1/item18.png"
                        alt="anh tin tuc"
                      />
                    </div>
                    <div className="col-lg-6">
                      <h3 className="text-center">MACBOOK PRO 2022</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem quae minima illo delectus eos consequatur
                        nostrum eum asperiores dolorum soluta? Sequi aspernatur
                        consectetur modi velit quae dignissimos repudiandae
                        debitis voluptates!
                      </p>
                      <div className="para-tt row">
                        <div className="col-lg-6 order-2 d-flex">
                          <p>Tác giả:</p>
                          <p style={{fontWeight: "500"}}>Đoàn Minh Đạt</p>
                        </div>
                        <div className="time col-lg-6 order-1">
                          <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="news mt-2 mb-5">
                <Link to="/newsdetail">
                  <div className="news1 row">
                    <div className="col-lg-6">
                      <img
                        src="./picture-section-1/item19.png"
                        alt="anh tin tuc"
                      />
                    </div>
                    <div className="col-lg-6">
                      <h3 className="text-center">Tivi Thông Minh Oled 2022</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem quae minima illo delectus eos consequatur
                        nostrum eum asperiores dolorum soluta? Sequi aspernatur
                        consectetur modi velit quae dignissimos repudiandae
                        debitis voluptates!
                      </p>
                      <div className="para-tt row">
                        <div className="col-lg-6 order-2 d-flex">
                          <p>Tác giả:</p>
                          <p style={{fontWeight: "500"}}>Đoàn Minh Đạt</p>
                        </div>
                        <div className="time col-lg-6 order-1">
                          <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="news mt-2">
                <Link to="/newsdetail">
                  <div className="news1 row">
                    <div className="col-lg-6">
                      <img
                        src="./picture-section-1/item20.png"
                        alt="anh tin tuc"
                      />
                    </div>
                    <div className="col-lg-6">
                      <h3 className="text-center">Iphone 13 Pro Max</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem quae minima illo delectus eos consequatur
                        nostrum eum asperiores dolorum soluta? Sequi aspernatur
                        consectetur modi velit quae dignissimos repudiandae
                        debitis voluptates!
                      </p>
                      <div className="para-tt row">
                        <div className="col-lg-6 order-2 d-flex">
                          <p>Tác giả:</p>
                          <p style={{fontWeight: "500"}}>Đoàn Minh Đạt</p>
                        </div>
                        <div className="time col-lg-6 order-1">
                          <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tt-2">
          <h2 className="h2 text-center">Tin Tức Khác</h2>
          <div className="container setboxs">
            <div className="row">
              <div className="news-tc col-lg-4 col-md-6">
                <Link to="/newsdetail">
                  <img src="./picture-section-1/item17.png" alt="anh tin tuc" />
                  <h6>Macbook Pro - Nâng Cấp Để Hoàn Hảo Hơn</h6>
                  <div className="time">
                    <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                  </div>
                </Link>
              </div>
              <div className="news-tc col-lg-4 col-md-6">
                <Link to="/newsdetail">
                  <img src="./picture-section-1/item18.png" alt="anh tin tuc" />
                  <h6>MACBOOK PRO 2022 - Lựa Chọn Thông Minh</h6>
                  <div className="time">
                    <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                  </div>
                </Link>
              </div>
              <div className="news-tc col-lg-4 col-md-6">
                <Link to="/newsdetail">
                  <img src="./picture-section-1/item19.png" alt="anh tin tuc" />
                  <h6>Tivi Thông Minh Oled 2022 - Trải Ngiệm Hoàn Hảo</h6>
                  <div className="time">
                    <i className="far fa-clock"></i>21:00:00 - 25/1/2022
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        
      </React.Fragment>
  )
}

export default News;
