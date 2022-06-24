import React from "react";
import { Link } from "react-router-dom";
import { movietheaterArray } from "../datas/movietheaterData";
import { animeArray } from "../datas/animeData";
import { seriesmovieArray } from "../datas/seriesmovieData";
import { heroSlideData } from "../datas/bannerData";
import { moviesSlideData } from "../datas/bannerData";
import Slider from "react-slick";

const bannerMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };
  return (
    <div className="hero-slide">
      <Slider {...settings}>
        {heroSlideData.map((data, i) => {
          return (
            <>
              {" "}
              <div className="hero-slide-item" key={i}>
                {" "}
                <img src={data.image} alt="" />
                <div className="overlay"></div>
                <div className="hero-slide-item-content">
                  <div className="item-content-wraper">
                    <div className="item-content-title top-down">
                      {data.nameMovie}
                    </div>
                    <div className="movie-infos3 top-down delay-2">
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
            </>
          );
        })}
      </Slider>
    </div>
  );
};
const bannerMainBootom = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {moviesSlideData.map((data, i) => {
            return (
              <div className="movie-item" key={i}>
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
        </Slider>
      </div>
    </>
  );
};
const chieuRap = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 1000,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {movietheaterArray.map((data, i) => {
            return (
              <div className="set-slick">
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
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
const phimBo = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 1000,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {seriesmovieArray.map((data, i) => {
            return (
                <div className="set-slick">
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
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
const hoatHinh = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 1000,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {animeArray.map((data, i) => {
            return (
              <div className="set-slick">
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
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
const Home = () => {
  return (
    <React.Fragment>
      <div className="hero-section">
        {bannerMain()}
        {bannerMainBootom()}
      </div>

      <div className="section1">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="section-header">Phim Chiếu Rạp Mới</div>
            <Link to="/movietheaters" className="set-btn">
              Xem Tất Cả
            </Link>
          </div>
          {chieuRap()}
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
          {phimBo()}
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
          {hoatHinh()}
        </div>
      </div>

      <div className="section">
        <div className="hero-slide-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Ftransfomers-banner.png?alt=media&token=87b06b47-883e-4216-9c82-ef02d6ce8a27"
            alt=""
          />
          <div className="overlay"></div>
          <div className="hero-slide-item-content">
            <div className="item-content-wraper">
              <div className="item-content-title">Transformer</div>
              <div className="movie-infos3">
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
                      <p className="set-para">
                        <del>Download Phim</del>
                      </p>
                      <p className="set-para">
                        <del>65+ Kênh Trực Tiếp</del>
                      </p>
                      <p className="set-para">
                        <del>Kênh Truyền Hình</del>
                      </p>
                    </div>
                    <div className="pricing-box-action">
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        to="#"
                        className="btn btn-hover"
                      >
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
                        459.000đ
                        <span>/Tháng</span>
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
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        to="#"
                        className="btn btn-hover"
                      >
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
                        849.000đ
                        <span>/Tháng</span>
                      </div>
                    </div>
                    <div className="pricing-box-content">
                      <p className="set-para">Bản HD</p>
                      <p className="set-para">Download Không Giới Hạn</p>
                      <p className="set-para">65+ Kênh Trực Tiếp</p>
                      <p className="set-para">Kênh Truyền Hình</p>
                    </div>
                    <div className="pricing-box-action">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-hover"
                      >
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
