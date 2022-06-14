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
              <li>
                <Link to="#" className="btn btn-hover">
                  <span>Đăng Nhập</span>
                </Link>
              </li>
            </ul>

            <div className="hamburger-menu" id="hamburger-menu">
              <div className="hamburger"></div>
            </div>
          </div>
          <nav class="navbar">
                <div class="container-fluid">
                  <form class="d-flex" role="search">
                    <input
                      class="form-control "
                      type="search"
                      placeholder="Tìm Phim"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Tìm Kiếm
                    </button>
                  </form>
                </div>
              </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
