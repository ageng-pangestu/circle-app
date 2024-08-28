import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import useStore from "../stores/hooks";
import Aside from "../pages/Aside";

const RootLayout = () => {
  const { isLogin } = useStore();

  const { pathname } = useLocation();

  console.log(pathname);

  //kondisi jika belum login, pindah ke auth login
  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box sx={{ flex: 1, borderRight: "1px solid gray" }}>
        <SideBar />
      </Box>
      <Box sx={{ flex: 2, backgroundColor: "#1d1d1d" }}>
        <Box sx={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
          <Outlet />
        </Box>
      </Box>
      <Box sx={{ flex: 1.5, borderLeft: "1px solid gray", backgroundColor: "#1d1d1d" }}>
        <Aside />
      </Box>
    </Box>
  );
};

export default RootLayout;
