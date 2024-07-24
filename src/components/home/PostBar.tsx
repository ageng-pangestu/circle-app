import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, Input, Button, Avatar } from "@mui/material";

const PostBar = () => {
  return (
    <Box sx={{ padding: 2, borderBottom: "1px solid gray" }}>
      <Typography sx={{ color: "whitesmoke" }} variant="h4" marginBottom={2}>
        Home
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 1 }}>
        <Avatar alt="Ageng Pangetu" src="https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800" />
        <Input sx={{ width: "70%", color: "whitesmoke" }} placeholder="What is happening" /> <Icon icon={"hugeicons:image-add-01"} color="mediumslateblue" fontSize={"40px"} />
        <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "whitesmoke" }}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default PostBar;
