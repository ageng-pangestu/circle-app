import { Button, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const RegisterForm = () => {
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
        Create account Triangle
      </Typography>
      <CustomInput placeholder="Fullname*" sx={{ mb: 2 }} />
      <CustomInput placeholder="Email*" />
      <CustomInput type="Password" placeholder="Password*" />
      <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue" }}>
        Create
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

export default RegisterForm;
