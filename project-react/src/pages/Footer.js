import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
      <div className="footer1 text-center">
      <h2 className="h2-footer">
        Đăng Kí Nhận Thông Báo
      </h2>
      <p className="para">
        Đăng ký nhận thông tin khuyến mãi và cập nhật sản phẩm mới
      </p>
      <input type="text" placeholder="Nhập địa chỉ Email của bạn"/>
      <button>Đăng Kí</button>
    </div>

    <div className="footer2 row text-center">
      <div className="fot-set col-lg-3 col-sm-6 col-12">
        <h3>Địa Chỉ Cửa Hàng</h3>
          <p>Cơ Sở 1:</p>
        <a href="#">Số 4, Đường ABCD, Hà Nội</a>
          <p>Điện Thoại:<a href="#">0944783025</a></p>
          <p>Cơ Sở 2:</p>
        <a href="#"> Số 6, Đường XYZY, Hà Nội</a>
            <p>Điện Thoại:<a href="#">0944787825</a></p>
      </div>
      <div className="fot-set col-lg-3 col-sm-6 col-12">
        <h3>Giới Thiệu</h3>
        <a href="#">Quy Định</a> <br/>
        <a href="#">Nhân Viên</a> <br/>
        <a href="#">Bảo Vệ Khách Hàng</a> <br/>
        <a href="#">Hướng Dẫn Đặt Hàng</a> <br/>
        <a href="#">Ưu Đãi Khi Mua Hàng</a> <br/>
      </div>
      <div className="col-lg-3 col-sm-6 col-12">
        <h3>Hỗ Trợ - Dịch Vụ</h3>
          <p>Tổng Đài Hỗ Trợ:<a href="#">1800-1001</a></p>
          <p>Giải Đáp Khách Hàng:</p>
          <a href="#"> 0912345665</a>
          <p>Tư Vấn & Mua Hàng Online:</p>
          <a href="#">0987654321</a>
          <p>email:<a href="#"> abcde@gmail.com</a></p>
      </div>
      <div className="fot-set col-lg-3 col-sm-6 col-12">
        <h3>Liên Kết Nhanh</h3>
        <a href="#">Về Chúng Tôi</a> <br/>
        <a href="#">Sán Phẩm Bán Chạy</a> <br/>
        <a href="#">Tin Tức Sản Phẩm</a> <br/>
        <a href="#">Liên Hệ</a> <br/>
        <a href="#">Góp Ý</a> <br/>
        <div className="network">
          <a href="#"><i className="facebook fab fa-facebook-f"></i></a>
        <a href="#"><i className="twitter fab fa-twitter"></i></a>
        <a href="#"><i className="youtube fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div className="footer3 text-center">
      <p>Techcom © 2021</p>
    </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer;
