import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <React.Fragment>
      <section className="banner text-center">
        <div className="div-banner">
          <h1>Thanh Toán</h1>
          <div className="d-flex justify-content-center">
            <Link className="hov-banner" to="/">
              Trang Chủ
            </Link>
            <p style={{ color: "red", padding: "0 5px" }}>//</p>
            <Link className="hov-banner" to="/product">
              Giỏ Hàng
            </Link>
            <p style={{ color: "red", padding: "0 5px" }}>//</p>
            <p className="hov-para">Thanh Toán</p>
          </div>
        </div>
      </section>

      <main className="container mb-5">
        <div className="row">
          <div className=" col-lg-7 col-md-12">
            <h2 className="order-title">1. ĐỊA CHỈ THANH TOÁN</h2>
            <div className="infor-order-area">
              <form>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">
                    Họ tên
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="colFormLabel"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">
                    Điện thoại
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="colFormLabel"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">
                    Tỉnh/Thành phố
                  </label>
                  <div className="col-sm-9">
                    <select name="address" id="" className="form-control">
                      <option value="">Chọn Tỉnh/Thành Phố</option>
                      <option value="">Hà Nội</option>
                      <option value="">Ninh Bình</option>
                      <option value="">Hải Phòng</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">
                    Quận/Huyện
                  </label>
                  <div className="col-sm-9">
                    <select name="address" id="" className="form-control">
                      <option value="">Chọn Quận/Huyện</option>
                      <option value="">Hoàng Mai</option>
                      <option value="">Cầu Giấy</option>
                      <option value="">Long Biên</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">
                    Địa chỉ
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      name="address"
                      id=""
                      className="form-control"
                      cols="30"
                      rows="4"
                      placeholder="Ghi rõ địa chỉ nhận hàng"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>

            <h2 className="order-title">2. Phương Thức Thanh Toán</h2>
            <div className="infor-order-area select-option-pay">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="cash"
                  value="option1"
                  checked=""
                />
                <p className="form-check-label" for="exampleRadios1">
                  Thanh toán tiền mặt khi nhận hàng
                </p>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="interBank"
                  value="option2"
                />
                <p className="form-check-label" for="exampleRadios2">
                  Thanh toán qua chuyển khoản
                </p>
              </label>
              <div className="inter-bank-infor" id="interBankInfor">
                <p className="mb-2">
                  <b>Chủ tài Khoản: Đoàn Minh Đạt</b>
                </p>
                <p className="mb-2">
                  <b>Số tài Khoản: 0571306754939</b>
                </p>
                <p className="mb-2">
                  <b>Ngân hàng Vietcombank chi nhánh Hà Nội</b>
                </p>
                <p className="mb-1">
                  Nội dung: Thanh toán hóa đơn mua hàng [ họ tên ] -- [ SĐT ]
                </p>
              </div>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="visa"
                  value="option2"
                />
                <p className="form-check-label" for="exampleRadios2">
                  Thanh toán bằng thẻ quốc tế VISA, MASTER
                </p>
              </label>
              <div className="inter-bank-infor" id="visaCardBox">
                <div className="card-infor" id="cardVisaInfor">
                  <div className="font-site" id="fontSite">
                    <div className="mastercard-img">
                      <img src="./picture-banner/card.jpg" alt="" />{" "}
                    </div>
                    <div className="number-card">
                      <p id="detailNumber">•••• •••• •••• ••••</p>
                    </div>
                    <div className="day">
                      <div className="name-owner name" id="owerName">
                        Tên Chủ Thẻ
                      </div>
                      <div className="date-card">
                        <p>Hiệu lực đến</p>
                        <p id="time">
                          <span id="day">••</span>/<span id="month">••</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="back-site active-display" id="backSite">
                    <div className="black-space"></div>
                    <div className="signature">
                      <div className="private-number" id="privateNumber"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <form>
                    <div className="form-group">
                      <label for="numberCard" className="">
                        Số Thẻ:
                      </label>
                      <input
                        autocomplete="off"
                        type="number"
                        id="numberCard"
                        className="form-control"
                        maxlength="16"
                        placeholder="VD: 0451000454383"
                        required=""
                        minlength="1"
                      />
                    </div>
                    <div className="form-group">
                      <label for="name" className="col-form-label">
                        Tên in trên thẻ:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        style={{ textTransform: "uppercase" }}
                        autocomplete="off"
                        required=""
                        placeholder="VD: NGUYEN VAN A"
                      />
                    </div>
                    <div>
                      <label for="">Ngày hết hạn</label>
                      <div className="group-input">
                        <input
                          type="text"
                          id="inputDay"
                          className="form-control"
                          placeholder="Ngày"
                          required=""
                          autocomplete="off"
                          maxlength="2"
                        />
                        <span>/</span>
                        <input
                          type="text"
                          id="inputMonth"
                          className="form-control"
                          placeholder="Tháng"
                          required=""
                          autocomplete="off"
                          maxlength="2"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="name" className="col-form-label">
                        Mã Bảo Mật:
                      </label>
                      <input
                        type="text"
                        id="inputPrivateNumber"
                        className="form-control"
                        style={{ width: "5rem" }}
                        required=""
                        placeholder="VD:123"
                        autocomplete="off"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-success"
                        style={{ borderRadius: "5px" }}
                      >
                        Xác Nhận
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <h2 className="order-title">3. XÁC NHẬN THANH TOÁN</h2>
            <div className="infor-bill-area">
              <div className="infor-bill-flex infor-bill-item">
                <span>Đơn hàng (3 sản phẩm)</span>
                <Link
                  to="/cart"
                  style={{color: "#0d6efd", fontWeight: "500"}}
                >
                  Sửa
                </Link>
              </div>
              <div className="infor-bill-item ">
                <div className="order-product-item infor-bill-flex">
                  <span>Macbook Air 13-inch M1</span>
                  <span>x1</span>
                  <span className="color-red">24.950.000₫</span>
                </div>
                <div className="order-product-item infor-bill-flex">
                  <span>Laptop Dell Latitude 3520</span>
                  <span>x1</span>

                  <span className="color-red">19.550.000₫</span>
                </div>
                <div className="order-product-item infor-bill-flex">
                  <span>iphone 13 Pro Max</span>
                  <span>x1</span>
                  <span className="color-red">29.950.000₫</span>
                </div>
              </div>

              <div className="infor-bill-item">
                <div className="infor-bill-flex">
                  <span>Tạm Tính</span>
                  <span className="color-red">74.450.000₫</span>
                </div>
                <div className="infor-bill-flex">
                  <span>Khuyến Mãi</span>
                  <span className="color-red">0₫</span>
                </div>
                <div className="infor-bill-flex">
                  <span>Phí Vận Chuyển</span>
                  <span className="color-red">0đ</span>
                </div>
              </div>
              <div className="infor-bill-flex infor-bill-item total-price-bill">
                <span>Thành Tiền</span>
                <span>74.450.000₫</span>
              </div>
            </div>
            <div className="btn-order" style={{padding:"0"}}>
              <a href="#" data-toggle="modal" data-target="#confirmOrder">
                Đặt Mua
              </a>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Payment;
