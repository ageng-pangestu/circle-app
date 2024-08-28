import * as authAsync from "../../../../lib/api/call/auth";
import useStore from "../../../../stores/hooks";
import { IProfileForm } from "../../../../types/editProfile";

export const useProfileFunction = () => {
  const { setUser } = useStore();
  const update = async (user_id: string, body: IProfileForm) => {
    try {
      const res = await authAsync.update(user_id, body);

      setUser(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { update };
};
