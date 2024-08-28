import * as userAsync from "../../../lib/api/call/user";

export const useSuggestFunction = () => {
  const getAlluser = async (user_id: string) => {
    try {
      const resData = await userAsync.getAllUser(user_id);
      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAlluser };
};
