import { Box } from "@mui/material";
import ResetPasswordForm from "../components/login/ResetPasswordForm";

const ResetPassword = () => {
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
      <ResetPasswordForm />
    </Box>
  );
};

export default ResetPassword;
