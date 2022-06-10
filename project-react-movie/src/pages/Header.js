import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-wrapper">
        <div className="container">
            <div className="nav">
                <Link to="/" className="logo">
                    <i className='bx bx-movie-play bx-tada main-color'></i>Fl<span className="main-color">i</span>x
                </Link>      
                <ul className="nav-menu" id="nav-menu">
                    <li><Link to="/">Phim Mới</Link></li>
                    <li><Link to="/movietheaters">Phim Chiếu Rạp</Link></li>
                    <li><Link to="/seriesmovie">Phim Bộ</Link></li>
                    <li><Link to="/anime">Phim Hoạt Hình</Link></li>
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
        </div>
    </div>
  );
};

export default Header;
