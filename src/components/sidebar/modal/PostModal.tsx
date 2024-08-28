import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, FormControl, FormHelperText, Modal, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { usePostValidation } from "../../home/hook/usePostValidation";
import { usePostFunction } from "../../home/hook/usePostFunction";
import { IPostForm } from "../../../types/post";
import { Controller } from "react-hook-form";

const PostModal = () => {
  const { control, handleSubmit, reset } = usePostValidation();
  const postFunction = usePostFunction();

  const onError = (errors: any) => {
    console.log(errors);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //===============================================================

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const formData: IPostForm = { content: content, image: image };

  const handleFile = (e: any) => {
    setImage(e.target.file);
  };

  const onSubmit = async (data: IPostForm) => {
    console.log(data.content);
    console.log(data.image);

    await postFunction.createPost(data);

    reset();
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
              onSubmit(formData);
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
              <input type="file" accept="image/*" onChange={handleFile} />
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
