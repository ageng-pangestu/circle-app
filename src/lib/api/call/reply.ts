import { IPostForm } from "../../../types/post";
import { api } from "../index.ts";

export async function createReply(post_id: string, body: IPostForm) {
  const response = await api.post("/reply/" + post_id, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  console.log("apa itu reponse data createPost");
  console.log(response.data);

  return response.data;
}

export async function getAllReply(post_id: string) {
  console.log("call getAllReply");

  const response = await api.get("/reply/" + post_id);
  //disini balikin data posts
  return response.data;
}

export async function countReply(post_id: string) {
  const response = await api.get("/reply/countreply/" + post_id);
  //disini balikin data posts
  return response.data;
}

export async function getDetailPost(post_id: string) {
  console.log("call getDetailPost");

  const response = await api.get("/posts/" + post_id);
  //disini balikin data posts
  return response.data;
}
