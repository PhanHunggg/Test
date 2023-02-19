import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../configs/axios.config";
const fetchTicketDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    method: "GET",
  });
};

const bookTicketApi = (data) => {
  return axiosRequest({
    url: "/QuanLyDatVe/DatVe",
    method: "POST",
    data,
  });
};

export { fetchTicketDetailApi, bookTicketApi };
