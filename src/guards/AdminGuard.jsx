import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { MaLoaiNguoiDung } from "../enums";

export default function AdminGuard() {
  const useState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    // người dùng chưa đăng nhập và người dùng là khách hàng bth
    if (!useState.userInfo) {
      notification.warning({
        message: "Bạn chưa đăng nhập không thể truy cập",
      });
      navigate("/");
    } else {
      if (useState.userInfo.maLoaiNguoiDung === MaLoaiNguoiDung.KhachHang) {
        notification.warning({
          message: "Không có quyền truy cập",
        });
        navigate("/");
      }
    }
  }, []);
  return <Outlet />;
}
