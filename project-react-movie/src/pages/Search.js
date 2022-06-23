import React from "react";
import { Link } from "react-router-dom";
import { movieAll } from "../datas/allMovie"



const Search = () => {

  return (
    <React.Fragment>
      <div className="section-top">
        <div className="container">
          <div className="section-header">Kết Quả Tìm Kiếm</div>
          <div className="row">
            {movieAll.map((data, i) => {
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

export default Search;
