import React from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/AdminGuard";
import AyuthGuards from "../guards/AyuthGuards";
import NoAuthGuards from "../guards/NoAuthGuards";
import AdminLayout from "layouts/admin/AdminLayout";
import HomeLayout from "layouts/home/Home";
import Booking from "pages/booking/Booking";
import HomePage from "pages/home/HomePage";
import Login from "pages/login/Login";
import MovieDetailPage from "pages/movie-detail/MovieDetailPage";
import MovieManagement from "pages/movie-management/MovieManagement";
import MovieForm from "pages/movie-form/MovieForm";
export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetailPage />,
        },
        {
          path: "/",
          element: <AyuthGuards />,
          children: [
            {
              path: "/booking/:showTimeId",
              element: <Booking />,
            },
          ],
        },
        {
          path: "/",
          element: <NoAuthGuards />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/movie-management",
              element: <MovieManagement />,
            },
            {
              path: "/admin/movie-management/add-movie",
              element: <MovieForm />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}
