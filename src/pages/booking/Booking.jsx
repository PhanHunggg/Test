import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketApi, fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./combonents/Seat";
import * as _ from "lodash";

export default function Booking() {
  const params = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({});
  const [seatList, setSeatList] = useState([]);

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.showTimeId);
    console.log(result);
    setTicket(result.data.content);
  };

  const renderSeat = () => {
    return ticket?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maGhe}>
          <Seat ele={ele} handleSelect={handleSelect} />
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const bookTichket = async () => {
    console.log(seatList);
    const data = {
      maLichChieu: params.showTimeId,
      danhSachVe: seatList.map((ele) => {
        return {
          maGhe: ele.maGhe,
          giaVe: ele.giaVe,
        };
      }),
    };

    await bookTicketApi(data);
    alert("Đặt vé thành công");
    navigate("/");
  };

  const handleSelect = (seat) => {
    const data = [...seatList];
    const idx = data.findIndex((ele) => ele.maGhe === seat.maGhe);

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(seat);
    }

    setSeatList(data);
  };
  const renderSelectedSeatList = () => {
    return seatList.map((seat, idx) => {
      return (
        <React.Fragment key={seat.maGhe}>
          <p className="badge badge-success mr-2 mb-0">{seat.tenGhe}</p>
          {(idx + 1) % 8 === 0 && <br />}
        </React.Fragment>
      );
    });
  };
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeat()}
          </div>
        </div>
        <div className="col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src={ticket?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <h4 className="mb-0">{ticket?.thongTinPhim?.tenPhim}</h4>
          <h5 className="mb-0">
            Number of seats:
            <div>{renderSelectedSeatList()}</div>
          </h5>
          <h5>Total: {_.sumBy(seatList, "giaVe").toLocaleString()}</h5>
          <button onClick={bookTichket} className="btn btn-warning">
            BOOK
          </button>
        </div>
      </div>
    </div>
  );
}
