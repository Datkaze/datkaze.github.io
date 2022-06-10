import React from "react";
import { Link } from "react-router-dom";
import { movietheaterArray } from "../datas/movietheaterData";
import { animeArray } from "../datas/animeData";

const Home = () => {
  return (
    <React.Fragment>
    <div className="hero-section">
        
        <div className="hero-slide">
            <div className="owl-carousel carousel-nav-center" id="hero-carousel">
                
                <div className="hero-slide-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/black-banner.png?alt=media&token=5969b052-60e7-4cfd-9d34-fb4aa0a90111" alt=""/>
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                Black Panther
                            </div>
                            <div className="movie-infos top-down delay-2">
                                <div className="movie-info">
                                    <i className="bx bxs-star"></i>
                                    <span>9.5</span>
                                </div>
                                <div className="movie-info">
                                    <i className="bx bxs-time"></i>
                                    <span>120 mins</span>
                                </div>
                                <div className="movie-info">
                                    <span>HD</span>
                                </div>
                                <div className="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="#" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Xem Ngay</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hero-slide-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/supergirl-banner.jpg?alt=media&token=a6b391ae-bec0-4a9f-b5c4-12a9a11e43ee" alt=""/>
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                Supergirl
                            </div>
                            <div className="movie-infos top-down delay-2">
                                <div className="movie-info">
                                    <i className="bx bxs-star"></i>
                                    <span>9.5</span>
                                </div>
                                <div className="movie-info">
                                    <i className="bx bxs-time"></i>
                                    <span>120 mins</span>
                                </div>
                                <div className="movie-info">
                                    <span>HD</span>
                                </div>
                                <div className="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="#" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Xem Ngay</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hero-slide-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/wanda-banner.jpg?alt=media&token=1a125128-96bd-4de4-86bd-47ebc2a5d772" alt=""/>
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                Wanda Vision
                            </div>
                            <div className="movie-infos top-down delay-2">
                                <div className="movie-info">
                                    <i className="bx bxs-star"></i>
                                    <span>9.5</span>
                                </div>
                                <div className="movie-info">
                                    <i className="bx bxs-time"></i>
                                    <span>120 mins</span>
                                </div>
                                <div className="movie-info">
                                    <span>HD</span>
                                </div>
                                <div className="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="#" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Xem Ngay</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="top-movies-slide">
            <div className="owl-carousel" id="top-movies-slide">
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fsupergirl.jpg?alt=media&token=99a14f08-9841-41c0-b9cf-a942a62b9584" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Supergirl
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>120 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20l%E1%BA%BB%2Fcaptain-marvel.png?alt=media&token=756b86ab-02dd-4fcd-a0be-2705d145775b" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Captain Marvel
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>120 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20chi%E1%BA%BFu%20r%E1%BA%A1p%2Fshangchi.png?alt=media&token=edf11fb9-a5f6-4313-8272-b185f306b0a6" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Shang-Chi
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.7</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>130 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20l%E1%BA%BB%2Fblood-shot.jpg?alt=media&token=9fb8d028-4cc1-4395-bb9a-de63a34b47a2" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Bloodshot
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>120 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fwanda.png?alt=media&token=2af81d5a-e416-47f9-8b36-4e3d05865462" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Wanda Vision
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>120 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20l%E1%BA%BB%2Fbat-man.jpg?alt=media&token=26176a4b-e1d0-4f91-8870-b71dd2d09b88" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            The Dark Knight
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>120 mins</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
   
    <div className="section1">
        <div className="container">
            <div className="d-flex justify-content-between">
            <div className="section-header">
                Phim Chiếu Rạp Mới
            </div>
            <Link to='/movietheaters' className="set-btn">Xem Tất Cả</Link>
            </div>
            
            <div className="movies-slide carousel-nav-center owl-carousel">
               
            {movietheaterArray.map((data, i) => {
        return (
          <div className="movie-item-mv" key={i}>
            <Link to="#">
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
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
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
            <div className="section-header">
                Phim Bộ Mới
            </div>
            <Link to='/seriesmovie' className="set-btn">Xem Tất Cả</Link>
            </div>
            <div className="movies-slide carousel-nav-center owl-carousel">
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fsupergirl.jpg?alt=media&token=99a14f08-9841-41c0-b9cf-a942a62b9584" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Supergirl
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fstranger-thing.jpg?alt=media&token=74039194-874e-4110-8510-4d7318c2c649" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Stranger Things
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fstart-trek.jpeg?alt=media&token=be1aabdb-8c6c-4940-9fd0-bda3cd6f6c70" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Star Trek
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fcanhsatvinhdu.png?alt=media&token=f4b136c7-b1dd-4609-9ac8-c15a43528f7d" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Cảnh Sát Vinh Dự
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.3</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Famdahanhgia.png?alt=media&token=0ae15e30-46e2-4c47-8621-c72eced0452e" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Ám Dạ Hành Giả
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>8.1</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fbacsiluatsu.png?alt=media&token=2601d700-9fb0-40e7-b5b6-2e2af93ac1df" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Bác Sĩ Luật Sư
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>8.8</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Foangia.png?alt=media&token=b0a966d6-b37e-406d-903b-2d3db18802c1" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Oan Gia
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>8.6</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fhientaituoidep.png?alt=media&token=72aae46d-b721-492e-bf62-2de1403a8e44" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Hiện Tại Tươi Đẹp
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>8.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fpenthouses.jpg?alt=media&token=508b9e99-b8f4-4b0e-993f-2e77fa05b66e" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Penthouses
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fmandalorian.jpg?alt=media&token=aae68598-0297-4678-bcab-f92c849801e8" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Mandalorian
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.5</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fthe-falcon.webp?alt=media&token=db2442a4-037c-4fca-bfa2-1b69b9de665a" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            The Falcon And The Winter Soldier
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>9.7</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
               
                <Link to="#" className="movie-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/phim%20b%E1%BB%99%2Fwanda.png?alt=media&token=2af81d5a-e416-47f9-8b36-4e3d05865462" alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Wanda Vision
                        </div>
                        <div className="movie-infos">
                            <div className="movie-info">
                                <i className="bx bxs-star"></i>
                                <span>8.3</span>
                            </div>
                            <div className="movie-info">
                                <i className="bx bxs-time"></i>
                                <span>60 mins/Tập</span>
                            </div>
                            <div className="movie-info">
                                <span>HD</span>
                            </div>
                            <div className="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
    
    <div className="section">
        <div className="container">
        <div className="d-flex justify-content-between">
            <div className="section-header">
                Phim Hoạt Hình Mới
            </div>
            <Link to='/anime' className="set-btn">Xem Tất Cả</Link>
            </div>
            <div className="movies-slide carousel-nav-center owl-carousel">
                
            {animeArray.map((data, i) => {
        return (
          <div className="movie-item-mv" key={i}>
            <Link to="#">
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
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
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
            <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/transformer-banner.jpg?alt=media&token=d2635170-8c79-48e3-bccc-25be4bf8ba9d" alt=""/>
            <div className="overlay"></div>
            <div className="hero-slide-item-content">
                <div className="item-content-wraper">
                    <div className="item-content-title">
                        Transformer
                    </div>
                    <div className="movie-infos">
                        <div className="movie-info">
                            <i className="bx bxs-star"></i>
                            <span>9.5</span>
                        </div>
                        <div className="movie-info">
                            <i className="bx bxs-time"></i>
                            <span>120 mins</span>
                        </div>
                        <div className="movie-info">
                            <span>HD</span>
                        </div>
                        <div className="movie-info">
                            <span>16+</span>
                        </div>
                    </div>
                    <div className="item-content-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                    </div>
                    <div className="item-action">
                        <Link to="#" className="btn btn-hover">
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
                                    <div className="pricing-name">
                                        Ưu Đãi
                                    </div>
                                    <div className="pricing-price">
                                        Miễn Phí
                                    </div>
                                </div>
                                <div className="pricing-box-content">
                                    <p className="set-para">Bản Gốc</p>
                                    <p className="set-para">Lên Kế Hoạch Bất Cứ Lúc Nào</p>
                                    <p className="set-para"><del>65+ Kênh Trực Tiếp</del></p>
                                    <p className="set-para"><del>Kênh Truyền Hình</del></p>
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
                                    <div className="pricing-name">
                                        Đặc Biệt
                                    </div>
                                    <div className="pricing-price">
                                        459.000đ <span>/Tháng</span>
                                    </div>
                                </div>
                                <div className="pricing-box-content">
                                    <p className="set-para">Bản Gốc</p>
                                    <p className="set-para">Lên Kế Hoạch Bất Cứ Lúc Nào</p>
                                    <p className="set-para">65+ Kênh Trực Tiếp</p>
                                    <p className="set-para"><del>Kênh Truyền Hình</del></p>
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
                                    <div className="pricing-name">
                                        VIP
                                    </div>
                                    <div className="pricing-price">
                                        849.000đ <span>/Tháng</span>
                                    </div>
                                </div>
                                <div className="pricing-box-content">
                                    <p className="set-para">Bản HD</p>
                                    <p className="set-para">Lên Kế Hoạch Bất Cứ Lúc Nào</p>
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
