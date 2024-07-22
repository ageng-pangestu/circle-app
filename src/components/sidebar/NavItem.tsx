import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NAV_Item = [
  {
    name: "Home",
    path: "/",
    icon: {
      active: "ri:home-7-fill",
      nonActive: "ri:home-7-line",
    },
  },
  {
    name: "Search",
    path: "/search",
    icon: {
      active: "mdi:user-search",
      nonActive: "mdi:user-search-outline",
    },
  },
  {
    name: "Follows",
    path: "/follows",
    icon: {
      active: "ph:heart-fill",
      nonActive: "ph:heart-light",
    },
  },
  {
    name: "Profile",
    path: "/profile",
    icon: {
      active: "healthicons:ui-user-profile",
      nonActive: "healthicons:ui-user-profile-outline",
    },
  },
];

const NavItem = () => {
  return NAV_Item.map((item) => {
    return (
      <Box width={"fit-content"}>
        <NavLink to={item.path} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography color={isActive ? "mediumslateblue" : "white"} sx={{ mb: 3, fontSize: "1.5rem" }}>
              <Icon icon={item.icon.active} /> {item.name}
            </Typography>
          )}
        </NavLink>
      </Box>
    );
  });
};

export default NavItem;
