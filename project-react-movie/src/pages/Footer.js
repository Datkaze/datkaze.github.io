import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className="section">
        <div className="container">
            <div className="row">
                <div className="col-4 col-md-6 col-sm-12">
                    <div className="content">
                        <Link to="#" className="logo">
                            <i className='bx bx-movie-play bx-tada main-color'></i>Fl<span className="main-color">i</span>x
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis beatae earum sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et. Dolores, quibusdam?
                        </p>
                        <div className="social-list">
                            <Link to="#" className="social-item">
                                <i className="bx bxl-facebook"></i>
                            </Link>
                            <Link to="#" className="social-item">
                                <i className="bx bxl-twitter"></i>
                            </Link>
                            <Link to="#" className="social-item">
                                <i className="bx bxl-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-3 col-md-6 col-sm-6">
                            <div className="content">
                                <p className='set-para'><b>Flix</b></p>
                                <ul className="footer-menu">
                                    <li><Link to="#">Về Chúng Tôi</Link></li>
                                    <li><Link to="#">Thông Tin</Link></li>
                                    <li><Link to="#">Gói Định Giá</Link></li>
                                    <li><Link to="#">Liên Hệ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-6">
                            <div className="content">
                                <p className='set-para'><b>Giới Thiệu</b></p>
                                <ul className="footer-menu">
                                    <li><Link to="#">Quy Định</Link></li>
                                    <li><Link to="#">Phim Flix</Link></li>
                                    <li><Link to="#">Phim Trẻ Nhỏ</Link></li>
                                    <li><Link to="#">Bản Quyền</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-6">
                            <div className="content">
                                <p className='set-para'><b>Hỗ Trợ</b></p>
                                <ul className="footer-menu">
                                    <li><Link to="#">Góp Ý & Đánh Giá</Link></li>
                                    <li><Link to="#">Tư Vấn Đăng Kí</Link></li>
                                    <li><Link to="#">Bảo Vệ Khách Hàng</Link></li>
                                    <li><Link to="#">Ưu Đãi Đăng Kí</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-6">
                            <div className="content">
                                <p className='set-para'><b>Tải App</b></p>
                                <ul className="footer-menu">
                                    <li className='mb-3'>
                                        <Link to="#">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Fgoogle-play.png?alt=media&token=a0547806-7fca-4e6e-b434-c20a138fba02" alt=""/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/banner-icon%2Fapp-store.png?alt=media&token=bfe722fb-687e-4531-81c9-4c92b714b7ab" alt=""/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <div className="copyright">
        Copyright 2022 
            Doan Minh Dat
    </div>


    </React.Fragment>
  )
}

export default Footer