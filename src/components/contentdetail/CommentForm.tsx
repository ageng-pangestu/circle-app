import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, Input } from "@mui/material";
import React from "react";

const CommentForm = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", borderBottom: "1px solid gray", px: 1, py: 2, gap: 1 }}>
        <Avatar alt="Ageng Pangetu" src={"https://i.pinimg.com/550x/c0/fc/30/c0fc308148dd6677d686cbd528a48d04.jpg"} />
        <form action="" style={{ display: "flex", width: "100%", gap: "10px" }}>
          <Input disableUnderline sx={{ width: "100%", color: "whitesmoke" }} placeholder="Type your replies!" /> <Icon icon={"hugeicons:image-add-01"} color="mediumslateblue" fontSize={"30px"} />
          <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "white" }}>
            Post
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CommentForm;
