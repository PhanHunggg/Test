import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { fetchMovieShowTimeApi } from "../../../../services/cinema.";
import moment from "moment";
import { formatDate } from "../../../../utils";
export default function ShowTime() {
  const [movieShowTime, setMovieShowTime] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieShowTime();
  }, []);

  const getMovieShowTime = async () => {
    const result = await fetchMovieShowTimeApi(params.id);
    console.log(result.data.content);

    setMovieShowTime(result.data.content);
  };

  const renderTap = () => {
    return movieShowTime?.heThongRapChieu?.map((ele, idx) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`nav-link text-capitalize ${idx === 0 && "active"} `}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };

  const renderTheater = () => {
    return movieShowTime?.heThongRapChieu?.map((ele, idx) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={`${ele.maHeThongRap}`}
          role="tabpanel"
        >
          {ele?.cumRapChieu?.map((ele) => {
            return (
              <div key={ele.maCumRap} className="row mb-5">
                <div className="col-1">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {ele?.lichChieuPhim?.map((ele) => {
                      return (
                        <div key={ele.maLichChieu} className="col-3">
                          <Link to={`/booking/${ele.maLichChieu}`}>
                            {formatDate(ele.ngayChieuGioChieu)}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="col-12 mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {/* the?? a */}
            {renderTap()}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {/* rap phim */}
            {renderTheater()}
          </div>
        </div>
      </div>
    </div>
  );
}
