import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Status = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", borderBottom: "1px solid gray", padding: 2, gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link to={"/"}>
            <Icon icon={"formkit:arrowleft"} fontSize={"20px"} color="white" />
          </Link>
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            Status
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar alt="Ageng Pangetu" src={"https://cdn-image.hipwee.com/wp-content/uploads/2019/11/hipwee-werqweqwra-640x412.png"} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "whitesmoke" }}>Indah Prakarya</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              @indahpra
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ color: "whitesmoke" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
        <Box sx={{ display: "flex", alignItems: "center", color: "gray" }}>
          <Typography variant="body2">11:32 PM</Typography>
          <Icon icon={"tabler:point-filled"} color="gray" />
          <Typography variant="body2">Jul 26,2023</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Icon icon={"ph:heart-fill"} color="red" fontSize={"25px"} />
            <Typography sx={{ color: "gray" }}>36</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Icon icon={"majesticons:comment-2-text-line"} color="whitesmoke" fontSize={"25px"} />
            <Typography sx={{ color: "gray" }}>291</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
