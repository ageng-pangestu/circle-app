import * as likeAsync from "../../../lib/api/call/like";

export const useLikeFunction = () => {
  const like = async (postId: string) => {
    try {
      const res = await likeAsync.like(postId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const checkLike = async (postId: string) => {
    try {
      const res = await likeAsync.checkLike(postId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const countLike = async (postId: string) => {
    try {
      const res = await likeAsync.countLike(postId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { like, checkLike, countLike };
};
