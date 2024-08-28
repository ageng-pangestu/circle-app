import { Box, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

const NavItem = () => {
  const { user_id } = useParams();

  return (
    <Box sx={{ display: "flex", px: 2, mt: 1 }}>
      <Box sx={{ flex: 1 }}>
        <NavLink to={"/profile/" + user_id} end style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography borderBottom={isActive ? "3px solid mediumslateblue" : "3px solid gray"} sx={{ color: "whitesmoke", textAlign: "center" }}>
              All Post
            </Typography>
          )}
        </NavLink>
      </Box>
      <Box sx={{ flex: 1 }}>
        <NavLink to={"media"} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography borderBottom={isActive ? "3px solid mediumslateblue" : "3px solid gray"} sx={{ color: "whitesmoke", textAlign: "center" }}>
              Media
            </Typography>
          )}
        </NavLink>
      </Box>
    </Box>
  );
};

export default NavItem;
