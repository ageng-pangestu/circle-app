import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProfileForm } from "../../../../types/editProfile";

export const useProfileValidation = () => {
  const schema = yup.object().shape({
    fullName: yup.string().max(25, "max 25 characters"),
    userName: yup.string().max(25, "max 25 characters"),
    bio: yup.string().max(225, "max 225 characters"),
    user_id: yup.string(),
  });

  return useForm<IProfileForm>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    mode: "all",
  });
};
