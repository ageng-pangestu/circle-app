import { Box, Button, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";
import { useLoginValidation } from "./hooks/useLoginValidation";
import { Controller } from "react-hook-form";
import { useLoginFunction } from "./hooks/useLoginFunction";
import { ILoginForm } from "../../types/login";

const LoginForm = () => {
  const { control, handleSubmit, reset } = useLoginValidation();
  const loginFunc = useLoginFunction();

  const onSubmit = async (data: ILoginForm) => {
    try {
      await loginFunc.login(data.email, data.password);

      reset();
    } catch (error) {}
  };

  return (
    <form
      style={{
        width: "35rem",
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h2" fontWeight={"bold"} color="mediumslateblue">
        circle
      </Typography>

      <Typography variant="h4" fontWeight={"bold"} color="white">
        Login to circle
      </Typography>

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <>
            <Box sx={{ mb: 2 }}>
              <CustomInput placeholder="Email/Username*" sx={{ mb: 2 }} {...field} error={!!fieldState.error} />
              <FormHelperText error>{fieldState.error?.message}</FormHelperText>
            </Box>
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <Box sx={{ mb: 2 }}>
              <CustomInput type="Password" placeholder="Password*" {...field} />
              <FormHelperText error>{fieldState.error?.message}</FormHelperText>
            </Box>
          </>
        )}
      />

      <Typography variant="body1" color="white">
        <Link to={"/auth/forgotpassword"} style={{ color: "white", textDecoration: "none" }}>
          Forget Password?
        </Link>
      </Typography>

      <Button type="submit" variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "white" }}>
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

export default LoginForm;
