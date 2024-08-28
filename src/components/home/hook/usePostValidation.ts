import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPostForm } from "../../../types/post";

export const usePostValidation = () => {
  const schema = yup.object().shape({
    content: yup.string().min(1).max(225, "text must be at least 3 characters"),
    // image: yup.mixed(),
  });

  return useForm<IPostForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      content: "",
    },
    reValidateMode: "onSubmit",
    mode: "all",
  });
};
