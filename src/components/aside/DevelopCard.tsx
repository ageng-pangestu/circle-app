import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";

const DevelopCard = () => {
  return (
    <Box sx={{ width: "90%", backgroundColor: "#2d2d2d", borderRadius: 3, padding: 2, mx: "auto" }}>
      <Typography variant="body2" sx={{ color: "whitesmoke" }}>
        Developed by <span style={{ fontWeight: "bold" }}>dandelion</span> <Icon icon={"tabler:point-filled"} color="gray" /> <Icon icon={"mdi:github"} color="gray" /> <Icon icon={"mdi:linkedin"} color="gray" />{" "}
        <Icon icon={"mdi:instagram"} color="gray" /> <Icon icon={"pajamas:twitter"} color="gray" />
      </Typography>
      <Typography sx={{ color: "gray" }} variant="body2">
        Powered by DumbWays Indonesia <Icon icon={"tabler:point-filled"} /> #1 Coding Bootcamp
      </Typography>
    </Box>
  );
};

export default DevelopCard;
