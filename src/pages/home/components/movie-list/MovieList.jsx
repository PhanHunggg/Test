import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieListApi } from "../../../../services/movie";
import { Button, Space } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";
export default function MovieList() {
  const navigate = useNavigate();
  const movieList = useMovieList();

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div key={ele.maPhim} className="col-3">
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenPhim}</h5>

              <Button
                onClick={() => handleNavigateMovie(ele.maPhim)}
                size="large"
                type="primary"
              >
                Xem Chi Tiết
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };
  const handleNavigateMovie = (maphim) => {
    navigate(`/movie-detail/${maphim}`);
  };

  return <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>;
}
