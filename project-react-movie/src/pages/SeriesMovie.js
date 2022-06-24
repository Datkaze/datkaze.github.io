import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { seriesmovieArray } from "../datas/seriesmovieData";

function filterMovie(movieList, value) {
  if (value === "all genres" || value === "") return movieList;
  return movieList.filter((movieItem) => {
    return movieItem.category === value;
  });
}
function filterMovieTime(movieList, value) {
  if (value === "all years" || value === "") return movieList;
  return movieList.filter((movieItem) => {
    return movieItem.year === value;
  });
}
const SeriesMovie = () => {
  const [movie, setMovie] = useState("");
  const [moviList, setMovieList] = useState(seriesmovieArray);
  const [moviListCurrent, setMovieListCurrent] = useState(seriesmovieArray);
  const [moviTime, setMovieTime] = useState("");

  useEffect(() => {
    setMovieList(filterMovie(seriesmovieArray, movie));
    setMovieListCurrent(filterMovie(seriesmovieArray, movie));
  }, [movie]);
  useEffect(() => {
    setMovieList(filterMovieTime(moviListCurrent, moviTime));
  }, [moviTime]);

  return (
    <React.Fragment>
      <div className="container set-padding">
        <div className="filter-bar">
          <div className="filter-dropdowns">
            <select
              name="genre"
              className="genre"
              onChange={(e) => {
                setMovie(e.target.value);
              }}
            >
              <option value="all genres">Tất Cả Thể Loại</option>
              <option value="action">Hành Động</option>
              <option value="adventure">Phưu Lưu</option>
              <option value="humor">Hài Hước</option>
              <option value="horrified">Kinh Dị</option>
              <option value="biography">Tiểu Sử</option>
            </select>

            <select
              name="year"
              className="year"
              onChange={(e) => {
                setMovieTime(e.target.value);
              }}
            >
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
            <label htmlFor="featured">Đặc Sắc</label>

            <input type="radio" name="grade" id="popular" />
            <label htmlFor="popular">Nổi Bật</label>

            <input type="radio" name="grade" id="newest" />
            <label htmlFor="newest">Mới Nhất</label>

            <div className="checked-radio-bg"></div>
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="container">
          <div className="section-header">Phim Chiếu Rạp</div>
          <div className="row">
            {moviList.length === 0 && (
              <div className="searchresults">Không có kết quả tìm kiếm</div>
            )}
            {moviList?.map((data, i) => {
              return (
                <div className="col-lg-2 col-md-3 col-sm-6" key={i}>
                  <a href="/detailmovie" className="movie-item-mv ">
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
                  </a>
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
