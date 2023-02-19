import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AyuthGuards() {
  const useState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!useState.userInfo) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
}
