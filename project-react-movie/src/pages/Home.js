import React from "react";
import { Link } from "react-router-dom";
import { movietheaterArray } from "../datas/movietheaterData";
import { animeArray } from "../datas/animeData";
import { seriesmovieArray } from "../datas/seriesmovieData";
import { heroSlideData } from "../datas/bannerData";
import { moviesSlideData } from "../datas/bannerData";

const Home = () => {
  return (
    <React.Fragment>
      <div className="hero-section">
        <div className="hero-slide">
          <div className="owl-carousel carousel-nav-center" id="hero-carousel">
            {heroSlideData.map((data, i) => {
              return (
                <div className="hero-slide-item">
                  <img
                    src={data.image}
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="hero-slide-item-content">
                    <div className="item-content-wraper">
                      <div className="item-content-title top-down">
                      {data.nameMovie}
                      </div>
                      <div className="movie-infos2 top-down delay-2">
                        <div className="movie-info">
                          <i className="bx bxs-star"></i>
                          <span>{data.point}</span>
                        </div>
                        <div className="movie-info">
                          <i className="bx bxs-time"></i>
                          <span>{data.time}</span>
                        </div>
                        
                      </div>
                      <div className="item-content-description top-down delay-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas, possimus eius. Deserunt non odit, cum vero
                        reprehenderit laudantium odio vitae autem quam, incidunt
                        molestias ratione mollitia accusantium, facere ab
                        suscipit.
                      </div>
                      <div className="item-action top-down delay-6">
                        <Link to="/detailmovie" className="btn btn-hover">
                          <i className="bx bxs-right-arrow"></i>
                          <span>Xem Ngay</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="top-movies-slide">
          <div className="owl-carousel" id="top-movies-slide">
          {moviesSlideData.map((data, i) => {
              return (
            <div className="movie-item">
              <img
                src={data.image}
                alt=""
              />
              <div className="movie-item-content">
                <div className="movie-item-title">{data.nameMovie}</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>{data.point}</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time"></i>
                    <span>{data.time}</span>
                  </div>
                  
                </div>
              </div>
            </div>
            );
        })}
          </div>
        </div>
      </div>
       
        <div className="section1">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="section-header">Phim Chiếu Rạp Mới</div>
            <Link to="/movietheaters" className="set-btn">
              Xem Tất Cả
            </Link>
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {movietheaterArray.map((data, i) => {
              return (
                <div className="movie-item-mv" key={i}>
                  <Link to="/detailmovie">
                    <img src={data.image} alt="" />
                    <div className="movie-item-content">
                      <div className="movie-item-title">{data.nameMovie}</div>
                      <div className="movie-infos">
                        <div className="movie-info">
                          <i className="bx bxs-star"></i>
                          <span>{data.point}</span>
                        </div>
                        <div className="movie-info">
                          <i className="bx bxs-time"></i>
                          <span>{data.time}</span>
                        </div>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        
      <div className="section">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="section-header">Phim Bộ Mới</div>
            <Link to="/seriesmovie" className="set-btn">
              Xem Tất Cả
            </Link>
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {seriesmovieArray.map((data, i) => {
              return (
                <div className="movie-item-mv" key={i}>
                  <Link to="/detailmovie">
                    <img src={data.image} alt="" />
                    <div className="movie-item-content">
                      <div className="movie-item-title">{data.nameMovie}</div>
                      <div className="movie-infos">
                        <div className="movie-info">
                          <i className="bx bxs-star"></i>
                          <span>{data.point}</span>
                        </div>
                        <div className="movie-info">
                          <i className="bx bxs-time"></i>
                          <span>{data.time}</span>
                        </div>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="section-header">Phim Hoạt Hình Mới</div>
            <Link to="/anime" className="set-btn">
              Xem Tất Cả
            </Link>
          </div>
          <div className="movies-slide carousel-nav-center owl-carousel">
            {animeArray.map((data, i) => {
              return (
                <div className="movie-item-mv" key={i}>
                  <Link to="/detailmovie">
                    <img src={data.image} alt="" />
                    <div className="movie-item-content">
                      <div className="movie-item-title">{data.nameMovie}</div>
                      <div className="movie-infos">
                        <div className="movie-info">
                          <i className="bx bxs-star"></i>
                          <span>{data.point}</span>
                        </div>
                        <div className="movie-info">
                          <i className="bx bxs-time"></i>
                          <span>{data.time}</span>
                        </div>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="hero-slide-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Ftransformer-banner.jpg?alt=media&token=9029959c-ac7a-4276-a0fd-a80834edef70"
            alt=""
          />
          <div className="overlay"></div>
          <div className="hero-slide-item-content">
            <div className="item-content-wraper">
              <div className="item-content-title">Transformer</div>
              <div className="movie-infos2">
                <div className="movie-info">
                  <i className="bx bxs-star"></i>
                  <span>9.5</span>
                </div>
                <div className="movie-info">
                  <i className="bx bxs-time"></i>
                  <span>130 mins</span>
                </div>
                
              </div>
              <div className="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
              <div className="item-action">
                <Link to="/detailmovie" className="btn btn-hover">
                  <i className="bx bxs-right-arrow"></i>
                  <span>Xem Ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="container">
          <div className="pricing">
            <div className="pricing-header">
              Fl<span className="main-color">i</span>x Đăng Kí
            </div>
            <div className="pricing-list">
              <div className="row">
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box">
                    <div className="pricing-box-header">
                      <div className="pricing-name">Ưu Đãi</div>
                      <div className="pricing-price">Miễn Phí</div>
                    </div>
                    <div className="pricing-box-content">
                      <p className="set-para">Bản Gốc</p>
                      <p className="set-para"><del>Download Phim </del></p>
                      <p className="set-para">
                        <del>65+ Kênh Trực Tiếp</del>
                      </p>
                      <p className="set-para">
                        <del>Kênh Truyền Hình</del>
                      </p>
                    </div>
                    <div className="pricing-box-action">
                      <Link to="#" className="btn btn-hover">
                        <span>Đăng Kí</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box hightlight">
                    <div className="pricing-box-header">
                      <div className="pricing-name">Đặc Biệt</div>
                      <div className="pricing-price">
                        459.000đ <span>/Tháng</span>
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p className="set-para">Bản Gốc</p>
                      <p className="set-para">Download Giới Hạn 5 Phim</p>
                      <p className="set-para">65+ Kênh Trực Tiếp</p>
                      <p className="set-para">
                        <del>Kênh Truyền Hình</del>
                      </p>
                    </div>
                    <div className="pricing-box-action">
                      <Link to="#" className="btn btn-hover">
                        <span>Đăng Kí</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                  <div className="pricing-box hightlight">
                    <div className="pricing-box-header">
                      <div className="pricing-name">VIP</div>
                      <div className="pricing-price">
                        849.000đ <span>/Tháng</span>
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p className="set-para">Bản HD</p>
                      <p className="set-para">Download Không Giới Hạn</p>
                      <p className="set-para">65+ Kênh Trực Tiếp</p>
                      <p className="set-para">Kênh Truyền Hình</p>
                    </div>
                    <div className="pricing-box-action">
                      <Link to="#" className="btn btn-hover">
                        <span>Đăng Kí</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
