import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const UserLayout = () => {
  return (
    <>
      <Box sx={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default UserLayout;
