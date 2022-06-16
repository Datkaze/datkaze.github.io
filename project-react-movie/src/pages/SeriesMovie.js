import React from "react";
import { Link } from "react-router-dom";
import { seriesmovieArray } from "../datas/seriesmovieData";

const SeriesMovie = () => {
  return (
    <React.Fragment>
      <div className="container set-padding">
        <div className="filter-bar">
          <div className="filter-dropdowns">
            <select name="genre" className="genre">
              <option value="all genres">Tất Cả Thể Loại</option>
              <option value="action">Hành Động</option>
              <option value="adventure">Phưu Lưu</option>
              <option value="animal">Động Vật</option>
              <option value="animation">Hoạt Hình</option>
              <option value="biography">Tiểu Sử</option>
            </select>

            <select name="year" className="year">
              <option value="all years">Tất Cả Năm</option>
              <option value="2022">2022</option>
              <option value="2020-2021">2020-2021</option>
              <option value="2010-2019">2010-2019</option>
              <option value="2000-2009">2000-2009</option>
              <option value="1980-1999">1980-1999</option>
            </select>
          </div>

          <div className="filter-radios d-flex">
            <input type="radio" name="grade" id="featured" />
            <label for="featured">Đặc Sắc</label>

            <input type="radio" name="grade" id="popular" />
            <label for="popular">Nổi Bật</label>

            <input type="radio" name="grade" id="newest" />
            <label for="newest">Mới Nhất</label>

            <div className="checked-radio-bg"></div>
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="container">
          <div className="section-header">Phim Bộ</div>
          <div className="row">

          {seriesmovieArray.map((data, i) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-6" key={i}>
            <Link to="/detailmovie" className="movie-item-mv ">
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
                  
                </div>
              </div>
            </Link>
          </div>
        );
      })}     
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SeriesMovie;
