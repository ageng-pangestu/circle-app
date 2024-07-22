import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
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
        Forgot Password
      </Typography>

      <CustomInput placeholder="Email*" />

      <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue" }}>
        <Link to="/auth/resetpassword" style={{ color: "white", textDecoration: "none" }}>
          Send Intruction
        </Link>
      </Button>

      <Typography variant="body2" color="white">
        Already have account?{" "}
        <Link to="/auth/login" style={{ color: "mediumslateblue", textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </form>
  );
};

export default ForgotPasswordForm;
