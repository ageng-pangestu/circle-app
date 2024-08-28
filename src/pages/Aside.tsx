import { Box } from "@mui/material";
import ProfileCard from "../components/aside/ProfileCard";
import SuggestCard from "../components/aside/SuggestCard";
import DevelopCard from "../components/aside/DevelopCard";

const Aside = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, backgroundColor: "#1d1d1d", height: "100 rem" }}>
      <ProfileCard />
      <SuggestCard />
      <DevelopCard />
    </Box>
  );
};

export default Aside;
