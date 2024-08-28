import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStore from "../../stores/hooks";

function NAV_ITEMS(user_id: String) {
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
      path: "/profile/" + user_id,
      icon: {
        active: "healthicons:ui-user-profile",
        nonActive: "healthicons:ui-user-profile-outline",
      },
    },
  ];
}

const NavItem = () => {
  const { user } = useStore();

  return NAV_ITEMS(user.id).map((item) => {
    return (
      <Box key={item.name} width={"fit-content"}>
        <NavLink to={item.path} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography color={isActive ? "white" : "whitesmoke"} fontWeight={isActive ? "bold" : ""} sx={{ mb: 3, fontSize: "1.2rem" }}>
              <Icon icon={isActive ? item.icon.active : item.icon.nonActive} /> {item.name}
            </Typography>
          )}
        </NavLink>
      </Box>
    );
  });
};

export default NavItem;
