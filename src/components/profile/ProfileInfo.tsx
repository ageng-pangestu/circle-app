import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import NavItem from "./NavItem";
import EditProfileModal from "./modal/EditProfileModal";
import { useEffect, useState } from "react";
import { useUserFunction } from "./hook/useUserFunction";
import { IUser } from "../../types/store";

const ProfileInfo = () => {
  const { user_id } = useParams();

  const useFunction = useUserFunction();
  const [dataUser, setDataUser] = useState<IUser>();

  useEffect(() => {
    useFunction.getUserById(String(user_id)).then((result) => {
      setDataUser(result);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, padding: 2, mx: "auto" }}>
      <Box className="profile-top" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Link to={"/"}>
          <Icon icon={"formkit:arrowleft"} fontSize={"20px"} color="white" />
        </Link>
        <Typography variant="h5" sx={{ color: "whitesmoke" }}>
          ✨{dataUser?.fullName}✨
        </Typography>
      </Box>

      <Box className="profile-image" sx={{ position: "relative", width: "100%", height: "10rem", backgroundColor: "gray", borderRadius: 3 }}>
        <img src="https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg" alt="foto" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
        <Avatar sx={{ position: "absolute", bottom: -25, left: 25, width: "70px", height: "70px" }} alt="Ageng" src="https://i.pinimg.com/550x/c0/fc/30/c0fc308148dd6677d686cbd528a48d04.jpg" />
      </Box>

      <Box className="profile-edit-btn" marginLeft={"auto"} sx={{ flex: 2 }}>
        <EditProfileModal />
      </Box>

      <Box className="profile-info" sx={{ display: "flex" }}>
        <Box sx={{ flex: 8, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            ✨{dataUser?.fullName}✨
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            @{dataUser?.userName}
          </Typography>
          <Typography variant="body2" sx={{ color: "whitesmoke" }}>
            {dataUser?.bio}
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
