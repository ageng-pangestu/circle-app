import { api } from "../index.ts";

export async function like(postId: string) {
  const response = await api.post("/like/" + postId);

  console.log(response.data);

  return response.data;
}

export async function checkLike(post_id: string) {
  const response = await api.get("/like/checklike/" + post_id);

  return response.data;
}

export async function countLike(post_id: string) {
  const response = await api.get("/like/countlike/" + post_id);

  return response.data;
}
