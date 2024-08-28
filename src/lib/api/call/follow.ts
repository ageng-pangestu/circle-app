import { api } from "../index.ts";

export async function follow(followingId: string) {
  const response = await api.post("/follow/" + followingId);

  console.log(response.data);

  return response.data;
}

export async function checkFollow(followingId: string) {
  const response = await api.get("/follow/checkfollow/" + followingId);

  return response.data;
}
