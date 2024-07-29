import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStore from "../../stores/hooks";

function NAV_ITEMS(username: String) {
  return [
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
      path: "/profile/" + username,
      icon: {
        active: "healthicons:ui-user-profile",
        nonActive: "healthicons:ui-user-profile-outline",
      },
    },
  ];
}

const NavItem = () => {
  const { user } = useStore();

  return NAV_ITEMS(user.userName).map((item) => {
    return (
      <Box key={item.name} width={"fit-content"}>
        <NavLink to={item.path} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography color={isActive ? "mediumslateblue" : "white"} sx={{ mb: 3, fontSize: "1.2rem" }}>
              <Icon icon={item.icon.active} /> {item.name}
            </Typography>
          )}
        </NavLink>
      </Box>
    );
  });
};

export default NavItem;
