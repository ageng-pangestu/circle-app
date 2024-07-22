import { Button, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

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
        Login to Triangle
      </Typography>
      <CustomInput placeholder="Email/Username*" sx={{ mb: 2 }} />
      <CustomInput type="Password" placeholder="Password*" />
      <Typography variant="body1" color="white">
        <Link to={"/auth/forgotpassword"} style={{ color: "white", textDecoration: "none" }}>
          Forget Password?
        </Link>
      </Typography>
      <Button variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "white" }}>
        Login
      </Button>
      <Typography variant="body2" color="white">
        Don't have an account yet?{" "}
        <Link to="/auth/register" style={{ color: "mediumslateblue", textDecoration: "none" }}>
          Register
        </Link>
      </Typography>
    </form>
  );
};

export default RegisterForm;
