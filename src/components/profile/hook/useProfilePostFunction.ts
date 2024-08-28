import * as postAsync from "../../../lib/api/call/post";

export const useProfilPostFunction = () => {
  const getAllProfilePost = async (user_id: string) => {
    try {
      const resData = await postAsync.getAllUserPost(user_id);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllProfilePost };
};
