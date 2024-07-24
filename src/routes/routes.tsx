import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import UserDetail from "../pages/UserDetail";
import ContentDetail from "../pages/ContentDetail";
import Search from "../pages/Search";
import ProfileLayout from "../layout/ProfileLayout";
import AllPost from "../pages/AllPost";
import Media from "../pages/Media";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "follows",
        element: (
          <>
            <h1>Follows page</h1>
          </>
        ),
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <AllPost />,
          },
          {
            path: "media",
            element: <Media />,
          },
        ],
      },
      {
        path: "userdetail/:id",
        element: <UserDetail />,
      },
      {
        path: "contentdetail",
        element: <ContentDetail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
];

export default routes;
