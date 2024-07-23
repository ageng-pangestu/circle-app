import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useRegisterValidation } from "./hooks/useRegisterValidation";
import { Controller } from "react-hook-form";
import { IRegisterForm } from "../../types/register";

const RegisterForm = () => {
  const { control, handleSubmit, reset, watch } = useRegisterValidation();

  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
    reset();
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <form
      style={{
        width: "35rem",
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Typography variant="h3" fontWeight={"bold"} color="mediumslateblue">
        <Icon icon={"game-icons:pool-triangle"} />
        Triangle
      </Typography>

      <Typography variant="h4" fontWeight={"bold"} color="white">
        Create account Triangle
      </Typography>
      <Controller
        control={control}
        name="fullName"
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error)}>
            <CustomInput
              placeholder="Fullname"
              sx={{ mb: 2 }}
              {...field}
              // onChange={field.onChange}
              // value={field.value}
              // onBlur={field.onBlur}
            />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error)}>
            <CustomInput placeholder="UserName" sx={{ mb: 2 }} {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Email" sx={{ mb: 2 }} {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Password" sx={{ mb: 2 }} {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />

      <Button type="submit" variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "white" }}>
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
