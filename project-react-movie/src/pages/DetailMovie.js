import React from "react";
import { imageCastData } from "../datas/bannerData";
import { movietheaterArray } from "../datas/movietheaterData";
import { Link } from "react-router-dom";

const DetailMovie = () => {
  return (
    <React.Fragment>
      <div className="hero-slide2">
        <div className="hero-sm">
        </div>
        <div className="container product ">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center setimg-movie">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20chi%E1%BA%BFu%20r%E1%BA%A1p%2Fendgame.png?alt=media&token=086babcb-99c7-4fc6-9c90-c5070de15fd3"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 padding-right">
              <div className="product-item">
                <h1>Avengers: End Game</h1>
                <div className="movie-infos2">
                  <div className="movie-info">
                    <i className="bx bxs-star"></i>
                    <span>9.5</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time"></i>
                    <span>120 phút</span>
                  </div>
                </div>
                <p className="para-detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </p>
                <div>
                  <button className="button-movie1">
                    <i className="bx bxs-right-arrow icon-right"></i>
                    Xem Ngay
                  </button>
                  <button className="button-movie2">
                    <i class="fas fa-download icon-right"></i>
                    Download
                  </button>
                </div>
                <div className="cast">
                  <h3>Diễn Viên</h3>
                  <div className="row">
                    <div className="top-movies-slide ">
                      <div
                        className="carousel-nav-center owl-carousel"
                        id="top-movies-slide1"
                      >
                        {imageCastData.map((data, i) => {
                          return (
                            <div className="movie-item-mv" key={i}>
                              <img src={data.image} alt="" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-review review">
        <div className="review1">
          <h3 className="text-center">Người Sắt Lạc Vào Vũ Trụ</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            possimus eius. Deserunt non odit, cum vero reprehenderit laudantium
            odio vitae autem quam, incidunt molestias ratione mollitia
            accusantium, facere ab suscipit.
          </p>
          <div className="review-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Freview1.png?alt=media&token=bc28302c-b3b6-4957-bd59-b8e6bc16bd4d"
              alt=""
            />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            possimus eius. Deserunt non odit, cum vero reprehenderit laudantium
            odio vitae autem quam, incidunt molestias ratione mollitia
            accusantium, facere ab suscipit.
          </p>
        </div>

        <div className="review1">
          <h3 className="text-center mt-4">Phi Thuyền Thanos</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            possimus eius. Deserunt non odit, cum vero reprehenderit laudantium
            odio vitae autem quam, incidunt molestias ratione mollitia
            accusantium, facere ab suscipit.
          </p>
          <div className="review-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Freview2.png?alt=media&token=27debc0e-b1cf-4c77-add9-01dae03dd642"
              alt=""
            />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            possimus eius. Deserunt non odit, cum vero reprehenderit laudantium
            odio vitae autem quam, incidunt molestias ratione mollitia
            accusantium, facere ab suscipit.
          </p>
        </div>

        <div id="trailer" class="trailer-video-block">
          <div class="trailer-title" id="trailer">
            Official trailer:
          </div>
          <div className="review-video w-video w-embed">
            <iframe
              title="movietraler"
              className="embedly-embed"
              rel="nofollow"
              src="https://www.youtube.com/embed/TcMBFSGVi1c?modestbranding=1&amp;iv_load_policy=3&amp;showinfo=1&amp;rel=0"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              frameborder="no"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container padding">
          <div className="text-center">
            <p className="font-size">Có Thể Bạn Cũng Muốn Xem</p>
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
    </React.Fragment>
  );
};

export default DetailMovie;
