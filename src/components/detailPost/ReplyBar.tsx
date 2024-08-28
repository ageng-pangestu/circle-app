import { Box, Input, Button, Avatar, FormControl, FormHelperText } from "@mui/material";
import { useReplyValidation } from "./hook/useReplyValidation";
import { Controller } from "react-hook-form";
import { IPostForm } from "../../types/post";
import { userReplyFunction } from "./hook/useReplyFunction";
import { useParams } from "react-router-dom";

const ReplyBar = () => {
  const { post_id } = useParams();
  const { control, handleSubmit, reset } = useReplyValidation();
  const replyFunction = userReplyFunction();

  const onSubmit = async (data: IPostForm) => {
    await replyFunction.createReply(String(post_id), data);

    reset();
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  // const handleSendPost = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/posts",
  //       {
  //         content: input,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Box sx={{ padding: 2, borderBottom: "1px solid gray" }}>
        <Box sx={{ display: "flex", gap: 2, marginBottom: 1 }}>
          <Box className="ava" sx={{}}>
            <Avatar alt="Ageng Pangetu" src="https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800" />
          </Box>

          {/* <Controller
            control={control}
            name="image"
            render={({ field, fieldState }) => (
              <FormControl error={Boolean(fieldState.error)}>
                <Input type="file" sx={{ color: "whitesmoke" }} {...field} />
                {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
              </FormControl>
            )}
          /> */}
          <Box className="postbar" sx={{ width: "100%", borderBottom: "1px solid mediumslateblue" }}>
            <Controller
              control={control}
              name="content"
              render={({ field, fieldState }) => (
                <FormControl error={Boolean(fieldState.error)}>
                  <Input disableUnderline sx={{ width: "100%", color: "whitesmoke" }} placeholder="What is happening" {...field} />
                  {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
                </FormControl>
              )}
            />
          </Box>
          <Box className="btn-submit" sx={{}}>
            <Button type="submit" variant="contained" sx={{ borderRadius: 23, backgroundColor: "mediumslateblue", color: "whitesmoke" }}>
              Post
            </Button>
          </Box>
          {/* <Icon icon={"hugeicons:image-add-01"} color="mediumslateblue" fontSize={"40px"} /> */}
        </Box>
      </Box>
    </form>
  );
};

export default ReplyBar;
