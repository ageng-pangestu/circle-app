import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import useStore from "../../stores/hooks";

const ProfileInfo = () => {
  const { user } = useStore();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, padding: 2, mx: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Link to={"/"}>
          <Icon icon={"formkit:arrowleft"} fontSize={"20px"} color="white" />
        </Link>
        <Typography variant="h5" sx={{ color: "whitesmoke" }}>
          ✨{user.fullName}✨
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: "100%", height: "10rem", backgroundColor: "gray", borderRadius: 3 }}>
        <img src="https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg" alt="foto" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
        <Avatar sx={{ position: "absolute", bottom: -25, left: 25, width: "70px", height: "70px" }} alt="Ageng" src="https://i.pinimg.com/550x/c0/fc/30/c0fc308148dd6677d686cbd528a48d04.jpg" />
      </Box>
      <Box marginLeft={"auto"} sx={{ flex: 2 }}>
        <Button variant="outlined" sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "white", ml: "auto" }}>
          Edit Profile
        </Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 8, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            ✨{user.fullName}✨
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {user.userName}
          </Typography>
          <Typography variant="body2" sx={{ color: "whitesmoke" }}>
            picked over the worms, and weird fish
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "whitesmoke" }}>
              291 <span style={{ color: "gray" }}>Following</span>
            </Typography>
            <Typography sx={{ color: "whitesmoke" }}>
              23 <span style={{ color: "gray" }}>Followers</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <NavItem />
    </Box>
  );
};

export default ProfileInfo;
