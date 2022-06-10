import React from 'react'
import { Link } from 'react-router-dom'

const NewsDetail = () => {
  return (
    <React.Fragment>
       <section className="banner text-center">
          <div className="div-banner">
              <h1>Chi Tiết Tin Tức</h1>
              <div className="d-flex justify-content-center">
                  <Link className="hov-banner" to="/">Trang Chủ</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <Link className="hov-banner" to="/product">Tin Tức</Link>
                  <p style={{color: "red", padding: "0 5px"}}>//</p>
                  <p className="hov-para">Chi Tiết Tin Tức</p>
              </div>
          </div>
      </section>

      <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h3 className="title-news text-center">SẢN PHẨM MỚI NHẤT</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos debitis ad incidunt quod ut, distinctio, minus quae at saepe nihil molestiae vero, ullam voluptatum consectetur odit vel. Libero, at animi.</p>
                        <img src="picture-section-1/item21.png" alt="tin tức laptop"/>
                        <p className="img1-intro text-center">Laptop mới</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eaque, quos itaque amet eveniet, provident, distinctio similique voluptatum eum aperiam facilis officia odio aspernatur. Eligendi delectus sit iusto voluptate praesentium?</p>
                        <img src="picture-section-1/item22.png" alt="tin tức điện thoại"/>
                        <p className="img1-intro text-center">Điện thoại mới</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio consequuntur adipisci nulla rem? Autem tempora odit reiciendis labore nobis nihil, aliquam beatae quas optio fugit voluptate omnis repellat ullam similique.</p>
                        <img src="picture-section-1/item23.png" alt="tin tức tivi"/>
                        <p className="img1-intro text-center">Tivi mới</p>
                    </div>
                    <div className="comments">
                        <div className="comments-heading">Bình luận</div>
                        <p>1 Bình luận</p>
                        <hr/>
                        <div className="post">
                            <div className="row">
                                <div className="col-2">
                                    <img src="picture-section-1/item-avatar.jpg" alt=""/>
                                </div>
                                <div className="col-10">
                                    <textarea cols="30" rows="10" placeholder="Nhập bình luận của bạn tại đây"></textarea>
                                    <button className="button-comment">Đăng</button>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="row">
                                <div className="col-2 ">
                                    <img src="picture-section-1/item-avatar.jpg" alt=""/>
                                </div>
                                <div className="col-10">
                                    <p className="name">Đoàn Minh Đạt</p>
                                    <p className="comment-content">Bài viết thú vị và mang lại nhiều thông tin hữu ích</p>
                                    <div className="response d-flex">
                                        <p>Thích</p>
                                        <p>Phản hồi</p>
                                        <p>11/04/2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="posts">
                        <h3 className="post-title text-center">BÀI VIẾT ĐỀ XUẤT</h3>
                        <div className="news-tc post1">
                            <Link to="/newsdetail">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="picture-section-1/item24.png" alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="img2-intro">Tivi Thông Minh Oled 2022 - Trải Ngiệm Hoàn Hảo</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="news-tc post1">
                            <Link to="/newsdetail">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="picture-section-1/item25.png" alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="img2-intro">Macbook Pro - Nâng Cấp Để Hoàn Hảo Hơn</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="news-tc post1">
                            <Link to="/newsdetail">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="picture-section-1/item26.png" alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="img2-intro">Iphone 13 Pro Max </h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default NewsDetail