import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const UserInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, padding: 2, mx: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Link to={"/"}>
          <Icon icon={"formkit:arrowleft"} fontSize={"20px"} color="white" />
        </Link>
        <Typography variant="h5" sx={{ color: "whitesmoke" }}>
          Naveen Sign
        </Typography>
      </Box>

      <Box sx={{ position: "relative", width: "100%", height: "10rem", backgroundColor: "gray", borderRadius: 3 }}>
        <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg" alt="foto" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
        <Avatar sx={{ position: "absolute", bottom: -25, left: 25, width: "70px", height: "70px" }} alt="Ageng" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iuT2wZ4I4H6mK-dgJ6U3VY6OZwX8aQC5g&s" />
      </Box>
      <Box marginLeft={"auto"} sx={{ flex: 2 }}>
        <Button variant="outlined" sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "white", ml: "auto" }}>
          Edit Profile
        </Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 8, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            Naveen Sign
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            @naveeeen
          </Typography>
          <Typography variant="body2" sx={{ color: "whitesmoke" }}>
            Political Consultant | Veer Bhogya Vasundhara | Patriot | E-Majdoor | Political Observer
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

export default UserInfo;
