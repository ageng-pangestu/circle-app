import { Box } from "@mui/material";
import SuggestCard from "./SuggestCard";
import ProfileCard from "./ProfileCard";
import DevelopCard from "./DevelopCard";

const Aside = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <ProfileCard />
      <SuggestCard />
      <DevelopCard />
    </Box>
  );
};

export default Aside;
