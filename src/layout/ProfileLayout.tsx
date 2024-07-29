import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import ProfileInfo from "../components/profile/ProfileInfo";

const ProfileLayout = () => {
  const { user_id } = useParams();
  return (
    <Box sx={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
      <h1>{user_id}</h1>
      <ProfileInfo />
      <Outlet />
    </Box>
  );
};

export default ProfileLayout;
