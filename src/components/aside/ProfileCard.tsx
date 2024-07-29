import { Avatar, Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useStore from "../../stores/hooks";

const ProfileCard = () => {
  const { user_id } = useParams();
  const { user } = useStore();

  if (user_id == user.id) {
    return null;
  }
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "90%", backgroundColor: "#2d2d2d", borderRadius: 3, padding: 2, mx: "auto" }}>
        <h1>
          {user_id} == {user.id}
        </h1>
        <Typography sx={{ color: "white" }}>My Profile</Typography>
        <Box sx={{ position: "relative", width: "100%", height: "5rem", backgroundColor: "gray", borderRadius: 3 }}>
          <img src="https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg" alt="foto" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
          <Avatar sx={{ position: "absolute", bottom: -25, left: 25, width: "70px", height: "70px" }} alt="Ageng" src="https://i.pinimg.com/550x/c0/fc/30/c0fc308148dd6677d686cbd528a48d04.jpg" />
        </Box>
        <Box marginLeft={"auto"}>
          <Button variant="outlined" sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "white", ml: "auto" }}>
            Edit Profile
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              ✨Stella Audhina✨
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              @audhinafh
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              picked over the worms, and weird fish
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ color: "white" }}>
                291 <span style={{ color: "gray" }}>Following</span>
              </Typography>
              <Typography sx={{ color: "white" }}>
                23 <span style={{ color: "gray" }}>Followers</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileCard;
