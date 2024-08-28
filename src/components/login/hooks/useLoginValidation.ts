import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginForm } from "../../../types/login";

export const useLoginValidation = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email or UserName is required").min(3, "Email or UserName must be at least 3 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

  return useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    // reValidateMode: "onSubmit",
    mode: "all",
  });
};
