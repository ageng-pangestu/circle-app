import { Button, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import useStore from "../../stores/hooks";
import { useLoginForm } from "./hooks/useLoginForm";
import { Controller, SubmitHandler } from "react-hook-form";
import { useLoginFunction } from "./hooks/useLoginFunction";
import { ILoginForm } from "../../types/login";

const LoginForm = () => {
   // const navigate = useNavigate();
   const loginFunc = useLoginFunction();
   const { setUser } = useStore();
   const { control, handleSubmit, reset } = useLoginForm();

   const handleOnSubmit: SubmitHandler<ILoginForm> = async (data) => {
      try {
         await loginFunc.login(data.email, data.password);

         reset();
      } catch (error) {
         console.log(error);
      }
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
         onSubmit={handleSubmit(handleOnSubmit, onError)}
      >
         <Typography variant="h3" fontWeight={"bold"} color="mediumslateblue">
            <Icon icon={"game-icons:pool-triangle"} />
            Triangle
         </Typography>
         <Typography variant="h4" fontWeight={"bold"} color="white">
            Login to Triangle
         </Typography>
         <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
               <>
                  <CustomInput
                     placeholder="Email/Username*"
                     {...field}
                     error={!!fieldState.error}
                  />
                  <FormHelperText error>
                     {fieldState.error?.message}
                  </FormHelperText>
               </>
            )}
         />
         <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
               <>
                  <CustomInput
                     type="password"
                     placeholder="Password*"
                     sx={{ mb: 2 }}
                     {...field}
                  />

                  <FormHelperText error>
                     {fieldState.error?.message}
                  </FormHelperText>
               </>
            )}
         />
         <Typography variant="body1" color="white">
            <Link
               to={"/auth/forgotpassword"}
               style={{ color: "white", textDecoration: "none" }}
            >
               Forget Password?
            </Link>
         </Typography>
         <Button
            variant="contained"
            type="submit"
            sx={{
               borderRadius: 23,
               backgroundColor: "mediumslateblue",
               color: "white",
            }}
         >
            Login
         </Button>
         <Typography variant="body2" color="white">
            Don't have an account yet?{" "}
            <Link
               to="/auth/register"
               style={{ color: "mediumslateblue", textDecoration: "none" }}
            >
               Register
            </Link>
         </Typography>
      </form>
   );
};

export default LoginForm;
