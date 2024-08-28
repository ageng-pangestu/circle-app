import * as replyAsync from "../../../lib/api/call/reply";
import { IPostForm } from "../../../types/post";

export const userReplyFunction = () => {
  const createReply = async (post_id: string, body: IPostForm) => {
    try {
      console.log(body.image);

      const res = await replyAsync.createReply(post_id, body);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllReply = async (post_id: string) => {
    try {
      const resData = await replyAsync.getAllReply(post_id);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  const countReply = async (post_id: string) => {
    const resData = await replyAsync.countReply(post_id);

    return resData;
  };

  return { createReply, getAllReply, countReply };
};
