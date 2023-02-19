import { GROUP_ID } from "constants";
import { axiosRequest } from "../configs/axios.config";
export const fetchMovieListApi = () => {
  return axiosRequest({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: "GET",
  });
};

export const fetchMovieDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
  });
};

export const addMovieApi = (data) => {
  return axiosRequest({
    url: "/QuanLyPhim/ThemPhimUploadHinh",
    method: "POST",
    data,
  });
};
