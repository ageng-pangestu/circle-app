import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Search from "../pages/Search";
import ProfileLayout from "../layout/ProfileLayout";
import Media from "../pages/Media";
import AllPost from "../pages/AllPost";
import TestPage from "../pages/TestPage/TestPage";
import DetailPost from "../pages/DetailPost";

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
            <h1 style={{ color: "whitesmoke" }}>Follows page</h1>
          </>
        ),
      },
      {
        path: "/profile/:user_id",
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
        path: "/user/:user_id",
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
        path: "post/:post_id",
        element: <DetailPost />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "test",
        element: <TestPage />,
      },
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
