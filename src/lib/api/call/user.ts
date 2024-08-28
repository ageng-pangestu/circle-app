import { api } from "../index.ts";

export async function getAllUser(user_id: string) {
  console.log("call getAllUser");

  const response = await api.get("/user/all/" + user_id);
  //disini balikin data user
  return response.data;
}

export async function getUserById(user_id: string) {
  console.log("call getDetailPost");

  const response = await api.get("/user/" + user_id);
  //disini balikin data user
  return response.data;
}
