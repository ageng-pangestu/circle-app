import * as postAsync from "../../../lib/api/call/post";

export const usePostFunction = () => {
  const createPost = async (formData: any) => {
    console.log("masuk create post");

    try {
      const res = await postAsync.createPost(formData);
      console.log("form datanya: ");
      console.log(formData);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPost = async () => {
    try {
      const resData = await postAsync.getAllPost();

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { createPost, getAllPost };
};
