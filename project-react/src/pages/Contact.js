import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
      <React.Fragment>
      <section className="banner text-center">
        <div className="div-banner">
            <h1>Liên Hệ</h1>
            <div className="d-flex justify-content-center">
                <Link className="hov-banner" to="/">Trang Chủ</Link>
                <p style={{color: "red", padding: "0 5px"}}>/</p>
                <p className="hov-para">Liên Hệ</p>
            </div>
        </div>
    </section>

    <section className="section-lh-1 container">
      <div className="row">
        <div className="col-12 col-sm-4 pr-1 mb-4">
          <h3 className="mb-3">Thông Tin</h3>
          <div className="d-flex">
            <div className="icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <div className="ttdc">
            <p>Địa Chỉ:</p>
            <p style={{fontWeight: "unset"}}>36 Cao Bá Quát, Ba Đình, Hà Nội</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="ttdc">
            <p>Điện Thoại:</p>
            <a href="#">0944783025</a>
            </div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="ttdc">
            <p>Email:</p>
            <a href="#">datkaze2@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="div col-12 col-sm-8">
            <h3 className="mb-3">Nội Dung Liên Hệ</h3>
            <form className="row form justify-content-between" >
                <div className=" col-12 col-md-6 mb-3">
                  
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Họ tên" required=""/>
                  <div className="invalid-feedback">
                    Kiểm tra lại thông tin
                  </div>
                </div>
                <div className=" col-12 col-md-6 mb-3">
                  
                  <input type="email" className="form-control" id="validationCustom02" placeholder="Email" required=""/>
                  <div className="invalid-feedback">
                    Kiểm tra lại thông tin
                  </div>
                </div>
                <div className="col-12 mb-3">
                    
                    <textarea className="form-control text-input" id="validationTextarea" placeholder="Nội dung" required=""></textarea>
                    
                  </div>
                
                <div className="set-btn-lh col-12">
                  <button className="contact-btn" type="submit">Gửi</button>
                </div>
              </form>
        </div>
        </div>
    </section>

    <section className="map">
      <div className="container text-center">
        <h3 className="mt-4 mb-4">Địa Chỉ</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.054163164321!2d105.83553321490979!3d21.030518693094127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab98605f921b%3A0xa5da537e995e7de3!2zMzYgQ2FvIELDoSBRdcOhdCwgxJBp4buHbiBCw6BuLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642825211237!5m2!1svi!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
      </React.Fragment>
  )
}

export default Contact