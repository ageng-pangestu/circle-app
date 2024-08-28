import * as postAsync from "../../../lib/api/call/post";

export const useDetailPostFunction = () => {
  const getDetailPost = async (post_id: string) => {
    try {
      const resData = await postAsync.getDetailPost(post_id);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getDetailPost };
};
