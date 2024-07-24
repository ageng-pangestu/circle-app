import { Box } from "@mui/material";
import SuggestCard from "./SuggestCard";
import ProfileCard from "./ProfileCard";
import DevelopCard from "./DevelopCard";

const Aside = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, backgroundColor: "#1d1d1d", height: "100%" }}>
      <ProfileCard />
      <SuggestCard />
      <DevelopCard />
    </Box>
  );
};

export default Aside;
