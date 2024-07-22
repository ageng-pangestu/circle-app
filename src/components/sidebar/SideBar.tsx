import { Button, Typography } from "@mui/material";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react/dist/iconify.js";

const SideBar = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Typography sx={{ marginBottom: "10px" }} variant="h3" fontWeight={"bold"} color="mediumslateblue">
        <Icon icon={"game-icons:pool-triangle"} />
        Triangle
      </Typography>
      <NavItem />
      <Button variant="contained" sx={{ backgroundColor: "mediumslateblue", color: "white", borderRadius: 23, width: "100%" }}>
        Create Post
      </Button>
      <Button sx={{ marginTop: "auto" }}>Logout</Button>
    </div>
  );
};

export default SideBar;
