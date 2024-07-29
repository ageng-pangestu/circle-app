import { Outlet } from "react-router-dom";
import UserInfo from "../components/userdetail/UserInfo";
import { Box } from "@mui/material";

const UserLayout = () => {
  return (
    <>
      <Box sx={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
        <UserInfo />
        <Outlet />
      </Box>
    </>
  );
};

export default UserLayout;
