import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div className="container">
          <div className="nav">
            <Link to="/" className="logo">
              <i className="bx bx-movie-play bx-tada main-color"></i>Fl
              <span className="main-color">i</span>x
            </Link>

            <ul className="nav-menu" id="nav-menu">
              <li>
                <Link to="/">PHIM MỚI</Link>
              </li>
              <li>
                <Link to="/movietheaters">PHIM CHIẾU RẠP</Link>
              </li>
              <li>
                <Link to="/seriesmovie">PHIM BỘ</Link>
              </li>
              <li>
                <Link to="/anime">PHIM HOẠT HÌNH</Link>
              </li>
            </ul>

            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-hover">
              <span>Đăng Nhập</span>
            </button>

            <div className="hamburger-menu" id="hamburger-menu">
              <div className="hamburger"></div>
            </div>
          </div>
          <nav className="navbar">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Tìm Phim"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Tìm Kiếm
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>

      <div className="modal-login">
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item-login" role="presentation">
                    <button className="nav-link-login top-set active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Đăng nhập</button>
                  </li>
                  <li className="nav-item-login" role="presentation">
                    <button className="nav-link-login left-set" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Đăng kí</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="modal-inner">
                            <label htmlFor="username">
                              <i className="icon-lg fas fa-user" id="user"></i>
                              <input type="text" className="user-name" id="username" placeholder="Tài khoản"/>
                            </label>

                              <label htmlFor="password">
                                <i id="lock" className="icon-lg fas fa-lock"></i>
                                <input type="password" id="password" className="pass" placeholder="Mật khẩu"/>
                              </label>


                              <i id="show-eye" className="icon-eye fas fa-eye"></i>
                              <i
                              id="hide-eye"
                              className="icon-eye fas fa-eye-slash"
                            ></i>
                              
                              <button className="login">Đăng nhập</button>
                              <div className="row mb-2">
                                  <div className="col-6 save">
                                    <label htmlFor="checkbox" className="checkbox">
                                      <input type="checkbox" id="checkbox" /> Lưu tài khoản
                                    </label>
                                      
                                  </div>
                                  <div className="col-6 forget text-end">
                                      <a href="#">Quên mật khẩu ?</a>
                                  </div>
                              </div>
                              <p className="text-center">Hoặc</p>
                              <div className="oline d-flex justify-content-center">
                                <a href="#">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Ffacebook.png?alt=media&token=6ecdc874-4ab5-4da6-a3f6-dbcee72feda7" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Fgoogle.png?alt=media&token=3135bfb5-ad83-4700-bd3f-4541c6216a73" alt=""/>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="modal-inner">
                        <div className="regis">
                          <label htmlFor="username-re">
                            <i className="icon-lg fas fa-user" id="user"></i>
                            <input type="text" className="user-name" id="username-re" placeholder="Tài khoản"/>
                          </label>

                            <label htmlFor="password-re">
                              <i id="lock" className="icon-lg fas fa-lock"></i>
                              <input type="password" id="password-re" className="pass" placeholder="Mật khẩu"/>
                            </label>

                            <label htmlFor="confirm-password-re">
                              <i className="icon-lg fas fa-key"></i>
                              <input type="password" id="confirm-password-re" className="again" placeholder="Nhập lại mật khẩu"/>
                            </label>
                          
                            <button className="register-button">Đăng kí</button>
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

export default Header;
