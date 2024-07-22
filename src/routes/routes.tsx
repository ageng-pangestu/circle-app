import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import RegisterTest from "../components/register/RegisterTest";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

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
        element: <About />,
      },
      {
        path: "follows",
        element: <About />,
      },
      {
        path: "profile",
        element: <About />,
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
        path: "registertest",
        element: <RegisterTest />,
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
