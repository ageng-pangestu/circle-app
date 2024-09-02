import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterValidation } from "./hooks/useRegisterValidation";
import { Controller } from "react-hook-form";
import { IRegisterForm } from "../../types/register";
import { useRegisterFunction } from "./hooks/useRegisterFunction";

const RegisterForm = () => {
  //ini dari react-hook-form
  const { control, handleSubmit, reset } = useRegisterValidation();
  const registerFunction = useRegisterFunction();
  const navigate = useNavigate();

  const onSubmit = async (data: IRegisterForm) => {
    await registerFunction.register(data);
    navigate("/auth/login");
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
        circle
      </Typography>

      <Typography variant="h4" fontWeight={"bold"} color="white">
        Create account circle
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
        name="userName"
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
            <CustomInput placeholder="Password" type="password" sx={{ mb: 2 }} {...field} />
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
