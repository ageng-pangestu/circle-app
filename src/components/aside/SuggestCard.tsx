import { Box, Typography } from "@mui/material";
import SuggestItem from "./SuggestItem";

const SuggestCard = () => {
  return (
    <Box sx={{ width: "90%", backgroundColor: "#2d2d2d", borderRadius: 3, padding: 2, mx: "auto" }}>
      <Typography sx={{ mb: 2, color: "whitesmoke" }}>Suggested for you</Typography>
      <SuggestItem />
    </Box>
  );
};

export default SuggestCard;
