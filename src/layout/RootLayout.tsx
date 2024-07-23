import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import useStore from "../stores/hooks";
import Aside from "../components/aside/Aside";

const RootLayout = () => {
  const { isLogin } = useStore();

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box sx={{ flex: 1, borderRight: "1px solid gray", backgroundColor: "#1d1d1d" }}>
        <SideBar />
      </Box>
      <Box sx={{ flex: 2, backgroundColor: "#1d1d1d" }}>
        <Outlet />
      </Box>
      <Box sx={{ flex: 1.5, borderLeft: "1px solid gray", backgroundColor: "#1d1d1d" }}>
        <Aside />
      </Box>
    </Box>
  );
};

export default RootLayout;
