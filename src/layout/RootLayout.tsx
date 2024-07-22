import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";

const RootLayout = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box sx={{ flex: 1, borderRight: "1px solid gray" }}>
        <SideBar />
      </Box>
      <Box sx={{ flex: 2 }}>
        <Outlet />
      </Box>
      <Box sx={{ flex: 1, borderLeft: "1px solid gray" }}>
        <Box />
      </Box>
    </Box>
  );
};

export default RootLayout;
