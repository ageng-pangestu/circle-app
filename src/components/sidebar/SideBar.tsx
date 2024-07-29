import { Box, Button, Typography } from "@mui/material";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react/dist/iconify.js";
import useStore from "../../stores/hooks";

const SideBar = () => {
  const { clearUser } = useStore();

  return (
    <Box sx={{ padding: 3, height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#1d1d1d" }}>
      <Typography sx={{ marginBottom: "10px" }} variant="h4" fontWeight={"bold"} color="mediumslateblue">
        <Icon icon={"game-icons:pool-triangle"} />
        Triangle
      </Typography>
      <NavItem />
      <Button variant="contained" sx={{ backgroundColor: "mediumslateblue", color: "white", borderRadius: 23, width: "100%" }}>
        Create Post
      </Button>
      <Button onClick={() => clearUser()} startIcon={<Icon icon="solar:logout-2-outline" />} sx={{ mt: "auto", color: "mediumslateblue" }}>
        Logout
      </Button>
    </Box>
  );
};

export default SideBar;
