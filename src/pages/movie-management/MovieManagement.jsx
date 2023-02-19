import React from "react";
import { useMovieList } from "../../hooks/useMovieList";
import { Button, Space, Table, Tag } from "antd";
import { formatDate } from "utils";
import { useNavigate } from "react-router-dom";

export default function MovieManagement() {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Tên Phim",
      key: "1",
      dataIndex: "tenPhim",
    },
    {
      title: "Ngày Khởi Chiếu",
      key: "2",
      dataIndex: "ngayKhoiChieu",
      render: (text) => formatDate(text),
    },
    {
      title: "Mô tả",
      key: "3",
      dataIndex: "moTa",
    },
    {
      title: "Đánh giá",
      key: "4",
      dataIndex: "danhGia",
    },
    {
      title: "Hành Động",
      key: "5",
      render: (text) => {
        return (
          <div>
            <Button>EDIT</Button>
            <Button>DELETE</Button>
          </div>
        );
      },
    },
  ];

  const movieList = useMovieList();
  console.log(movieList);
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/admin/movie-management/add-movie");
        }}
        className="mb-4"
        type="primary"
      >
        THÊM PHIM
      </Button>
      <Table columns={columns} dataSource={movieList} />
    </div>
  );
}
