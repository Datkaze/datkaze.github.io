import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="btn btn-hover"
      >
        <span>Đăng Nhập</span>
      </button>

      <div className="App">
        <div className="modal-login">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item-login" role="presentation">
                    <button
                      className="nav-link-login active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Đăng nhập
                    </button>
                  </li>
                  <li className="nav-item-login" role="presentation">
                    <button
                      className="nav-link-login"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Đăng kí
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="modal-inner">
                        <label htmlFor="username">
                          <i className="icon-lg fas fa-user" id="user"></i>
                          <input
                            type="text"
                            className="user-name"
                            id="username"
                            placeholder="Tài khoản"
                          />
                        </label>

                        <p id="username-error">
                          <i className="error fas fa-exclamation-circle"></i>Tài
                          khoản chưa xác định
                        </p>
                        <label htmlFor="password">
                          <i id="lock" className="icon-lg fas fa-lock"></i>
                          <input
                            type="password"
                            id="password"
                            className="pass"
                            placeholder="Mật khẩu"
                          />
                        </label>

                        <i id="show-eye" className="icon-eye fas fa-eye"></i>
                        <i
                          id="hide-eye"
                          className="icon-eye fas fa-eye-slash"
                        ></i>

                        <p id="password-error">
                          <i className="error fas fa-exclamation-circle"></i>Mật
                          khẩu chưa xác định
                        </p>

                        <button className="login">Đăng nhập</button>
                        <div className="row mb-2">
                          <div className="col-6 save">
                            <label htmlFor="checkbox">
                              <input type="checkbox" id="checkbox" /> Lưu tài
                              khoản
                            </label>
                          </div>
                          <div className="col-6 forget text-end">
                            <a href="#">Quên mật khẩu ?</a>
                          </div>
                        </div>
                        <p className="text-center">Hoặc</p>
                        <div className="oline d-flex justify-content-center">
                          <a href="#">
                            <img src="picture-banner/facebook.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="picture-banner/google.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="modal-inner">
                      <div className="regis">
                        <label htmlFor="username-re">
                          <i className="icon-lg fas fa-user" id="user"></i>
                          <input
                            type="text"
                            className="user-name"
                            id="username-re"
                            placeholder="Tài khoản"
                          />
                        </label>
                        <p id="username-error-re">
                          <i className="error fas fa-exclamation-circle"></i>Tài
                          khoản phải có độ dài 8-20 kí tự
                        </p>

                        <label htmlFor="password-re">
                          <i id="lock" className="icon-lg fas fa-lock"></i>
                          <input
                            type="password"
                            id="password-re"
                            className="pass"
                            placeholder="Mật khẩu"
                          />
                        </label>

                        <p id="password-error-re">
                          <i className="error fas fa-exclamation-circle"></i>Mật
                          khẩu phải có độ dài 6-20 kí tự.
                        </p>
                        <label htmlFor="confirm-password-re">
                          <i className="icon-lg fas fa-key"></i>
                          <input
                            type="password"
                            id="confirm-password-re"
                            className="again"
                            placeholder="Nhập lại mật khẩu"
                          />
                        </label>

                        <p id="confirm-error-re">
                          <i className="error fas fa-exclamation-circle"></i>Xác
                          nhận phải giống với mật khẩu
                        </p>
                        <button className="register-button">Đăng kí</button>
                      </div>
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
}

export default App;
