import { api } from "../index.ts";
import { IRegisterForm } from "../../../types/register";
import { IProfileForm } from "../../../types/editProfile";

export async function register(body: IRegisterForm) {
  const response = await api.post("/auth/register", body);

  console.log("apa itu reponse data register");
  console.log(response.data);

  return response.data;
}

export async function login(email: string, password: string) {
  const response = await api.post("/auth/login", { email, password });
  //disini ngebalikin token dari backend
  console.log("apa itu response data login");
  console.log(response.data);

  return response.data;
}

export const checkAuth = async (token: string) => {
  const response = await api.get("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //disinibalikin data user
  return response.data;
};

export async function update(user_id: string, body: IProfileForm) {
  const response = await api.put("/auth/" + user_id, body);

  console.log(response.data);

  return response.data;
}
