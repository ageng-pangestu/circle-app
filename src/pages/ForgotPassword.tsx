import { Box } from "@mui/material";
import ForgotPasswordForm from "../components/login/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1D1D1D",
        padding: "20px",
      }}
    >
      <ForgotPasswordForm />
    </Box>
  );
};

export default ForgotPassword;
