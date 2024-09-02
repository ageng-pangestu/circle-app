import { Avatar, Box, Button, Input, Modal, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import { useProfileFunction } from "./hook/useProfileFunction";
import useStore from "../../../stores/hooks";

const EditProfileModal = () => {
  // const { control, handleSubmit, reset } = useProfileValidation();
  //===============================================================
  // Handle Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useStore();
  const profileFunction = useProfileFunction();

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<any>(null);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      console.log(file[0]);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    if (fullName) {
      formData.append("fullName", fullName);
    }

    if (userName) {
      formData.append("userName", userName);
    }

    if (bio) {
      formData.append("bio", bio);
    }

    if (avatar) {
      formData.append("avatar", avatar);
    }

    await profileFunction.update(user.id, formData);

    handleClose();
    // reset();
  };

  // const onError = (errors: any) => {
  //   console.log(errors);
  // };

  return (
    <>
      <Box>
        <Button onClick={handleOpen} variant="outlined" sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "white", ml: "auto" }}>
          Edit Profile
        </Button>

        <Modal className="edit-profile" open={open} onClose={handleClose}>
          <Box className="container-modal" sx={{ display: "flex", color: "whitesmoke", flexDirection: "column", width: "30rem", mx: "auto", my: "90px", backgroundColor: "#2d2d2d", borderRadius: 3, padding: 2 }}>
            <Box className="profile-top">
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                Edit Profile
              </Typography>
            </Box>
            <Box className="modal-image" sx={{ position: "relative", width: "100%", height: "10rem", backgroundColor: "gray", borderRadius: 3, marginBottom: 4 }}>
              <img src="https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg" alt="foto" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
              <Avatar sx={{ position: "absolute", bottom: -25, left: 25, width: "70px", height: "70px" }} alt="Ageng" src="https://i.pinimg.com/550x/c0/fc/30/c0fc308148dd6677d686cbd528a48d04.jpg" />
            </Box>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
                setFullName("");
                setUserName("");
                setBio("");
                setAvatar(null);
                handleClose();
              }}
            >
              <Box className="form" sx={{ display: "flex", flexDirection: "column", gap: 1, color: "whitesmoke" }}>
                <Box className="box-avatar" sx={{ display: "flex", gap: 1 }}>
                  <Typography sx={{ color: "gray" }} variant="caption">
                    Choose avatar
                  </Typography>
                  <input type="file" placeholder="Choose avatar" accept="image/*" onChange={handleFile} style={{ color: "gray" }} />
                </Box>
                <Box className="box-name" sx={{ border: "1px solid gray", borderRadius: 2, paddingX: 1 }}>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    Name
                  </Typography>
                  <Input
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    placeholder={user.fullName}
                    sx={{ width: "100%", color: "whitesmoke" }}
                    disableUnderline
                  />
                </Box>

                <Box className="box-username" sx={{ border: "1px solid gray", borderRadius: 2, paddingX: 1 }}>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    UserName
                  </Typography>
                  <Input
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder={user.userName}
                    sx={{ width: "100%", color: "whitesmoke" }}
                    disableUnderline
                  />
                </Box>

                <Box className="box-bio" sx={{ border: "1px solid gray", borderRadius: 2, paddingX: 1 }}>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    Bio
                  </Typography>
                  <TextareaAutosize
                    value={bio}
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                    placeholder={user.bio}
                    style={{ border: "none", outline: "none", backgroundColor: "#2d2d2d", resize: "none", width: "100%", height: "5rem", color: "whitesmoke" }}
                  />
                </Box>

                <Button type="submit" variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "white", width: "20%", marginLeft: "auto" }}>
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default EditProfileModal;
