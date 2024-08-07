import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginForm } from "../../../types/login";

export const useLoginForm = () => {
   const schema = yup.object().shape({
      email: yup
         .string()
         .required("Email is required")
         .email("Email is invalid"),
      password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
   });

   const initialValues = {
      email: "",
      password: "",
   };

   return useForm<ILoginForm>({
      resolver: yupResolver(schema),
      defaultValues: initialValues,
      mode: "all",
   });
};
