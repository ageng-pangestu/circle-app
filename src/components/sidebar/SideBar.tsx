import { Box, Button, Typography } from "@mui/material";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react/dist/iconify.js";
import useStore from "../../stores/hooks";
import PostModal from "./modal/PostModal";

const SideBar = () => {
  const { clearUser } = useStore();

  return (
    <Box sx={{ padding: 3, height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#1d1d1d" }}>
      <Typography sx={{ marginBottom: "10px" }} variant="h3" fontWeight={"bold"} color="mediumslateblue">
        circle
      </Typography>
      <NavItem />
      <PostModal />
      <Button onClick={() => clearUser()} startIcon={<Icon icon="solar:logout-2-outline" />} sx={{ mt: "auto", color: "mediumslateblue" }}>
        Logout
      </Button>
    </Box>
  );
};

export default SideBar;
