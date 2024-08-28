import * as postAsync from "../../../lib/api/call/post";
import { IPostForm } from "../../../types/post";

export const usePostFunction = () => {
  const createPost = async (body: IPostForm) => {
    try {
      const res = await postAsync.createPost(body);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPost = async () => {
    try {
      const resData = await postAsync.getAllPost();

      console.log(resData);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { createPost, getAllPost };
};
