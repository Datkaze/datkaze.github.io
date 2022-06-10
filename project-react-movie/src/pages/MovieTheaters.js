import React from "react";
import { Link } from "react-router-dom";
import { movietheaterArray } from "../datas/movietheaterData";


const MovieTheaters = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div class="filter-bar">
          <div class="filter-dropdowns">
            <select name="genre" class="genre">
              <option value="all genres">Tất Cả Thể Loại</option>
              <option value="action">Hành Động</option>
              <option value="adventure">Phưu Lưu</option>
              <option value="animal">Động Vật</option>
              <option value="animation">Hoạt Hình</option>
              <option value="biography">Tiểu Sử</option>
            </select>

            <select name="year" class="year">
              <option value="all years">Tất Cả Năm</option>
              <option value="2022">2022</option>
              <option value="2020-2021">2020-2021</option>
              <option value="2010-2019">2010-2019</option>
              <option value="2000-2009">2000-2009</option>
              <option value="1980-1999">1980-1999</option>
            </select>
          </div>

          <div class="filter-radios">
            <input type="radio" name="grade" id="featured" />
            <label for="featured">Đặc Sắc</label>

            <input type="radio" name="grade" id="popular" />
            <label for="popular">Nổi Bật</label>

            <input type="radio" name="grade" id="newest" />
            <label for="newest">Mới Nhất</label>

            <div class="checked-radio-bg"></div>
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="container">
          <div className="section-header">Phim Chiếu Rạp</div>
          <div className="row">

              <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="#" className="movie-item-mv ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/image-movie-app.appspot.com/o/cartoons%2Fdemon-slayer.png?alt=media&token=681e0d92-b9e1-4970-b595-ea19853ded11"
                  alt=""
                />
                <div className="movie-item-content">
                  <div className="movie-item-title">Demon Slayer</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>HD</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </Link>
              </div>  
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieTheaters;
