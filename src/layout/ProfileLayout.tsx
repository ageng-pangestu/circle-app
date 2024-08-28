import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ProfileInfo from "../components/profile/ProfileInfo";

const ProfileLayout = () => {
  return (
    <Box>
      <ProfileInfo />
      <Outlet />
    </Box>
  );
};

export default ProfileLayout;
