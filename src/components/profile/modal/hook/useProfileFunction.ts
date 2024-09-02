import * as authAsync from "../../../../lib/api/call/auth";
import useStore from "../../../../stores/hooks";

export const useProfileFunction = () => {
  const { setUser } = useStore();
  const update = async (user_id: string, formData: any) => {
    try {
      const res = await authAsync.update(user_id, formData);

      setUser(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { update };
};
