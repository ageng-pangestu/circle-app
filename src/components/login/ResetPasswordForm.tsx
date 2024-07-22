import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Typography } from "@mui/material";
import CustomInput from "../common/Input";

const ResetPasswordForm = () => {
  return (
    <form
      style={{
        width: "35rem",
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <Typography variant="h3" fontWeight={"bold"} color="mediumslateblue">
        <Icon icon={"game-icons:pool-triangle"} />
        Triangle
      </Typography>

      <Typography variant="h4" fontWeight={"bold"} color="white">
        Reset Password
      </Typography>
      <CustomInput type="Password" placeholder="New Password*" />
      <CustomInput type="Password" placeholder="Confirm New Password*" />

      <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue" }}>
        Create New Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
