import * as followAsync from "../../../lib/api/call/follow";

export const useFollowFunction = () => {
  const follow = async (followingId: string) => {
    try {
      const res = await followAsync.follow(followingId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const checkFollow = async (followingId: string) => {
    try {
      const res = await followAsync.checkFollow(followingId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  //   const countFollow = async (followingId: string) => {
  //     try {
  //       const res = await followAsync.countFollow(followingId);

  //       console.log(`apa res: ${res}`);

  //       return res;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return { follow, checkFollow };
};
