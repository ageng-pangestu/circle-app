import * as userAsync from "../../../lib/api/call/user";

export const useUserFunction = () => {
  const getUserById = async (post_id: string) => {
    try {
      const resData = await userAsync.getUserById(post_id);

      console.log(resData);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getUserById };
};
