import { useSuggestFunction } from "./hook/useSuggestUserFunction";
import { useEffect, useState } from "react";
import { IUser } from "../../types/store";
import useStore from "../../stores/hooks";
import SuggestUser from "./SuggestUser";

const SuggestItem = () => {
  const useFunction = useSuggestFunction();
  const { user } = useStore();

  const [dataUsers, setDataUsers] = useState<IUser[]>([]);

  useEffect(() => {
    useFunction.getAlluser(user.id).then((result) => {
      setDataUsers(result);
    });
  }, []);

  return dataUsers.map((item) => {
    return (
      <>
        <SuggestUser item={item} />
      </>
    );
  });
};

export default SuggestItem;
