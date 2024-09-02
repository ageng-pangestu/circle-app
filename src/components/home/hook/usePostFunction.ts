import * as postAsync from "../../../lib/api/call/post";

export const usePostFunction = () => {
  const createPost = async (formData: any) => {
    try {
      const res = await postAsync.createPost(formData);

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
