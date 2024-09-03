import { IPostForm } from "../../../types/post";
import { api } from "../index.ts";

export async function createPost(body: IPostForm) {
  console.log("masuk call create post: ");

  const response = await api.post("/posts", body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
}

export async function getAllPost() {
  const response = await api.get("/posts");
  //disini balikin data posts
  return response.data;
}

export async function getAllUserPost(user_id: string) {
  const response = await api.get("/posts/user/" + user_id);
  //disini balikin data posts
  return response.data;
}

export async function getDetailPost(post_id: string) {
  const response = await api.get("/posts/" + post_id);
  //disini balikin data posts
  return response.data;
}
