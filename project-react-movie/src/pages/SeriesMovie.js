import React from "react";
import { Link } from "react-router-dom";
import { seriesmovieArray } from "../datas/seriesmovieData";

const SeriesMovie = () => {
  return (
    <React.Fragment>
      {seriesmovieArray.map((data, i) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-6" key={i}>
            <Link to="#" className="movie-item-mv ">
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
        );
      })}
    </React.Fragment>
  );
};

export default SeriesMovie;
