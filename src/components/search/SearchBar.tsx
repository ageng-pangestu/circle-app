import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Input } from "@mui/material";

export const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: 2 }}>
      <Icon icon="mdi:user-search-outline" fontSize={"30px"} color="whitesmoke" />
      <Input disableUnderline sx={{ backgroundColor: "#2d2d2d", width: "90%", color: "whitesmoke", borderRadius: "10px", padding: 1 }} placeholder={"Search your friend"}></Input>
    </Box>
  );
};
