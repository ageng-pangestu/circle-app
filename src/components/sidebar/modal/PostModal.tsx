import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, Modal, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { usePostFunction } from "../../home/hook/usePostFunction";

const PostModal = () => {
  // const { control, handleSubmit, reset } = usePostValidation();
  // const onError = (errors: any) => {
  //   console.log(errors);
  // };

  //===============================================================
  //Handle Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImage(null);
  };

  const postFunction = usePostFunction();
  const [content, setContent] = useState("");
  const [image, setImage] = useState<any>(null);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      console.log(file[0]);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();

    if (content) {
      formData.append("content", content);
    }

    if (image) {
      formData.append("image", image);
    }

    await postFunction.createPost(formData);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ backgroundColor: "mediumslateblue", color: "white", borderRadius: 23, width: "100%" }}>
        Create Post
      </Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className="container" sx={{ flexDirection: "column", backgroundColor: "#2d2d2d", width: "30rem", mx: "auto", my: "100px", borderRadius: 3, padding: 2 }}>
          <Box className="close-btn" sx={{ marginBottom: 1 }}>
            <Icon onClick={handleClose} icon="carbon:close-outline" style={{ display: "flex", color: "whitesmoke", marginLeft: "auto", cursor: "pointer" }} />
          </Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
              setContent("");
              setImage(null);
              handleClose();
            }}
          >
            <Box className="textbar" sx={{ display: "flex", gap: 1, borderBottom: "1px solid gray" }}>
              <Avatar alt="Ageng Pangetu" src="https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800" />
              <TextareaAutosize
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="what is happening"
                style={{ border: "none", outline: "none", backgroundColor: "#2d2d2d", resize: "none", width: "100%", height: "5rem", color: "whitesmoke" }}
              />
            </Box>

            <Box className="btn" sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <input type="file" accept="image/*" onChange={handleFile} style={{ color: "gray" }} />
              <Button type="submit" variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "whitesmoke" }}>
                Post
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default PostModal;
